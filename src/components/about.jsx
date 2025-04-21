import React from "react";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { SiGmail } from "react-icons/si";
const About = () => {
 return <>
    <div className="flex gap-5 mb-10">
      <img className="w-1/2 pr-10"
        src="https://imgs.search.brave.com/ILBctoZGVZAWtZNB0fE5zMwYNEDthJHoEzNkTGPH9gU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9i/dXNpbmVzcy15b3Vu/Zy1wcm9mZXNzaW9u/YWwtYnVzaW5lc3Nt/YW4tZ2xhc3Nlcy1z/bWlsaW5nLWNhbWVy/YS1jcm9zcy1hcm0t/Y2hlc3Qtd2l0aF8x/MjU4LTI2Mzc3Lmpw/Zz9zZW10PWFpc19o/eWJyaWQmdz03NDA"
        alt="portfolio image"
      />
      <div className="w-1/2">
      <h3 >
    <span className="rounded-full border bg-gray-200 p-1 px-2">About me</span>
  </h3>
      <h1 className="text-4xl mt-2">Crafting Digital Experiences with Passion</h1>
      <p>Hello! I'm a passionate frontend developer with a keen eye for design and a love for creating intuitive, dynamic user experiences.</p>

      <div className="icons flex gap-4 ">
      <FaGithub className="hover:scale-105 transition-transform text-3xl " />
      <CiLinkedin className="hover:scale-105 transition-transform text-3xl" />
      <SiGmail className="hover:scale-105 transition-transform text-3xl" />

      </div>
      </div>
      
    </div>
  </>;
};
export default About;
