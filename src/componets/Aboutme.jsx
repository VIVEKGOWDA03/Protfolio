import React from 'react'
import { ABOUT_TEXT } from "../constants";
import aboutme from "../assets/download.gif";
import { motion } from "framer-motion";
const Aboutme = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
          <h1 className="my-20 text-center text-4xl">
            {" "}
            About <span className="text-neutral-500"></span> me
          </h1>
          <div className="flex flex-wrap">
            <motion.div
            whileInView={{opacity:1, x:0}}
            initial={{x:-100 ,opacity:0}}
            transition={{duration:0.5}} className="w-full lg:w-1/2 lg:p-8">
              <div className="flex justify-center items-center">
                <img className="rounded-2xl" src={aboutme} alt=""></img>{" "}
              </div>
            </motion.div>
            <motion.div 
             whileInView={{opacity:1, x:0}}
             initial={{x:100 ,opacity:0}}
             transition={{duration:0.5}} 
            className="w-full lg:w-1/2">
              <div className="flex justify-center lg:justify-start">
                <p className="my-2 text-justify max-w-xl py-6">{ABOUT_TEXT} </p>
              </div>
            </motion.div>
          </div>
        </div>
      );
    };

export default Aboutme