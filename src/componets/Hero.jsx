import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/vivek-img.jpg";

// import profilePic from "../assets/pic1.webp";
import { motion } from "framer-motion";
import code from "../assets/code.gif";
// import Home from "./Home";
import "../styles.css";
import { TextLoop } from "../components/ui/text-loop";
const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});
const Hero = ({ isOn }) => {
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
              className={`pb-16 animate-blin min-w-fit h-full animate-pulse ${
                isOn ? "text-black" : "text-white"
              } text-6xl font-bold tracking-tighter lg:mt-16 lg:text-8xl`}
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
              className=" flex gap-2 font-mono text-s   bg-gradient-to-r font-semibold from-pink-300 via-slate-500 to-purple-400 bg-clip-text text-3xl tracking-tighter text-transparent"
            >
              {/* Software Developer */}
              <TextLoop className="!from-pink-300 via-slate-500 to-purple-400">
                <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-400 bg-clip-text text-transparent">
                  Software
                </span>
                <span className="bg-gradient-to-r from-purple-400 via-pink-300 to-slate-500 bg-clip-text text-transparent">
                  Frontend
                </span>
                <span className="bg-gradient-to-r from-slate-500 via-purple-400 to-pink-300 bg-clip-text text-transparent">
                  <span>&nbsp;Backend</span>
                </span>
              </TextLoop>
              Developer
              <img className=" fle w-10 h-10" src={code} alt=""></img>
            </motion.span>
            <motion.p
              variants={container(0.8)}
              initial="hidden"
              animate="visible"
              className={`my-2 max-w-xl font-semibold ${
                isOn ? "text-black" : "text-white"
              } text-justify  py-6  tracking-tighter`}
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
              className="rounded-full w-[50%] h-[50%]"
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
