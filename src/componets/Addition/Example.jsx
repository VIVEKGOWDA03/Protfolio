import React, { useRef, useEffect } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./useDimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import "../Addition/add.css"; // Import CSS

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

export const Example = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  useEffect(() => {
    // Add or remove no-scroll class based on isOpen
    document.body.classList.toggle('no-scroll', isOpen);
    return () => document.body.classList.remove('no-scroll'); // Clean up on unmount
  }, [isOpen]);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <motion.div className="background" variants={sidebar} />
      <Navigation />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};
