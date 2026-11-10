import { Suzume } from "https://cdn.jsdelivr.net/npm/@libraz/suzume/dist/index.js";
import clearSplitStory from "./clearSplitStory";
import MorphemeWordsCreator from "./MorphemeWordsCreator";

let dbCreated = null;

export default class DataBase {
  constructor() {
    if (!window.indexedDB) {
      window.alert("Tu navegador no soporta indexedDB");
    }

    this.stories = [];
    const request = window.indexedDB.open("JapaneseStudies", 3);

    request.onupgradeneeded = (event) => {
      const initDB = event.target.result;

      if (!initDB.objectStoreNames.contains("stories")) {
        initDB.createObjectStore("stories", {
          keyPath: "id",
          autoIncrement: true,
        });
        initDB.createObjectStore("kanjiLearned", {
          keyPath: "char",
        });
        initDB.createObjectStore("words", {
          keyPath: "word",
        });
      }

      window.alert("Creando progreso");
      initDB.createObjectStore("progress", {
        keyPath: "referenceTitle",
      });
    };

    request.onsuccess = (event) => {
      dbCreated = event.target.result;
      console.log("Data base connected");
    };
  }

  storySchema(json) {
    return {
      title: json.title,
      content: json.content,
      comment: json.comment,
    };
  }
  wordSchema(json) {
    return {
      word: json.word,
      note: json.note,
    };
  }
  kanjiLearnedSchema(json) {
    return {
      char: json.char,
      strokes: json.strokes || [],
      important: json.important || true,
    };
  }
  progressSchema(json) {
    return {
      referenceTitle: json.referenceTitle,
      totalBlocks: json.totalBlocks,
      indexes: json.indexes || [],
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
  createWritePracticeBlock(story) {
    const save = this;
    save.currentStoryId = story.id;
    const blocks = clearSplitStory(story.content);
    const analizeBlock = async (block, res) => {
      const suzume = await Suzume.create();
      res(suzume.analyze(block));
    };

    const progress = {
      referenceTitle: story.title,
      totalBlocks: blocks["totalBlocks"],
      indexes: [],
    };
    const blockSecuence = {
      firstTime: true,
      lastIndex: -1,
    };
    const saveProgress = () => {
      progress.indexes.push(blockSecuence.lastIndex);
      save.recordProgress(progress);
    };

    save.findProgress(story.title, (pross) => {
      if (pross) progress.indexes = pross.indexes;
    });

    const getAlea = () => {
      if (blocks.length) {
        const alea = Math.floor(Math.random() * blocks.length);

        if (progress.indexes.includes(blocks[alea].id)) {
          blocks.splice(alea, 1);
          return getAlea();
        }

        return blocks.splice(alea, 1)[0];
      }

      return null;
    };

    save.currentPracticeBlock = (callback) => {
      const aleaTried = getAlea();

      if (!aleaTried) {
        progress.indexes.splice(0);
        save.recordProgress(progress);
        return false;
      }

      save.currentBlockSelected = aleaTried;
      if (!blockSecuence.firstTime) saveProgress();

      analizeBlock(save.currentBlockSelected.origin, (morphemes) => {
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

      blockSecuence.firstTime = false;
      blockSecuence.lastIndex = save.currentBlockSelected.id;
      return true;
    };
  }

  createBlockSentence() {
    const save = this;
    const morphemeWords = new MorphemeWordsCreator(this.currentMorphemes);

    return () => {
      const origin = save.currentBlockSelected.origin + "";
      const kanji = save.currentBlockSelected.onlyKanjis.shift();
      morphemeWords.validate(kanji);

      return {
        noFound: kanji ? false : true,
        kanji,
        text: kanji ? origin.replace(kanji, " -- ") : null,
        origin,
        wordDetected: morphemeWords.found,
      };
    };
  }

  // kanjiLearned
  recordKanjiLearned(kanji, callback) {
    const save = this;
    const kanjiJson = this.kanjiLearnedSchema(kanji);
    const kanjiTrans = dbCreated.transaction(["kanjiLearned"], "readwrite");
    const kanjiStore = kanjiTrans.objectStore("kanjiLearned");
    kanjiStore.add(kanjiJson).onsuccess = () => {
      save.kanjiLearnedFound = kanjiJson;
      callback();
    };
  }

  putKanjiLearned(kanji, callback = () => {}) {
    const kanjiTrans = dbCreated.transaction(["kanjiLearned"], "readwrite");
    const kanjiStore = kanjiTrans.objectStore("kanjiLearned");
    kanjiStore.put(kanji).onsuccess = callback;
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
    const wordJson = this.wordSchema(word);
    const wordTransaction = dbCreated.transaction(["words"], "readwrite");
    const wordStore = wordTransaction.objectStore("words");
    wordStore.put(wordJson).onsuccess = () => callback();
  }

  findWord(word, callback) {
    const wordTransaction = dbCreated.transaction(["words"], "readonly");
    const wordStore = wordTransaction.objectStore("words");
    wordStore.get(word).onsuccess = (e) => callback(e.target.result);
  }

  // progress
  recordProgress(progress, callback = () => {}) {
    const progressJson = this.progressSchema(progress);
    const proTransaction = dbCreated.transaction(["progress"], "readwrite");
    const progressStore = proTransaction.objectStore("progress");
    progressStore.put(progressJson).onsuccess = () => callback();
  }

  findProgress(reference, callback) {
    const proTransaction = dbCreated.transaction(["progress"], "readonly");
    const progressStore = proTransaction.objectStore("progress");
    progressStore.get(reference).onsuccess = (e) => callback(e.target.result);
  }
}
