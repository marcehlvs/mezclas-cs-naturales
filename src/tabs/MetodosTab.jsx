import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { METHODS } from "../data/methods";
import MethodDemo from "../components/MethodDemo";

export default function MetodosTab() {
  const [open, setOpen] = useState(null);
  return (
    <section className="card">
      <h2 className="section-title">Métodos de separación</h2>
      <p className="intro">Tocá cada método para ver un dibujo animado de cómo funciona.</p>
      <div className="methods-grid">
        {METHODS.map((m) => {
          const isOpen = open === m.id;
          return (
            <div key={m.id} className="method-card" onClick={() => setOpen(isOpen ? null : m.id)}>
              <div className="method-head">
                <span className="icon">{m.icon}</span>
                {m.name}
                <span className="chevron">{isOpen ? "▲" : "▼"}</span>
              </div>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    className="method-body"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                  >
                    {m.desc}
                    <div className="demo">
                      <MethodDemo id={m.id} />
                    </div>
                    <div className="flow-caption">
                      <div className="flow-step flow-in">
                        <b>Entra</b>
                        {m.in}
                      </div>
                      <div className="flow-step flow-out">
                        <b>Sale</b>
                        {m.out}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
