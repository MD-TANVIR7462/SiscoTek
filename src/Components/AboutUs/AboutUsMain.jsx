import React from 'react';
import AboutUsBenner from './AboutUsBenner';
import AboutUsHero from './AboutUsHero';
import TeamMember from '../TeamSection/TeamMember';

const AboutUsMain = () => {
    return (
        <div>
            <AboutUsBenner></AboutUsBenner>
            <AboutUsHero></AboutUsHero>
            <TeamMember></TeamMember>
        </div>
    );
};

export default AboutUsMain;