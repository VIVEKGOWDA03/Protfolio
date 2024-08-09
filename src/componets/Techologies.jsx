import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { motion } from "framer-motion";

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
const Techologies = () => {
  return (
    <div className="boder-b border-neutral-800 pb-24">
     <motion.h1
       whileInView={{opacity:1, x:0}}
       initial={{x:-100 ,opacity:0}}
       transition={{duration:1.5}} className="my-20 text-centertext-4xl "> Techologies</motion.h1>
      <motion.div
       whileInView={{opacity:1, x:0}}
       initial={{x:-100 ,opacity:0}}
       transition={{duration:1.5}}
      className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          variants={iconVariants(2.5)}
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div variants={iconVariants(3)}
        animate="animate"  className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandNextjs className="text-7xl" />
        </motion.div>
        <motion.div variants={iconVariants(5)}
        animate="animate"  className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className="text-7xl  text-green-500" />
        </motion.div>
        <motion.div variants={iconVariants(3)}
        animate="animate"  className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiRedis className="text-7xl  text-red-700 " />
        </motion.div>
        <motion.div variants={iconVariants(6)}
        animate="animate"  className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaNodeJs className="text-7xl text-sky-700" />
        </motion.div>
        <motion.div variants={iconVariants(4)}
        animate="animate"  className="rounded-2xl border-4 border-neutral-800 p-4">
          <BiLogoPostgresql className="text-7xl text-cyan-400" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Techologies;
