import { useMemo } from "react";
import { roughGen } from "../lib/roughGenerator";

/**
 * Dibuja una figura con roughjs (estilo "cuaderno de ciencias" a mano
 * alzada) dentro de un <svg> existente. `draw` recibe el generador y debe
 * devolver un "drawable" (gen.rectangle(...), gen.circle(...), gen.path(...),
 * gen.line(...), etc). El resultado se memoiza por `seed` para que el trazo
 * no cambie en cada render.
 */
export default function Sketch({ draw, seed = 1, className }) {
  const paths = useMemo(() => {
    const drawable = draw(roughGen, seed);
    return roughGen.toPaths(drawable);
  }, [draw, seed]);

  return (
    <g className={className}>
      {paths.map((p, i) => (
        <path
          key={i}
          d={p.d}
          stroke={p.stroke}
          strokeWidth={p.strokeWidth}
          fill={p.fill ?? "none"}
          fillRule={p.fillRule}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ))}
    </g>
  );
}
