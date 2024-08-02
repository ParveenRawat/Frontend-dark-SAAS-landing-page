"use client";
import pie from "@/assets/images/emojistar.png";
import cog from "@/assets/images/helix2.png";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export const CallToAction = () => {
  const sectionRef = useRef<HTMLImageElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [-150, 150]);
  return (
    <section
      ref={sectionRef}
      className="overflow-x-clip bg-black py-[72px] text-center text-white"
    >
      <div className="container relative max-w-xl">
        <motion.img
          style={{
            translateY: translateY,
          }}
          src={cog.src}
          alt="cog"
          className="absolute left-[calc(100%+36px)] top-6 hidden sm:flex"
        />
        <motion.img
          style={{
            translateY: translateY,
          }}
          src={pie.src}
          alt="pie"
          className="absolute -top-[120px] right-[calc(100%+24px)] hidden sm:flex"
        />
        <h2 className="section-header pt-12">Get instant access</h2>
        <p className="section-description mx-auto mt-5 max-w-xl">
          Celebrate the joy of accomplishment with an app designed to track your
          progress and motivate your efforts.
        </p>
        <form className="mx-auto mt-12 flex max-w-xl flex-col gap-4 sm:flex-row sm:justify-center">
          <input
            type="email"
            placeholder="your@email.com"
            className="rounded-lg bg-white/20 px-5 py-2 font-medium focus:outline-none"
          />
          <button className="h-12 rounded-lg bg-white px-5 font-medium text-black">
            Get access
          </button>
        </form>
      </div>
    </section>
  );
};
