'use client';

import BENNERMAIN from "./Components/BENNER/BENNERMAIN";
import CategoryMain from "./Components/Cetegory section/CategoryMain";
import HeroSection from "./Components/HeroSEction/HeroSection";
import NavBar from "./Components/Navbar/Navbar";
import Perallax from "./Components/Perallax/Perallax";

const App = () => {
  return (
    <div>
      <NavBar></NavBar>
      <BENNERMAIN></BENNERMAIN>
      <CategoryMain></CategoryMain>
      <HeroSection></HeroSection>
      <Perallax></Perallax>
      <CategoryMain></CategoryMain>
      <HeroSection></HeroSection>
    </div>
  );
};

export default App;
