"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

const products = [
  { id: 1, title: "Wooden Wall Clock", price: 26, category: "Accessories", image: "/sofa1.jpg" },
  { id: 2, title: "Gray Vintage Chair", price: 63, category: "Furniture", image: "/chair.jpg" },
  { id: 3, title: "Small Gray Table", price: 17, category: "Furniture", image: "/table.jpeg" },
  { id: 4, title: "Cablikeni Shawl", price: 99, category: "Accessories", image: "/familytable.jpg" },
  { id: 5, title: "Black Vase", price: 29, category: "Accessories", image: "/dinning.jpg" },
  { id: 6, title: "Chest Of Drawers", price: 62, category: "Furniture", image: "/kitchen.jpg" },
  { id: 7, title: "White Table Lamp", price: 17, category: "Furniture", image: "/tv.jpg" },
  { id: 8, title: "Minimal Circle Clock", price: 99, category: "Accessories", image: "/bed.jpg" },
];

// Grid animation (stagger children)
const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

// Card animation
const card: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function BestSelling() {
  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 bg-gray-50">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center mb-8 md:mb-12"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 tracking-wide">
          Best Selling Products
        </h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="h-1 bg-orange-500 mx-auto mt-2 rounded-full"
        />
      </motion.div>

      {/* Product Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
      >
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            variants={card}
            whileHover={{
              y: -4,
              scale: 1.03,
              rotate: 0.5,
            }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl overflow-hidden shadow-md text-center group border border-transparent hover:ring-4 hover:ring-orange-500/40 hover:border-orange-500 transition-all duration-300"
          >
            {/* Image */}
            <div className="w-full h-40 sm:h-44 md:h-48 overflow-hidden">
              <Image
                src={product.image}
                alt={product.title}
                width={300}
                height={300}
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                priority={index < 4}
              />
            </div>

            {/* Text */}
            <div className="p-3 sm:p-4">
              <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">
                {product.category}
              </p>
              <h3 className="font-semibold text-gray-900 text-sm sm:text-base md:text-base">
                {product.title}
              </h3>
              <motion.p
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="mt-1 text-base font-bold text-orange-500"
              >
                ${product.price}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}