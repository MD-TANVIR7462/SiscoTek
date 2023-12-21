import BENNERMAIN from "../BENNER/BENNERMAIN";
import CategoryMain from "../Cetegory section/CategoryMain";
import HeroSection from "../HeroSEction/HeroSection";
import Perallax from "../Perallax/Perallax";

import TeamMember from "../TeamSection/TeamMember";
import TabsKeep from "../ProjectsPage/ProjectPageComponents/Tabs";

const HOME = () => {
  return (
    <div>
      <BENNERMAIN></BENNERMAIN>
      <CategoryMain></CategoryMain>
      <HeroSection></HeroSection>
      <Perallax></Perallax>
      <div className="w-[98%]  sm:w-[95%] md:w-[90%] lg:w-[80%] mx-auto my-20">
        <p className="text-2xl sm:text-3xl mb-4 text-center md:text-4xl lg:text-6xl font-bold  ">
          Our Projects
        </p>
        <TabsKeep></TabsKeep>
      </div>
      <TeamMember></TeamMember>
    </div>
  );
};

export default HOME;
