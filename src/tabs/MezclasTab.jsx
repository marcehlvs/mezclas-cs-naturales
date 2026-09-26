import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { generateRound } from "../data/mixtures";
import Confetti from "../components/Confetti";
import Mascot from "../components/Mascot";

export default function MezclasTab() {
  const [round, setRound] = useState(1);
  const [items, setItems] = useState(() => generateRound(1));
  const [selectedBasket, setSelectedBasket] = useState(null);
  const [results, setResults] = useState({});
  const [celebrate, setCelebrate] = useState(false);
  const [mascotState, setMascotState] = useState(null);
  const [totalCorrect, setTotalCorrect] = useState(0);
  const [totalPlayed, setTotalPlayed] = useState(0);

  const roundScore = Object.values(results).filter((r) => r === "ok").length;
  const allDone = Object.keys(results).length === items.length;

  function pickBasket(basket) {
    setSelectedBasket(basket);
  }

  function pickItem(item) {
    if (!selectedBasket || results[item.uid]) return;
    const ok = selectedBasket === item.type;
    setResults((prev) => ({ ...prev, [item.uid]: ok ? "ok" : "bad" }));
    setMascotState(ok ? "bounce" : "shake");
    setTimeout(() => setMascotState(null), 600);
    if (ok) {
      setCelebrate(true);
      setTimeout(() => setCelebrate(false), 900);
    }
  }

  function startNextRound() {
    const nextRound = round + 1;
    setRound(nextRound);
    setItems(generateRound(nextRound));
    setResults({});
    setSelectedBasket(null);
  }

  useEffect(() => {
    if (!allDone) return;
    setTotalCorrect((c) => c + roundScore);
    setTotalPlayed((p) => p + items.length);
    const t = setTimeout(startNextRound, 1800);
    return () => clearTimeout(t);
    // eslint-disable-next-line
  }, [allDone]);

  return (
    <section className="card">
      <Confetti show={celebrate} />
      <Mascot state={mascotState} />
      <h2 className="section-title">Clasificá cada mezcla</h2>
      <p className="intro">
        Las mezclas <b>homogéneas</b> se ven todas iguales, no se distinguen sus partes. Las{" "}
        <b>heterogéneas</b> muestran sus componentes por separado. Tocá primero una canasta y
        después la mezcla que querés guardar ahí.
      </p>
      <div className="pill-row">
        <span className="pill round">Ronda {round}</span>
        <span className="pill score">
          Puntos: {totalCorrect} / {totalPlayed}
        </span>
      </div>
      <div className="baskets">
        <div
          className={"basket homogenea" + (selectedBasket === "homogenea" ? " selected" : "")}
          onClick={() => pickBasket("homogenea")}
        >
          <span className="basket-title">🥛 Homogénea</span>
          <span className="basket-sub">no se ven las partes</span>
        </div>
        <div
          className={"basket heterogenea" + (selectedBasket === "heterogenea" ? " selected" : "")}
          onClick={() => pickBasket("heterogenea")}
        >
          <span className="basket-title">🥗 Heterogénea</span>
          <span className="basket-sub">se ven las partes</span>
        </div>
      </div>
      <div className="items-grid">
        {items.map((item) => {
          const r = results[item.uid];
          const cls = r === "ok" ? "done-ok" : r === "bad" ? "done-bad" : "";
          return (
            <motion.div
              key={item.uid}
              className={"item-card " + cls + (r ? " disabled" : "")}
              onClick={() => pickItem(item)}
              whileTap={r ? {} : { scale: 0.95 }}
              animate={
                r === "bad"
                  ? { x: [0, -6, 6, -4, 4, 0] }
                  : r === "ok"
                  ? { scale: [1, 1.08, 1] }
                  : {}
              }
              transition={{ duration: 0.4 }}
            >
              <span className="emoji">{item.emoji}</span>
              {item.label}
            </motion.div>
          );
        })}
      </div>
      {allDone && (
        <div className="round-banner">
          <span>
            ¡Ronda {round} completa! Acertaste {roundScore} de {items.length}.
          </span>
          <button onClick={startNextRound}>Nueva ronda ya</button>
        </div>
      )}
    </section>
  );
}
