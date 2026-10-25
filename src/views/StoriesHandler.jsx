import "./styles/storiesHandler.css";
import GnBtn from "../components/GnBtn";
import Cards from "../components/Card";
import { useState } from "react";

export default function StoriesHandler({ change, dataBase }) {
  const [stories, setStories] = useState([...dataBase.stories]);
  const goBack = () => change("init");

  const filterStories = (event) => {
    const search = event.target.value;

    setStories(
      dataBase.stories.filter((story) => {
        return (
          story.title.includes(search) ||
          story.content.includes(search) ||
          story.comment.includes(search)
        );
      }),
    );
  };

  const selectStory = (story) => {
    change(false, (goTo) => {
      dataBase.createWritePracticeBlock(story, () => goTo("writePractice"));
    });
  };

  const displayStories = () => {
    if (!stories.length) return <p>Cero Encontradas</p>;

    return (
      <div className="flex_storiesContainer">
        {stories.map((story) => (
          <Cards
            key={story.id}
            title={story.title}
            comment={story.comment}
            click={() => selectStory(story)}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="StoriesHandlerContainer panel flex_column">
      <GnBtn click={goBack}>Volver</GnBtn>
      <p>Historias Guardadas</p>
      <input type="text" placeholder="Buscar..." onChange={filterStories} />
      {displayStories()}
    </div>
  );
}
