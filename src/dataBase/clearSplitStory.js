import kanaChar from "./kana";
import kanjiBase from "./kanjiBase";

export default function clearSplitStory(story = "") {
  const blocks = [];
  const unknownKanjis = [];

  story = story.replaceAll(/[\s\u200B\uFEFF]/g, "");
  story = story.replaceAll("\n", "");
  story = story.split("。").filter((st) => st);

  for (const origin of story) {
    const onlyKanjis = [];

    for (let i = 0; i < origin.length; i++) {
      const char = origin.charAt(i);

      if (!kanaChar.includes(char)) {
        if (!onlyKanjis.includes(char)) {
          onlyKanjis.push(char);

          const registered = kanjiBase.find((k) => k.char === char);
          if (!registered) unknownKanjis.push(char);
        }
      }
    }

    blocks.push({ origin, onlyKanjis });
  }

  if (unknownKanjis.length) {
    navigator.clipboard.writeText(unknownKanjis + "").then(() => {
      window.alert("Se han copiado los kanjis sin registro en portapapeles");
    });
  }

  return blocks;
}
