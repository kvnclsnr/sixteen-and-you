import { Eyebrow } from "../../components/components.tsx";

export const Hero = () => {
  return (
    <section className = "hero">
      <Eyebrow text = "CALENDARIO DE DETALLITOS" accent/>
      <h1>16 días <span>para ti</span></h1>
      <p className = "description">Un pequeño detalle cada día hasta tu cumpleaños</p>
      <span className = "lead">Vuelve mañana, habrá algo nuevo para ti</span>
    </section>
  );
};