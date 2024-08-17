// import logo from "../assets/react.svg"
import logo from "../assets/logo.gif";
import linkedin from "../assets/linkedin.gif"
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="mb-20  flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt=""></img>
      </div>
      <div className="m-8 bg-whit flex items-center justify-center gap-4 text-2xl">
        <div className="min-w-fit rounded h-full transition ease-in-out delay-150 g-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...">
          <a
            href="https://www.linkedin.com/in/vivek-gowda-616b28249"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <img className="w-9 h-9" src={linkedin}  ></img>
            {/* <FaLinkedinIn size={30} /> */}
          </a>
        </div>
        <div className="min-w-fit h-full rounded-full transition ease-in-out delay-150 bg-black hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...">
          <a
            href="https://github.com/VIVEKGOWDA03"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <FaGithub size={30} />
          </a>
        </div>

        <div className="min-w-fit h-full rounded-full transition ease-in-out delay-150 bg-black hover:-translate-y-1 hover:scale-110 hover:bg-white duration-300 ...">
      <FaSquareXTwitter />
      </div>
        <div className="min-w-fit h-full rounded-full transition ease-in-out delay-150 bg-black hover:-translate-y-1 hover:scale-110 hover:bg-red-700 duration-300 ...">
        <FaInstagram />
      </div>
      </div>
    </div>
  );
};

export default Navbar;
