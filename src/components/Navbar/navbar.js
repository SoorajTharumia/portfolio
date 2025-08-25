import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  
  return (
    <div className="w-full">
      <nav className="bg-slate-100 dark:bg-dark-bg fixed w-full z-50 shadow-md transition-all duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="text-gray dark:text-dark-text text-3xl font-bold transition-colors duration-300 hover:text-blue dark:hover:text-blue cursor-pointer">Sooraj</div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#home" onClick={(e) => handleScroll(e, 'home')} className="text-gray dark:text-dark-text hover:bg-slate-300 dark:hover:bg-dark-card px-3 py-2 rounded-md text-lg font-medium transition-all duration-300 hover-lift">Home</a>
                <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="text-gray dark:text-dark-text hover:bg-slate-300 dark:hover:bg-dark-card px-3 py-2 rounded-md text-lg font-medium transition-all duration-300 hover-lift">About Me</a>
                <a href="#work-history" onClick={(e) => handleScroll(e, 'work-history')} className="text-gray dark:text-dark-text hover:bg-slate-300 dark:hover:bg-dark-card px-3 py-2 rounded-md text-lg font-medium transition-all duration-300 hover-lift">Experience</a>
                <a href="#projects" onClick={(e) => handleScroll(e, 'projects')} className="text-gray dark:text-dark-text hover:bg-slate-300 dark:hover:bg-dark-card px-3 py-2 rounded-md text-lg font-medium transition-all duration-300 hover-lift">Projects</a>
                <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="text-gray dark:text-dark-text hover:bg-slate-300 dark:hover:bg-dark-card px-3 py-2 rounded-md text-lg font-medium transition-all duration-300 hover-lift">Contact Me</a>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button onClick={toggleMenu} className="bg-blue-600 inline-flex items-center justify-center p-2 rounded-md text-gray dark:text-dark-text hover:text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 focus:text-gray transition-all duration-300">
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-100 dark:bg-dark-bg transition-colors duration-300">
              <a href="#home" onClick={(e) => handleScroll(e, 'home')} className="block text-slate-600 dark:text-dark-text hover:bg-indigo-400 dark:hover:bg-dark-card px-3 py-2 rounded-md text-base font-medium transition-all duration-300">Home</a>
              <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="block text-slate-600 dark:text-dark-text hover:bg-indigo-400 dark:hover:bg-dark-card px-3 py-2 rounded-md text-base font-medium transition-all duration-300">About Me</a>
              <a href="#work-history" onClick={(e) => handleScroll(e, 'work-history')} className="block text-slate-600 dark:text-dark-text hover:bg-indigo-400 dark:hover:bg-dark-card px-3 py-2 rounded-md text-base font-medium transition-all duration-300">Experience</a>
              <a href="#projects" onClick={(e) => handleScroll(e, 'projects')} className="block text-slate-600 dark:text-dark-text hover:bg-indigo-400 dark:hover:bg-dark-card px-3 py-2 rounded-md text-base font-medium transition-all duration-300">Projects</a>
              <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="block text-slate-600 dark:text-dark-text hover:bg-indigo-400 dark:hover:bg-dark-card px-3 py-2 rounded-md text-base font-medium transition-all duration-300">Contact Me</a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
