import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaArrowDown } from "react-icons/fa";

const Head = () => {
  return (
    <>
      <div className=" min-h-screen flex flex-col items-center justify-center">
        <h4>
          <span className="rounded-full border-gray-200 bg-indigo-100 text-indigo-600 text-sm font-medium px-4 py-2 animate-pulse">
            Available for frontend Development
          </span>
        </h4>
        <h1 className="text-5xl p-3 font-bold text-gray-900 md:text-7xl  mt-6 text-center">
          Frontend Developer
        </h1>
        <p className="p-3 text-lg md:text-xl text-gray-600 max-w-lg text-center">
          I build exceptional and accessible digital experiences for the web.
        </p>

        <div className="flex justify-center p-3 gap-3">
          <button className="flex border-1 p-2 bg-indigo-600 text-white rounded-full px-6 py-3 hover:bg-indigo-700 transition duration-300 items-center shadow-md hover:shadow-lg">
       <a href="#projects">View projects</a>      <FaArrowRight className="ml-2" />
          </button>
          <button className="flex border-2 border-indigo-600 text-indigo-600 p-2 rounded-full px-6 py-3 hover:bg-indigo-50 transition duration-300 items-center shadow-md hover:shadow-lg">
            <a href="https://drive.google.com/file/d/1CLin7o-QzLSekolNe7Qy6RKnyC7ZzXXJ/view?usp=sharing">Download Resume </a>
            <MdOutlineFileDownload className="ml-2" />
          </button>
        </div>
        <div className="justify-items-center my-7">
          <FaArrowDown className="text-indigo-600 text-2xl animate-bounce" />
        </div>
      </div>
    </>
  );
};

export default Head;
