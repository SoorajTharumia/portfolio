import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-gray w-full h-20 flex justify-center items-center">
      <div className="flex items-center">
        <span className="text-2xl font-bold mr-4">Sooraj Tharumia</span>
        <a href="https://www.linkedin.com/in/soorajtharumia/" target="_blank" rel="noopener noreferrer" className="mr-3">
          <FaLinkedin className="text-2xl hover:text-blue-500" />
        </a>
        <a href="https://github.com/soorajtharumia" target="_blank" rel="noopener noreferrer" className="mr-3">
          <FaGithub className="text-2xl hover:text-blue-500" />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="mailto:sendsooraj@gmail.com">
          <FaEnvelope className="text-2xl hover:text-blue-500" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
