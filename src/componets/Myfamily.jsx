import React, { useState } from "react";
import Hero from "./Hero";
import Techologies from "./Techologies";
import Experience from "./Experience";
import Projects from "./Projects";
import Personaldata from "./Personaldata";
import Home from "./Home";
import Aboutme from "./Aboutme";
import Toggle from "./Toggle";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
// import { Example } from "./Addition/Example";
const Myfamily = () => {
  const isOn = useSelector((state) => state.toggle.isOn);

  return (
    <div className="w-full pb-5 h-full overflow-x-hidden overflow-y-auto text-neutral-300 antialiased">
      <div className="fixed top-0 left-0 -z-10 h-full w-full">
        <div className="relative h-full w-full bg-slate-350">
          {!isOn ? (
            <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
          ) : (
            <div class="absolute top-0 -z-10 h-full w-full bg-white">
              <div class="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
            </div>
          )}
        </div>
      </div>
      {/* <div className="flex justify-start ">
        <Example/>
      </div> */}
      <div className="flex justify-end sticky pt-5 pr-5 lg:pr-0">
        <Toggle />
      </div>
      <div className="container mx-auto py-8 px-5">
        <Navbar />
        <div className={`${!isOn ? "bg-" : ""} hover:ml-[28px]`}>
          <Home
            label="Welcome Folks"
            labelClass={`${
              isOn ? "text-black hover:text-white" : "text-white"
            }`}
          />
        </div>
        <Hero />
        <Aboutme />
        <Techologies />
        <Experience />
        <Projects />
        <Personaldata />
        {/* <Card/> */}
      </div>
    </div>
  );
};

export default Myfamily;
