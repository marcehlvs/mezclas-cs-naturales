import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { QUIZ } from "../data/quiz";
import Confetti from "../components/Confetti";
import Mascot from "../components/Mascot";

export default function JuegoTab() {
  const [i, setI] = useState(0);
  const [score, setScore] = useState(0);
  const [picked, setPicked] = useState(null);
  const [celebrate, setCelebrate] = useState(false);
  const [mascotState, setMascotState] = useState(null);
  const finished = i >= QUIZ.length;
  const current = !finished ? QUIZ[i] : null;

  function choose(opt) {
    if (picked) return;
    setPicked(opt);
    const ok = opt === current.correct;
    setMascotState(ok ? "bounce" : "shake");
    setTimeout(() => setMascotState(null), 600);
    if (ok) {
      setScore((s) => s + 1);
      setCelebrate(true);
      setTimeout(() => setCelebrate(false), 900);
    }
  }

  function next() {
    setPicked(null);
    setI(i + 1);
  }

  function retry() {
    setI(0);
    setScore(0);
    setPicked(null);
  }

  if (finished) {
    return (
      <motion.section
        className="card final-score"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35 }}
      >
        <h2 className="section-title">¡Juego terminado!</h2>
        <div className="trophy">🏆</div>
        <p>
          Respondiste bien {score} de {QUIZ.length} preguntas.
        </p>
        <button className="retry-btn" onClick={retry}>
          Jugar de nuevo
        </button>
      </motion.section>
    );
  }

  return (
    <section className="card">
      <Confetti show={celebrate} />
      <Mascot state={mascotState} />
      <h2 className="section-title">¿Qué método usarías?</h2>
      <div className="progress-track">
        <motion.div
          className="progress-fill"
          animate={{ width: (i / QUIZ.length) * 100 + "%" }}
          transition={{ duration: 0.3 }}
        />
      </div>
      <div className="pill-row">
        <span className="pill progress">
          Pregunta {i + 1} / {QUIZ.length}
        </span>
        <span className="pill score">Puntos: {score}</span>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={i}
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -16 }}
          transition={{ duration: 0.2 }}
        >
          <p className="quiz-question">{current.q}</p>
          <div className="quiz-options">
            {current.options.map((opt) => {
              let cls = "";
              if (picked) {
                if (opt === current.correct) cls = "correct";
                else if (opt === picked) cls = "wrong";
              }
              return (
                <button key={opt} className={cls} onClick={() => choose(opt)} disabled={!!picked}>
                  {opt}
                </button>
              );
            })}
          </div>
        </motion.div>
      </AnimatePresence>
      {picked && (
        <p className={"feedback " + (picked === current.correct ? "ok" : "bad")}>
          {picked === current.correct
            ? "¡Muy bien! 🎉"
            : `No era esa. La respuesta correcta es ${current.correct}.`}
        </p>
      )}
      {picked && (
        <button className="next-btn" onClick={next}>
          {i + 1 < QUIZ.length ? "Siguiente" : "Ver resultado"}
        </button>
      )}
    </section>
  );
}
