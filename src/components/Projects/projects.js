import React from 'react'

const projects = () => {
    const projectData = [
        {name: "DigitalEyes", technologies: "Computer-Aided Design, AI/ML, Python", link: "https://drive.google.com/drive/folders/1i37WGHBFEHplghOnFiOVdSsRG2RzDIMb"},
        {name: "Lehigh Valley Attraction Finder", technologies: "ReactJS, MongoDB, ExpressJS, NodeJS", link:"https://lehighvalleyfbla.web.app/"},
        {name: "SchoolTimer", technologies: "HTML/CSS/JS, Python", link:"https://schooltimer.glitch.me"}
        {name: "Parkland Commmunity App", technologies:"React Native, Firebase, Python, "}
    ]


  return (
    <div className="container mx-auto pt-10 min-h-screen px-4" id="project">
        <div className="flex flex-col items-center justify-center">
            <div className="text-center w-full mb-6">
                <h1 className="text-3xl sm:text-4xl font-bold mb-4">Projects</h1>
                <p className="text-lg sm:text-2xl">
                    My projects either lie at the intersection of hardware and software, or are purely focused
                    on one or the other. Below are some of my favorites!
                </p>
            </div>
            <div className="grid grid-flow-col auto-cols-max gap-4">
                <div>
                    <div className="w-full rounded-md shadow-lg text-slate-600 bg-indigo-200 border border-gray-300 p-4">
                        <h1>01</h1>
                    </div>
                </div>
                <div>
                    <div className="w-full rounded-md shadow-lg text-slate-600 bg-indigo-200 border border-gray-300 p-4">
                        <h1>02</h1>
                    </div>
                </div>
                <div>
                    <div className="w-full rounded-md shadow-lg text-slate-600 bg-indigo-200 border border-gray-300 p-4">
                        <h1>03</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default projects