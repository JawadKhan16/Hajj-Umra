"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-white py-14 px-4 sm:px-6 lg:px-10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#5a3e2b] leading-snug sm:leading-tight"
        >
          We'd Love to Hear From You
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed sm:px-10 md:px-16"
        >
          Whether you have a question about our services, need support with your pilgrimage, or just want to say Salaam — our team is ready to help.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 px-2"
        >
          <Image
            src="/Contact/contact.png"
            alt="Contact Support"
            width={800}
            height={400}
            className="w-full max-w-[90vw] sm:max-w-[600px] mx-auto rounded-xl shadow-lg object-cover"
          />
        </motion.div>
      </div>

      {/* Decorative Divider */}
      <div className="mt-16 border-t border-dashed border-[#5a3e2b]/30 w-full max-w-6xl mx-auto" />
    </section>
  );
};

export default Hero;
