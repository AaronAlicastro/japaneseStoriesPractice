import { useEffect, useRef } from "react";
import "./styles/canvaWriter.css";

export default function CanvaWriter({
  kanji,
  db_strokes = [],
  linesHandler = () => {},
  strokesHandler = () => {},
  closeCanvas = () => {},
}) {
  const canvasRef = useRef(null);
  const borrarBtnRef = useRef(null);
  const registrarBtnRef = useRef(null);
  const strokesAmountRef = useRef(null);

  const renderKanjiShadow = () => {
    if (db_strokes.length) {
      return <span className="kanjiRefWriter_cruz"></span>;
    }

    return <span> {kanji} </span>;
  };
  const renderButtons = () => {
    const renderstrokesAmountRef = () => {
      if (db_strokes.length) {
        return (
          <p
            ref={strokesAmountRef}
            style={{ textAlign: "center" }}
            value={db_strokes.length}
          >
            Faltan {db_strokes.length} trazos
          </p>
        );
      }

      return "";
    };

    return (
      <div
        className="flex_row"
        style={{
          marginTop: "10px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {renderstrokesAmountRef()}

        <button ref={borrarBtnRef} className="gnBtn">
          Borrar
        </button>

        <button
          ref={registrarBtnRef}
          className="canvaRightFloatBtn gnBtn"
          value={db_strokes.length ? "edit" : "register"}
        >
          {db_strokes.length ? "Editar" : "Registrar"}
        </button>
      </div>
    );
  };

  useEffect(() => {
    if (!canvasRef.current) return;
    let animacionId = null;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const strokes = [];
    const lines = [];

    const putLineMessage = (amount) => {
      const editClicked = borrarBtnRef.current.getAttribute("value");
      if (editClicked) {
        strokesAmountRef.current.innerHTML = "Editando...";
        return;
      }

      strokesAmountRef.current.setAttribute("value", amount);
      strokesAmountRef.current.innerHTML = `Faltan ${amount} trazos`;
    };

    const getPoint = (event) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = event.touches[0].clientX;
      const clientY = event.touches[0].clientY;

      return {
        x: ((clientX - rect.left) * canvas.width) / rect.width,
        y: ((clientY - rect.top) * canvas.height) / rect.height,
      };
    };

    const cancelAnimation = () => {
      if (animacionId !== null) {
        cancelAnimationFrame(animacionId);
        animacionId = null;
      }
    };

    const animateStrokes = (strokes, finish, index = 0) => {
      let trazo = strokes[index];
      let duracion = 750;
      cancelAnimation();
      if (index === 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }

      if (!trazo || trazo.length === 0) return;

      if (trazo.length === 1) {
        ctx.beginPath();
        ctx.arc(trazo[0].x, trazo[0].y, ctx.lineWidth / 2, 0, Math.PI * 2);
        ctx.fill();
        return;
      }

      const inicio = performance.now();

      function animar(ahora) {
        const progreso = Math.min((ahora - inicio) / duracion, 1);
        ctx.beginPath();
        ctx.moveTo(trazo[0].x, trazo[0].y);

        if (progreso >= 1) {
          for (let i = 1; i < trazo.length; i++) {
            ctx.lineTo(trazo[i].x, trazo[i].y);
          }
          ctx.stroke();
          animacionId = null;
          if (strokes[index + 1]) {
            animateStrokes(strokes, finish, index + 1);
          } else finish();
          return;
        }

        const posicion = progreso * (trazo.length - 1);
        const indice = Math.min(Math.floor(posicion), trazo.length - 2);
        const fraccion = posicion - indice;

        for (let i = 1; i <= indice; i++) {
          ctx.lineTo(trazo[i].x, trazo[i].y);
        }

        const actual = trazo[indice];
        const siguiente = trazo[indice + 1];

        if (actual && siguiente) {
          const x = actual.x + (siguiente.x - actual.x) * fraccion;
          const y = actual.y + (siguiente.y - actual.y) * fraccion;
          ctx.lineTo(x, y);
        }

        ctx.stroke();
        animacionId = requestAnimationFrame(animar);
      }

      animacionId = requestAnimationFrame(animar);
    };

    const startStrokes = (event) => {
      if (event.button !== undefined && event.button !== 0) return;
      cancelAnimation();
      ctx.beginPath();
      lines.push(getPoint(event));
      ctx.moveTo(lines[0].x, lines[0].y);
    };

    const continueStrokes = (event) => {
      const point = getPoint(event);
      ctx.lineTo(point.x, point.y);
      ctx.stroke();
      lines.push(point);
    };

    const finishStrokes = () => {
      if (lines.length) {
        strokes.push([...lines]);
        lines.splice(0);

        if (strokesAmountRef.current) {
          const strokeNumber =
            parseInt(strokesAmountRef.current.getAttribute("value")) - 1;
          putLineMessage(strokeNumber);
        }

        linesHandler(strokes.length, (f) => {
          animateStrokes(db_strokes, f);
        });
      }
    };

    canvas.addEventListener("touchstart", startStrokes);
    canvas.addEventListener("touchmove", continueStrokes);
    canvas.addEventListener("touchend", finishStrokes);

    borrarBtnRef.current.addEventListener("click", () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      strokes.splice(0);

      if (strokesAmountRef.current) putLineMessage(db_strokes.length);
    });

    registrarBtnRef.current.addEventListener("click", () => {
      const btnValue = registrarBtnRef.current.getAttribute("value");
      if (btnValue === "edit") {
        borrarBtnRef.current.setAttribute("value", "editClicked");
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const newStrokes = strokes.splice(0);
      strokesHandler(newStrokes, btnValue, (f) => {
        animateStrokes(newStrokes, f);
      });

      registrarBtnRef.current.setAttribute("value", "edit");
      registrarBtnRef.current.innerHTML = "Editar";
    });

    return closeCanvas;
  }, [kanji]);

  return (
    <div className="canvaWriterContainer">
      {renderKanjiShadow()}
      <canvas ref={canvasRef}></canvas>
      {renderButtons()}
    </div>
  );
}
