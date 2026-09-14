import type React from "react";
import { useEffect, useRef } from "react";
import { animationBlurFadeIn, animationBlurFadeOut } from "../../core/animations";
import { OverlayContext } from "./overlayContext";

interface OverlayProps {
  children: React.ReactNode;
  isActive: boolean;
  onClose: () => void;
}

export const Overlay = ({children, isActive, onClose}: OverlayProps) => {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  
  // LOCK SCROLL
  
  useEffect(() => {
    document.body.style.overflow = isActive ? "hidden" : "";
    
    return () => {
      document.body.style.overflow = "";
    };
  }, [isActive]);
  
  // ANIMATION
  
  const handleOpenOverlay = () => {
    if (overlayRef.current === null) return;
    animationBlurFadeIn(overlayRef.current);
  };
  
  const handleCloseOverlay = async () => {
    if (overlayRef.current === null) return;
    await animationBlurFadeOut(overlayRef.current).finished;
    
    onClose();
  };
  
  useEffect(() => {
    handleOpenOverlay();
  }, [isActive]);
  
  if (!isActive) return null;
  
  return (
    <div
      ref = {overlayRef}
      className = "overlay"
      onClick = {() => handleCloseOverlay()}
    >
      <OverlayContext.Provider value = {handleCloseOverlay as () => void}>
        {children}
      </OverlayContext.Provider>
    </div>
  );
};