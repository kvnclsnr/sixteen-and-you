import { PHOTOS } from "../utils/constants";

interface PhotoContent {
  photo: string;
  date: string;
  title: string;
  description: string;
}

export const PHOTO_CONTENT: PhotoContent[] = [
  {
    photo: PHOTOS.FIRST_DATE,
    date: "MAY 2025",
    title: "Primera salida",
    description: "El comienzo de tantas cosas lindas que todavía nos falta por vivir"
  },
  {
    photo: PHOTOS.FILTERS,
    date: "SIEMPRE",
    title: "Filtricos",
    description: "Me encantan las fotitos con filtros raros que siempre tomas"
  },
  {
    photo: PHOTOS.HER_XV,
    date: "OCT 2025",
    title: "Tus quince",
    description: "Me hace muy feliz y es muy lindo haberlo compartido contigo"
  },
  {
    photo: PHOTOS.AFTER_SCHOOL,
    date: "NOV 2025",
    title: "Sin vernos",
    description: "Cuando salí del colegio y pasó un tiempo hasta volver a verte"
  },
  {
    photo: PHOTOS.HAPPY,
    date: "SIEMPRE",
    title: "Felices",
    description: "No hace falta mucho para ser felices si estamos juntitos"
  },
  {
    photo: PHOTOS.US,
    date: "SIEMPRE",
    title: "Besitos",
    description: "Me encantan mucho todos los besitos que me das"
  },
  {
    photo: PHOTOS.HER,
    date: "SIEMPRE",
    title: "Mi amorcito",
    description: "Una fotito tuya que, como todas, podría mirar más de un millón de veces"
  },
  {
    photo: PHOTOS.HUGS,
    date: "SIEMPRE",
    title: "Abracitos",
    description: "No hay un lugar donde prefiera estar más que entre tus brazos"
  },
  {
    photo: PHOTOS.TRIP,
    date: "MAY 2026",
    title: "Viajecito",
    description: "Un pequeño viaje que me encantó y ahora es un recuerdo muy lindo"
  },
  {
    photo: PHOTOS.NEW_YEAR,
    date: "ENE 2026",
    title: "Año nuevo",
    description: "Empezamos el año juntos y esperando que vengan muchísimos más"
  },
  {
    photo: PHOTOS.CANDLES_DAY,
    date: "DIC 2025",
    title: "Velitas",
    description: "Fue una noche linda, con muchos deseos y un recuerdo más para nosotros"
  },
  {
    photo: PHOTOS.FOODS,
    date: "SIEMPRE",
    title: "Comiditas",
    description: "Me encanta compartir cualquier cosita de comer porque contigo se vuelve especial"
  },
];