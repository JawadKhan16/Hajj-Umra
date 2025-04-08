'use client'

import {motion} from "framer-motion"
import Image from "next/image";


const Info = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-8 text-[#5a3e2b]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left Side - Image */}
        <div className="w-full rounded-xl overflow-hidden shadow-md">
          <Image
            src="/Home/bg3.jpg"
            alt="Makkah Tour"
            width={700}
            height={500}
            className="w-full h-full object-cover hover:scale-105 transition duration-300"
          />
        </div>

        {/* Right Side - Text Content */}
        <div>
          <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-bold text-[#8b5e3c] mb-4">
            Welcome to the PilgrimPath
          </motion.h2>
          <motion.p 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-lg mb-6 leading-relaxed">
            PilgrimPath is a renowned company specializing in the field of tours and travel.
            We also organize international standard Hajj and Umrah tours for potential pilgrims.
            Our Hajj and Umrah tour packages are wholly inclusive and cater to the requirements
            of all types of pilgrims.
          </motion.p>
          <hr className="my-4 border-t border-gray-300" />
          <motion.p 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-xl font-semibold text-[#8b5e3c]">
            For More Info Call Us : <span className="text-[#8b5e3c]">+91-8287938524</span>
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Info;
