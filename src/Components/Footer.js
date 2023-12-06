import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex mb-4">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="mr-4">
            <FaFacebook className="text-2xl" />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="mr-4">
            <FaTwitter className="text-2xl" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="mr-4">
            <FaInstagram className="text-2xl" />
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="text-2xl" />
          </a>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Nirala Fitness Center. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
