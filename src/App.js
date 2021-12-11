import "./App.css";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect, useState } from "react";
import Categories from "./Components/Categories/Categories";
import CtaIntro from "./Components/CtaIntro/CtaIntro";
import GetInTouch from "./Components/GetInTouch/GetInTouch";
import Hero from "./Components/Hero/Hero";
import Posts from "./Components/Posts/Posts";
import Productive from "./Components/Productive/Productive";
import { HashLoader } from "react-spinners";

function App() {
  /* ------------------------------- PRE LOADER ------------------------------- */
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  /* ----------------- SIMPLE INITIAL SETUP FOR AOS ANIMATION ----------------- */
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
      {loading ? (
        <div className="preloader-box">
          <HashLoader loading={loading} size={60} color="#fff" />
        </div>
      ) : (
        <main data-aos="fade-in">
          <Hero></Hero>
          <CtaIntro></CtaIntro>
          <Categories></Categories>
          <Productive></Productive>
          <Posts></Posts>
          <GetInTouch></GetInTouch>
        </main>
      )}
    </div>
  );
}

export default App;
