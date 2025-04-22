import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { TiDocumentText } from "react-icons/ti";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="p-6 flex items-center justify-between fixed w-full top-0 z-10 bg-orange-50 shadow-lg">
      <a href="#head" className="text-2xl font-bold text-purple-600 z-20">
        Yogesh Sapkota
      </a>

      <div className="md:hidden z-20">
        <button onClick={toggleMenu} className="text-purple-600 text-2xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex gap-6">
          <a
            className="text-gray-600 hover:text-purple-600 hover:bg-purple-100 px-3 py-2 rounded-md transition duration-300"
            href="#about"
          >
            About
          </a>
          <a
            className="text-gray-600 hover:text-purple-600 hover:bg-purple-100 px-3 py-2 rounded-md transition duration-300"
            href="#skills"
          >
            Skills
          </a>
          <a
            className="text-gray-600 hover:text-purple-600 hover:bg-purple-100 px-3 py-2 rounded-md transition duration-300"
            href="#experience"
          >
            Experience
          </a>
          <a
            className="text-gray-600 hover:text-purple-600 hover:bg-purple-100 px-3 py-2 rounded-md transition duration-300"
            href="#projects"
          >
            Projects
          </a>
          <a
            className="text-gray-600 hover:text-purple-600 hover:bg-purple-100 px-3 py-2 rounded-md transition duration-300"
            href="#contact"
          >
            Contact
          </a>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-4 z-20">
        <a
          href="https://drive.google.com/file/d/1CLin7o-QzLSekolNe7Qy6RKnyC7ZzXXJ/view?usp=sharing"
          download
          className="flex items-center gap-1 border-2 border-purple-600 text-purple-600 px-3 py-1 rounded-full hover:bg-purple-600 hover:text-white transition duration-300"
        >
          <TiDocumentText className="text-xl" />
          Resume
        </a>
      </div>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-orange-50 shadow-lg md:hidden">
          <div className="flex flex-col items-center gap-4 py-4">
            <a
              className="text-gray-600 hover:text-purple-600 hover:bg-purple-100 px-3 py-2 rounded-md transition duration-300"
              href="#about"
              onClick={toggleMenu}
            >
              About
            </a>
            <a
              className="text-gray-600 hover:text-purple-600 hover:bg-purple-100 px-3 py-2 rounded-md transition duration-300"
              href="#skills"
              onClick={toggleMenu}
            >
              Skills
            </a>
            <a
              className="text-gray-600 hover:text-purple-600 hover:bg-purple-100 px-3 py-2 rounded-md transition duration-300"
              href="#experience"
              onClick={toggleMenu}
            >
              Experience
            </a>
            <a
              className="text-gray-600 hover:text-purple-600 hover:bg-purple-100 px-3 py-2 rounded-md transition duration-300"
              href="#projects"
              onClick={toggleMenu}
            >
              Projects
            </a>
            <a
              className="text-gray-600 hover:text-purple-600 hover:bg-purple-100 px-3 py-2 rounded-md transition duration-300"
              href="#contact"
              onClick={toggleMenu}
            >
              Contact
            </a>
            <div className="flex items-center gap-4">
              <a
                href="https://drive.google.com/file/d/1CLin7o-QzLSekolNe7Qy6RKnyC7ZzXXJ/view?usp=sharing"
                className="flex items-center gap-1 border-2 border-purple-600 text-purple-600 px-3 py-1 rounded-full hover:bg-purple-600 hover:text-white transition duration-300"
                onClick={toggleMenu}
              >
                <TiDocumentText className="text-xl" />
                Resume
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
