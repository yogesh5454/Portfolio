
import React from "react";
import { FaAffiliatetheme } from "react-icons/fa6";
import { TiDocumentText } from "react-icons/ti";

const Nav = () => {
    return <>
    <div className="nav  p-3 flex">
        <div className="mr-7 w-1/3">Yogesh Sapkota</div>
        <div className="navdetails px-10 gap-4 mr-15 flex w-1/3">
            <a className="hover:bg-lime-200" href="about ">About</a>
            <a className="hover:bg-lime-200" href="Skills">Skills</a>
            <a className="hover:bg-lime-200"href="experience">Experience</a>
            <a className="hover:bg-lime-200" href="projects">Projects</a>
            <a className="hover:bg-lime-200"href="contact">Contact</a>
        </div>
        <div className="icons flex w-1/3 gap-4 ml-5">
        <FaAffiliatetheme  />
        <div className="flex gap-1 border-1">
        <TiDocumentText />
        Resume
        </div>
        </div>
    </div>
    </>
};
export default Nav;

