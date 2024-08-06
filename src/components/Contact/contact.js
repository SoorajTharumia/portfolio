import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto pt-20 min-h-screen px-4 flex items-center justify-center" id="contact">
      <div className="w-full max-w-lg">
        <h1 className="text-blue text-3xl sm:text-4xl font-bold mb-4 text-center">Contact Me!</h1>
        <p className="text-gray text-lg sm:text-2xl mb-6 text-center">
          Fill this out to get a hold of me.
        </p>
        <div className="w-full p-6 bg-slate-50 rounded-lg shadow-lg mx-auto">
          <form action="https://formspree.io/f/xvgpaljj" method="POST" className="grid gap-4">
            <div className="grid gap-2">
              <label htmlFor="name" className="font-xl text-gray">Name</label>
              <input 
                id="name" 
                type="text" 
                name="name"
                placeholder="Enter your name" 
                className="w-full rounded-md shadow-lg text-gray bg-slate-100 shadow-md p-2 focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="email" className="font-xl text-gray">Email</label>
              <input 
                id="email" 
                type="email" 
                name="email" 
                placeholder="Enter your email" 
                className="w-full rounded-md shadow-lg text-gray bg-slate-100 shadow-md p-2 focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="message" className="font-xl text-gray ">Message</label>
              <textarea 
                id="message" 
                type="text"
                name="message" 
                placeholder="Enter your message" 
                className="w-full min-h-[150px] rounded-md shadow-lg text-gray bg-slate-100 shadow-md p-2 focus:outline-none focus:ring focus:ring-blue-200"
              ></textarea>
            </div>
            <div className="flex justify-center mt-4">
              <button 
                type="submit" 
                className="bg-blue text-slate-100 px-5 py-2 rounded-full hover:bg-indigo-400"
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
