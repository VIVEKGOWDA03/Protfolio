import React from "react";
import { motion } from "framer-motion";
import "../styles.css";
import { useSelector, useDispatch } from "react-redux";
import { toggleSwitch } from '../Slice/Slice'; // Import the toggleSwitch action

export default function Toggle() {
  const isOn = useSelector((state) => state.toggle.isOn);
  const dispatch = useDispatch();

  return (
    <div className="App flex justify-start relative">
      <div className="switch" data-isOn={isOn}>
        <motion.div className="handle" layout transition={spring} />
      </div>
      <input
        className="checkbox"
        type="checkbox"
        checked={isOn}
        onChange={() => dispatch(toggleSwitch())}  // Dispatch the toggleSwitch action on change
      />
    </div>
  );
}

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};
