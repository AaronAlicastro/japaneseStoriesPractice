import "./styles/storyRegister.css"
import { useRef } from "react";
import GnBtn from "../components/GnBtn";

export default function StoryRegister({ change, dataBase }) {
  const storyTitleRef = useRef(null);
  const storyRef = useRef(null);
  const commentRef = useRef(null);

  const goBack = () => change("init");

  const recordStory = () => {
    if (
      storyTitleRef.current.value.trim() &&
      storyRef.current.value.trim() &&
      commentRef.current.value.trim()
    ) {
      const story = {
        title: storyTitleRef.current.value,
        content: storyRef.current.value,
        comment: commentRef.current.value,
      };

      change(false, (goTo) => {
        dataBase.recordStory(story, () => goTo());
      });
    } else alert("No mms wey, llena los campos");
  };

  return (
    <div className="storyRegisterContainer panel flex_column">
      <p>
        Registra la historia, lectura o estudio que
        quieras repasar
      </p>
      <p>Título</p>
      <input ref={storyTitleRef} type="text" name="storyTitle" />

      <div className="storyCreatorContainer flex_row">
        <label className="flex_column">
          Historia
          <textarea ref={storyRef} name="content"></textarea>
        </label>
        <label className="flex_column">
          Comentario
          <textarea ref={commentRef} name="comment"></textarea>
        </label>
      </div>

      <GnBtn click={recordStory}>Registrar</GnBtn>
      <GnBtn click={goBack}>Volver</GnBtn>
    </div>
  );
}
