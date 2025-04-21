import React from "react";
import Experiencefun from "./experiencefun";

const Experience = () => {
  const experience = [
    {
      period: "2025/03/01-present",
      title: "React developer intern",
      organization: "Softtech foundation",
      description:
        "Done frontend development intern focused on react.Buid dynamic and function websites using react",
    },
    {
      period: "2018-2020",
      title: "Intermediate level",
      organization: "Kathmandu Model Secondary School",
      description:
        "Took science faculty . studied various subjects like physics ,Chmeistry,Math etc.",
    },
    {
      period: "2021-present",
      title:
        "Bachelor of science in Computer Science and Information Technology",
      organization:
        "Asian School of Management and Technology(Affiliated to T.U)",
      description:
        "studied CSIT in bachelor level;Studied various courses like c,c++,c#,DSA,SAD throughout eight semester",
    },
  ];

  return (
    <>
      <div>
        <h3  ><span className="rounded-full border bg-gray-200 p-1">My Journey</span></h3>
        <h1 className="text-3xl">Work Experience & Education</h1>
        <p>A timeline of my professional career and educational background.</p>
        <Experiencefun experience={experience} />
      </div>
    </>
  );
};

export default Experience;
