import "./App.css";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import Categories from "./Components/Categories/Categories";
import CtaIntro from "./Components/CtaIntro/CtaIntro";
import GetInTouch from "./Components/GetInTouch/GetInTouch";
import Hero from "./Components/Hero/Hero";
import Posts from "./Components/Posts/Posts";
import Productive from "./Components/Productive/Productive";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      delay: 100,
      duration: 900,
      easing: "ease",
      once: true,
    });
  });

  return (
    <div className="App">
      <Hero></Hero>
      <CtaIntro></CtaIntro>
      <Categories></Categories>
      <Productive></Productive>
      <Posts></Posts>
      <GetInTouch></GetInTouch>
    </div>
  );
}

export default App;
