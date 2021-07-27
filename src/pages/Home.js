import "../App.css";
import HeroSection from "../components/HeroSection";

import React, { useEffect } from "react";
import Cards from "../components/Cards";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <HeroSection />
      <Cards />
    </div>
  );
}

export default Home;
