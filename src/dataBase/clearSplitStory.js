import validateKanji from "./validateKanji";

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
      const { exists, registered } = validateKanji(char);

      if (exists && !onlyKanjis.includes(char)) {
        onlyKanjis.push(char);

        if (!registered && !unknownKanjis.includes(char)) {
          unknownKanjis.push(char);
        }
      }
    }

    blocks.push({ origin, onlyKanjis, id: blocks.length });
  }

  if (unknownKanjis.length) {
    navigator.clipboard.writeText(unknownKanjis + "").then(() => {
      window.alert("Se han copiado los kanjis sin registro en portapapeles");
    });
  }

  blocks["totalBlocks"] = story.length;

  return blocks;
}
