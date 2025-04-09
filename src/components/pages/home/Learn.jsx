// src/components/pages/home/Learn.jsx

const Learn = () => {
    const learnPoints = [
      {
        title: "The Spiritual Journey",
        desc: "Understand the deep spiritual significance of Hajj and Umrah, connecting the heart to the sacred tradition.",
      },
      {
        title: "Steps of Hajj & Umrah",
        desc: "Learn the step-by-step process of performing Hajj and Umrah—from Ihram to Tawaf, Sa’i, and more.",
      },
      {
        title: "Rituals & Etiquettes",
        desc: "Get guidance on the proper etiquettes, duas, and Sunnah practices to make your journey rewarding.",
      },
    ];
  
    return (
      <section className="bg-[#fffaf3] text-[#5a3e2b] py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Learn Before You Depart
          </h2>
  
          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {learnPoints.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300"
              >
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
  
          {/* YouTube Videos */}
<div className="grid md:grid-cols-2 gap-8">
  <div className="w-full h-[200px] md:h-[300px]">
    <iframe
      className="w-full h-full rounded-xl shadow-md"
      src="https://www.youtube.com/embed/fngsHQ-Zv5s"
      title="How to Perform Hajj"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
  <span>
  <p className="text-center mt-2 font-medium">How to Perform Hajj</p>
  <p className="text-center text-sm text-gray-600 mt-1 px-2 md:px-10">
  A comprehensive visual guide to performing Hajj, explaining all the rituals, timings, and spiritual meanings in one place.<br></br>
  Whether it’s your first or fifth time, this walkthrough of the Hajj rites helps deepen your understanding and devotion.
  </p>
  </span>
  

  <div className="w-full h-[200px] md:h-[300px]">
    <iframe
      className="w-full h-full rounded-xl shadow-md"
      src="https://www.youtube.com/embed/qZ9n4V9lZkE"
      title="How to Perform Umrah"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
<span>
<p className="text-center mt-2 font-medium">How to Perform Umra</p>
  <p className="text-sm text-gray-600 mt-1">
    A complete guide for first-timers and seasoned travelers alike — learn about the key steps, important duas, and spiritual etiquette during Umrah.<br></br>
    Step into the sacred journey with clarity this guide walks you through each ritual with spiritual insights and practical tips.
  </p>
</span>
  

  
  
  
</div>
        </div>
      </section>
    );
  };
  
  export default Learn;
  