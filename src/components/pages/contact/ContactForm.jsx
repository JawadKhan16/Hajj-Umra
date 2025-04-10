"use client";

import { motion } from "framer-motion";

const ContactForm = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto bg-[#f9f6f1] p-6 sm:p-8 md:p-10 rounded-xl shadow-lg"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#5a3e2b] text-center">
          Get in Touch
        </h2>
        <p className="text-gray-700 mt-4 text-center text-sm md:text-base">
          Fill out the form below and our team will get back to you as soon as possible.
        </p>

        <form className="mt-8 space-y-6">
          {/* Name and Email Fields */}
          <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-6">
            <div>
              <label className="block text-sm text-[#5a3e2b] mb-1">Full Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5a3e2b]/50"
              />
            </div>
            <div>
              <label className="block text-sm text-[#5a3e2b] mb-1">Email Address</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5a3e2b]/50"
              />
            </div>
          </div>

          {/* Subject Field */}
          <div>
            <label className="block text-sm text-[#5a3e2b] mb-1">Subject</label>
            <input
              type="text"
              placeholder="Subject of your message"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5a3e2b]/50"
            />
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-sm text-[#5a3e2b] mb-1">Message</label>
            <textarea
              rows="5"
              placeholder="Write your message here..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5a3e2b]/50"
            ></textarea>
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="block w-full md:w-auto mx-auto mt-6 px-6 py-2 bg-[#5a3e2b] text-white rounded-md hover:bg-[#4a3222] transition"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default ContactForm;
