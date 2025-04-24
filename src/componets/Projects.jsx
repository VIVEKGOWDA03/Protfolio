import { useNavigate } from "react-router-dom";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { PinContainer } from "../components/ui/Pin";

const Projects = ({ isOn }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      className={`border-b ${
        isOn ? "text-black" : "text-white"
      } border-neutral-800 pb-24`}
    >
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl font-bold font-mono"
      >
        Projects
      </motion.h1>

      <div className="font-bold font-mono">
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ x: -100, opacity: 0 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
              onClick={() => {
                if (project?.navigate) {
                  window.location.href = project.navigate;
                }
              }}
            >
              <PinContainer
                title={project.title}
                href={project.navigate || "#"}
                containerClassName="relative hover:z-[999]"
                className="flex justify-center items-center"
              >
                <div className="w-[150px] h-[200px]"></div>
                <img
                  src={project.image}
                  alt={project.title || "Project Image"}
                  className="w-[200px] h-auto  rounded-lg border border-red-500"
                />
              </PinContainer>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ x: 100, opacity: 0 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 flex items-center gap-2 font-semibold">
                {project.title}
                {project.navigate && (
                  <a
                    href={project.navigate}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/assets/link.png"
                      alt="External Link"
                      className="w-5 h-5"
                    />
                  </a>
                )}
              </h6>

              <p className="mb-4 text-neutral-400">{project.description}</p>

              <div className="flex flex-wrap gap-1">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
