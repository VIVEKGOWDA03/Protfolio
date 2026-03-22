import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = ({ isOn }) => {
  return (
    <div
      className={`border-b font-mono ${
        isOn ? "text-black" : "text-white"
      } border-neutral-900 pb-4`}
    >
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl font-bold font-mono"
      >
        Experience
      </motion.h1>
      <div className="">
        {EXPERIENCES.map((experience, index) => (
          <div
            key={index}
            className="mb-8 flex w-full bg-whit flex-wra justify-center"
          >
            {/* <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ x: -100, opacity: 0 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/2"
            ></motion.div> */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ x: 100, opacity: 0 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <div className="flex items-center gap-4 mb-2">
                <img
                  src={experience.logo}
                  alt={experience.company}
                  className="w-10 h-10 object-contain rounded"
                />

                <h6 className="font-semibold">
                  {experience.role} -{" "}
                  <span className={`text-2xl ${!isOn ? "text-purple-100" : "text-purple-900"}  `}>
                    {experience.company}
                  </span>
                </h6>
              </div>

              <p className={`mb-2 text-sm ${!isOn ? "text-neutral-400" : "text-neutral-900"} `}>{experience.year}</p>

              <ul className={`mb-4 ${!isOn ? "text-neutral-400" : "text-neutral-700"}`}>
                {experience.description.map((point, idx) => (
                  <li key={idx} className="mb-2">
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
