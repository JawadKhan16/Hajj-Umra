"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12 text-[#5a3e2b]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Left Text Content */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About PilgrimPath</h1>
          <p className="text-lg leading-relaxed text-gray-700">
            PilgrimPath is your trusted companion for Hajj and Umrah. Our mission is to guide, support,
            and simplify your pilgrimage experience through reliable resources, real-time assistance,
            and heartfelt guidance.
          </p>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/About/about.jpeg"
            alt="Pilgrims walking near the Kaaba"
            width={600}
            height={400}
            className="w-full h-auto rounded-xl shadow-md object-cover"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
