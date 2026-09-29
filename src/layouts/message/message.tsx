import { useState } from "react";
import { Chapter, Eyebrow, Heading, Icon, Overlay } from "../../components/components.tsx";
import { ICONS } from "../../utils/constants.ts";
import { MESSAGE_CHAPTERS } from "../../contents/chapterContent.tsx";

export const Message = () => {
  const [activeChapterIndex, setActiveChapterIndex] = useState<number | null>(null);
  const [entryDirection, setEntryDirection] = useState<"left" | "right" | null>(null);

  const handleClose = () => {
    setActiveChapterIndex(null);
    setEntryDirection(null);
  };

  const handleOpen = (index: number) => {
    setEntryDirection(null);
    setActiveChapterIndex(index);
  };

  const handleNavigate = (index: number, direction: "left" | "right") => {
    setEntryDirection(direction);
    setActiveChapterIndex(index);
  };
  
  return (
    <section className = "message">
      
      <Heading
        eyebrow = "TU DÍA"
        title = "¡Feliz cumpleaños!"
        description = "Después de todos estos días, por fin llegó el momento de decirte todo esto"
      />
      
      <div className = "message__content">
        {
          MESSAGE_CHAPTERS.map((chapter, index) => (
            <button
              key = {chapter.title}
              className = "message-chapter"
              onClick = {() => handleOpen(index)}
            >
              
              <span className = "message-chapter__image-wrap">
                
                <img
                  src = {`./photos/${chapter.image}.webp`}
                  alt = ""
                  style = {{ objectPosition: chapter.imagePosition }}
                  loading = "lazy"
                />
                
                <span className = "message-chapter__cover-heading">
                  <Eyebrow text = {`CAPÍTULO #${String(index + 1).padStart(2, "0")}`} accent/>
                  <span className = "message-chapter__title">{chapter.title}</span>
                </span>
                
                <span className = "message-chapter__open" aria-hidden = "true">
                  <Icon iconName = {ICONS.RIGHT} />
                </span>
                
              </span>
              
              <span className = "message-chapter__summary">{chapter.summary}</span>
              
              <span className = "message-chapter__read">Leer capítulo</span>
              
            </button>
          ))
        }
      </div>
      
      <Overlay isActive = {activeChapterIndex !== null} onClose = {handleClose}>
        {
          activeChapterIndex !== null && (
            <Chapter
              key = {activeChapterIndex}
              chapter = {MESSAGE_CHAPTERS[activeChapterIndex]}
              index = {activeChapterIndex}
              entryDirection = {entryDirection}
              onClose = {handleClose}
              onNavigate = {handleNavigate}
            />
          )
        }
      </Overlay>
      
    </section>
  );
};