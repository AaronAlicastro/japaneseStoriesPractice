import "./styles/japanesePlayer.css";
import { IconContext } from "react-icons";
import { CiPlay1, CiStop1 } from "react-icons/ci";

function clearText(text) {
  let array = text.replaceAll("\n", "");
  return array.split("。");
}

export function playJapaneseText(text, finish = () => {}, arrayBefore) {
  const arrayText = arrayBefore || clearText(text);
  const utterance = new SpeechSynthesisUtterance(arrayText.shift());

  utterance.lang = "ja-JP";
  utterance.rate = 1;
  utterance.pitch = 1;
  utterance.onend = () => {
    if (arrayText.length) playJapaneseText(undefined, finish, arrayText);
    else finish();
  };

  speechSynthesis.speak(utterance);
}

export function stopJapaneseLecture() {
  speechSynthesis.cancel();
}

export function JapanesePlayer({ text, finish }) {
  return (
    <div className="japanesePlayerContainer flex_row">
      <button onClick={() => playJapaneseText(text, finish)}>
        <IconContext.Provider value={{ size: "1rem", color: "#F00" }}>
          <CiPlay1 />
        </IconContext.Provider>
      </button>

      <button onClick={stopJapaneseLecture}>
        <IconContext.Provider value={{ size: "1rem", color: "#F00" }}>
          <CiStop1 />
        </IconContext.Provider>
      </button>
    </div>
  );
}
