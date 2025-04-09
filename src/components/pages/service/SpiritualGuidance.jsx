"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const SpiritualGuidance = () => {
  return (
    <section className="bg-[#fffaf3] text-[#5a3e2b] py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Spiritual Guidance
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full rounded-xl overflow-hidden shadow-md"
          >
            <Image
              src="/Service/sg.jpg"
              alt="Spiritual guidance"
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg mb-4">
              Receive spiritual support and teachings before and during your journey. Our scholars and guides ensure you understand the deeper meaning of every ritual.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
              <li>Live Q&A sessions with experienced scholars</li>
              <li>Workshops on intentions, duas, and Sunnah practices</li>
              <li>Group reflections and spiritual discussions</li>
              <li>24/7 access to a personal spiritual mentor</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SpiritualGuidance;
