import React from "react";
import Skillfun from "./skillfun";


const Skills = () => {
  const skill = [
    "React",
    " Javascript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Git",
    "Responsive Design",
    "Php",
    "DSA",
    "Bootstrap",
    "c",
    "c++",
    "Java"

  ];
  return (
    <>
      <div>
        <h4>
          <span className="rounded-full border bg-gray-200 p-1">
            My Toolkit
          </span>
        </h4>
        <h1 className="text-4xl ">Skills & Technologies</h1>
        <p>
          I've worked with a variety of technologies and frameworks to create
          stunning web experiences.
        </p>


        <div><Skillfun skill={skill} /></div>
      </div>
    </>
  );
};
export default Skills;
