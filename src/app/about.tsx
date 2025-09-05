import Nav from "@/Components/Nav";
import Image from "next/image";

const teamMembers = [
  {
    id: 1,
    name: "Abebe Kebede",
    role: "Founder & CEO",
    bio: "With over 20 years in the furniture industry, Abebe founded our company to bring modern, affordable designs to Ethiopian homes.",
    image: "/customer1.jpg",
  },
  {
    id: 2,
    name: "Selamawit Tadesse",
    role: "Head Designer",
    bio: "Selamawit specializes in ergonomic bed designs, blending traditional Ethiopian motifs with contemporary styles.",
    image: "/customer2.jpg",
  },
  {
    id: 3,
    name: "Dawit Mengistu",
    role: "Operations Manager",
    bio: "Dawit ensures our furniture, from sofas to beds, is crafted with the highest quality materials and delivered on time.",
    image: "/customer3.jpg",
  },
];

const values = [
  {
    id: 1,
    title: "Quality Craftsmanship",
    description: "We use premium materials to create durable, stylish furniture that lasts a lifetime.",
  },
  {
    id: 2,
    title: "Sustainable Practices",
    description: "Committed to eco-friendly sourcing and production to protect our environment.",
  },
  {
    id: 3,
    title: "Customer-Centric Design",
    description: "Our designs focus on comfort and functionality, tailored for modern Ethiopian lifestyles.",
  },
];

export default function About() {
  return (
    <>
      <Nav />
      <section className="py-20 bg-gradient-to-b from-white to-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are a leading furniture company in Ethiopia, specializing in high-quality beds, sofas, and home essentials. Our mission is to transform spaces with innovative designs that blend comfort, style, and affordability.
            </p>
          </div>

          {/* Our Story Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
            <div>
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2010 in Addis Ababa, our journey began with a simple idea: to provide Ethiopian families with beautifully crafted furniture that enhances everyday living. Starting with custom beds and expanding to full home collections, we&apos;ve grown into a trusted name known for quality and innovation.
              </p>
              <p className="text-gray-600">
                Inspired by Ethiopia&apos;s rich cultural heritage, our designs incorporate local artistry while embracing modern trends. Today, we serve customers across the country, from Bahir Dar to Mekelle, with a commitment to excellence and customer satisfaction.
              </p>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/customer1.jpg"
                alt="Our Story"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Our Values Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value) => (
                <div key={value.id} className="bg-white p-6 rounded-2xl shadow-md text-center transform hover:scale-105 transition-transform duration-300">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div>
            <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">Meet Our Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <div key={member.id} className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-orange-500">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="font-semibold text-lg text-gray-800">{member.name}</h3>
                  <span className="text-sm text-blue-600 font-medium mb-2">{member.role}</span>
                  <p className="text-gray-600 text-center italic">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}