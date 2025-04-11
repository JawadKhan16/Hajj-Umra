"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const packages = [
  {
    title: "Silver Hajj Package",
    image: "/Package/package1.jpeg",
    price: "Rs. 1,20,000",
    description: "A budget-friendly Hajj package with comfortable accommodation and guided rituals.",
  },
  {
    title: "Gold Umrah Package",
    image: "/Package/Package2.jpg",
    price: "Rs. 1,80,000",
    description: "Mid-range Umrah package with upgraded hotels and transportation.",
  },
  {
    title: "Platinum Family Package",
    image: "/Package/package3.jpg",
    price: "Rs. 2,50,000",
    description: "Luxury accommodation and personalized services for family pilgrimages.",
  },
];

const AllPackages = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-12">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold text-center text-[#5a3e2b] mb-12"
      >
        Our Packages
      </motion.h2>

      <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {packages.map((pkg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
            className="bg-[#fffaf3] rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <Image
              src={pkg.image}
              alt={pkg.title}
              width={500}
              height={300}
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-[#5a3e2b]">{pkg.title}</h3>
              <p className="text-[#9c7b4f] font-medium mt-1">{pkg.price}</p>
              <p className="text-sm text-gray-600 mt-2">{pkg.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AllPackages;
