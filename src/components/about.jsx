import React from "react";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { SiGmail } from "react-icons/si";
import photo from "./images/profile.jpg";
const About = () => {
  return (
    <div className=" flex items-center  px-8 py-12">
      <div className="flex gap-8 w-full">
        <div className="w-1/3 max-w-xs">
          <img
            className="rounded-full h-64 w-64 object-cover shadow-lg hover:shadow-xl transition-shadow duration-300"
            src={photo}
            alt="portfolio image"
          />
        </div>
        <div className="w-2/3">
          <h3>
            <span className="rounded-full border-gray-200 bg-purple-100 text-purple-600 text-sm font-medium px-4 py-2 animate-pulse">
              About me
            </span>
          </h3>
          <h1 className="text-4xl mt-2 font-bold text-gray-900 md:text-5xl leading-tight">
            Crafting Digital Experiences with Passion
          </h1>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Hello! I'm a passionate frontend developer with a keen eye for
            design and a love for creating intuitive, dynamic user experiences.
          </p>

          <div className="icons flex gap-4 mt-6">
            <a href="https://github.com/yogesh5454">
              {" "}
          <FaGithub className="hover:scale-105 transition-transform text-3xl text-purple-600 hover:text-purple-700" />
            </a>
       <a href="https://www.linkedin.com/in/yogesh-sapkota-12422021a/">     <CiLinkedin className="hover:scale-105 transition-transform text-3xl text-purple-600 hover:text-purple-700" /></a>
            <a href="mailto:yogesh111sapkota@gmail.com">
              {" "}
              <SiGmail className="hover:scale-105 transition-transform text-3xl text-purple-600 hover:text-purple-700" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
