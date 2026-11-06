import { useEffect, useState } from "react";
import "./styles/cards.css";

export default function Cards({ dataBase, title, comment, click }) {
  const [progress, setProgress] = useState(null);

  useEffect(() => {
    dataBase.findProgress(title, (pross) => setProgress(pross));
  });

  const percent = progress
    ? (progress.indexes.length / progress.totalBlocks) * 100
    : 0;

  return (
    <div className="card_container" onClick={click}>
      <div
        className="progressBarGradient"
        style={{ height: percent + "%" }}
      ></div>

      <h5> {title} </h5>
      <textarea readOnly defaultValue={comment}></textarea>
    </div>
  );
}
