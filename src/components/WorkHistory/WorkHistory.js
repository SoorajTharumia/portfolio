import React, { useState } from 'react';
import capitalOneLogo from '../../images/capitalone.png';

const WorkHistory = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedWork, setSelectedWork] = useState(null);

  const workData = [
    {
      company: "Capital One Financial Corporation",
      position: "Software Engineering Intern",
      duration: "June 2024 - August 2024",
      location: "Dallas, TX",
      description: "Engineered real-time event pipelines and automated critical security workflows to improve data processing efficiency and system integrity.",
      technologies: "Python, FastAPI, SQL, XML, Beanshell Scripting, Agile Framework, SDLC Pipeline",
      logo: capitalOneLogo,
      detailedDescription: "Worked on high-impact projects focused on optimizing data processing workflows and automating critical security processes. Collaborated with cross-functional teams to deliver scalable solutions that significantly improved system performance and reliability.",
      achievements: [
        "Reduced end-to-end data processing time by nearly 70% by engineering a real-time event pipeline using a Python FastAPI microservice to replace a legacy enterprise process",
        "Designed a normalized 10-column SQL database schema capable of processing 200,000+ transactions to ensure 100% data integrity for a critical time-sensitive security workflow",
        "Automated a critical security workflow by using XML and Beanshell scripting to parse company-critical database events and trigger appropriate workflow actions",
        "Accelerated development of new automation solution by following the Agile framework and SDLC pipeline"
      ]
    },
    // Add more experiences as needed
  ];

  const openModal = (work) => {
    setSelectedWork(work);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedWork(null);
  };

  return (
    <div className="container mx-auto pt-20 min-h-screen px-4 bg-slate-100 dark:bg-dark-bg transition-colors duration-500" id="work-history">
      <div className="flex flex-col items-center justify-center">
        <div className="text-center w-full mb-6 animate-fade-in-up">
          <h1 className="text-blue text-3xl sm:text-4xl font-bold mb-4">Work History</h1>
          <p className="text-gray dark:text-dark-text text-lg sm:text-2xl">
            My professional journey and work history showcasing my growth and expertise.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 w-full max-w-4xl">
          {workData.map((work, index) => (
            <div 
              key={index} 
              className="flex flex-col w-full rounded-md shadow-lg border border-slate-100 dark:border-dark-border bg-slate-50 dark:bg-dark-card p-8 cursor-pointer hover-lift hover-glow transition-all duration-300 animate-fade-in-up"
              onClick={() => openModal(work)}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                <h2 className="text-2xl font-bold text-blue dark:text-blue transition-colors duration-300">{work.position}</h2>
                <span className="text-gray dark:text-dark-text mt-2 sm:mt-0 transition-colors duration-300">{work.duration}</span>
              </div>
              <div className="flex items-center mb-4">
                {work.logo && (
                  <div className="w-16 h-16 mr-4 border border-slate-200 dark:border-dark-border rounded-lg bg-white dark:bg-dark-card p-2 flex items-center justify-center transition-all duration-300">
                    <img 
                      src={work.logo} 
                      alt={`${work.company} logo`} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}
                <div>
                  <h3 className="text-xl text-gray dark:text-dark-text transition-colors duration-300">{work.company}</h3>
                  {work.location && (
                    <p className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">{work.location}</p>
                  )}
                </div>
              </div>
              <p className="text-xl text-gray dark:text-dark-text mb-4 transition-colors duration-300">{work.description}</p>
              <p className="text-xl text-gray dark:text-dark-text italic transition-colors duration-300">{work.technologies}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedWork && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-white dark:bg-dark-card rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transition-all duration-300">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center">
                  {selectedWork.logo && (
                    <div className="w-20 h-20 mr-4 border border-slate-200 dark:border-dark-border rounded-lg bg-white dark:bg-dark-bg p-3 flex items-center justify-center transition-all duration-300">
                      <img 
                        src={selectedWork.logo} 
                        alt={`${selectedWork.company} logo`} 
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}
                  <div>
                    <h2 className="text-2xl font-bold text-blue dark:text-blue transition-colors duration-300">{selectedWork.position}</h2>
                    <h3 className="text-xl text-gray dark:text-dark-text transition-colors duration-300">{selectedWork.company}</h3>
                    <p className="text-lg text-gray dark:text-dark-text transition-colors duration-300">{selectedWork.duration}</p>
                    {selectedWork.location && (
                      <p className="text-md text-gray-500 dark:text-gray-400 transition-colors duration-300">{selectedWork.location}</p>
                    )}
                  </div>
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
                <p className="text-lg text-gray dark:text-dark-text transition-colors duration-300">{selectedWork.detailedDescription}</p>
              </div>

              {selectedWork.achievements && (
                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-blue dark:text-blue mb-2 transition-colors duration-300">Key Achievements</h4>
                  <ul className="list-disc list-inside text-lg text-gray dark:text-dark-text transition-colors duration-300">
                    {selectedWork.achievements.map((achievement, index) => (
                      <li key={index} className="mb-1">{achievement}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mb-6">
                <h4 className="text-xl font-semibold text-blue dark:text-blue mb-2 transition-colors duration-300">Technologies Used</h4>
                <p className="text-lg text-gray dark:text-dark-text transition-colors duration-300">{selectedWork.technologies}</p>
              </div>

              <div className="flex justify-end">
                <button 
                  onClick={closeModal}
                  className="bg-blue text-white px-6 py-2 rounded-full hover:bg-indigo-400 transition-all duration-300 hover-lift"
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

export default WorkHistory; 