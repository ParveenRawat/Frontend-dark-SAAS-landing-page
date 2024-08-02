"use client";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import FeatureIcon from "@/assets/icons/ecosystem.svg";
import { useEffect, useRef } from "react";

export const Feature = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const border = useRef<HTMLDivElement>(null);
  const offsetX = useMotionValue(-100);
  const offsetY = useMotionValue(-100);
  const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offsetX}px ${offsetY}px, black,transparent)`;
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (!border.current) return;
      const borderRect = border.current?.getBoundingClientRect();
      offsetX.set(e.x - borderRect?.x);
      offsetY.set(e.y - borderRect?.y);
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  });
  return (
    <div className="relative rounded-lg border border-white/30 px-5 py-10 text-center sm:flex-1">
      <motion.div
        className="absolute inset-0 rounded-lg border-2 border-purple-400"
        style={{
          WebkitMaskImage: maskImage,
          maskImage,
        }}
        ref={border}
      ></motion.div>
      <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-white text-black">
        <FeatureIcon />
      </div>
      <h2 className="mt-6 font-bold">{title}</h2>
      <p className="mt-2 text-white/70">{description}</p>
    </div>
  );
};

export default Feature;
