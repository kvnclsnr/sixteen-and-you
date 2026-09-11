import { Eyebrow, Time } from "../../components/components.tsx";

import { Fragment, useEffect, useState } from "react";
import { padNumber } from "../../utils/helpers.ts";

interface Countdown {
  days: number;
  hours: number;
  mins: number;
  secs: number;
}

const TIME_UNITS: {key: keyof Countdown, value: string}[] = [
  {key: "days", value: "DÍAS"},
  {key: "hours", value: "HORAS"},
  {key: "mins", value: "MINUTOS"},
  {key: "secs", value: "SEGUNDOS"},
];

const targetDate: Date = new Date("2026-10-02T00:00:00");

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
      
      {/* EYEBROW */}
      
      <Eyebrow text = "FALTAN" accent/>
      
      {/* TIME WRAPPER */}
      
      <div className = "wrapper">
        {
          TIME_UNITS.map(({key, value}, index) => {
            return (
              <Fragment key = {`${key}-fragment`}>
                
                {index > 0 ? <div className = "dot"></div> : null}
                
                <Time
                  number = {padNumber(countdown[key])}
                  unit = {value}
                />
                
              </Fragment>
            );
          })
        }
      </div>
    </section>
  );
};