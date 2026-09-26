import { motion } from "framer-motion";

const VARIANTS = {
  idle: { y: 0, rotate: 0, scale: 1 },
  bounce: {
    y: [0, -14, 2, 0],
    scale: [1, 1.18, 1, 1],
    transition: { duration: 0.55 },
  },
  shake: {
    x: [0, -7, 7, -5, 5, 0],
    transition: { duration: 0.4 },
  },
};

export default function Mascot({ state }) {
  const face = state === "bounce" ? "🤩" : state === "shake" ? "😅" : "🧑‍🔬";
  return (
    <motion.div
      className="mascot"
      animate={state || "idle"}
      variants={VARIANTS}
    >
      {face}
    </motion.div>
  );
}
