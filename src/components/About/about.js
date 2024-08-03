import React, { useRef, useEffect } from 'react';
import pfp from "../../images/soorajpic.jpg";

const About = () => {
  const expertiseData = [
    {name: "Python", duration:"4"}, 
    {name: "HTML", duration:"3"},
    {name: "CSS", duration:"3"},
    {name: "JavaScript", duration:"3"},
    {name: "ReactJS", duration:"3"},
    {name: "MongoDB", duration:"3"},
    {name: "TensorFlow", duration:"3"},
    {name: "Java", duration:"2"},
    {name: "Firebase", duration:"2"},
    {name: "TailwindCSS", duration:"1"},
  ];

  const maxDuration = Math.max(...expertiseData.map(item => parseFloat(item.duration)));

  const calculateWidth = (duration) => {
    const years = parseFloat(duration);
    return `${(years / maxDuration) * 100}%`;
  };

  const expertiseBoxRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    if (expertiseBoxRef.current && imageRef.current) {
      imageRef.current.style.height = `${expertiseBoxRef.current.offsetHeight}px`;
    }
  }, [expertiseData]);

  return (
    <div className="container mx-auto pt-10 min-h-screen px-4" id="about">
      <div className="flex flex-col items-center">
        <div className="text-center w-full mb-6">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h1>
          <p className="text-lg sm:text-2xl">
            As a current Computer Engineering student at the Georgia Institute of Technology, I 
            am driven by a deep passion for both computing software and hardware. I bring a 
            strong background in development and building, coupled with enthusiasm and a 
            relentless work ethic. My focus lies in creating innovative solutions at the 
            intersection of hardware and software, leveraging my skills to tackle complex 
            engineering challenges with determination and creativity. 
          </p>
        </div>
        <div className="flex flex-col mb-10 lg:flex-row items-center w-full space-y-4 lg:space-y-0 lg:space-x-4">
          <div 
            ref={expertiseBoxRef} 
            className="w-full lg:w-1/2 rounded-md shadow-lg text-slate-600 bg-indigo-200 border border-gray-300 p-4"
          >
            <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-center">Expertise</h1>
            <div className="space-y-1">
              {expertiseData.map((item) => (
                <div key={item.name} className="flex items-center">
                  <div className="w-1/4">
                    <span className="text-sm sm:text-xl">{item.name}</span>
                  </div>
                  <div className="flex-1 mr-4">
                    <div className="bg-gray-300 h-4 rounded-full overflow-hidden">
                      <div
                        className="bg-blue-600 h-full"
                        style={{ width: calculateWidth(item.duration) }}
                      ></div>
                    </div>
                  </div>
                  <span className="text-sm sm:text-lg">{item.duration} years</span>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex items-center justify-center px-4">
            <img 
              ref={imageRef} 
              src={pfp} 
              alt="Profile" 
              className="object-cover w-full h-full max-h-screen rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
