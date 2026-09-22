import { Fragment } from "react/jsx-runtime";
import { Divider } from "../../components/components.tsx";
import { Album, Counter, Footer, Gifts, Header, Hero, Playlist } from "../../layouts/layouts";
import { storage } from "../../services/storage.ts";
import { useState } from "react";
import { HomeContext } from "./HomeContext.tsx";

export const Home = () => {
  const [ cardsOpened, setCardsOpened ] = useState<number | null>(storage.cardsOpened);
  
  const setHomeOpenedCards = (cards: number | null) => {
    if (cards === null) return;
    setCardsOpened(cards);
  };
  
  return (
    <div className = "home">
      <HomeContext.Provider value = {setHomeOpenedCards}>
        <Header/>
        
        <Hero/>
        
        <Divider/>
        
        <Counter/>
        
        <Divider/>
        
        <Gifts/>
        
        {
          cardsOpened as number >= 4 &&
          <Fragment>
            
            <Divider id = "album-divider"/>
            <Album/>
            
          </Fragment>
        }
        
        {
          cardsOpened as number >= 8 &&
          <Fragment>
            
            <Divider id = "playlist-divider"/>
            <Playlist/>
            
          </Fragment>
        }
        
        {
          cardsOpened as number < 12 &&
          <Fragment>
            
            <Divider/>
            <h2 className = "home__coming-soon">Pronto...</h2>
            
          </Fragment>
        }
        
        <Divider/>
        
        <Footer/>
      </HomeContext.Provider>
    </div>
  );
};