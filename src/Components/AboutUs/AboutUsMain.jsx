import React from 'react';
import AboutUsBenner from './AboutUsBenner';
import AboutUsHero from './AboutUsHero';
import TeamMember from '../TeamSection/TeamMember';
import OurMIssion from './OurMIssion';



const AboutUsMain = () => {
    return (
        <div>
            <AboutUsBenner></AboutUsBenner>
            <AboutUsHero></AboutUsHero>
            <TeamMember></TeamMember>
            <OurMIssion></OurMIssion>
        
            
        </div>
    );
};

export default AboutUsMain;