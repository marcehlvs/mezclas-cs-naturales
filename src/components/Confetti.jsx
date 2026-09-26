import { AnimatePresence, motion } from "framer-motion";
import { useMemo } from "react";

const PIECES = ["🎉", "✨", "⭐", "🎊"];

export default function Confetti({ show }) {
  const items = useMemo(
    () =>
      Array.from({ length: 10 }).map((_, idx) => ({
        id: idx,
        left: Math.random() * 90 + "%",
        delay: Math.random() * 0.3,
        emoji: PIECES[idx % PIECES.length],
        rotate: (Math.random() - 0.5) * 300,
      })),
    [show]
  );

  return (
    <AnimatePresence>
      {show && (
        <div className="confetti-overlay">
          {items.map((p) => (
            <motion.span
              key={p.id}
              className="confetti-piece"
              style={{ left: p.left }}
              initial={{ y: 0, opacity: 1, rotate: 0 }}
              animate={{ y: "70vh", opacity: 0, rotate: p.rotate }}
              transition={{ duration: 0.9, delay: p.delay, ease: "easeIn" }}
            >
              {p.emoji}
            </motion.span>
          ))}
        </div>
      )}
    </AnimatePresence>
  );
}
