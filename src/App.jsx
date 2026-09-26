import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Tabs from "./components/Tabs";
import MezclasTab from "./tabs/MezclasTab";
import MetodosTab from "./tabs/MetodosTab";
import JuegoTab from "./tabs/JuegoTab";
import "./styles/global.css";

const ACCENTS = {
  mezclas: "var(--teal)",
  metodos: "var(--violet)",
  juego: "var(--coral)",
};

export default function App() {
  const [tab, setTab] = useState("mezclas");

  return (
    <div className="app" style={{ "--accent": ACCENTS[tab] }}>
      <header className="app-header">
        <span className="flask">🧪</span>
        <h1>Mezclas y Separación</h1>
        <p>Ciencias Naturales · 3er grado</p>
      </header>
      <Tabs active={tab} onChange={setTab} />
      <div className="tab-viewport">
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {tab === "mezclas" && <MezclasTab />}
            {tab === "metodos" && <MetodosTab />}
            {tab === "juego" && <JuegoTab />}
          </motion.div>
        </AnimatePresence>
        <footer className="note">Hecho con 💛 para aprender jugando</footer>
      </div>
    </div>
  );
}
