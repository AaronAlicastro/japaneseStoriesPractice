import { Suzume } from "https://cdn.jsdelivr.net/npm/@libraz/suzume/dist/index.js";
import clearSplitStory from "./clearSplitStory";
import kanjis from "./kanjis";
import findNextKanji from "./findNextKanji";

let dbCreated = null;

export default class DataBase {
  constructor() {
    if (!window.indexedDB) {
      window.alert("Tu navegador no soporta indexedDB");
    }

    this.stories = [];
    const request = window.indexedDB.open("JapaneseStudies", 1);

    request.onupgradeneeded = (event) => {
      const initDB = event.target.result;

      initDB.createObjectStore("stories", {
        keyPath: "id",
        autoIncrement: true,
      });
      initDB.createObjectStore("kanjiLearned", {
        keyPath: "char",
      });
      const wordStore = initDB.createObjectStore("words", {
        keyPath: "word",
      });

      wordStore.createIndex("storyID_idx", "storyID", { unique: false });
    };

    request.onsuccess = (event) => {
      dbCreated = event.target.result;
      console.log("Data base connected");
    };
    request.onerror = (event) => console.error(event);
  }

  storySchema(json) {
    return {
      title: json.title,
      content: json.content,
      comment: json.comment,
      fullCovered: json.fullCovered || false, // true || false
    };
  }
  wordSchema(json) {
    return {
      storyID: json.storyID,
      word: json.word,
      note: json.note,
    };
  }
  kanjiLearnedSchema(json) {
    return {
      char: json.char,
      strokes: json.strokes || [],
    };
  }

  // stories
  recordStory(story, callback) {
    const save = this;
    const storyJson = this.storySchema(story);
    const storyTransaction = dbCreated.transaction(["stories"], "readwrite");
    const storyStore = storyTransaction.objectStore("stories");
    storyStore.add(storyJson).onsuccess = (e) => {
      storyJson.id = e.target.result;
      save.stories.push(storyJson);
      callback();
    };
  }

  getAllStories(finish) {
    const save = this;
    const stories = [];
    const storyTransaction = dbCreated.transaction(["stories"], "readonly");
    const storyStore = storyTransaction.objectStore("stories");
    const storyCursor = storyStore.openCursor();

    storyCursor.onsuccess = (event) => {
      const cursor = event.target.result;
      if (cursor) {
        stories.push(cursor.value);
        cursor.continue();
      } else {
        save.stories = stories;
        finish();
      }
    };
  }

  // analize story
  createWritePracticeBlock(story, finish) {
    const save = this;
    const blocks = clearSplitStory(story.content);
    const analizeBlock = async (block, res) => {
      const suzume = await Suzume.create();
      res(suzume.analyze(block));
    };

    save.currentPracticeBlock = (callback) => {
      if (!blocks.length) return false;

      save.currentStoryId = story.id;
      save.currentBlockSelected = blocks.shift();

      analizeBlock(save.currentBlockSelected, (morphemes) => {
        save.currentMorphemes = morphemes.filter((mr) => {
          if (
            mr.pos === "NOUN" ||
            mr.pos === "VERB" ||
            mr.pos === "ADJ" ||
            mr.pos === "ADV"
          ) {
            return true;
          }

          return false;
        });

        callback();
      });

      return true;
    };

    save.currentPracticeBlock(() => finish());
  }

  createBlockSentence() {
    const save = this;
    const wordsDetected = save.currentMorphemes.map((mr) => mr.surface);
    let currendWordWrited = "";
    let kajisWrited = "";

    return () => {
      let wordDetected = false;
      const { kanji, text, noFound } = findNextKanji(
        this.currentBlockSelected,
        kajisWrited,
      );

      if (!noFound) {
        currendWordWrited = currendWordWrited + kanji;
        kajisWrited = kajisWrited + kanji;

        if (wordsDetected.includes(currendWordWrited)) {
          wordDetected = currendWordWrited + "";
          currendWordWrited = "";
        }

        return { kanji, text, wordDetected };
      }

      return false;
    };
  }

  // kanjiLearned
  recordKanjiLearned(kanji, callback) {
    // const save = this;
    const kanjiJson = this.kanjiLearnedSchema(kanji);
    const kanjiTrans = dbCreated.transaction(["kanjiLearned"], "readwrite");
    const kanjiStore = kanjiTrans.objectStore("kanjiLearned");
    kanjiStore.add(kanjiJson).onsuccess = () => callback();
  }

  findKanjiLearned(kanji, callback) {
    const save = this;
    const kanjiTrans = dbCreated.transaction(["kanjiLearned"], "readonly");
    const kanjiStore = kanjiTrans.objectStore("kanjiLearned");
    kanjiStore.get(kanji).onsuccess = (e) => {
      save.db_kanjiHasBeenSearched = true;
      save.kanjiLearnedFound = e.target.result;
      callback(e.target.result ? true : false);
    };
  }

  // words
  recordWord(word, callback = () => {}) {
    // const save = this;
    const wordJson = this.wordSchema(word);
    const wordTransaction = dbCreated.transaction(["words"], "readwrite");
    const wordStore = wordTransaction.objectStore("words");
    wordStore.add(wordJson).onsuccess = () => callback();
  }

  findWord(word, callback) {
    const wordTransaction = dbCreated.transaction(["words"], "readonly");
    const wordStore = wordTransaction.objectStore("words");
    wordStore.get(word).onsuccess = (e) => callback(e.target.result);
  }
}
