import { DayHeading, DayParagraph, DaySection, DayStrong, Eyebrow } from "../../components/components";

export const Day11 = () => {
  return (
    <DaySection day = {11}>
      
      <DayHeading
        title = "Pensando en ti"
      />
      
      <DayParagraph>Estaba pensando en una cosa sobre ti</DayParagraph>
      
      <DayParagraph>Después me acordé de otra. Y esa me hizo pensar en otra más</DayParagraph>
      
      <DayParagraph>Y cuando me di cuenta, ya tenía un montón de cosas en la cabeza</DayParagraph>
      
      <DayStrong>A ver hasta dónde llegamos</DayStrong>
      
      <div className = "day-11__carousel">
        
        <Eyebrow text = "¿Por dónde empiezo?"/>
        
        <Eyebrow text = "Tú"/>
        
        <Eyebrow text = "Tu sonrisa"/>
        
        <Eyebrow text = "Tus ojitos"/>
        
        <Eyebrow text = "Como me haces reir"/>
        
        <Eyebrow text = "Todo lo que hemos vivido"/>
        
        <Eyebrow text = "Como me haces sentir amado"/>
        
        <Eyebrow text = "Mmm..."/>
        
        <Eyebrow text = "Necesito mas de un día"/>
        
        <Eyebrow text = "Ojito mañana =)" accent/>
        
      </div>
      
      <DayParagraph>Desliza para ver</DayParagraph>
      
    </DaySection>
  );
};