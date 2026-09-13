import { Heading, Photo } from "../../components/components.tsx";
import { PHOTOS } from "../../utils/constants.ts";

export const Album = () => {
  return (
    <section className = "album">
      
      <Heading
        eyebrow = "ALBUM"
        title = "Recuerditos"
        description = "Algunas fotos bonitas que no quería dejar solo en mi galería"
      />
      
      <div className = "album-grid">
        <Photo
          imageName = {PHOTOS.FIRST_DATE}
          eyebrow = "MAY 2025"
          description = "Texto de ejemplo"
          index = {0}
        />
        
        <Photo
          imageName = {PHOTOS.FILTERS}
          eyebrow = "MAY 2025"
          description = "Texto de ejemplo"
          index = {1}
        />
        
        <Photo
          imageName = {PHOTOS.HER_XV}
          eyebrow = "MAY 2025"
          description = "Texto de ejemplo"
          index = {2}
        />
        
        <Photo
          imageName = {PHOTOS.AFTER_SCHOOL}
          eyebrow = "MAY 2025"
          description = "Texto de ejemplo"
          index = {3}
        />
        
        <Photo
          imageName = {PHOTOS.HAPPY}
          eyebrow = "MAY 2025"
          description = "Texto de ejemplo"
          index = {4}
        />
        
        <Photo
          imageName = {PHOTOS.US}
          eyebrow = "MAY 2025"
          description = "Texto de ejemplo"
          index = {5}
        />
        
        <Photo
          imageName = {PHOTOS.HER}
          eyebrow = "MAY 2025"
          description = "Texto de ejemplo"
          index = {6}
        />
        
        <Photo
          imageName = {PHOTOS.HUGS}
          eyebrow = "MAY 2025"
          description = "Texto de ejemplo"
          index = {7}
        />
        
        <Photo
          imageName = {PHOTOS.TRIP}
          eyebrow = "MAY 2025"
          description = "Texto de ejemplo"
          index = {8}
        />
        
        <Photo
          imageName = {PHOTOS.NEW_YEAR}
          eyebrow = "MAY 2025"
          description = "Texto de ejemplo"
          index = {9}
        />
        
        <Photo
          imageName = {PHOTOS.FOODS}
          eyebrow = "MAY 2025"
          description = "Texto de ejemplo"
          index = {10}
        />
        
        <Photo
          imageName = {PHOTOS.CANDLES_DAY}
          eyebrow = "MAY 2025"
          description = "Texto de ejemplo"
          index = {11}
        />
        
      </div>
      
    </section>
  );
};