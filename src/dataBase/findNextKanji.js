import kanaChar from "./kana";

export default function findNextKanji(text = "", letKanjis = "") {
  for (let i = 0; i < text.length; i++) {
    const char = text.charAt(i);
    if (!kanaChar.includes(char) && !letKanjis.includes(char)) {
      return { kanji: char, text: text.replace(char, " -- ") };
    }
  }

  return { noFound: true };
}
