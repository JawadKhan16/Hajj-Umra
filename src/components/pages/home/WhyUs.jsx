// src/components/pages/home/WhyUs.jsx

import { motion } from "framer-motion";
import { PhoneCall, BusFront, Utensils, IndianRupee, WashingMachine, Hotel } from "lucide-react";

const reasons = [
  {
    icon: <PhoneCall size={40} />,
    title: "24x7 Customer Service",
    description: "Our team of experts is always ready and available to assist our clients with all kinds of queries.",
  },
  {
    icon: <BusFront size={40} />,
    title: "Luxury Transfers",
    description: "Clients enjoy spacious and luxurious transfers during their travels to Saudi Arabia for Umrah.",
  },
  {
    icon: <Utensils size={40} />,
    title: "Buffet Style Dining",
    description: "Enjoy freshly prepared mouth-watering dishes for breakfast, lunch and dinner.",
  },
  {
    icon: <IndianRupee size={40} />,
    title: "Value for Money",
    description: "Our packages are designed to elevate the experience & minimize the cost for great value.",
  },
  {
    icon: <WashingMachine size={40} />,
    title: "Laundry Services",
    description: "Clients can access full laundry services including washing and ironing during the stay.",
  },
  {
    icon: <Hotel size={40} />,
    title: "Exclusive Hotels",
    description: "We provide luxurious and comfortable hotels located near the Haram complex.",
  },
];

const WhyUs = () => {
  return (
    <section className="bg-[#fdfaf5] py-16 px-6 md:px-10 text-[#5a3e2b]">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Why Choose Us
        </motion.h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white border border-[#d8c3af] rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex justify-center items-center bg-[#f3e9dd] w-16 h-16 rounded-full mx-auto mb-4 text-[#5a3e2b]">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#5a3e2b]">{item.title}</h3>
              <p className="text-sm text-gray-700">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
