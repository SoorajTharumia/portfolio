import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaRocket } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-gray dark:bg-dark-bg w-full h-24 flex flex-col justify-center items-center transition-all duration-500">
      <div className="flex items-center mb-2 animate-fade-in-up">
        <span className="text-2xl font-bold mr-4 text-white dark:text-dark-text transition-colors duration-300">Sooraj Tharumia</span>
        <a href="https://www.linkedin.com/in/soorajtharumia/" target="_blank" rel="noopener noreferrer" className="mr-3 hover-lift transition-all duration-300">
          <FaLinkedin className="text-2xl text-white dark:text-dark-text hover:text-blue dark:hover:text-blue transition-colors duration-300" />
        </a>
        <a href="https://github.com/soorajtharumia" target="_blank" rel="noopener noreferrer" className="mr-3 hover-lift transition-all duration-300">
          <FaGithub className="text-2xl text-white dark:text-dark-text hover:text-blue dark:hover:text-blue transition-colors duration-300" />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="mailto:sendsooraj@gmail.com" className="hover-lift transition-all duration-300">
          <FaEnvelope className="text-2xl text-white dark:text-dark-text hover:text-blue dark:hover:text-blue transition-colors duration-300" />
        </a>
      </div>
      <div className="text-lg flex items-center text-white dark:text-dark-text transition-colors duration-300 animate-fade-in-up">
        Crafted with React and Tailwind CSS <FaRocket className="text-2xl ml-2 hover:text-blue dark:hover:text-blue transition-colors duration-300" />
      </div>
    </div>
  );
}

export default Footer;
