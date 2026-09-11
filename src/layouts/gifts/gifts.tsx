import { useState } from "react";
import { Card, Eyebrow } from "../../components/components.tsx";
import { CARD_STATES, ICONS } from "../../utils/constants.ts";

export const Gifts = () => {
  const completed: number = 7;
  
  const [active, setActive] = useState<number | null>(null);
  
  return (
    <section className = "gifts">
      
      <div className = "gifts-header">
        <div className = "heading">
          <Eyebrow text = "17 SEP - 2 OCT" accent/>
          <h2>Dieciséis sobres</h2>
        </div>
        
        <div className = "stats">
          
          <div className = "dots">
            {
              [...Array(16)].map((_, index) => (
                <div key = {index} className = {`dot ${index < completed ? "accent" : null}`}></div>
              ))
            }
          </div>
          
          <div className = "count">
            <div className = "num">
              <strong className = "opened">{completed}</strong>
              <span className = "slash">/</span>
              <strong className = "total">16</strong>
            </div>
            <span className = "tag">DESCUBIERTAS</span>
          </div>
          
        </div>
      </div>
      
      <div className = "gifts-grid">
        <Card state = {CARD_STATES.OPENED} iconName = {ICONS.DARK} title = "Una canción" index = {0} isActive = {active === 0} onClick = {() => setActive(0)}/>
        <Card state = {CARD_STATES.OPENED} iconName = {ICONS.DARK} title = "Una canción" index = {1} isActive = {active === 1} onClick = {() => setActive(1)}/>
        <Card state = {CARD_STATES.OPENED} iconName = {ICONS.DARK} title = "Una canción" index = {2} isActive = {active === 2} onClick = {() => setActive(2)}/>
        <Card state = {CARD_STATES.UNLOCKED} iconName = {ICONS.DARK} title = "Una canción" index = {3} isActive = {active === 3} onClick = {() => setActive(3)}/>
        <Card state = {CARD_STATES.UNLOCKED} iconName = {ICONS.DARK} title = "Una canción" index = {4} isActive = {active === 4} onClick = {() => setActive(4)}/>
        <Card state = {CARD_STATES.TODAY} iconName = {ICONS.DARK} title = "Una canción" index = {5} isActive = {active === 5} onClick = {() => setActive(5)}/>
        <Card state = {CARD_STATES.LOCKED} iconName = {ICONS.DARK} title = "Una canción" index = {6} isActive = {active === 6} onClick = {() => setActive(6)}/>
        <Card state = {CARD_STATES.LOCKED} iconName = {ICONS.DARK} title = "Una canción" index = {7} isActive = {active === 7} onClick = {() => setActive(7)}/>
        <Card state = {CARD_STATES.LOCKED} iconName = {ICONS.DARK} title = "Una canción" index = {8} isActive = {active === 8} onClick = {() => setActive(8)}/>
        <Card state = {CARD_STATES.LOCKED} iconName = {ICONS.DARK} title = "Una canción" index = {9} isActive = {active === 9} onClick = {() => setActive(9)}/>
        <Card state = {CARD_STATES.LOCKED} iconName = {ICONS.DARK} title = "Una canción" index = {10} isActive = {active === 10} onClick = {() => setActive(10)}/>
        <Card state = {CARD_STATES.LOCKED} iconName = {ICONS.DARK} title = "Una canción" index = {11} isActive = {active === 11} onClick = {() => setActive(11)}/>
        <Card state = {CARD_STATES.LOCKED} iconName = {ICONS.DARK} title = "Una canción" index = {12} isActive = {active === 12} onClick = {() => setActive(12)}/>
        <Card state = {CARD_STATES.LOCKED} iconName = {ICONS.DARK} title = "Una canción" index = {13} isActive = {active === 13} onClick = {() => setActive(13)}/>
        <Card state = {CARD_STATES.LOCKED} iconName = {ICONS.DARK} title = "Una canción" index = {14} isActive = {active === 14} onClick = {() => setActive(14)}/>
        <Card state = {CARD_STATES.LOCKED} iconName = {ICONS.DARK} title = "Una canción" index = {15} isActive = {active === 15} onClick = {() => setActive(15)}/>
      </div>
      
    </section>
  );
};