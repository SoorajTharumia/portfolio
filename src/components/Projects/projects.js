import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

// Future projects edited here
const Projects = () => {
  const projectData = [
    { name: "DigitalEyes", technologies: "Computer-Aided Design, AI/ML, Python", link: "https://drive.google.com/drive/folders/1i37WGHBFEHplghOnFiOVdSsRG2RzDIMb" },
    { name: "Lehigh Valley Attraction Finder", technologies: "ReactJS, MongoDB, ExpressJS, NodeJS", link: "https://lehighvalleyfbla.web.app/" },
    { name: "SchoolTimer", technologies: "HTML/CSS/JS, Python", link: "https://schooltimer.glitch.me" },
    { name: "Parkland Community App", technologies: "React Native, Firebase, Python", link: "https://docs.google.com/presentation/d/1Q0nNfZYYT7HbykiDimFQissqNRae8QjTx8AUPLO2Xcg/edit?usp=sharing" },
  ];

  return (
    <div className="container mx-auto pt-20 min-h-screen px-4" id="projects">
      <div className="flex flex-col items-center justify-center">
        <div className="text-center w-full mb-6">
          <h1 className="text-blue text-3xl sm:text-4xl font-bold mb-4">Projects</h1>
          <p className="text-gray text-lg sm:text-2xl">
            My projects either lie at the intersection of hardware and software, or are purely focused
            on one or the other. Here are some of my favorites!
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projectData.map((project) => (
            <div key={project.name} className="flex flex-col items-center text-center justify-between w-full rounded-md shadow-lg border border-slate-100 bg-slate-50 p-8">
              <h1 className="text-2xl font-bold text-blue mb-2">{project.name}</h1>
              <p className="text-xl mb-4 text-gray">{project.technologies}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <button className="bg-blue text-slate-100 px-5 py-2 rounded-full hover:bg-indigo-400">
                  View Project
                </button>
              </a>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center text-gray mt-10">
          <span className="mb-2">Check out the rest at my Github!</span>
          <a
            href="https://github.com/soorajtharumia"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray hover:text-slate-500 transition duration-200"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
