'use client'

import Image from "next/image";
import {
    BookOpen,
    MapPinned,
    LifeBuoy,
    CalendarCheck,
    ListChecks,
    Landmark,
  } from "lucide-react";
  
  

const services = [
  {
    title: "Hajj & Umrah Guidance",
    desc: "Personalized guidance to perform Hajj and Umrah correctly and spiritually.",
    icon: <BookOpen size={40} className="text-[#5a3e2b]" />,
    img: "/Service/Section1/guide.jpg", // Put a relevant image inside public/services/
  },
  {
    title: "Sacred Site Visits",
    desc: "Guided tours to Masjid al-Haram, Masjid an-Nabawi, and significant Islamic sites.",
    icon: <Landmark size={40} className="text-[#5a3e2b]" />,
    img: "/Service/Section1/sacredsite.jpg",
  },
  {
    title: "Travel & Accommodation",
    desc: "Comfortable stays, transport, and visa assistance for a worry-free journey.",
    icon: <MapPinned size={40} className="text-[#5a3e2b]" />,
    img: "/Service/Section1/accomodation.jpg",
  },
  {
    title: "24/7 Support",
    desc: "Our support team is available round-the-clock during your pilgrimage.",
    icon: <LifeBuoy size={40} className="text-[#5a3e2b]" />,
    img: "/Service/Section1/support.jpg",
  },
  {
    title: "Itinerary Planning",
    desc: "Customized schedules to fit your spiritual, travel, and rest preferences.",
    icon: <CalendarCheck size={40} className="text-[#5a3e2b]" />,
    img: "/Service/Section1/planning.jpg",
  },
  {
    title: "Checklist & Essentials",
    desc: "Detailed lists of what to carry, wear, and recite before and during your journey.",
    icon: <ListChecks size={40} className="text-[#5a3e2b]" />,
    img: "/Service/Section1/cl2.jpg",
  },
];

const Hero = () => {
  return (
    <section className="w-screen bg-[#fffaf3] text-[#5a3e2b] py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Services for Your Blessed Journey
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 p-5 flex flex-col items-center text-center"
            >
              <div className="mb-4">{service.icon}</div>
              <Image
                src={service.img}
                alt={service.title}
                width={300}
                height={200}
                className="rounded-lg mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-700">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
