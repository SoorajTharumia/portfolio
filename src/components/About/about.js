import React from 'react';
import { FaPython, FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaJava } from 'react-icons/fa';
import { SiFirebase, SiTensorflow, SiTailwindcss, SiMongodb, SiExpress} from 'react-icons/si';
import { VscVscode } from "react-icons/vsc";

const About = () => {
  const expertiseData = [
    { name: "Python", icon: FaPython },
    { name: "HTML", icon: FaHtml5 },
    { name: "CSS", icon: FaCss3Alt },
    { name: "JavaScript", icon: FaJsSquare },
    { name: "ReactJS", icon: FaReact },
    { name: "MongoDB", icon: SiMongodb },
    { name: "TensorFlow", icon: SiTensorflow },
    { name: "Java", icon: FaJava },
    { name: "Firebase", icon: SiFirebase },
    { name: "TailwindCSS", icon: SiTailwindcss },
    { name: "VS Code", icon: VscVscode },
    { name: "ExpressJS", icon: SiExpress },
  ];

  return (
    <div className="container mx-auto pt-20 min-h-screen px-4" id="about">
      <div className="flex flex-col items-center">
        <div className="text-center w-full mb-6">
          <h1 className="text-blue text-3xl sm:text-4xl font-bold mb-4">About Me</h1>
          <p className="text-gray text-lg sm:text-2xl mb-5">
            As a current Computer Engineering student at the Georgia Institute of Technology, I 
            am driven by a deep passion for both computing software and hardware. I bring a 
            strong background in development and building, coupled with enthusiasm and a 
            relentless work ethic. My focus lies in creating innovative solutions at the 
            intersection of hardware and software, leveraging my skills to tackle complex 
            engineering challenges with determination and creativity. 
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 w-1/2 max-w-4xl">
          {expertiseData.map(item => {
            const Icon = item.icon;
            return (
              <div key={item.name} className="flex flex-col items-center text-center p-4 border rounded-md shadow-md bg-slate-50">
                <Icon className="text-5xl mb-2 text-gray" />
                <span className="text-lg text-blue">{item.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
