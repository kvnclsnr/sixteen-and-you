import { DayHeading, DayParagraph, DaySection, DayStrong, Timeline } from "../../components/components";

type timeContent = {
  eyebrow: string
  text: string
}

const CONTENT: timeContent[] = [
  {
    eyebrow: "2022",
    text: "Año en que nos conocimos sin saber nada de todo lo que venía",
  },
  {
    eyebrow: "2023",
    text: "Nos conocimos un poquito más, y empezamos a estar juntos",
  },
  {
    eyebrow: "2024",
    text: "Nos alejamos un poco, sin saber que volveríamos a encontrarnos",
  },
  {
    eyebrow: "2025",
    text: "Volvimos a juntarnos. Y esta vez todo se sintió muy diferente",
  },
  {
    eyebrow: "2026",
    text: "Cuatro años después, y todavía nos queda muchísimo por vivir",
  },
  {
    eyebrow: "2027...",
    text: "Y lo que venga después todavía está por descubrirse juntos",
  },
];

export const Day14 = () => {
  
  return (
    <DaySection day = {14}>
      
      <DayHeading
        title = "Hace 4 años..."
      />
      
      <DayParagraph>Hoy hace exactamente 4 años nos conocimos</DayParagraph>
      
      <DayStrong>Aquí una pequeña linea de tiempo:</DayStrong>
      
      <Timeline content = {CONTENT} lines = {6}/>
      
      <DayParagraph>No sé qué vamos a vivir después de hoy, y creo que prefiero que sea así</DayParagraph>
      
      <DayParagraph>Porque hay cosas que no quiero adelantar</DayParagraph>
      
      <DayStrong>Quiero descubrirlas contigo</DayStrong>
      
    </DaySection>
  );
};