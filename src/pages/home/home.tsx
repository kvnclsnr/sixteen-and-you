import { Divider } from "../../components/components";
import { Album, Counter, Footer, Gifts, Header, Hero, Playlist } from "../../layouts/layouts";

export const Home = () => {
  return (
    <div className = "home">
      <Header/>
      
      <Hero/>
      
      <Divider/>
      
      <Counter/>
      
      <Divider/>
      
      <Gifts/>
      
      <Divider/>
      
      <Album/>
      
      <Divider/>
      
      <Playlist/>
      
      <Divider/>
      
      <Footer/>
    </div>
  );
};