import { RoughGenerator } from "roughjs/bin/generator";

// Un único generador reutilizado: roughjs usa esto para calcular los
// trazos "a mano alzada" de cada figura (ver componente <Sketch />).
export const roughGen = new RoughGenerator();
