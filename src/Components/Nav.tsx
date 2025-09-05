"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, Variants } from "framer-motion";
import { useState } from "react";

// Animation variants for the nav
const navVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

// Animation variants for the mobile menu
const mobileMenuVariants: Variants = {
  hidden: { opacity: 0, x: "100%" },
  show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

export default function Nav() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Conditional colors based on route
  const linkColor = pathname === "/" ? "text-white" : "text-orange-500";
  const hoverColor = pathname === "/" ? "hover:text-gray-300" : "hover:text-orange-600";
  const logoColor = pathname === "/" ? "text-white" : "text-orange-500";

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    console.log("Mobile menu open:", !isMobileMenuOpen); // Debug log
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="show"
      aria-label="Main navigation"
      className="relative z-20 flex justify-between items-center px-4 sm:px-6 md:px-8 py-4 bg-transparent"
    >
      {/* Logo */}
      <motion.h1
        className={`font-bold text-xl sm:text-2xl ${logoColor} drop-shadow-md`}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <Link href="/">Sofahub</Link>
      </motion.h1>

      {/* Desktop Menu */}
      <ul className="hidden sm:flex space-x-6 md:space-x-10 text-base sm:text-lg font-medium">
        {["/", "/about", "/product", "/contact"].map((path, index) => {
          const name = ["Home", "About", "Products", "Contact"][index];
          return (
            <motion.li
              key={path}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Link
                href={path}
                className={`cursor-pointer ${linkColor} ${hoverColor} transition-colors duration-300 ${
                  pathname === path ? "font-bold" : ""
                }`}
              >
                {name}
              </Link>
            </motion.li>
          );
        })}
      </ul>

      {/* Hamburger Icon for Mobile */}
      <button
        aria-label="Toggle mobile menu"
        className={`sm:hidden text-2xl ${linkColor} focus:outline-none focus:ring-2 focus:ring-orange-500/40`}
        onClick={toggleMobileMenu}
      >
        {isMobileMenuOpen ? "✕" : "☰"}
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          variants={mobileMenuVariants}
          initial="hidden"
          animate="show"
          className="sm:hidden fixed top-0 right-0 w-full h-screen bg-[#2d3a48] z-30 flex flex-col items-center justify-center space-y-8"
        >
          {["/", "/about", "/product", "/contact"].map((path, index) => {
            const name = ["Home", "About", "Products", "Contact"][index];
            return (
              <motion.div
                key={path}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Link
                  href={path}
                  className={`text-2xl font-medium ${linkColor} ${hoverColor} transition-colors duration-300 ${
                    pathname === path ? "font-bold" : ""
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {name}
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      )}
    </motion.nav>
  );
}