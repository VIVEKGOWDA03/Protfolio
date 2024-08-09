import { CONTACT } from "../constants";
import {  motion } from "framer-motion";

const Personaldata = () => {
  return (
    <div className="boder-b border-neutral-900 pb-20">
      <motion.h1 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.5 }}
      className=" my-10 text-center text-4xl">Get in Touch</motion.h1>
      <div className="text-center tracking-tighter">
        <motion.p 
         whileInView={{ opacity: 1, x: 0 }}
         initial={{ x: -100, opacity: 0 }}
         transition={{ duration: 1 }}className="my-4">{CONTACT.address}</motion.p>
        <motion.p  className="my-4">{CONTACT.phoneNo}</motion.p>
        <motion.a
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ x: -100, opacity: 0 }}
          transition={{ duration: 1 }} href="#" className="boder-b">
          {CONTACT.email}
        </motion.a>
      </div>
    </div>
  );
};

export default Personaldata;
