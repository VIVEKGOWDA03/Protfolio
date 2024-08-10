import Navbar from "./componets/Navbar";
import Hero from "./componets/Hero";
import Techologies from "./componets/Techologies";
import Experience from "./componets/Experience";
import Projects from "./componets/Projects";
import Personaldata from "./componets/Personaldata";
import Home from "./componets/Home";
import Aboutme from "./componets/Aboutme";

const App = () => {
  return (
    <div className="w-full h-full overflow-x-hidden overflow-y-auto text-neutral-300 antialiased">
      <div className="fixed top-0 left-0 -z-10 h-full w-full">
        <div className="relative h-full w-full bg-slate-950">
          <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
          <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        </div>
      </div>
      <div className="container mx-auto py-8 px-5">
        <Navbar />
        <div className="-mt-1  ml-5">
          {" "}
          <Home />
        </div>
        <Hero />
        <Aboutme />
        <Techologies />
        <Experience />
        <Projects />
        <Personaldata />
      </div>
    </div>
  );
};

export default App;
