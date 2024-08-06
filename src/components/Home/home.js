import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import pfp from '../../images/soorajpic1.jpg';

const Home = () => {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="container mx-auto fade-in " id="home">
      <div className="flex flex-col justify-center items-center min-h-screen space-y-10">
        <div className="w-full text-center">
          <div className="text-gray text-3xl md:text-6xl font-bold leading-snug md:leading-relaxed">
            <h1>Hey,</h1>
            <h1>
              I'm
              <Typewriter
                words={[" an engineer", " a developer", " a student", " Sooraj."]}
                loop={1}
                cursor
                cursorStyle='|'
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h1>
          </div>
          <div className="flex items-center justify-center space-x-3">
          <button
            onClick={handleScrollToContact}
            className="text-slate-100 my-5 mx-3 hover:bg-indigo-400 bg-blue px-5 py-2 rounded-full"
          >
            Contact Me
          </button>
          
            <a
              href="https://www.linkedin.com/in/soorajtharumia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray hover:text-slate-500 transition duration-200"
            >
              <FontAwesomeIcon icon={faLinkedin} size="1x" />
            </a>
            <a
              href="https://github.com/soorajtharumia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray hover:text-slate-500 transition duration-200"
            >
              <FontAwesomeIcon icon={faGithub} size="1x" />
            </a>
          </div>
        </div>
        <img
          src={pfp}
          alt={"Sooraj Tharumia"}
          className="w-48 h-52 mt-5 lg:mt-0 object-cover object-center rounded-full shadow-lg border-gray-300"
        />
      </div>
    </div>
  );
};

export default Home;
