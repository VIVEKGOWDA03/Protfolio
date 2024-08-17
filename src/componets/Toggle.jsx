import React from "react";
import { motion } from "framer-motion";
import "../styles.css";

export default function Toggle({ isOn, toggleSwitch }) {
  return (
    <div className="App flex justify-start relative">
      <div className="switch" data-isOn={isOn}>
        <motion.div className="handle" layout transition={spring} />
      </div>
      <input
        className="checkbox"
        type="checkbox"
        checked={isOn}
        onChange={toggleSwitch}
      />
    </div>
  );
}

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};
