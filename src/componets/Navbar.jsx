// import logo from "../assets/react.svg"
import logo from "../assets/logo.gif";

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
        <div className="">
          <a
            href="https://www.linkedin.com/in/vivek-gowda-616b28249"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedinIn size={30} />
          </a>
        </div>
        <div className="">
          <a
            href="https://github.com/VIVEKGOWDA03"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <FaGithub size={30} />
          </a>
        </div>

        <FaSquareXTwitter />
        <FaInstagram />
      </div>
    </div>
  );
};

export default Navbar;
