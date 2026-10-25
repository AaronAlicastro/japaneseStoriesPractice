import GnBtn from "../components/GnBtn";

export default function Init({ change, dataBase }) {
  const renderStories = () => {
    change(false, (goTo) => {
      dataBase.getAllStories(() => goTo("storiesHandler"));
    });
  };

  const renderRegister = () => change("storyRegister");

  return (
    <div className="initContainer panel flex_column">
      <p>Practica las historias o estudios que hayas registrado ¡!</p>
      <GnBtn click={renderStories}>Historias</GnBtn>

      <p>Comienza registrando tu ruta a la iluminación</p>
      <GnBtn click={renderRegister}>Registrar</GnBtn>
    </div>
  );
}
