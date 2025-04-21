import React from "react";

const Skillfun = ({ skill }) => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
        {skill.map((skill, index) => (
          <button className="bg-white border border-gray-300 rounded-lg p-3 text-center text-base hover:bg-gray-100 transition" key={index}>{skill}</button>
        ))}
      </div>
    </>
  );
};

export default Skillfun;