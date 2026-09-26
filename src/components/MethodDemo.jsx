import Sketch from "./Sketch";

const ROUGH = { roughness: 1.7, strokeWidth: 2, bowing: 1.2 };

export default function MethodDemo({ id }) {
  if (id === "tamiza") {
    return (
      <svg viewBox="0 0 200 116">
        <text x="100" y="12" fontSize="9" textAnchor="middle">tamiz</text>
        <Sketch
          seed={11}
          draw={(gen, seed) =>
            gen.path("M55 20 L145 20 L130 58 L70 58 Z", {
              ...ROUGH,
              seed,
              stroke: "var(--ink)",
            })
          }
        />
        <line x1="70" y1="58" x2="130" y2="58" stroke="var(--ink)" strokeWidth="2" strokeDasharray="3 4" />
        <text x="100" y="29" fontSize="9" textAnchor="middle">piedras</text>
        <Sketch
          seed={12}
          draw={(gen, seed) =>
            gen.circle(85, 42, 20, { ...ROUGH, seed, stroke: "var(--ink)", fill: "#9b8b73", fillStyle: "solid" })
          }
        />
        <Sketch
          seed={13}
          draw={(gen, seed) =>
            gen.circle(113, 44, 16, { ...ROUGH, seed, stroke: "var(--ink)", fill: "#9b8b73", fillStyle: "solid" })
          }
        />
        <circle className="particle-fall" cx="88" cy="50" r="4" fill="var(--amber)" />
        <circle className="particle-fall p2" cx="100" cy="50" r="4" fill="var(--amber)" />
        <circle className="particle-fall p3" cx="112" cy="50" r="4" fill="var(--amber)" />
        <path d="M55 92 Q100 106 145 92 L145 98 Q100 112 55 98 Z" fill="var(--amber)" opacity="0.4" />
        <text x="100" y="99" fontSize="9" textAnchor="middle">arena</text>
      </svg>
    );
  }
  if (id === "filtra") {
    return (
      <svg viewBox="0 0 200 116">
        <Sketch
          seed={21}
          draw={(gen, seed) =>
            gen.path("M60 15 L140 15 L110 55 L90 55 Z", { ...ROUGH, seed, stroke: "var(--ink)" })
          }
        />
        <line x1="88" y1="40" x2="112" y2="40" stroke="var(--muted)" strokeWidth="2" />
        <text x="150" y="43" fontSize="9">papel filtro</text>
        <Sketch
          seed={22}
          draw={(gen, seed) => gen.circle(95, 30, 10, { ...ROUGH, seed, stroke: "#a4835f", fill: "#c2a878", fillStyle: "solid" })}
        />
        <Sketch
          seed={23}
          draw={(gen, seed) => gen.circle(106, 33, 8, { ...ROUGH, seed, stroke: "#a4835f", fill: "#c2a878", fillStyle: "solid" })}
        />
        <text x="70" y="28" fontSize="9" textAnchor="end">arena</text>
        <circle className="particle-fall" cx="100" cy="42" r="3.5" fill="var(--teal)" />
        <circle className="particle-fall p2" cx="100" cy="42" r="3.5" fill="var(--teal)" />
        <Sketch
          seed={24}
          draw={(gen, seed) => gen.rectangle(76, 80, 48, 26, { ...ROUGH, seed, stroke: "var(--ink)" })}
        />
        <rect x="78" y="92" width="44" height="12" fill="var(--teal)" opacity="0.35" />
        <text x="100" y="100" fontSize="9" textAnchor="middle">agua limpia</text>
      </svg>
    );
  }
  if (id === "decanta") {
    return (
      <svg viewBox="0 0 200 116">
        <Sketch
          seed={31}
          draw={(gen, seed) =>
            gen.path("M70 10 L130 10 L130 55 Q130 70 100 75 Q70 70 70 55 Z", {
              ...ROUGH,
              seed,
              stroke: "var(--ink)",
            })
          }
        />
        <path d="M71 11 L129 11 L129 33 L71 33 Z" fill="var(--amber)" opacity="0.6" />
        <text x="100" y="25" fontSize="9" textAnchor="middle">aceite</text>
        <path d="M71 33 L129 33 L129 55 Q129 68 100 73 Q71 68 71 55 Z" fill="var(--teal)" opacity="0.5" />
        <text x="100" y="48" fontSize="9" textAnchor="middle" fill="#fff">agua</text>
        <Sketch
          seed={32}
          draw={(gen, seed) => gen.rectangle(96, 75, 8, 8, { ...ROUGH, seed, stroke: "var(--muted)", fill: "var(--muted)", fillStyle: "solid" })}
        />
        <circle className="particle-fall" cx="100" cy="88" r="3.5" fill="var(--teal)" />
        <circle className="particle-fall p2" cx="100" cy="88" r="3.5" fill="var(--teal)" />
        <Sketch
          seed={33}
          draw={(gen, seed) => gen.rectangle(80, 95, 40, 18, { ...ROUGH, seed, stroke: "var(--ink)" })}
        />
        <text x="100" y="107" fontSize="9" textAnchor="middle">agua sola</text>
      </svg>
    );
  }
  if (id === "evapora") {
    return (
      <svg viewBox="0 0 200 116">
        <path d="M60 96 L140 96 L120 110 L80 110 Z" fill="var(--coral)" opacity="0.5" />
        <Sketch
          seed={41}
          draw={(gen, seed) => gen.rectangle(70, 50, 60, 42, { ...ROUGH, seed, stroke: "var(--ink)" })}
        />
        <rect x="72" y="66" width="56" height="24" fill="var(--teal)" opacity="0.35" />
        <text x="100" y="82" fontSize="9" textAnchor="middle">agua con sal</text>
        <rect className="crystal-grow" x="85" y="77" width="6" height="6" fill="#fff" stroke="var(--muted)" strokeWidth="1" />
        <rect className="crystal-grow p2" x="98" y="81" width="5" height="5" fill="#fff" stroke="var(--muted)" strokeWidth="1" />
        <rect className="crystal-grow p3" x="110" y="78" width="6" height="6" fill="#fff" stroke="var(--muted)" strokeWidth="1" />
        <path className="particle-rise" d="M90 50 q4 -8 0 -16" fill="none" stroke="var(--muted)" strokeWidth="2" />
        <path className="particle-rise p2" d="M105 50 q4 -8 0 -16" fill="none" stroke="var(--muted)" strokeWidth="2" />
        <path className="particle-rise p3" d="M115 50 q4 -8 0 -16" fill="none" stroke="var(--muted)" strokeWidth="2" />
        <text x="112" y="18" fontSize="9">vapor</text>
      </svg>
    );
  }
  if (id === "imanta") {
    return (
      <svg viewBox="0 0 200 116">
        <Sketch
          seed={51}
          draw={(gen, seed) => gen.rectangle(148, 34, 18, 28, { ...ROUGH, seed, stroke: "#b3391c", fill: "var(--red)", fillStyle: "solid" })}
        />
        <Sketch
          seed={52}
          draw={(gen, seed) => gen.rectangle(148, 62, 18, 28, { ...ROUGH, seed, stroke: "#4a3fc4", fill: "var(--violet)", fillStyle: "solid" })}
        />
        <text x="157" y="52" fontSize="11" textAnchor="middle" fill="#fff">N</text>
        <text x="157" y="80" fontSize="11" textAnchor="middle" fill="#fff">S</text>
        <text x="157" y="26" fontSize="9" textAnchor="middle">imán</text>
        <Sketch
          seed={53}
          draw={(gen, seed) => gen.circle(32, 42, 12, { ...ROUGH, seed, stroke: "#a4835f", fill: "#c2a878", fillStyle: "solid" })}
        />
        <Sketch
          seed={54}
          draw={(gen, seed) => gen.circle(42, 80, 12, { ...ROUGH, seed, stroke: "#a4835f", fill: "#c2a878", fillStyle: "solid" })}
        />
        <text x="30" y="98" fontSize="9" textAnchor="middle">arena</text>
        <circle className="particle-right" cx="42" cy="48" r="4" fill="var(--ink)" />
        <circle className="particle-right p2" cx="42" cy="62" r="4" fill="var(--ink)" />
        <circle className="particle-right p3" cx="42" cy="76" r="4" fill="var(--ink)" />
        <text x="42" y="20" fontSize="9" textAnchor="middle">hierro</text>
      </svg>
    );
  }
  return null;
}
