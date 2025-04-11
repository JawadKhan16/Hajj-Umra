"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-[#fdf8f3] py-20 px-4 md:px-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-10">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#5a3e2b] mb-4">
            Explore Our Exclusive Pilgrimage Packages
          </h1>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            Discover a range of carefully curated Hajj and Umrah packages designed for your comfort, budget, and spiritual needs. Each package offers unique experiences, accommodations, and support throughout your sacred journey.
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/package/package.png"
            alt="Pilgrimage Packages"
            width={600}
            height={400}
            className="rounded-xl shadow-lg object-cover w-full"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;


