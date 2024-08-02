"use client";
import acmeLogo from "../assets/images/acme.png";
import quantumLogo from "../assets/images/quantum.png";
import echoLogo from "../assets/images/echo.png";
import celestialLogo from "../assets/images/celestial.png";
import pulseLogo from "../assets/images/pulse.png";
import apexLogo from "../assets/images/apex.png";
import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  { src: acmeLogo, alt: "Acme Logo" },
  { src: quantumLogo, alt: "Quantum Logo" },
  { src: echoLogo, alt: "Echo Logo" },
  { src: celestialLogo, alt: "Celestial Logo" },
  { src: pulseLogo, alt: "Pulse Logo" },
  { src: apexLogo, alt: "Apex Logo" },
];

export const LogoTicker = () => {
  return (
    <section className="bg-black py-10 text-white/70 sm:py-12">
      <div className="container">
        <h2 className="text-center text-xl">
          Trusted by the world&apos;s most innovative teams
        </h2>
        <div className="mt-9 flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            transition={{
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
              duration: 10,
            }}
            initial={{ translateX: 0 }}
            animate={{ translateX: "-50%" }}
            className="flex flex-none gap-16 pr-16"
          >
            {images.map(({ src, alt }) => (
              <Image
                src={src}
                key={alt}
                alt={alt}
                className="h-8 w-auto flex-none"
              />
            ))}
            {images.map(({ src, alt }) => (
              <Image
                src={src}
                key={alt}
                alt={alt}
                className="h-8 w-auto flex-none"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
