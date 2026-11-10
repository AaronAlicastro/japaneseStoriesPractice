import kanaChar from "./kana";
import kanjiBase from "./kanjiBase";
import romajiChar from "./romaji";

function isANumber(normalizeChar) {
  return /^\d$/.test(normalizeChar);
}

export default function validateKanji(char = "") {
  const normalizeChar = char.normalize("NFKC").toLowerCase();
  let exists = false;
  let registered = false;

  if (!isANumber(normalizeChar)) {
    if (!romajiChar.includes(normalizeChar)) {
      if (!kanaChar.includes(normalizeChar)) {
        exists = true;
        registered = kanjiBase.find((k) => k.char === char);
      }
    }
  }

  return {
    exists,
    registered,
  };
}
