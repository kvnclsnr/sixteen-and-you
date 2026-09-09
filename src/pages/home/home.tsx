import { Divider } from "../../components/components";
import { Counter, Gifts, Header, Hero } from "../../layouts/layouts";

export const Home = () => {
  return (
    <div className = "home">
      <Header/>
      
      <Hero/>
      
      <Divider/>
      
      <Counter/>
      
      <Divider/>
      
      <Gifts/>
    </div>
  );
};