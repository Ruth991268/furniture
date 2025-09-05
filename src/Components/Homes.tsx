import React from "react";
import Image from "next/image";

export default function Homes() {
  return (
    <div className="relative w-full h-screen bg-[#2d3a48] flex flex-col">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-16 py-6">
        {/* Logo */}
        <h1 className="text-white text-2xl font-bold">FELT</h1>

        {/* Menu */}
        <ul className="flex space-x-10 text-white text-lg font-medium">
          <li className="cursor-pointer hover:text-gray-300">Home</li>
          <li className="cursor-pointer hover:text-gray-300">About</li>
          <li className="cursor-pointer hover:text-gray-300">Products</li>
          <li className="cursor-pointer hover:text-gray-300">Gallery</li>
          <li className="cursor-pointer hover:text-gray-300">Contact</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-6">
        {/* Heading */}
        <h2 className="text-white font-extrabold text-6xl leading-snug tracking-wide">
          Furniture that <span className="block">Everyone Loves</span>
        </h2>

        {/* Sofa Image */}
        <div className="relative w-full max-w-5xl mt-12 flex justify-center">
          <Image
            src="/sofa.jpg" // 👈 since it's in /public, just reference like this
            alt="Sofa"
            width={900}
            height={500}
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}
