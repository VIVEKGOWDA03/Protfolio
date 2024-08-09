import React from "react";
import Navbar from "./componets/Navbar";
import Hero from "./componets/Hero";
import Techologies from "./componets/Techologies";
import Experience from "./componets/Experience";
import Projects from "./componets/Projects";
import Personaldata from "./componets/Personaldata";
import About from "./componets/about";


const App = () => {
  return (
    <div className="w-full g-black hello">
      <div className=" w-full overflow-x-hidden text-neutral-300 antialiased selection: g-cyan-300 selection:text-cyan-900">
        <div className="fixed  top-0 -z-10 h-full w-full">
        <div class="relative  h-full w-full bg-slate-950"><div class="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div><div class="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div></div>
        </div>
        <div className="container w-ful m-auto py-8">
          <Navbar />
          <div className="px-5">
            {" "}
            <Hero />
          </div>
          <div className="px-6">
            <About />
          </div>
          <div className="lg:px-5">
            {" "}
            <Techologies />
          </div>
          <div className="px-5">
            <Experience />
          </div>
          <div className="px-5">
          <Projects /></div>
        </div>
        <div className="px-5">
          <Personaldata />
        </div>
      </div>
    </div>
  );
};

export default App;
