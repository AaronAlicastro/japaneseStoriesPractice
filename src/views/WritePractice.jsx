import { useRef, useState } from "react";
import "./styles/writePractice.css";
import GnBtn from "../components/GnBtn";
import CanvaWriter from "../components/CanvaWriter";
import {
  JapanesePlayer,
  playJapaneseText,
  stopJapaneseLecture,
} from "../components/JapanesePlayer";
import kanjiBase from "../dataBase/kanjiBase";

let blockSentenceCursor = null;
let cursor = null;

export default function WritePractice({ change, dataBase }) {
  const [firstBlock, setFirstBlock] = useState(true);
  const reLoadComponent = () => {
    setFirstBlock(firstBlock === false ? null : false);
  };
  const messageRef = useRef(null);
  const newWordNotaRef = useRef(null);
  const startPlaying = (finish) => {
    setTimeout(() => {
      stopJapaneseLecture();
      playJapaneseText(cursor.origin, finish);
    }, 500);
  };

  const validateCursorBlock = () => {
    const newCursor = blockSentenceCursor();
    const reset = () => {
      startPlaying();
      setFirstBlock(firstBlock ? { e: true } : true);
    };

    if (!newCursor.noFound) {
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

  if (firstBlock) {
    blockSentenceCursor = dataBase.createBlockSentence();
    cursor = blockSentenceCursor();
    startPlaying(() => {
      if (cursor.noFound) setTimeout(validateCursorBlock, 500);
    });
  }

  const closePractice = () => {
    const si = window.confirm("¿Quieres cerrar la práctica?");
    if (si) change("storiesHandler");
  };

  const nextKanji = () => {
    messageRef.current.innerHTML = "Escribe el siguiente ¿Que va en --?";
    validateCursorBlock();
  };

  const newWordRegisterOpener = (wordsNoFound, note) => {
    const wordRegisterfather = document.querySelector(".floatWordRegister");
    wordRegisterfather.style.display = "flex";
    wordRegisterfather.children[0].innerHTML = wordsNoFound[0];
    newWordNotaRef.current.value = note ? note : "";
    wordRegisterfather.children[4].onclick = () => {
      registerWordHandler(
        wordRegisterfather,
        wordRegisterfather.children[0],
        wordRegisterfather.children[4],
        wordsNoFound,
      );
    };
  };

  const hasBeenComplete = () => {
    const kanjiWrited = kanjiBase.find((k) => k.char === cursor.kanji);
    const newKanji = { ...dataBase.kanjiLearnedFound };
    let message = `Increíble ¡! <br /> <br /> <br />`;
    let kanjiInfoBase = "";

    if (kanjiWrited) {
      const ety = (kanjiWrited.etimology + "").replaceAll(",", " | ");
      const sds = (kanjiWrited.sounds + "").replaceAll(",", " - ");
      kanjiInfoBase = `${ety} <br /> ${sds} <br /> <br />`;
      message = kanjiInfoBase + message;
    } else if (newKanji.important) {
      const si = window.confirm(
        cursor.kanji + " no está, ¿marcar como no importante?",
      );

      if (si) {
        newKanji.important = false;
        dataBase.putKanjiLearned(newKanji);
      }
    }

    dataBase.db_kanjiHasBeenSearched = false;
    dataBase.kanjiLearnedFound = null;

    const button = document.createElement("button");
    button.setAttribute("class", "gnBtn");
    button.innerHTML = "次の";
    button.addEventListener("click", nextKanji);

    if (!cursor.wordDetected.length) {
      messageRef.current.innerHTML = message;
      messageRef.current.appendChild(button);
      return;
    }

    messageRef.current.innerHTML = kanjiInfoBase + "";
    const wordsNoFound = [];

    const searchWord = (finish) => {
      const wordToSearch = cursor.wordDetected.shift();
      const spanM = document.createElement("span");
      spanM.classList.add("kanjiPracticeArea_mSpan");

      dataBase.findWord(wordToSearch, (word) => {
        if (word) {
          spanM.innerHTML = `<b>${word.word}:</b> ${word.note}`;
          spanM.onclick = () => newWordRegisterOpener([word.word], word.note);
          messageRef.current.appendChild(spanM);
        } else wordsNoFound.push(wordToSearch);

        if (cursor.wordDetected.length) searchWord(finish);
        else finish();
      });
    };

    searchWord(() => {
      messageRef.current.appendChild(button);
      if (wordsNoFound.length) newWordRegisterOpener(wordsNoFound);
    });
  };

  const registerWordHandler = (
    wordRegisterfather,
    registerTitle,
    registerBtn,
    wordsNoFound,
  ) => {
    const note = newWordNotaRef.current.value.trim();

    if (note) {
      const word = {
        word: wordsNoFound.shift(),
        note,
      };

      registerTitle.innerHTML = "Cargando...";
      newWordNotaRef.current.value = "";
      registerBtn.style.display = "none";

      setTimeout(() => {
        registerBtn.style.display = "inline-block";

        dataBase.recordWord(word, () => {
          if (wordsNoFound.length) {
            registerTitle.innerHTML = wordsNoFound[0];

            registerBtn.onclick = () => {
              registerWordHandler(
                wordRegisterfather,
                registerTitle,
                registerBtn,
                wordsNoFound,
              );
            };
          } else wordRegisterfather.style.display = "none";
        });
      }, 500);
    }
  };

  const registerKanjiLearned = (strokes, indicator, animate) => {
    if (strokes.length) {
      if (indicator === "edit") {
        const newKanjiLearned = {
          char: cursor.kanji,
          strokes,
        };

        dataBase.putKanjiLearned(newKanjiLearned, () => {
          animate(() => hasBeenComplete());
        });

        return;
      }

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
        setTimeout(() => animate(() => hasBeenComplete()), 500);
      }
    }
  };

  const renderTitle = () => {
    return (
      <h1 className="flex_row">
        {cursor.text ? cursor.text : cursor.origin}
        <JapanesePlayer text={cursor.origin} />
      </h1>
    );
  };

  const renderCanvas = () => {
    if (cursor.noFound) return <p>...</p>;

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

  const renderMessageP = () => {
    const note = cursor.noFound ? "..." : "Escribe el siguiente ¿Que va en --?";

    return (
      <p ref={messageRef} className="kanjiPracticeArea_message">
        {note}
      </p>
    );
  };

  return (
    <div className="writePracticeContainer panel flex_column">
      {renderTitle()}
      <div className="kanjiPracticeArea">
        {renderCanvas()}
        {renderMessageP()}
      </div>

      <div className="floatWordRegister">
        <h1> Titulo </h1>
        <p>Pon una nota</p>
        <textarea ref={newWordNotaRef}></textarea>
        <GnBtn
          click={() => {
            document.querySelector(".floatWordRegister").style.display = "none";
          }}
        >
          Cancelar
        </GnBtn>
        <GnBtn>Registrar</GnBtn>
      </div>

      <button className="owari gnBtn" onClick={closePractice}>
        終わり
      </button>
    </div>
  );
}
