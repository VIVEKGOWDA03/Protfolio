import { useState } from "react";
import { motion } from "framer-motion";

const AddOnAccordion = ({
  children,
  title,
  subTitle,
  innerShadow = true,
  startArrow,
  startImg,
  titleImg,
  borderBottom = false,
  isAccOpen = false,
  className,
  stroke,
}) => {
  const [isOpen, setIsOpen] = useState(isAccOpen);
  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <div
      id="accordion-flush"
      data-accordion="collapse"
      className={`w-full  bg-[#27272F] ${
        isOpen && innerShadow ? "shadow-[0px_4px_25px_0px_#00000012_inset]" : ""
      } ${className}`}
    >
      <h2 id="accordion-flush-heading-1" className={`w-full px-0 g-[#EBEBEB]`}>
        <button
          type="button"
          className={`flex items-center h-[25px] justify-between w-full py-4 font-medium rtl:text-right text-292929 text-sm gap-3 ${
            borderBottom ? "border-b border-[#B8B8B857]" : ""
          }`}
          onClick={toggleAccordion}
        >
          <div className="flex font-inter -ml-[13px] gap-2 text-sm font-semibold flex-co">
            <img
              className="w-[25px] h-[25px] mt-[1px] flex"
              src={startImg}
              alt="startImg"
            />
            {title}
            {subTitle}
          </div>
          {titleImg ? (
            <motion.div
              animate={{
                rotate: isOpen ? "90deg" : "0",
                position: isOpen ? "absolute" : "relative",
              }}
              transition={{ duration: 0.5 }}
            >
              <img src="/assets/down-array-grey.svg" alt="arrow" />
            </motion.div>
          ) : (
            <motion.div
              animate={{
                rotate: isOpen ? "180deg" : "0",
              }}
              transition={{ duration: 0.5, ease: "backOut" }}
            >
              <div className="">
                <img src={stroke} alt="arrow" />
              </div>
            </motion.div>
          )}
        </button>
      </h2>
      <div className={isOpen ? "" : "hidden"}>{children}</div>
    </div>
  );
};

export default AddOnAccordion;
