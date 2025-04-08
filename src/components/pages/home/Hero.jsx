'use client'


import {motion} from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      className="relative bg-cover w-screen bg-center bg-no-repeat 
      h-screen flex items-center 
      justify-center text-center px-4"
      style={{ backgroundImage: "url('/Home/homebg.png')" }} 
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 hover:bg-black/50 transition duration-300 ease-in-out"></div>

      {/* Content */}
      <div className="relative z-10 text-white max-w-2xl">
        <motion.h1 
        className="text-4xl md:text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}>

          Your Journey of Faith Begins Here
        </motion.h1>
        <motion.p 
        className="text-lg md:text-xl mb-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}>
          Trusted Hajj & Umrah services with care, comfort, and spirituality.
        </motion.p>
        <Link href="/services">
          <button className="bg-[#8b5e3c] hover:bg-[#a97449] text-white px-6 py-3 rounded-xl transition duration-300">
            View Packages
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
