import { useRef, useState } from "react";
import KanjiWriter from "../components/KanjiWriter";
import "./styles/writePractice.css";
import GnBtn from "../components/GnBtn";

let blockSentenceCursor = null;
let cursor = null;

export default function WritePractice({ change, dataBase }) {
  const [fisrtBlock, setFirstBlock] = useState(true);
  const messageRef = useRef(null);
  const newWordNotaRef = useRef(null);
  if (fisrtBlock) {
    blockSentenceCursor = dataBase.createBlockSentence();
    cursor = blockSentenceCursor();
  }

  const nextKanji = () => {
    messageRef.current.innerHTML = `Escribe el siguiente <br /> ¿Que va en '--'?`;
    const newCursor = blockSentenceCursor();
    const reset = () => setFirstBlock(true);

    if (newCursor) {
      console.log(cursor == newCursor);
      cursor = newCursor;
      setFirstBlock(fisrtBlock === false ? null : false);
      return;
    }

    if (!dataBase.currentPracticeBlock(reset)) alert("COMPLETADO CAMPEON");
  };

  const hasBeenComplete = () => {
    let message = `Increíble ¡! <br /> <br /> <br />`;
    const button = document.createElement("button");
    button.setAttribute("class", "gnBtn");
    button.innerHTML = "Siguiente";
    button.addEventListener("click", nextKanji);

    if (!cursor.wordDetected) {
      messageRef.current.innerHTML = message;
      messageRef.current.appendChild(button);
      return;
    }

    dataBase.findWord(cursor.wordDetected, (word) => {
      if (word) message = word.note + "<br /> <br /> <br />";
      else {
        document.querySelector(".floatWordRegister").style.display = "flex";
      }

      messageRef.current.innerHTML = message;
      messageRef.current.appendChild(button);
    });
  };

  const registerWord = () => {
    const note = newWordNotaRef.current.value.trim();

    if (note) {
      const word = {
        storyID: dataBase.currentStoryId,
        word: cursor.wordDetected,
        note,
      };

      newWordNotaRef.current.value = "";
      document.querySelector(".floatWordRegister").style.display = "none";
      dataBase.recordWord(word, () => console.log("word registered"));
    }
  };

  return (
    <div className="writePracticeContainer panel flex_column">
      <h1> {cursor.text} </h1>
      <div className="kanjiPracticeArea">
        <KanjiWriter kanji={cursor.kanji} complete={hasBeenComplete} />

        <div>
          <p ref={messageRef}>
            Escribe el siguiente <br />
            ¿Que va en '--'?
          </p>
        </div>
      </div>

      <div className="floatWordRegister">
        <h1>Nueva palabra: {cursor.wordDetected} </h1>
        <p>Pon una nota</p>
        <textarea ref={newWordNotaRef}></textarea>
        <GnBtn click={registerWord}>Reistrar</GnBtn>
      </div>
    </div>
  );
}
