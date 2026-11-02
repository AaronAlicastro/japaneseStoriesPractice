import kanaChar from "./kana";

export default class morphemeWordsCreator {
  constructor(morphemes = []) {
    let kanjiNotFound = true;

    this.base = morphemes.map((m) => {
      const onlyKanji = [];

      for (let i = 0; i < m.baseForm.length; i++) {
        const char = m.baseForm.charAt(i);
        if (!kanaChar.includes(char)) {
          kanjiNotFound = false;
          onlyKanji.push(char);
        }
      }

      return {
        baseForm: m.baseForm,
        onlyKanji,
        writed: 0,
      };
    });

    this.found = [];
    this.thereAreNoKanjis = kanjiNotFound;
  }

  validate(kanji) {
    if (!kanji && this.thereAreNoKanjis) {
      this.found = this.base.map((b) => b.baseForm);
      return;
    }

    const instances = this.base.filter((b) => b.onlyKanji.includes(kanji));

    for (const ins of instances) {
      if (ins.onlyKanji.length === ins.writed + 1) {
        if (!this.found.includes(ins.baseForm)) {
          this.found.push(ins.baseForm);
        }
      } else ins.writed += 1;
    }
  }
}
