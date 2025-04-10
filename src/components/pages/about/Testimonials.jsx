// src/components/pages/about/Testimonials.jsx
"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Amina Siddiqui",
    feedback:
      "PilgrimPath truly eased my anxiety about my first Umrah. The step-by-step videos and guidance were a blessing!",
    location: "Mumbai, India",
  },
  {
    name: "Ahmed Khan",
    feedback:
      "The attention to detail and the spiritual insights helped me focus more on the purpose of my journey.",
    location: "Karachi, Pakistan",
  },
  {
    name: "Fatima Noor",
    feedback:
      "I loved how everything was explained in such a simple and beautiful way. May Allah bless this team!",
    location: "Hyderabad, India",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-[#5a3e2b] mb-12"
        >
          What Pilgrims Say
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.5 }}
              className="bg-[#fffaf3] rounded-xl p-6 shadow hover:shadow-lg transition duration-300"
            >
              <p className="text-gray-800 text-sm md:text-base italic mb-4">“{t.feedback}”</p>
              <div className="text-[#5a3e2b] font-semibold">{t.name}</div>
              <div className="text-sm text-gray-500">{t.location}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
