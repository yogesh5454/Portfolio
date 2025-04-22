import React from "react";

const Skillfun = ({ skill }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-4">
      {skill.map((skill, index) => (
        <button
          className="bg-white border border-indigo-200 rounded-lg p-4 text-center text-base font-medium
           text-gray-800 hover:bg-indigo-100 hover:border-indigo-400 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          key={index}
        >
          {skill}
        </button>
      ))}
    </div>
  );
};

export default Skillfun;
