import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaArrowDown } from "react-icons/fa";

const Head = () => {
  return (
    <>
      <div className="my-20 ">
        <h4>
          <span className="rounded-full border bg-gray-200 p-1">
            Available for frontend Development
          </span>
        </h4>
        <h1 className="text-5xl p-3">Frontend Developer</h1>
        <p className="3">
          I build exceptional and accessible digital experiences for the web.
        </p>

        <div className="flex justify-center p-3 gap-3">
          <button className="flex border-1 p-2 bg-black text-white">
            View projects <FaArrowRight />
          </button>
          <button className="flex border-1 p-2">
            Download Resume <MdOutlineFileDownload />
          </button>
        </div>
        <div className=" justify-items-center my-7 ">
          <FaArrowDown />
        </div>
      </div>
    </>
  );
};
export default Head;
