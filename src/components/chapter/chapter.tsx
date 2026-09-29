import { useCallback, useContext, useEffect, useLayoutEffect, useRef } from "react";
import { animationScaleFadeIn, animationSlideInFromLeft, animationSlideInFromRight, animationSlideOutToLeft, animationSlideOutToRight } from "../../core/animations";
import { OverlayContext } from "../overlay/overlayContext";
import { MESSAGE_CHAPTERS } from "../../contents/chapterContent";
import { Eyebrow, Icon } from "../components";
import { ICONS } from "../../utils/constants";

interface ChapterReaderProps {
  chapter: {
    title: string;
    image: string;
    imagePosition: string;
    summary: string;
    paragraphs: string[];
    closing: string;
  }
  index: number;
  entryDirection: "left" | "right" | null;
  onClose: () => void;
  onNavigate: (nextIndex: number, entryDirection: "left" | "right") => void;
}

export const Chapter = ({chapter, index, entryDirection, onClose, onNavigate}: ChapterReaderProps) => {
  const closeOverlay = useContext(OverlayContext);
  const readerRef = useRef<HTMLElement | null>(null);
  const isTransitioningRef = useRef<boolean>(false);
  const chapterNumber = String(index + 1).padStart(2, "0");
  
  useLayoutEffect(() => {
    if (!readerRef.current) return;
    
    let entryAnimation: Animation;
    
    if (entryDirection === "left") {
      entryAnimation = animationSlideInFromLeft(readerRef.current);
    }
    else if (entryDirection === "right") {
      entryAnimation = animationSlideInFromRight(readerRef.current);
    }
    else {
      entryAnimation = animationScaleFadeIn(readerRef.current);
    }
    
    return () => entryAnimation.cancel();
    
  }, [entryDirection]);
  
  const handleNavigate = useCallback(async (nextIndex: number) => {
    if (isTransitioningRef.current || nextIndex < 0 || nextIndex >= MESSAGE_CHAPTERS.length) return;
    if (!readerRef.current) return;
    
    isTransitioningRef.current = true;
    const movingLeft = nextIndex > index;
    const exitAnimation = movingLeft
      ? animationSlideOutToLeft(readerRef.current)
      : animationSlideOutToRight(readerRef.current);
    
    await exitAnimation.finished;
    onNavigate(nextIndex, movingLeft ? "right" : "left");
  }, [index, onNavigate]);
  
  useEffect(() => {
    const handleKeyDown = async (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        
        if (!closeOverlay) return;
        await closeOverlay();
        
        onClose();
      }
      
      if (event.key === "ArrowLeft") await handleNavigate(index - 1);
      if (event.key === "ArrowRight") await handleNavigate(index + 1);
    };
    
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [closeOverlay, handleNavigate, index, onClose]);
  
  const handleClose = async () => {
    if (!closeOverlay) return;
    await closeOverlay();
    
    onClose();
  };
  
  return (
    <article
      ref = {readerRef}
      className = "message-reader"
      onClick = {(e) => e.stopPropagation()}
    >
      <header className = "message-reader__cover">
        
        <img
          className = "message-reader__image"
          src = {`./photos/${chapter.image}.webp`}
          alt = ""
          style = {{ objectPosition: chapter.imagePosition }}
        />
        
        <div className = "message-reader__cover-heading">
          
          <Eyebrow text = {`CAPÍTULO #${chapterNumber}`} accent/>
          <h2 id = "message-reader-title">{chapter.title}</h2>
          
        </div>
        
        <button className = "message-reader__close" onClick = {handleClose}>
          <Icon iconName = {ICONS.EXIT} />
        </button>
        
      </header>
      
      <div className = "message-reader__progress">
        {
          MESSAGE_CHAPTERS.map((item, itemIndex) => (
            <span key = {item.title} className = {itemIndex <= index ? "is-read" : ""} />
          ))
        }
      </div>
      
      <div className = "message-reader__body" key = {chapter.title}>
        
        <p className = "message-reader__summary">{chapter.summary}</p>
        
        {
          chapter.paragraphs.map((paragraph, paragraphIndex) => (
            <p key = {`${chapter.title}-${paragraphIndex}`}>{paragraph}</p>
          ))
        }
        
        <p className = "message-reader__closing">{chapter.closing}</p>
        
      </div>
      
      <footer className = "message-reader__footer">
        
        <button onClick = {() => handleNavigate(index - 1)} disabled = {index === 0}>
          <Icon iconName = {ICONS.TAILNESS_LEFT} />
          <span>Anterior</span>
        </button>
        
        <span className = "message-reader__count">{chapterNumber} / {String(MESSAGE_CHAPTERS.length).padStart(2, "0")}</span>
        
        <button onClick = {() => handleNavigate(index + 1)} disabled = {index === MESSAGE_CHAPTERS.length - 1}>
          <span>Siguiente</span>
          <Icon iconName = {ICONS.TAILNESS_RIGHT} />
        </button>
        
      </footer>
      
    </article>
  );
};