// components/Testimonials.tsx
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Mekdes A.",
    location: "Addis Ababa, Ethiopia",
    comment:
      "The sofa I bought is so comfortable and stylish. Delivery was fast and the free installation was a big plus!",
    image: "/customer1.jpg", // put images in public/customers/
  },
  {
    id: 2,
    name: "Samuel T.",
    location: "Bahir Dar, Ethiopia",
    comment:
      "I love the quality of the furniture. It feels durable and modern. Highly recommended!",
    image: "/customer2.jpg",
  },
  {
    id: 3,
    name: "Hana G.",
    location: "Mekelle, Ethiopia",
    comment:
      "Excellent customer service. The team was very helpful, and the guarantee gave me peace of mind.",
    image: "/customer3.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">What Our Customers Think</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center"
            >
              {/* Profile Image */}
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-orange-500">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={96}
                  height={96}
                  className="object-cover w-full h-full"
                />
              </div>
              {/* Comment */}
              <p className="text-gray-600 italic mb-4">“{t.comment}”</p>
              {/* Name */}
              <h3 className="font-semibold text-lg">{t.name}</h3>
              <span className="text-sm text-gray-500">{t.location}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
