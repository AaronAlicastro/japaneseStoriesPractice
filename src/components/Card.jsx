import "./styles/cards.css";

export default function Cards({ title, comment, click }) {
  return (
    <div className="card_container" onClick={click}>
      <h5> {title} </h5>
      <textarea readOnly defaultValue={comment}></textarea>
    </div>
  );
}
