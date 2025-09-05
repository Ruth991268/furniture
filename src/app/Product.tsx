// components/Product.tsx
import Footer from "@/Components/Footer";
import Nav from "@/Components/Nav";
import Image from "next/image";

interface ProductType {
  id: number;
  title: string;
  price: number;
  category: string;
  type: string; // e.g., "Couch", "Table", "Bed", etc.
  image: string;
}

// Example products
const products: ProductType[] = [
  // Couches
  { id: 1, title: "Gray Vintage Couch", price: 499, category: "Furniture", type: "Couch", image: "/sofa.jpg" },
  { id: 2, title: "Modern Leather Sofa", price: 799, category: "Furniture", type: "Couch", image: "/sofa1.jpg" },
  { id: 3, title: "Classic Fabric Couch", price: 399, category: "Furniture", type: "Couch", image: "/couch3.jpg" },
  { id: 4, title: "Sectional Sofa", price: 899, category: "Furniture", type: "Couch", image: "/couch4.jpg" },
  { id: 5, title: "Minimalist Couch", price: 599, category: "Furniture", type: "Couch", image: "/couch5.jpg" },

  // Tables
  { id: 6, title: "Small Coffee Table", price: 120, category: "Furniture", type: "Table", image: "/table.jpeg" },
  { id: 7, title: "Dining Table Set", price: 350, category: "Furniture", type: "Table", image: "/table2.jpg" },
  { id: 8, title: "Bedside Table", price: 80, category: "Furniture", type: "Table", image: "/table3.jpg" },
  { id: 9, title: "Round Accent Table", price: 150, category: "Furniture", type: "Table", image: "/table4.jpg" },
  { id: 10, title: "Glass Console Table", price: 220, category: "Furniture", type: "Table", image: "/table5.jpg" },

  // Beds
  { id: 11, title: "Queen Bed", price: 799, category: "Bedroom", type: "Bed", image: "/bed1.jpg" },
  { id: 12, title: "King Bed", price: 999, category: "Bedroom", type: "Bed", image: "/bed2.jpg" },
  { id: 13, title: "Single Bed", price: 399, category: "Bedroom", type: "Bed", image: "/bed3.jpg" },

  // TV Stands
  { id: 14, title: "Wooden TV Stand", price: 250, category: "Living Room", type: "TV Stand", image: "/tvstand1.jpg" },
  { id: 15, title: "Modern TV Stand", price: 320, category: "Living Room", type: "TV Stand", image: "/tvstand2.jpg" },
    { id: 50, title: "Wooden TV Stand", price: 250, category: "Living Room", type: "TV Stand", image: "/tvstand1.jpg" },
  { id: 51, title: "Modern TV Stand", price: 320, category: "Living Room", type: "TV Stand", image: "/tvstand2.jpg" },
    { id: 52, title: "Wooden TV Stand", price: 250, category: "Living Room", type: "TV Stand", image: "/tvstand1.jpg" },
  { id: 53, title: "Modern TV Stand", price: 320, category: "Living Room", type: "TV Stand", image: "/tvstand2.jpg" },

  // Office
  { id: 16, title: "Office Desk", price: 400, category: "Office", type: "Office Furniture", image: "/office1.jpg" },
  { id: 17, title: "Ergonomic Chair", price: 180, category: "Office", type: "Office Furniture", image: "/office2.jpg" },

  // Café furniture
  { id: 18, title: "Café Chair", price: 70, category: "Café", type: "Café Furniture", image: "/cafe1.jpg" },
  { id: 19, title: "Café Table", price: 120, category: "Café", type: "Café Furniture", image: "/cafe2.jpg" },

  // Other Decor
  { id: 20, title: "Black Vase", price: 40, category: "Decor", type: "Decor", image: "/other1.jpg" },
  { id: 21, title: "Wall Clock", price: 35, category: "Decor", type: "Decor", image: "/other2.jpg" },
  { id: 22, title: "Table Lamp", price: 60, category: "Decor", type: "Decor", image: "/other3.jpg" },
];

export default function Product() {
  // Group products by type
  const categories = Array.from(new Set(products.map((p) => p.type)));

  const ProductCard = ({ product }: { product: ProductType }) => (
    <div className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-transform transform hover:scale-105">
      <div className="w-full h-64 relative">
        <Image src={product.image} alt={product.title} fill className="object-cover" />
      </div>
      <div className="p-4 text-center">
        <p className="text-sm text-gray-400">{product.category}</p>
        <h3 className="text-lg font-semibold text-gray-900 mt-1">{product.title}</h3>
        <p className="text-xl font-bold text-orange-500 mt-2">${product.price}</p>
        
      </div>
    </div>
  );

  return (<>
    <Nav/>
    <section className="py-16 px-6 bg-gray-50 space-y-16">
      {categories.map((cat) => {
        const items = products.filter((p) => p.type === cat);
        return (
          <div key={cat}>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">{cat}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {items.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        );
      })}
    </section>
  <Footer/></>);
}
