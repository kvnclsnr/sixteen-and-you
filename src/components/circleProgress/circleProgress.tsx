import { useEffect, useState } from 'react';

interface QuizProgressProps {
  correct: number;
  total: number;
  size?: number;
  strokeWidth?: number;
}

export const CircleProgress = ({correct, total, size = 120, strokeWidth = 10}: QuizProgressProps) => {
  const percentage = correct / total * 100;
  const center = size / 2;
  const radius = center - strokeWidth;
  const circumference = 2 * Math.PI * radius;
  
  const [offset, setOffset] = useState(circumference);
  
  useEffect(() => {
    const progressOffset = circumference - (percentage / 100) * circumference;
    
    const timeout = setTimeout(() => setOffset(progressOffset), 100);
    
    return () => clearTimeout(timeout);
  }, [percentage, circumference]);
  
  return (
    <div
      className="circle-progress"
      style={{
        width: size,
        height: size,
      }}
    >
      <svg
        className="circle-progress__svg"
        width={size}
        height={size}
      >
        <circle
          className="circle-progress__circle circle-progress__circle--background"
          cx={center}
          cy={center}
          r={radius}
          fill="transparent"
          strokeWidth={strokeWidth}
        />
        
        <circle
          className="circle-progress__circle circle-progress__circle--progress"
          cx={center}
          cy={center}
          r={radius}
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      
      <div className="circle-progress__content">
        <span className="circle-progress__percentage">
          {percentage}%
        </span>
        
        <span className="circle-progress__count">
          {correct}/{total}
        </span>
      </div>
    </div>
  );
};