"use client";
import ArrowIcon from "@/assets/icons/arrow-w.svg";
import cursorImage from "@/assets/images/cursor.png";
import messageImage from "@/assets/images/message.png";
import Image from "next/image";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative overflow-clip bg-black bg-[linear-gradient(to_bottom,#000000,#200D42_34%,#4F21A1_65%,#A46ED8_82%)] py-[72px] text-white sm:py-24">
      <div className="absolute left-1/2 top-[calc(100%-96px)] h-[375px] w-[750px] -translate-x-1/2 rounded-[100%] border border-[#B48CDE] bg-black bg-[radial-gradient(closest-side,#000_82%,#9560EB)] sm:top-[calc(100%-120px)] sm:h-[768px] sm:w-[1536px] lg:h-[1200px] lg:w-[2800px]"></div>
      <div className="container relative">
        <div className="flex items-center justify-center">
          <a
            href="#"
            className="inline-flex gap-3 rounded-lg border border-white/30 px-2 py-1"
          >
            <motion.span
              animate={{
                backgroundPositionX: "100%",
              }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
                duration: 3,
              }}
              className="bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F0B2,#2FD8FE,#F87AFF,#FB93D0,#FFDD99,#C3F0B2,#F87AFF)] bg-clip-text text-transparent [background-size:200%]"
            >
              Version 2.0 is here
            </motion.span>
            <span className="inline-flex items-center gap-[6px]">
              <span>Read More</span>
              <ArrowIcon />
            </span>
          </a>
        </div>
        <div className="mt-8 flex justify-center">
          <div className="relative inline-flex">
            <motion.div
              className="absolute right-[476px] top-[108px] hidden sm:inline-flex"
              drag
              dragSnapToOrigin
            >
              <Image
                src={cursorImage}
                alt="cursor Image"
                height={200}
                width={200}
                className="max-w-none z-10"
                draggable="false"
              />
            </motion.div>
            <h1 className="inline-flex text-center text-7xl font-bold tracking-tighter sm:text-9xl">
              One Task <br />
              at a Time
            </h1>
            <motion.div

              className="absolute left-[498px] top-[56px] hidden sm:inline-flex"
              drag
              dragSnapToOrigin

            >
              <Image
                src={messageImage}
                alt="message Image"
                height={200}
                width={200}
                className="max-w-none z-10"
                draggable="false"
              />

            </motion.div>
          </div>
        </div>
        <div className="flex justify-center">
          <p className="mt-8 max-w-md text-center text-xl">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes.
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <button className="btn-primary">Get for free</button>
        </div>
      </div>
    </section>
  );
};
