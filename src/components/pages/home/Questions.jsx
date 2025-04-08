// src/components/pages/home/Questions.jsx

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqData = [
  {
    question: "What documents are required for Umrah?",
    answer:
      "You will need a valid passport, visa, recent passport-sized photos, and proof of vaccination as per Saudi regulations.",
  },
  {
    question: "Can I customize my Umrah package?",
    answer:
      "Yes, we offer customized packages based on your preferences for travel, hotel, dining, and more.",
  },
  {
    question: "Is transportation provided during the stay?",
    answer:
      "Yes, all our packages include comfortable transportation between the airport, hotel, and the holy sites.",
  },
  {
    question: "Are meals included in the package?",
    answer:
      "Yes, most of our packages include daily buffet-style breakfast, lunch, and dinner.",
  },
];

const Questions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="bg-white py-16 px-6 md:px-10 text-[#5a3e2b]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div>
          <img
            src="/Home/question.png" 
            alt="Hajj or Umrah FAQs"
            className="w-full h-auto rounded-xl shadow-md"
          />
        </div>

        {/* FAQs */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center md:text-left">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="border border-[#e3d2c3] rounded-lg p-4 bg-white shadow-sm"
              >
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full flex justify-between items-center text-left text-lg font-semibold"
                >
                  {item.question}
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </button>
                {openIndex === index && (
                  <p className="mt-3 text-gray-700 text-sm">{item.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Questions;
