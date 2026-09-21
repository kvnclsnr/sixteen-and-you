import { DayHeading, DayParagraph, DaySection, DayStrong, Eyebrow } from "../../components/components.tsx";

export const Day3 = () => {
  return (
    <DaySection day = {3}>
      
      <DayHeading
        title = "¿Te acuerdas?"
        description = "Hay momentos muy lindos que se me quedaron guardados. Este es uno de ellos"
      />
      
      <div className = "image-carousel">
        <img src = "./photos/after-school.webp" alt = "Foto Juntos" />
        <img src = "./photos/day3-1.webp" alt = "Foto Juntos" />
        <img src = "./photos/day3-2.webp" alt = "Foto Juntos" />
        <img src = "./photos/day3-3.webp" alt = "Foto Juntos" />
      </div>
      
      <DayStrong>¿Por qué?</DayStrong>
      
      <DayParagraph>Porque fue la primera vez que nos vimos después de salir del colegio</DayParagraph>
      
      <DayParagraph>Ese día fue bonito, porque volví a verte, pero también tuvo algo difícil detrás. Me estaba acostumbrando a que ya no iba a poder verte todos los días como antes. Ya no iba a verte en los recreos, hablar contigo a la salida o simplemente saber que estabas ahí en el colegio</DayParagraph>
      
      <DayParagraph>Tenía muchas dudas y miedos. No sabía cómo iban a cambiar las cosas ahora que ya no teníamos el colegio como ese lugar en el que siempre nos veíamos</DayParagraph>
      
      <DayParagraph>No son solo fotos de nosotros después de salir del colegio. Para mí es como uno de esos primeros momentos en los que supe que las cosas estaban cambiando, y que ahora tocaba encontrar nuevas formas de seguir estando en la vida del otro</DayParagraph>
      
      <DayStrong>Y míranos ahora</DayStrong>
      
      <Eyebrow text = "OJITO MAÑANA =)" accent></Eyebrow>
      
    </DaySection>
  );
};