import React from "react";
import Projectsfun from "./projectsfun";
import { FaGithub } from "react-icons/fa";
import noteapp from "./images/noteapp.png";
import hosttar from "./images/Hosttar.png";
import solo from "./images/solo.png"
import portfolio from "./images/portfolio.png"
import camera from "./images/camera.png"
import nike from "./images/nike.png"
const Projects = () => {
  const project = [
    {
      image: noteapp,
      title: "Noteapp",
      description: "Google keep clone app where we can add edit note in that",
      language: ["React, Js, Css"],
      liveDemoUrl: "https://noteapp-lovat.vercel.app/",
      codeUrl: "https://github.com/yogesh5454/Noteapp",
    },

    {
      image: hosttar,
      title: "Hostatr website",
      description: "Built Hostatr website",
      language: ["Html, Css"],
      liveDemoUrl: "https://yogesh5454.github.io/hosttar.github.io/",
      codeUrl: "https://github.com/yogesh5454/hosttar.github.io",
    },
    {
      image:
       solo,
      title: "Solo website",
      description: "Built solo website",
      language: ["Html, Css, js, Bootstrap"],
      liveDemoUrl: "https://solo-psi.vercel.app/",
      codeUrl: "https://github.com/yogesh5454/Solo",
    },
    {
      image:
        portfolio,
      title: "Portfolio",
      description: "Built portfolio website for myself",
      language: ["React, JS, Tailwind css, Css"],
      liveDemoUrl: "https://portfolio-five-orcin-99.vercel.app/",
      codeUrl: "https://github.com/yogesh5454/Portfolio",
    },
    {
      image:camera,
      title:"Camshop",
      description:"Built camshop ecommerce website with add to cart features",
      language:["React,Tailwind css,Js,CSS"],
      liveDemoUrl:"https://camshop-teal.vercel.app/",
      codeUrl:"https://github.com/yogesh5454/Camshop"
    },{
      image:nike,
      title:"Nike Website",
      description:"Built Nike website which features products ,reviews etc",
      language:["React,Tailwind css,Js,CSS"],
      liveDemoUrl:"https://nikewebsite-two.vercel.app/",
      codeUrl:"https://github.com/yogesh5454/Nikewebsite"
    }
  ];

  return (
    <div className="my-20 py-12">
      <div className="px-8 text-center">
        <h4>
          <span className="rounded-full border-gray-200 bg-purple-100 text-purple-600 text-sm font-medium px-4 py-2">
            My Work
          </span>
        </h4>
        <h1 className="text-3xl font-bold text-gray-900 mt-4">
          Featured Projects
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          A selection of my recent work and personal projects that showcase my
          skills and expertise.
        </p>
      </div>
      <div className="flex flex-wrap gap-10 p-8 justify-center">
        {project.map((project, index) => (
          <Projectsfun
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            language={project.language}
            liveDemoUrl={project.liveDemoUrl} // Pass live demo URL
            codeUrl={project.codeUrl} // Pass code URL
          />
        ))}
      </div>
      <div className="text-center">
        <button className="flex items-center border border-purple-300 text-purple-600 rounded-md hover:bg-purple-100 p-2 mx-auto transition duration-300">
          <FaGithub className="mr-2 text-lg" /> <a href="https://github.com/yogesh5454"> View More on GitHub</a>
        </button>
      </div>
    </div>
  );
};

export default Projects;
