import "./styles/storyLecture.css";
import GnBtn from "../components/GnBtn";
import {
  JapanesePlayer,
  playJapaneseText,
  stopJapaneseLecture,
} from "../components/JapanesePlayer";
import { useEffect } from "react";

export default function StoryLecture({ change, dataBase }) {
  const story = dataBase.stories.find(
    (st) => st.id === dataBase.currentStoryId,
  );

  const goBack = () => change("storiesHandler");
  const goPractice = () => {
    change(false, (goTo) => {
      dataBase.currentPracticeBlock(() => {
        goTo("writePractice");
      });
    });
  };

  useEffect(() => {
    setTimeout(
      () =>
        playJapaneseText(story.title, () => {
          setTimeout(() => playJapaneseText(story.content), 500);
        }),
      500,
    );

    return () => stopJapaneseLecture();
  });

  return (
    <div className="storyLecture_container panel flex_column">
      <div className="lectureFloatNav flex_row">
        <GnBtn click={goBack}>Volver</GnBtn>
        <GnBtn click={goPractice}>Practicar</GnBtn>
      </div>

      <h1 className="story_title"> {story.title} </h1>

      <div className="story_container">
        <textarea
          readOnly
          defaultValue={story.content}
          className="story_text"
        ></textarea>
      </div>

      <JapanesePlayer text={story.content} />
    </div>
  );
}
