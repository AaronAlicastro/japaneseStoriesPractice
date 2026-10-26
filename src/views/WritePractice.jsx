import { useRef, useState } from "react";
import "./styles/writePractice.css";
import GnBtn from "../components/GnBtn";
import CanvaWriter from "../components/CanvaWriter";
import {
  playJapaneseText,
  stopJapaneseLecture,
} from "../components/JapanesePlayer";
import knajiBase from "../dataBase/kanjiBase";

let blockSentenceCursor = null;
let cursor = null;

export default function WritePractice({ change, dataBase }) {
  const [firstBlock, setFirstBlock] = useState(true);
  const reLoadComponent = () => {
    setFirstBlock(firstBlock === false ? null : false);
  };
  const messageRef = useRef(null);
  const newWordNotaRef = useRef(null);
  const startPlaying = () => {
    setTimeout(() => {
      stopJapaneseLecture();
      playJapaneseText(cursor.origin);
    }, 500);
  };

  if (firstBlock) {
    blockSentenceCursor = dataBase.createBlockSentence();
    cursor = blockSentenceCursor();
    startPlaying();
  }

  const closePractice = () => {
    const si = window.confirm("¿Quieres cerrar la práctica?");
    if (si) change("storiesHandler");
  };

  const nextKanji = () => {
    messageRef.current.innerHTML = `Escribe el siguiente <br /> ¿Que va en '--'?`;
    const newCursor = blockSentenceCursor();
    const reset = () => {
      startPlaying();
      setFirstBlock(true);
    };

    if (newCursor) {
      cursor = newCursor;
      reLoadComponent();
      return;
    }

    if (!dataBase.currentPracticeBlock(reset)) {
      window.alert("お疲れ様です！、練習がおわったよ！");
      change(false, (goTo) => {
        setTimeout(() => goTo("storiesHandler"), 1000);
      });
    }
  };

  const hasBeenComplete = () => {
    dataBase.db_kanjiHasBeenSearched = false;
    dataBase.kanjiLearnedFound = null;
    console.log(cursor.kanji);
    const kanjiWrited = knajiBase.find((k) => k.char === cursor.kanji);
    let message = `Increíble ¡! <br /> <br /> <br />`;
    let kanjiInfoBase = "";

    if (kanjiWrited) {
      const ety = (kanjiWrited.etimology + "").replaceAll(",", " | ");
      const sds = (kanjiWrited.sounds + "").replaceAll(",", " - ");
      kanjiInfoBase = `${ety} <br /> ${sds} <br /> <br /> <br />`;
      message = kanjiInfoBase + message;
    } else window.alert(cursor.kanji + " no está");

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
      if (word) message = kanjiInfoBase + word.note + "<br /> <br /> <br />";
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

      <button className="owari gnBtn" onClick={closePractice}>
        終わり
      </button>
    </div>
  );
}
