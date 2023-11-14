import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url("https://www.uaepersonaltrainers.com/wp-content/uploads/2020/02/personal-traines-in-dubai-and-abu-dhabi-hp-hero.jpg")' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto flex items-center justify-center h-full relative z-10 text-center text-white">
        <div className="md:w-3/4 lg:w-1/2">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
            Welcome to Nirala Fitness Center
          </h1>
          <p className="text-base md:text-lg lg:text-xl mb-8">
            Transform your body, transform your life.
          </p>
          <Link to="/Services">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
              Explore Services
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
