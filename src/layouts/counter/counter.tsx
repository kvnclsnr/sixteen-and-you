import { Eyebrow, Time } from "../../components/components.tsx";

import { useEffect, useState } from "react";
import { padNumber } from "../../utils/time.ts";

const UNITS: string[] = ["DÍAS", "HORAS", "MINUTOS", "SEGUNDOS"];

const targetDate: Date = new Date("2026-10-02T00:00:00");

interface Countdown {
  days: number;
  hours: number;
  mins: number;
  secs: number;
}

const getCountdown = (target: Date): Countdown => {
  const diference: number = target.getTime() - Date.now();
  
  if (diference <= 0) {
    return {
      days: 0,
      hours: 0,
      mins: 0,
      secs: 0,
    };
  }
  
  return {
      days: Math.floor(diference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(diference / (1000 * 60 * 60)) % 24,
      mins: Math.floor(diference / (1000 * 60)) % 60,
      secs: Math.floor(diference / (1000)) % 60,
  };
};

export const Counter = () => {
  const [ countdown, setCountdown ] = useState(getCountdown(targetDate));
  
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout> | undefined;
    
    const update = () => {
      setCountdown(getCountdown(targetDate));
      timeout = setTimeout(update, 250);
    };
    
    update();
    
    return () => clearTimeout(timeout);
  }, []);
  
  return (
    <section className = "counter">
      <Eyebrow text = "FALTAN" accent/>
      <div className = "wrapper">
        {
          Object.keys(countdown).map((key, index) => {
            return (
              <>
              
              {
                index > 0 && <div className = "dot"></div>
              }
              <Time
                key = {key}
                number = {padNumber(countdown[key as keyof typeof countdown])}
                unit = {UNITS[index]}
              />
              
              </>
            );
          })
        }
      </div>
    </section>
  );
};