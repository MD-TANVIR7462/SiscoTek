'use client';

import BENNERMAIN from "./Components/BENNER/BENNERMAIN";
import CategoryMain from "./Components/Cetegory section/CategoryMain";
import Footer from "./Components/Footer/Footer";
import Footer2 from "./Components/Footer/Footer2";
import HeroSection from "./Components/HeroSEction/HeroSection";
import NavBar from "./Components/Navbar/Navbar";
import Perallax from "./Components/Perallax/Perallax";
import TeamMember from "./Components/TeamSection/TeamMember";

const App = () => {
  return (
    <div>
      <NavBar></NavBar>
      <BENNERMAIN></BENNERMAIN>
      <CategoryMain></CategoryMain>
      <HeroSection></HeroSection>
      <Perallax></Perallax>
      <TeamMember></TeamMember>
      <Footer></Footer>
      <Footer2></Footer2>
    </div>
  );
};

export default App;
