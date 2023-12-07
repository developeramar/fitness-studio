import React from 'react';
import TeamSection from './TeamSection';
import MissionVisionSection from './MissionVisionSection';

function AboutUs() {
  return (
    <div className="container mx-auto my-8 px-4 md:px-0 hover:cursor-pointer">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
        About WellnessWorks
      </h1>
      <p className="text-base md:text-lg lg:text-xl mb-4 md:mb-6">
        Welcome to Nirala Fitness Studio, where we believe in transforming lives through fitness.
        Our state-of-the-art facility and experienced trainers are dedicated to helping you achieve
        your fitness goals.
      </p>
      <TeamSection />
      <MissionVisionSection />
    </div>
  );
}

export default AboutUs;
