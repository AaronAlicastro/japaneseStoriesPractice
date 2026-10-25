import { useRef, useState } from "react";
import "./styles/writePractice.css";
import GnBtn from "../components/GnBtn";
import CanvaWriter from "../components/CanvaWriter";

let blockSentenceCursor = null;
let cursor = null;

export default function WritePractice({ change, dataBase }) {
  const [firstBlock, setFirstBlock] = useState(true);
  const reLoadComponent = () => {
    setFirstBlock(firstBlock === false ? null : false);
  };
  const messageRef = useRef(null);
  const newWordNotaRef = useRef(null);

  if (firstBlock) {
    blockSentenceCursor = dataBase.createBlockSentence();
    cursor = blockSentenceCursor();
  }

  const nextKanji = () => {
    messageRef.current.innerHTML = `Escribe el siguiente <br /> ¿Que va en '--'?`;
    const newCursor = blockSentenceCursor();
    const reset = () => setFirstBlock(true);

    if (newCursor) {
      cursor = newCursor;
      reLoadComponent();
      return;
    }

    if (!dataBase.currentPracticeBlock(reset)) alert("COMPLETADO CAMPEON");
  };

  const hasBeenComplete = () => {
    dataBase.db_kanjiHasBeenSearched = false;
    dataBase.kanjiLearnedFound = null;

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
      dataBase.recordWord(word);
    }
  };

  const registerKanjiLearned = (strokes, animate) => {
    if (strokes.length) {
      const kanjiLearned = {
        char: cursor.kanji,
        strokes,
      };

      dataBase.recordKanjiLearned(kanjiLearned, () => {
        animate(() => hasBeenComplete());
      });
    }
  };

  const lineKanjiWrited = (lines, animate) => {
    if (dataBase.kanjiLearnedFound) {
      if (lines === dataBase.kanjiLearnedFound.strokes.length) {
        animate(() => hasBeenComplete());
      }
    }
  };

  const renderCanvas = () => {
    if (!dataBase.db_kanjiHasBeenSearched) {
      dataBase.findKanjiLearned(cursor.kanji, (found) => {
        if (!found) {
          messageRef.current.innerHTML = "Este kanji no está registrado";
        }
        setTimeout(reLoadComponent, 1000);
      });
      return <p>Busacando Kanji...</p>;
    }

    return (
      <CanvaWriter
        kanji={cursor.kanji}
        db_strokes={
          dataBase.kanjiLearnedFound ? dataBase.kanjiLearnedFound.strokes : []
        }
        linesHandler={lineKanjiWrited}
        strokesHandler={registerKanjiLearned}
        closeCanvas={() => {
          dataBase.db_kanjiHasBeenSearched = false;
          dataBase.kanjiLearnedFound = null;
        }}
      />
    );
  };

  return (
    <div className="writePracticeContainer panel flex_column">
      <h1> {cursor.text} </h1>
      <div className="kanjiPracticeArea">
        {renderCanvas()}

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

      <button className="owari gnBtn" onClick={() => change("init")}>終わり</button>
    </div>
  );
}
