import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto pt-20 min-h-screen px-4 flex items-center justify-center bg-slate-100 dark:bg-dark-bg transition-colors duration-500" id="contact">
      <div className="w-full max-w-lg animate-fade-in-up">
        <h1 className="text-blue text-3xl sm:text-4xl font-bold mb-4 text-center">Contact Me!</h1>
        <p className="text-gray dark:text-dark-text text-lg sm:text-2xl mb-6 text-center transition-colors duration-300">
          Fill this out to get a hold of me.
        </p>
        <div className="w-full p-6 bg-slate-50 dark:bg-dark-card rounded-lg shadow-lg mx-auto hover-lift transition-all duration-300">
          <form action="https://formspree.io/f/xvgpaljj" method="POST" className="grid gap-4">
            <div className="grid gap-2">
              <label htmlFor="name" className="font-xl text-gray dark:text-dark-text transition-colors duration-300">Name</label>
              <input 
                id="name" 
                type="text" 
                name="name"
                placeholder="Enter your name" 
                className="w-full rounded-md shadow-lg text-gray dark:text-dark-text bg-slate-100 dark:bg-dark-bg shadow-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-600 border border-slate-200 dark:border-dark-border transition-all duration-300"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="email" className="font-xl text-gray dark:text-dark-text transition-colors duration-300">Email</label>
              <input 
                id="email" 
                type="email" 
                name="email" 
                placeholder="Enter your email" 
                className="w-full rounded-md shadow-lg text-gray dark:text-dark-text bg-slate-100 dark:bg-dark-bg shadow-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-600 border border-slate-200 dark:border-dark-border transition-all duration-300"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="message" className="font-xl text-gray dark:text-dark-text transition-colors duration-300">Message</label>
              <textarea 
                id="message" 
                type="text"
                name="message" 
                placeholder="Enter your message" 
                className="w-full min-h-[150px] rounded-md shadow-lg text-gray dark:text-dark-text bg-slate-100 dark:bg-dark-bg shadow-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-600 border border-slate-200 dark:border-dark-border transition-all duration-300"
              ></textarea>
            </div>
            <div className="flex justify-center mt-4">
              <button 
                type="submit" 
                className="bg-blue text-slate-100 px-5 py-2 rounded-full hover:bg-indigo-400 hover-lift hover-glow transition-all duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
