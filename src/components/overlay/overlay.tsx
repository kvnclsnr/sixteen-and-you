import type React from "react";
import { useEffect } from "react";

interface OverlayProps {
  children: React.ReactNode;
  isActive: boolean;
  onClose: () => void;
}

export const Overlay = ({children, isActive, onClose}: OverlayProps) => {
  useEffect(() => {
    document.body.style.overflow = isActive ? "hidden" : "";
    
    return () => {
      document.body.style.overflow = "";
    };
  }, [isActive]);
  
  if (!isActive) return null;
  
  return (
    <div
      className = "overlay"
      onClick = {onClose}
    >
      { children }
    </div>
  );
};