import kanaChar from "./kana";

export default function findNextKanji(origin, kanji) {
  if (kanji) {
    return { text: origin.replace(kanji, " -- ") };
  }

  return { noFound: true };
}
