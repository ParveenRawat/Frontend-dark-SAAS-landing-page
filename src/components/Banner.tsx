"use client";

import { motion } from "framer-motion";

export const Banner = () => {
  return (
    <motion.div
      animate={{
        backgroundPositionX: "100%",
      }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
        duration: 10,
      }}
      className="bg-[linear-gradient(to_right,#FCD6FFB3,#29D8FFB3,#FFFD80B3,#F89ABFB3,#FCD6FFB3,#29D8FFB3,#FFFD80B3,#F89ABFB3,#FCD6FFB3)] py-3 text-center [background-size:200%]"
    >
      <div className="container">
        <p className="font-medium">
          <span className="hidden sm:inline-flex">
            Introducing a completely redesigned interface -
          </span>
          <a href="#" className="font-medium underline underline-offset-4">
            Explore the demo
          </a>
        </p>
      </div>
    </motion.div>
  );
};
