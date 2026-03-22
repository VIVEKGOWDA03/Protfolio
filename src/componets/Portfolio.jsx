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
import { TracingBeam } from "../components/ui/tracing-beam";
import Switch from "./Switch";
import { TextLoop } from "../components/ui/text-loop";
import Drag from "../components/ui/DragCursor";
const Portfolilo = () => {
  const isOn = useSelector((state) => state.toggle.isOn);

  return (
    <div className="">
      {/* <Drag isOn={isOn} /> */}
      <TracingBeam>
        <div className={`w-full pb-5 h-full overflow-x-hidden overflow-y-auto ${isOn ? "text-neutral-900" : "text-neutral-300"} antialiased`}>
          <div className="fixed top-0 left-0 -z-10 h-full w-full">
            <div className="relative h-full w-full bg-slate-350">
              {!isOn ? (
                <div class="relative h-full w-full bg-black">
                  <div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
                  <div class="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
                </div>
              ) : (
                <div class="absolute top-0 -z-10 h-full w-full bg-white">
                  <div class="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
                </div>
              )}
            </div>
          </div>
          <div className="flex justify-end sticky pt-5 pr-5 lg:pr-0">
            {/* <Toggle isOn={isOn} /> */}
            <Switch isOn={isOn} />
          </div>

          <div className="container mx-auto py-8 px-[10%]">
            <Navbar />
            <div
              className={`hidden lg:block hover:ml-[28px]`}
            >
              <Home
                label="Hello Folks"
                labelClass={`${
                  isOn ? "text-black hover:text-white" : "text-white"
                }`}
              />
            </div>

            <Hero isOn={isOn} />
            <Aboutme isOn={isOn} />
            <Techologies isOn={isOn} />
            <Experience isOn={isOn} />
            <Projects isOn={isOn} />
            <Personaldata isOn={isOn} />
            {/* <Card/> */}
          </div>
        </div>
      </TracingBeam>
    </div>
  );
};

export default Portfolilo;
