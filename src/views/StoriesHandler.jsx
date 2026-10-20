import { useRef } from "react";
import "./styles/storiesHandler.css";
import GnBtn from "../components/GnBtn";
import Cards from "../components/Card";

export default function StoriesHandler({ change, dataBase }) {
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

  const selectStory = (story) => {
    change(false, (goTo) => {
      dataBase.createWritePracticeBlock(story, () => goTo("writePractice"));
    });
    // dataBase.currentPracticeBlock();
  };

  const displayStories = () => {
    if (dataBase.stories.length) {
      return (
        <div className="flex_storiesContainer">
          {dataBase.stories.map((story) => (
            <Cards
              key={story.id}
              title={story.title}
              comment={story.comment}
              click={() => selectStory(story)}
            />
          ))}
        </div>
      );
    }

    return <p>No hay</p>;
  };

  return (
    <div className="StoriesHandlerContainer">
      <div className="asidePanel flex_column">
        <p>
          En esta sección podrás registrar la historia, lectura o estudio que
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

      <div className="asidePanel flex_column">
        <p>Historias Guardadas</p>
        {displayStories()}
      </div>
    </div>
  );
}
