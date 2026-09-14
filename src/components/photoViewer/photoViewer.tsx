import { Fragment } from "react/jsx-runtime";
import { Eyebrow, Icon } from "../components.tsx";
import { ICONS } from "../../utils/constants.ts";
import { OverlayContext } from "../overlay/overlayContext.tsx";
import { useContext, useEffect, useRef } from "react";
import { animationScaleFadeIn } from "../../core/animations.ts";

interface PhotoViewerProps {
  photo: string;
  date: string;
  title: string;
  description: string;
  onClose: () => void;
}

export const PhotoViewer = ({photo, date, title, description, onClose}: PhotoViewerProps) => {
  
  const handleCloseOverlay = useContext<(() => void) | null>(OverlayContext);
  
  const photoRef = useRef<HTMLImageElement | null>(null);
  
  useEffect(() => {
    if (!photoRef.current) return;
    
    animationScaleFadeIn(photoRef.current);
  }, []);
  
  const handleCloseViewer = async () => {
    if (!handleCloseOverlay) return;
    await handleCloseOverlay();
    
    onClose();
  };
  
  return (
    <Fragment>
      
      <button
        className = "outer-viewer-button"
        onClick = {(e) => {
          e.stopPropagation();
          handleCloseViewer();
        }}
      >
        <Icon iconName = {ICONS.EXIT}/>
      </button>
      
      <section ref = {photoRef} className = "photo-viewer" onClick = {(e) => e.stopPropagation()}>
        
        <img className = "photo-viewer__photo" src = {`./photos/${photo}.webp`} alt = "" />
        
        <div className = "photo-viewer__heading">
          <Eyebrow text = {date} accent/>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        
      </section>
      
    </Fragment>
  );
};