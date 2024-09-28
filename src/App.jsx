import { Outlet } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const App = () => {
  return (     
      <AnimatePresence mode="wait" initial={false}>
        <motion.div >
          <Outlet />
        </motion.div>
      </AnimatePresence>
  );
};

export default App;