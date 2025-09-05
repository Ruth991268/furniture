import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-700 py-12 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-orange-600 mb-4">SofaHub</h2>
          <p className="text-sm text-gray-600">
            Premium furniture designed for comfort and style. Bringing elegance to every home.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-orange-600">Home</Link></li>
            <li><Link href="/about" className="hover:text-orange-600">About Us</Link></li>
            <li><Link href="/services" className="hover:text-orange-600">Services</Link></li>
            <li><Link href="/contact" className="hover:text-orange-600">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact</h3>
          <ul className="space-y-2 text-gray-600">
            <li>📍 Bole, Addis Ababa, Ethiopia</li>
            <li>📞 +251 911 234 567</li>
            <li>✉️ info@sofahub.com</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-gray-600">
            <a href="#" className="hover:text-orange-600"><Facebook /></a>
            <a href="#" className="hover:text-orange-600"><Instagram /></a>
            <a href="#" className="hover:text-orange-600"><Twitter /></a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-12 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} SofaHub. All rights reserved.
      </div>
    </footer>
  );
}