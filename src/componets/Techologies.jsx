import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiRedux, SiJira } from "react-icons/si";
import { motion } from "framer-motion";
import tech1 from "../assets/Techno/tech3.gif"; 
import cloud from "../assets/Techno/cloud1.gif";
import api from "../assets/Techno/api1.gif"; 


const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ x: -100, opacity: 0 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl flex"
      >
          <img src={tech1} alt="Tech1" className="w-10 h-10 flex object-contain" />

        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ x: -100, opacity: 0 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(2.5)}
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <TbBrandNextjs className="text-7xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMongodb className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(8)}
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaHtml5 className="text-7xl text-orange-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaCss3Alt className="text-7xl text-purple-300" />
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaNodeJs className="text-7xl text-yellow-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(7)}
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <div className="min-w-fit h-full rounded transition ease-in-out delay-150 bg-transparent hover:-translate-y-1 hover:scale-110 hover:bg-indigo-100 duration-300">
            <SiRedux className="text-7xl text-green-500" />
          </div>
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiJira className="text-7xl text-purple-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src={cloud} alt="Tech1" className="w-[72px] h-[72px] object-contain" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src={api} alt="Tech1" className="w-[72px] h-[72px] object-contain" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
