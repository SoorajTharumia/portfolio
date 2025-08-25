import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FaPython, FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiFirebase, SiTensorflow, SiMongodb, SiExpress } from 'react-icons/si';

// Future projects edited here
const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projectData = [
    { 
      name: "SchoolTimer", 
      technologies: ["HTML", "CSS", "JavaScript", "Python"],
      techIcons: [FaHtml5, FaCss3Alt, FaJsSquare, FaPython],
      description: "Web application for Parkland High School that improved the experience for 3000+ users.",
      detailedDescription: "Managed and developed the SchoolTimer web application for Parkland High School, which improved the student and faculty experience for 3000+ users by centralizing school information, such as schedules, lunch menus, and school statistics. Implemented Python scripts and improved front-end UI of the web application. Page has garnered over 19,000+ views and have significant influence and impact at Parkland High School.",
      achievements: [
        "Improved experience for 3000+ users",
        "Centralized school information including schedules and lunch menus",
        "Achieved over 19,000+ page views",
        "Significant impact at Parkland High School"
      ],
      link: "https://schooltimer.glitch.me"
    },
    { 
      name: "Digital Eyes", 
      technologies: ["Python", "TensorFlow", "Computer Vision"],
      techIcons: [FaPython, SiTensorflow],
      description: "Smart white cane for visually impaired users using computer vision and AI/ML.",
      detailedDescription: "Developed a smart white cane for visually impaired users using computer vision, AI/ML, and text-to-speech technologies. Engineered the device with CAD-designed 3D parts, a Raspberry Pi, an ultrasonic sensor, a webcam, and a servo motor to detect objects, identify their distance, and provide auditory feedback. Leveraged OpenCV for live video streaming, TensorFlow for object recognition, and a custom algorithm to rotate the ultrasonic sensor for distance measurement. Designed the system for seamless usability, integrating all components for optimal performance.",
      achievements: [
        "Developed smart white cane for visually impaired users",
        "Integrated computer vision, AI/ML, and text-to-speech technologies",
        "Used CAD-designed 3D parts with Raspberry Pi and sensors",
        "Implemented OpenCV for live video streaming",
        "Utilized TensorFlow for object recognition",
        "Created custom algorithm for ultrasonic sensor rotation"
      ],
      link: "https://drive.google.com/drive/folders/1i37WGHBFEHplghOnFiOVdSsRG2RzDIMb"
    },
    { 
      name: "Parkland Community App", 
      technologies: ["React Native", "Firebase", "Python"],
      techIcons: [FaReact, SiFirebase, FaPython],
      description: "Community app for Parkland SD to share updates, events, and photos.",
      detailedDescription: "Developed a community app for Parkland SD to share updates, events, and photos. Utilized Python's BeautifulSoup to fetch the district's events calendar and built a REST API to display 30 days of events. Integrated Google Firebase to manage photos/media uploaded via Expo ImagePicker, storing them with auto-generated URLs. Created a responsive mobile app with React Native and hosted the web app on Expo.",
      achievements: [
        "Built REST API to display 30 days of events",
        "Integrated Google Firebase for photo/media management",
        "Used Expo ImagePicker for media uploads",
        "Created responsive mobile app with React Native",
        "Hosted web app on Expo platform"
      ],
      link: "https://docs.google.com/presentation/d/1Q0nNfZYYT7HbykiDimFQissqNRae8QjTx8AUPLO2Xcg/edit?usp=sharing"
    },
    { 
      name: "Lehigh Valley Attraction Finder", 
      technologies: ["ReactJS", "MongoDB", "ExpressJS", "NodeJS"],
      techIcons: [FaReact, SiMongodb, SiExpress, FaNodeJs],
      description: "MERN stack web application to help users find attractions in the Lehigh Valley.",
      detailedDescription: "Developed a MERN stack web application to help users find attractions in the Lehigh Valley based on searched attributes. Utilized MongoDB for data storage, Express.js and Node.js for the backend, and React.js with Bootstrap for the responsive front-end. Hosted the backend on Vercel and the front-end on Firebase.",
      achievements: [
        "Built MERN stack web application",
        "Implemented MongoDB for data storage",
        "Created responsive front-end with React.js and Bootstrap",
        "Hosted backend on Vercel",
        "Deployed front-end on Firebase"
      ],
      link: "https://lehighvalleyfbla.web.app/"
    }
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="container mx-auto pt-20 min-h-screen px-4 bg-slate-100 dark:bg-dark-bg transition-colors duration-500" id="projects">
      <div className="flex flex-col items-center justify-center">
        <div className="text-center w-full mb-6 animate-fade-in-up">
          <h1 className="text-blue text-3xl sm:text-4xl font-bold mb-4">Projects</h1>
          <p className="text-gray dark:text-dark-text text-lg sm:text-2xl">
            My projects either lie at the intersection of hardware and software, or are purely focused
            on one or the other. Here are some of my favorites!
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projectData.map((project, index) => (
            <div 
              key={project.name} 
              className="flex flex-col items-center text-center justify-between w-full rounded-md shadow-lg border border-slate-100 dark:border-dark-border bg-slate-50 dark:bg-dark-card p-8 cursor-pointer hover-lift hover-glow transition-all duration-300 animate-fade-in-up"
              onClick={() => openModal(project)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h1 className="text-2xl font-bold text-blue dark:text-blue mb-2 transition-colors duration-300">{project.name}</h1>
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {project.techIcons.map((Icon, iconIndex) => (
                  <Icon key={iconIndex} className="text-3xl text-gray dark:text-dark-text transition-colors duration-300" />
                ))}
              </div>
              <p className="text-sm text-gray dark:text-dark-text transition-colors duration-300">{project.description}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center text-gray dark:text-dark-text mt-10 animate-fade-in-up">
          <span className="mb-2 transition-colors duration-300">Check out the rest at my Github!</span>
          <a
            href="https://github.com/soorajtharumia"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray dark:text-dark-text hover:text-blue dark:hover:text-blue transition-all duration-300 hover-lift"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-white dark:bg-dark-card rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transition-all duration-300">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-blue dark:text-blue mb-2 transition-colors duration-300">{selectedProject.name}</h2>
                </div>
                <button 
                  onClick={closeModal}
                  className="text-gray dark:text-dark-text hover:text-blue dark:hover:text-blue text-2xl font-bold transition-colors duration-300"
                >
                  ×
                </button>
              </div>
              
              <div className="mb-6">
                <h4 className="text-xl font-semibold text-blue dark:text-blue mb-2 transition-colors duration-300">Description</h4>
                <p className="text-lg text-gray dark:text-dark-text transition-colors duration-300">{selectedProject.detailedDescription}</p>
              </div>

              {selectedProject.achievements && (
                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-blue dark:text-blue mb-2 transition-colors duration-300">Key Achievements</h4>
                  <ul className="list-disc list-inside text-lg text-gray dark:text-dark-text transition-colors duration-300">
                    {selectedProject.achievements.map((achievement, index) => (
                      <li key={index} className="mb-1">{achievement}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mb-6">
                <h4 className="text-xl font-semibold text-blue dark:text-blue mb-2 transition-colors duration-300">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <span key={index} className="bg-slate-100 dark:bg-dark-bg text-gray dark:text-dark-text px-3 py-1 rounded-full text-sm transition-colors duration-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-end space-x-4">
                <a 
                  href={selectedProject.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue text-white px-6 py-2 rounded-full hover:bg-indigo-400 transition-all duration-300 hover-lift"
                >
                  View Project
                </a>
                <button 
                  onClick={closeModal}
                  className="bg-gray dark:bg-dark-border text-white px-6 py-2 rounded-full hover:bg-slate-600 dark:hover:bg-slate-500 transition-all duration-300 hover-lift"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
