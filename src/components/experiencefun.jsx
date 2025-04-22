// const Experiencefun = ({ experience }) => {
//   return (
//     <>
//       <div className="relative pl-10 text-left my-5">
//         {experience.map((experience, index) => (
//           <div className="my-7" key={index}>
//             <div>
//               <span className="text-sm text-gray-600 ">{experience.period}</span>
//               <h1 className="my-1 text-lg font-semibold">{experience.title}</h1>
//               <h3 className="my-1 text-base text-gray-800">
//                 {experience.organization}
//               </h3>
//               <p className="my-1 text-gray-600">{experience.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };
// export default Experiencefun;

const Experiencefun = ({ experience }) => {
  return (
    <div className="relative pl-8 text-left my-5  ">
      {experience.map((experience, index) => (
        <div
          className="my-6 relative pl-6 before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-teal-600 before:rounded-full transition-all duration-300"
          key={index}
        >
          <div>
            <span className="text-sm text-teal-600 font-medium">
              {experience.period}
            </span>
            <h1 className="my-1 text-lg font-semibold text-gray-900">
              {experience.title}
            </h1>
            <h3 className="my-1 text-base text-teal-700">
              {experience.organization}
            </h3>
            <p className="my-1 text-gray-600">
              {experience.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experiencefun;
