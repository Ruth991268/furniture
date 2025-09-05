"use client";

import React from "react";
import { motion } from "framer-motion";
import Nav from "./Nav";

export default function HomeContent() {
  return (
    <div className="relative w-full h-screen bg-[#2d3a48] flex flex-col overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover sm:scale-100 scale-105 z-0"
      >
        <source src="/furniture 1.mp4" type="video/mp4" />
        <span className="text-white text-sm sm:text-base md:text-lg p-4">
          Your browser does not support the video tag.
        </span>
      </video>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30 z-5"></div>

      {/* Navbar */}
      <Nav />

      {/* Hero Section */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-serif text-white font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-8xl leading-tight tracking-wide drop-shadow-lg"
        >
          Furniture 
          <motion.span
            animate={{
              color: ["#f97316", "#fb923c", "#f97316"], // orange-500 → orange-400 → back
              textShadow: [
                "0px 0px 6px rgba(249, 115, 22, 0.6)",
                "0px 0px 12px rgba(251, 146, 60, 0.8)",
                "0px 0px 6px rgba(249, 115, 22, 0.6)",
              ],
              y: [0, -4, 0], // subtle floating effect
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="block font-bold mt-2 sm:mt-3 md:mt-4"
          >
            Everyone Loves
          </motion.span>
        </motion.h2>
      </div>
    </div>
  );
}