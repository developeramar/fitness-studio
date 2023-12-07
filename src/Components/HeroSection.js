import React from 'react';
import { Link } from 'react-router-dom';
import Video from '../Video/BackgroundVd.mp4'; // Adjust the path accordingly

const HeroSection = () => {
  return (
    <section className="relative h-screen">
      <video
        className="absolute inset-0 object-cover w-full h-full opacity-3"
        autoPlay
        loop
        muted
      >
        <source src={Video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="container mx-auto flex items-center justify-center h-full relative z-10 text-center text-white">
        <div className="md:w-3/4 lg:w-1/2">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
            Discover a New You at Wellness Haven
          </h1>
          <p className="text-base md:text-lg lg:text-xl mb-8">
            Elevate your well-being and redefine your lifestyle.
          </p>
          <Link to="/Services">
  <button className="border border-blue-500 text-blue-500 px-6 py-3 rounded-full hover:bg-blue-500 hover:text-white focus:outline-none focus:ring focus:border-blue-300">
    Explore Services
  </button>
</Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
