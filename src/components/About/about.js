import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto pt-10 min-h-screen" id="about">
      <div className="flex flex-col items-center">
        <div className="text-center w-full">
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-2xl mb-12">
            As a current Computer Engineering student at the Georgia Institute of Technology, I 
            am driven by a deep passion for both computing software and hardware. I bring a 
            strong background in development and building, coupled with enthusiasm and a 
            relentless work ethic. My focus lies in creating innovative solutions at the 
            intersection of hardware and software, leveraging my skills to tackle complex 
            engineering challenges with determination and creativity. 
          </p>
        </div>
        <div className="flex justify-center w-full h-screen-3/4 lg:h-auto border border-gray-300 p-4 w-full mx-2 mb-4 lg:mb-0">
          <h1 className="text-3xl font-bold mb-4 ">Expertise</h1>
        </div>
        </div>
    </div>
  );
};

export default About;
