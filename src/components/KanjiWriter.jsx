import { useEffect, useRef } from "react";
import "./styles/kanjiWriter.css";
import HanziWriter from "hanzi-writer";

export default function KanjiWriter({ kanji = "", complete }) {
  const containerRef = useRef(null);
  const writerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const writer = HanziWriter.create(containerRef.current, kanji, {
      width: 300,
      height: 300,
      padding: 5,
      showCharacter: false,
      showOutline: false,
      showHintAfterMisses: 2,
      strokeAnimationSpeed: 5,
      delayBetweenStrokes: 600, // milliseconds
    });
    writerRef.current = writer;

    setTimeout(() => {
      writer.quiz({
        // onCorrectStroke(data) {},
        // onMistake(data) {},
        onComplete(data) {
          complete();
        },
      });
    }, 500);

    return () => {
      writer.cancelQuiz();
      containerRef.current.innerHTML = "";
      writerRef.current = null;
    };
  }, [kanji]);

  // animar
  // writerRef.current.animateCharacter();

  return (
    <section className="kanjiWriterContainer">
      <div ref={containerRef}></div>
    </section>
  );
}
