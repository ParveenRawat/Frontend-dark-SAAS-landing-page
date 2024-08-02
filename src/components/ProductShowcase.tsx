"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import appScreen from "../assets/images/app-screen.png";
import { useRef } from "react";

export const ProductShowcase = () => {
  const appImage = useRef<HTMLImageElement>(null);
  const { scrollYProgress } = useScroll({
    target: appImage,
    offset: ["start end", "end end"],
  });
  const rotateX = useTransform(scrollYProgress, [0, 1], [45, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  return (
    <section className="overflow-clip bg-[linear-gradient(to_bottom,black,#5D2CA8)] py-[72px] text-white sm:py-24">
      <div className="container">
        <h2 className="section-header">Intuitive interface</h2>
        <div className="mx-auto max-w-xl">
          <p className="section-description py-5">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes,
            one task at a time.
          </p>
        </div>
        <motion.div
          style={{
            opacity: opacity,
            rotateX: rotateX,
            transformPerspective: "800px",
          }}
          className="flex justify-center pt-10"
        >
          <Image src={appScreen} alt="app screen" ref={appImage} />
        </motion.div>
      </div>
    </section>
  );
};
