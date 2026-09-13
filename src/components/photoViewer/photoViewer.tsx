import { Fragment } from "react/jsx-runtime";
import { Eyebrow, Icon } from "../components";
import { ICONS } from "../../utils/constants";

interface PhotoViewerProps {
  photo: string;
  date: string;
  title: string;
  description: string;
  onClose: () => void;
}

export const PhotoViewer = ({photo, date, title, description, onClose}: PhotoViewerProps) => {
  return (
    <Fragment>
      
      <button
        className = "outer-viewer-button"
        onClick = {(e) => {
          e.stopPropagation();
          onClose();
        }}
      >
        <Icon iconName = {ICONS.EXIT}/>
      </button>
      
      <section className = "photo-viewer" onClick = {(e) => e.stopPropagation()}>
        
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