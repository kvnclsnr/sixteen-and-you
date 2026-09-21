import { DayHeading, DayParagraph, DaySection, DayStrong, Eyebrow } from "../../components/components";

export const Day1 = () => {
  return (
    <DaySection day = {1}>
      
      <DayHeading title = "Todo empieza aquí"></DayHeading>
      
      <DayParagraph>Hoy empieza algo que preparé especialmente para ti</DayParagraph>
      
      <DayParagraph>Durante los próximos 16 días vas a recibir una pequeña sorpresa cada día hasta llegar a tu cumpleaños. Algunas tendrán palabras, otras recuerdos, canciones, fotos, etc</DayParagraph>
      
      <DayParagraph>No quise decirte todo de una vez. Quise guardar un pedacito de todo lo que siento por ti para cada día</DayParagraph>
      
      <DayParagraph>Y saqué el tiempo para crearte una pagina con todo reunido en un solo lugar</DayParagraph>
      
      <DayParagraph>Así que este es el primer día</DayParagraph>
      
      <DayStrong>Bienvenida a tus 16 sorpresas</DayStrong>
      
      <Eyebrow text = "TE AMOOOOO" accent/>
      
    </DaySection>
  );
};