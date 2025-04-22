import React from "react";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Projectsfun = ({ image, title, description, language, liveDemoUrl, codeUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-md w-80 hover:shadow-lg transition-shadow duration-300">
      <img className="w-80 h-48 object-cover rounded-t-lg" src={image} alt={title} />

      <div className="p-4">
        <h1 className="text-xl font-semibold text-gray-900 mb-2">{title}</h1>
        <p className="text-gray-600 mb-4 text-base leading-relaxed">{description}</p>
      </div>
      <div className="flex flex-wrap gap-2 mb-5 px-4">
        {language.map((lang, index) => (
          <span
            key={index}
            className="bg-purple-100 text-purple-600 text-sm font-medium px-3 py-1 rounded-full"
          >
            {lang}
            {index < language.length - 1 ? ", " : ""}
          </span>
        ))}
      </div>

      <div className="flex gap-2 mb-4 px-4">
        <a
          href={liveDemoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center border border-purple-300 text-purple-600 rounded-md hover:bg-purple-100 p-2 transition duration-300"
        >
          <BsBoxArrowInUpRight className="mr-2" /> Live Demo
        </a>
        <a
          href={codeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center border border-purple-300 text-purple-600 rounded-md hover:bg-purple-100 p-2 transition duration-300"
        >
          <FaGithub className="mr-2" /> Code
        </a>
      </div>
    </div>
  );
};

export default Projectsfun;