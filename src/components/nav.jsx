import React from "react";
import { FaAffiliatetheme } from "react-icons/fa6";
import { TiDocumentText } from "react-icons/ti";

const Nav = () => {
  return (
    <div className="p-6 flex items-center justify-between fixed w-full top-0 z-10 bg-orange-50 shadow-lg">
      <a href="#head" className="text-2xl font-bold text-purple-600">
        Yogesh Sapkota
      </a>
      <div className="flex gap-6">
        <a className="text-gray-600 hover:text-purple-600 hover:bg-purple-100 px-3 py-2 rounded-md transition duration-300" href="#about">
          About
        </a>
        <a className="text-gray-600 hover:text-purple-600 hover:bg-purple-100 px-3 py-2 rounded-md transition duration-300" href="#skills">
          Skills
        </a>
        <a className="text-gray-600 hover:text-purple-600 hover:bg-purple-100 px-3 py-2 rounded-md transition duration-300" href="#experience">
          Experience
        </a>
        <a className="text-gray-600 hover:text-purple-600 hover:bg-purple-100 px-3 py-2 rounded-md transition duration-300" href="#projects">
          Projects
        </a>
        <a className="text-gray-600 hover:text-purple-600 hover:bg-purple-100 px-3 py-2 rounded-md transition duration-300" href="#contact">
          Contact
        </a>
      </div>
      <div className="flex items-center gap-4">
        <FaAffiliatetheme className="text-purple-600 text-xl hover:text-purple-700 transition duration-300" />
        <div className="flex items-center gap-1 border-2 border-purple-600 text-purple-600 px-3 py-1 rounded-full hover:bg-purple-600 hover:text-white transition duration-300">
          <TiDocumentText className="text-xl" />
          Resume
        </div>
      </div>
    </div>
  );
};

export default Nav;