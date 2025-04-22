import React from "react";
import Projectsfun from "./projectsfun";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const project = [
    {
      image:
        "https://kzmlzmjgwyfpzxk5zucw.lite.vusercontent.net/placeholder.svg?height=100&width=100",
      title: "Noteapp",
      description: "Google keep clone app where we can add edit note in that",
      language: ["React", "Js", "Css"],
    },
    {
      image:
        "https://kzmlzmjgwyfpzxk5zucw.lite.vusercontent.net/placeholder.svg?height=100&width=100",
      title: "Todo app",
      description:
        "Built a todo app where users can add their task, edit it and delete after completion",
      language: ["React", "js", "css"],
    },
    {
      image:
        "https://kzmlzmjgwyfpzxk5zucw.lite.vusercontent.net/placeholder.svg?height=300&width=100",
      title: "Hostatr website",
      description: "Built Hostatr website ",
      language: ["Html", "Css"],
    },
    {
      image:
        "https://kzmlzmjgwyfpzxk5zucw.lite.vusercontent.net/placeholder.svg?height=100&width=100",
      title: "Solo website",
      description: "Buit solo website",
      language: ["Html", "Css", "js", "Bootstrap"],
    },
    {
      image:
        "https://kzmlzmjgwyfpzxk5zucw.lite.vusercontent.net/placeholder.svg?height=100&width=100",
      title: "Portfolio",
      description: "built portfolio website for myself",
      language: ["React", "JS", "Tailwind css", "Css"],
    },
  ];

  return (
    <div className=" py-12 bg-gradient-to-br from-purple-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h4>
          <span className="rounded-full border-gray-200 bg-purple-100 text-purple-600 text-sm font-medium px-4 py-2 animate-pulse">
            My Work
          </span>
        </h4>
        <h1 className="text-3xl font-bold text-gray-900 mt-4">
          Featured Projects
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          A selection of my recent work and personal projects that showcase my
          skills and expertise.
        </p>
      </div>
      <div className="flex flex-wrap gap-10 p-6 justify-center">
        {project.map((project, index) => (
          <Projectsfun
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            language={project.language}
          />
        ))}
      </div>
      <div className="text-center">
        <button className="flex items-center border border-purple-300 text-purple-600 rounded-md hover:bg-purple-100 p-2 mx-auto transition duration-300">
          <FaGithub className="mr-2 text-lg" /> View More on GitHub
        </button>
      </div>
    </div>
  );
};

export default Projects;