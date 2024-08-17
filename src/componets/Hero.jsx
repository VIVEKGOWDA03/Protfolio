import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/pic3.gif";
// import profilePic from "../assets/pic1.webp";
import { motion } from "framer-motion";
import code from "../assets/code.gif";
// import Home from "./Home";
import "../styles.css";
const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});
const Hero = () => {
  return (
    <div className="border-b min-w border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex pl-2  flex-col items-center lg:items-start">
            <motion.h1
              //   animate={{ x: 100 }}
              // initial={{x:-100, opacity:0}}
              // animate={{x:0 ,opacity:1}}
              // transition={{duration:0.5, delay:1}}
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 animate-blin  min-w-fit h-full animate-pulse  text-6xl font-bold  tracking-tighter lg:mt-16 lg:text-8xl"
            >
              {/* <div className="min-w-fit h-full rounded-full transition ease-in-out delay-150 bg-transparent hover:-translate-y-1 hover:scale-110  hover:bg-indigo-500  duration-300 ..."> */}
              Vivek Gowda
              {/* <Home/> */}

              {/* </div> */}
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className=" flex gap-2  bg-gradient-to-r from-pink-300 via-slate-500 to-purple-400 bg-clip-text text-3xl tracking-tighter text-transparent"
            >
              Software Developer
              <img className=" fle w-10 h-10" src={code} alt=""></img>
            </motion.span>
            <motion.p
              variants={container(0.8)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl text-justify  py-6 font-light tracking-tighter"
            >
              {" "}
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="rounded"
              src={profilePic}
              alt=""
            ></motion.img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
