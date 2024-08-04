import React from 'react'

const contact = () => {
  return (
    <div className="container mx-auto pt-20 min-h-screen px-4" id="contact">
        <div className="p-6">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center">Contact Me!</h1>
        <p className="text-lg sm:text-2xl items-center text-center">
          Fill this out to get a hold of me.
        </p>
        <form action="https://formspree.io/f/xvgpaljj" method="POST" className="grid gap-4">
          <div className="grid gap-2">
            <label htmlFor="name" className="font-medium ">Name</label>
            <input id="name" type="name" name="name" placeholder="Enter your name" className="w-full rounded-md shadow-lg text-slate-600 bg-indigo-200 border border-gray-300 p-4 focus:outline-none focus:ring focus:ring-blue-200" />
          </div>
          <div className="grid gap-2">
            <label htmlFor="email" className="font-medium">Email</label>
            <input id="email" type="email" name="email" placeholder="Enter your email" className="w-full rounded-md shadow-lg text-slate-600 bg-indigo-200 border border-gray-300 p-4 focus:outline-none focus:ring focus:ring-blue-200" />
          </div>
          <div className="grid gap-2">
            <label htmlFor="message" className="font-medium ">Message</label>
            <textarea id="message" name="message" placeholder="What can we help you with?" className="min-h-[150px] w-full rounded-md shadow-lg text-slate-600 bg-indigo-200 border border-gray-300 p-4 focus:outline-none focus:ring focus:ring-blue-200"></textarea>
          </div>
          <div className="flex justify-center mt-4">
            <button type="submit" className="text-slate-600 my-5 mx-3 hover:-translate-y-1 bg-indigo-200 px-5 py-2 rounded-full transition duration-200 ">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default contact