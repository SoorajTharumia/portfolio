import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Projects = () => {
  const projectData = [
    { name: "DigitalEyes", technologies: "Computer-Aided Design, AI/ML, Python", link: "https://drive.google.com/drive/folders/1i37WGHBFEHplghOnFiOVdSsRG2RzDIMb" },
    { name: "Lehigh Valley Attraction Finder", technologies: "ReactJS, MongoDB, ExpressJS, NodeJS", link: "https://lehighvalleyfbla.web.app/" },
    { name: "SchoolTimer", technologies: "HTML/CSS/JS, Python", link: "https://schooltimer.glitch.me" },
    { name: "Parkland Community App", technologies: "React Native, Firebase, Python", link: "https://docs.google.com/presentation/d/1Q0nNfZYYT7HbykiDimFQissqNRae8QjTx8AUPLO2Xcg/edit?usp=sharing" },
  ];

  return (
    <div className="container mx-auto pt-10 min-h-screen px-4" id="project">
      <div className="flex flex-col items-center justify-center">
        <div className="text-center w-full mb-6">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Projects</h1>
          <p className="text-lg sm:text-2xl">
            My projects either lie at the intersection of hardware and software, or are purely focused
            on one or the other. Here are some of my favorites!
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {projectData.map((project) => (
            <div key={project.name} className="flex flex-col text-center items-center justify-center w-full rounded-md shadow-lg text-slate-600 bg-indigo-200 border border-gray-300 p-10">
              <h1 className="text-2xl font-bold text-blue-500 mb-2">{project.name}</h1>
              <p className="text-lg mb-4">{project.technologies}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  {project.link ? "View Project" : "Link not available"}
                </button>
              </a>
            </div>
          ))}
          
        </div>
        <div className="m-10">
            <span>Check out the rest at my Github!</span>
            <a
              href="https://github.com/soorajtharumia"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-3 text-gray-800 hover:text-gray-600 transition duration-200"
            >
              <FontAwesomeIcon icon={faGithub} size="1x" />
            </a>
          </div>
      </div>
    </div>
  );
}

export default Projects;
