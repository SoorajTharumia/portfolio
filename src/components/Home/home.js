import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import pfp from '../../images/soorajpic.jpg';

const Home = () => {
  return (
    <div className="container mx-auto fade-in " id="home">
      <div className="flex flex-col justify-center items-center min-h-screen lg:flex-row">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <div className="text-4xl md:text-7xl font-bold leading-snug md:leading-relaxed">
            <h1>Hi,</h1>
            <h1>
              I'm
              <Typewriter
                words={[" an Engineer", " a developer", " a student", " Sooraj."]}
                loop={1}
                cursor
                cursorStyle='|'
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h1>
           
          </div>
          <button
                className="text-slate-700 my-5 mx-3 hover:-translate-y-1 bg-indigo-200 px-5 py-2 rounded-full transition duration-200 "
            >
                Contact Me
            </button>
            <a
              href="https://www.linkedin.com/in/soorajtharumia"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-3 text-indigo-600 hover:text-indigo-400 transition duration-200"
            >
              <FontAwesomeIcon icon={faLinkedin} size="1x" />
            </a>
            <a
              href="https://github.com/soorajtharumia"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-3 text-gray-800 hover:text-gray-600 transition duration-200"
            >
              <FontAwesomeIcon icon={faGithub} size="1x" />
            </a>
        </div>
        <img
          src={pfp}
          alt={"Sooraj Tharumia"}
          className="w-1/2 lg:w-96 h-auto mt-5 lg:mt-0 object-cover object-center rounded-md shadow-lg shadow-2xl"
        />
      </div>
    </div>
  );
};

export default Home;
