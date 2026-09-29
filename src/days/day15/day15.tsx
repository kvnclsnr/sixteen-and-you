import { DayHeading, DayParagraph, DaySection, DayStrong, Eyebrow } from "../../components/components";

export const Day15 = () => {
  return (
    <DaySection day = {15}>
      
      <DayHeading
        title = "¡Mañana cumples 16!"
        description = "Siento como si hubiera sido ayer cuando estaba contigo celebrando tus XV"
      />
      
      <div className = "carousel">
        <video src = "./videos/vals.mp4" autoPlay loop playsInline/>
        <img src = "./photos/xv-1.webp" alt = "Foto Juntos" />
        <img src = "./photos/her-xv.webp" alt = "Foto Juntos" />
      </div>
      
      <DayStrong>
        Y miranos ahora
      </DayStrong>
      
      <DayParagraph>
        Siento que este año pasó volando. Hace nada estabamos celebrando tus xv, tomándome fotos contigo y disfrutando esa noche a tu lado, y ahora estoy aquí, contando las horas para este cumpleaños
      </DayParagraph>
      
      <DayStrong>
        Que lindo que pude estar contigo en tus xv y que ahora también pueda acompañarte en tus 16 años
      </DayStrong>
      
      <DayParagraph>
        Un año más, un cumpleaños más
      </DayParagraph>
      
      <DayParagraph>
        Y una nueva versión de ti que estoy a punto de conocer
      </DayParagraph>
      
      <DayParagraph>
        Y aunque no sé qué traerá este nuevo año para ti, sí espero poder seguir estando ahí para verlo contigo
      </DayParagraph>
      
      <DayStrong>
        Espero que vengan muchos más cumpleaños y muchos más momentos juntitos
      </DayStrong>
      
      <Eyebrow text = "PERO ESO SERÁ MAÑANA" accent/>
      
    </DaySection>
  );
};
