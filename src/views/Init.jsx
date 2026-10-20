import GnBtn from "../components/GnBtn";

export default function Init({ change, dataBase }) {
  const renderStories = () => {
    change(false, (goTo) => {
      dataBase.getAllStories(() => goTo("storiesHandler"));
    });
  };

  const analizeStory = () => {
    // change(false, (goTo) => {
    //   dataBase.getAllStories(() => goTo("storiesHandler"));
    // })
  };

  return (
    <div className="initContainer panel flex_column">
      <p style={{ width: "300px" }}>
        Practicar escritura es tratar de escribir algo con las palabras ya
        aprendidas y registradas
      </p>
      <GnBtn click={analizeStory}>Practicar escritura</GnBtn>

      <p style={{ width: "300px" }}>
        Al darle a historias, podrás repasar las que tienes registradas y
        también registrar alguna
      </p>
      <GnBtn click={renderStories}>Historias</GnBtn>
    </div>
  );
}
