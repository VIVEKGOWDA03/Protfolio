import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "../styles.css";
import { useSelector, useDispatch } from "react-redux";
import { toggleSwitch } from "../Slice/Slice";

export default function Toggle() {
  const isOn = useSelector((state) => state.toggle.isOn);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("toggleState", JSON.stringify(isOn));
  }, [isOn]);

  useEffect(() => {
    const savedState = localStorage.getItem("toggleState");
    if (savedState !== null) {
      dispatch(toggleSwitch(JSON.parse(savedState)));
    }
  }, [dispatch]);

  return (
    <div className="App flex justify-start relative ">
      <div
        className={`switch ${
          isOn ?   "bg-slate-400":"bg-[#666B77]" 
        }`}
        data-isOn={isOn}
      >
        <motion.div className="handle" layout transition={spring}>
          <div className="image-container">
            <img
              className={isOn ? "light w-full h-full" : "dark w-full h-full"}
              src={isOn ? "/assets/sun.png" : "/assets/moon.png"}
              alt={isOn ? "Sun" : "Moon"}
            />
          </div>
        </motion.div>
      </div>
      <input
        className="checkbox"
        type="checkbox"
        checked={isOn}
        onChange={() => dispatch(toggleSwitch())}
      />
    </div>
  );
}

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};
