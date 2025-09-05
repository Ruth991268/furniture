"use client";

import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Contact() {
  const pathname = usePathname();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          {pathname === "/" ? "Contact Us" : "Get In Touch"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Send Us a Message</h3>
            {isSubmitted ? (
              <p className="text-green-500">Thank you for reaching out! We&apos;ll get back to you soon.</p>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
                    rows={4}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Store Location */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Store Location</h3>
            <div className="relative w-full h-64 mb-4">
              <Image
                src="/store-location.jpg"
                alt="Our Store"
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <p className="text-gray-700 mb-2">Visit us at:</p>
            <p className="text-gray-700 font-semibold">123 Furniture St, Addis Ababa, Ethiopia</p>
            <p className="text-gray-700">Open Monday to Saturday, 9 AM - 6 PM</p>
          </div>
        </div>
      </div>
    </section>
  );
}