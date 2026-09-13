import { useState } from "react";
import { Heading, Overlay, Photo, PhotoViewer } from "../../components/components.tsx";
import { PHOTO_CONTENT } from "../../contents/photoContent.tsx";

export const Album = () => {
  const [ isOverlayActive, setIsOverlayActive ] = useState<boolean>(false);
  
  const [ imageActive, setImageActive ] = useState<number | null>(null);
  
  const handleOverlayClose = () => {
    setImageActive(null);
    setIsOverlayActive(false);
  };
  
  const handleViewerOpen = (index: number) => {
    setImageActive(index);
    setIsOverlayActive(true);
  };
  
  return (
    <section className = "album">
      
      <Heading
        eyebrow = "ALBUM"
        title = "Recuerditos"
        description = "Algunas fotos bonitas que no quería dejar solo en mi galería"
      />
      
      <div className = "album-grid">
        {
          PHOTO_CONTENT.map(({photo, date, title}, index) => {
            return (
              <Photo
                key = {`Photo-${index + 1}`}
                imageName = {photo}
                date = {date}
                title = {title}
                index = {index}
                onClick = {() => handleViewerOpen(index)}
              />
            );
          })
        }
      </div>
      
      <Overlay isActive = {isOverlayActive} onClose = {handleOverlayClose}>
        {
          imageActive !== null &&
          <PhotoViewer
            photo = {PHOTO_CONTENT[imageActive].photo}
            date = {PHOTO_CONTENT[imageActive].date}
            title = {PHOTO_CONTENT[imageActive].title}
            description = {PHOTO_CONTENT[imageActive].description}
            onClose = {handleOverlayClose}
          />
        }
      </Overlay>
      
    </section>
  );
};