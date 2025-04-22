// import React from "react";
// import Experiencefun from "./experiencefun";

// const Experience = () => {
//   const experience = [
//     {
//       period: "2025/03/01-present",
//       title: "React developer intern",
//       organization: "Softtech foundation",
//       description:
//         "Done frontend development intern focused on react.Buid dynamic and function websites using react",
//     },
//     {
//       period: "2018-2020",
//       title: "Intermediate level",
//       organization: "Kathmandu Model Secondary School",
//       description:
//         "Took science faculty . studied various subjects like physics ,Chmeistry,Math etc.",
//     },
//     {
//       period: "2021-present",
//       title:
//         "Bachelor of science in Computer Science and Information Technology",
//       organization:
//         "Asian School of Management and Technology(Affiliated to T.U)",
//       description:
//         "studied CSIT in bachelor level;Studied various courses like c,c++,c#,DSA,SAD throughout eight semester",
//     },
//   ];

//   return (
//     <>
//       <div>
//         <h3  ><span className="rounded-full border-gray-200 bg-gray-200 p-2">My Journey</span></h3>
//         <h1 className="text-3xl">Work Experience & Education</h1>
//         <p>A timeline of my professional career and educational background.</p>
//         <Experiencefun  experience={experience}/>
//       </div>
//     </>
//   );
// };

// export default Experience;

import React from "react";
import Experiencefun from "./experiencefun";

const Experience = () => {
  const experience = [

    {
      period: "📅 2018 – 2020",
      title: "🎓 Intermediate Level",
      organization: "Kathmandu Model Secondary School,Bagbazzar",
      description:
        "Completed higher secondary education with a focus on science. Studied core subjects including Physics, Chemistry, and Mathematics",
    },
    {
      period: "📅 2021 – Present",
      title:
        "🎓 Bachelor of Science in Computer Science and Information Technology",
      organization:
        "Asian School of Management and Technology(Affiliated to T.U),Gongabu",
      description:
        "Pursuing a Bachelor's degree in CSIT. Completed coursework in programming languages (C, C++, C#), Data Structures & Algorithms (DSA),Web Technology and System Analysis & Design (SAD) across eight semesters.",
    },
  ];

  return (
    <div className="py-12  bg-gradient-to-br from-teal-50 to-gray-100 ">
      <div className="max-w-3xl mt-30 mx-auto px-6 text-center">
        <h3>
          <span className="rounded-full border-gray-200 bg-teal-100 text-teal-600 text-sm font-medium px-4 py-2 animate-pulse">
            My Journey
          </span>
        </h3>
        <h1 className="text-3xl font-bold text-gray-900 mt-4">
          Work Experience & Education
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          A timeline of my professional career and educational background.
        </p>
        <Experiencefun experience={experience} />
      </div>
    </div>
  );
};

export default Experience;
