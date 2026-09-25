import { DayHeading, DayParagraph, DaySection, DayStrong, Eyebrow } from "../../components/components";

export const Day9 = () => {
  return (
    <DaySection day = {9}>
      
      <DayHeading
        title = "Ya pasamos la mitad"
      />
      
      <DayParagraph>Hace una semana apenas estabas abriendo el primer regalito y hoy ya vas mas de la mitad</DayParagraph>
      
      <DayParagraph>Y hay algo que hace que este día sea un poquito más especial:</DayParagraph>
      
      <DayStrong>Hoy falta una semana para tu cumpleaños</DayStrong>
      
      <DayParagraph>Y cada día que pasa es porque pasó un día más, entonces falta un día menos</DayParagraph>
      
      <DayParagraph>Y espero que cuando llegues a la última puedas mirar todo lo que pasó estos días y entender un poquito más por qué quise hacer todo esto para ti</DayParagraph>
      
      <Eyebrow text = "YA CASI ES TU DÍA" accent></Eyebrow>
      
    </DaySection>
  );
};