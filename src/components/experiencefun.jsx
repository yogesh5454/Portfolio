const Experiencefun = ({ experience }) => {
  return (
    <>
      <div className="relative pl-10 text-left my-5">
        {experience.map((experience, index) => (
          <div className="my-7" key={index}>
            <div>
              <span className="text-sm text-gray-600 ">{experience.period}</span>
              <h1 className="my-1 text-lg font-semibold">{experience.title}</h1>
              <h3 className="my-1 text-base text-gray-800">
                {experience.organization}
              </h3>
              <p className="my-1 text-gray-600">{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Experiencefun;
