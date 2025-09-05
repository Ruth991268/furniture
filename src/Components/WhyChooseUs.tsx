// components/WhyChooseUs.tsx
import { Truck, ShieldCheck, Wrench, CheckSquare } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      {/* Stats Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        <div className="bg-white shadow rounded-2xl p-6 text-center">
          <h2 className="text-2xl font-bold">7</h2>
          <p className="text-gray-500">Year Experience</p>
        </div>
        <div className="bg-white shadow rounded-2xl p-6 text-center">
          <h2 className="text-2xl font-bold">2</h2>
          <p className="text-gray-500">Opened in the country</p>
        </div>
        <div className="bg-white shadow rounded-2xl p-6 text-center">
          <h2 className="text-2xl font-bold">10k+</h2>
          <p className="text-gray-500">Furniture sold</p>
        </div>
        <div className="bg-white shadow rounded-2xl p-6 text-center">
          <h2 className="text-2xl font-bold">260+</h2>
          <p className="text-gray-500">Variant Furniture</p>
        </div>
      </div>

      {/* Why Choosing Us */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Why Choosing <span className="text-orange-500">Us</span>
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Molestie vel nisl justo vitae 
            ridiculus malesuada id dapibus posuere. At in a duis tortor sem lectus 
            eget. Purus vivamus accumsan egestas risus. Facilisis lacus condimentum 
            pulvinar vulputate integer.
          </p>
          <button className="bg-orange-500 text-white px-6 py-2 rounded-lg shadow hover:bg-orange-600 transition">
            Read More
          </button>
        </div>

        {/* Right Side */}
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-orange-500 text-white rounded-xl p-6 text-center shadow">
            <Truck className="mx-auto mb-3 h-10 w-10" />
            <h3 className="font-semibold">Free Delivery</h3>
          </div>

          <div className="bg-gray-700 text-white rounded-xl p-6 text-center shadow">
            <ShieldCheck className="mx-auto mb-3 h-10 w-10" />
            <h3 className="font-semibold">Secure Payment</h3>
          </div>

          <div className="bg-gray-200 text-gray-800 rounded-xl p-6 text-center shadow">
            <Wrench className="mx-auto mb-3 h-10 w-10" />
            <h3 className="font-semibold">Free Installation</h3>
          </div>

          <div className="bg-orange-500 text-white rounded-xl p-6 text-center shadow">
            <CheckSquare className="mx-auto mb-3 h-10 w-10" />
            <h3 className="font-semibold">Guarantee</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
