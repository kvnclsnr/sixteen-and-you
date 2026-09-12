import { padNumber } from "../../utils/helpers.ts";
import { getDateByIndex } from "../../utils/time.ts";
import { ICONS } from "../../utils/constants.ts";

import { Eyebrow, Icon } from "../components.tsx";

import type React from "react";
import { useEffect } from "react";

interface ModalProps {
  children?: React.ReactNode;
  title: string;
  iconName: string;
  index: number;
  isOpen: boolean;
  onClose: () => void;
}

export const Modal = ({children, title, iconName, index, isOpen, onClose}: ModalProps) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);
  
  if (!isOpen) return;
  
  return (
    <div className = "modal-overlay" onClick = {onClose}>
      
      <section className = "modal" onClick = {(event) => event.stopPropagation()}>
        
        <div className = "modal-heading">
          
          <div className = "tag">
            <Icon iconName = {iconName}></Icon>
            <Eyebrow text = {title} accent/>
          </div>
          
          <div className = "info">
            <span className = "day">DÍA {padNumber(index + 1)}</span>
            <div className = "line"></div>
            <span className = "date">{getDateByIndex(index)}</span>
          </div>
          
        </div>
        
        <div className = "modal-content">
          {children}
        </div>
        
        <div className = "modal-footer">
          <div className = "line"></div>
          <Icon iconName = {ICONS.HEART} fill></Icon>
          <div className = "line"></div>
        </div>
        
        <button className = "modal-exit" onClick = {onClose}>
          <Icon iconName = {ICONS.EXIT}></Icon>
        </button>
        
      </section>
      
    </div>
  );
};