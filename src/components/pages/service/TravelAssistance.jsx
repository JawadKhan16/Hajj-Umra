// src/components/pages/service/TravelAssistance.jsx

import Image from "next/image";
import { motion } from "framer-motion";

const TravelAssistance = () => {
  const services = [
    {
      title: "Visa & Documentation",
      description:
        "We handle all your visa processing and essential paperwork—so you can focus on preparing spiritually and mentally for your sacred journey.",
      image: "/Service/Section2/visa.jpg",
    },
    {
      title: "Flight Bookings",
      description:
        "Get the best deals and flexible travel options from major cities. We coordinate direct or connecting flights to accommodate your schedule.",
      image: "/Service/Section2/flight.jpg",
    },
    {
      title: "Local Transportation",
      description:
        "From airport pickups to transportation between Mecca and Medina—we ensure your movement is smooth, safe, and timely.",
      image: "/Service/Section2/local.jpg",
    },
  ];

  return (
    <section className="bg-white text-[#5a3e2b] py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          Travel Assistance
        </h2>

        <div className="space-y-14">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                idx % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full md:w-1/2">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg w-full object-cover"
                />
              </div>

              <div className="w-full md:w-1/2 text-center md:text-left">
                <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelAssistance;