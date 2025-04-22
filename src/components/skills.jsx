import React from "react";
import Skillfun from "./skillfun";

const Skills = () => {
  const skill = [
    "React",
    "Javascript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Git",
    "Responsive Design",
    "Php",
    "DSA",
    "Bootstrap",
    "C",
    "C++",
    "Java",
  ];

  return (
    <div className="py-16 min-h-screen bg-gradient-to-br from-indigo-50 to-gray-100">
      <div className="max-w-7xl mt-40 mx-auto px-6 text-center">
        <h4>
          <span className="rounded-full border-gray-200 bg-indigo-100 text-indigo-600 text-sm font-medium px-4 py-2 animate-pulse">
            My Toolkit
          </span>
        </h4>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 leading-tight">
          Skills & Technologies
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          I've worked with a variety of technologies and frameworks to create
          stunning web experiences.
        </p>
        <div className="mt-8">
          <Skillfun skill={skill} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
