'use client'

import Hero from "@/components/pages/home/Hero"
import Info from "@/components/pages/home/info"
import WhyUs from "@/components/pages/home/WhyUs"
import Questions from "@/components/pages/home/Questions"
import Learn from "@/components/pages/home/Learn"

const Home=()=>{
  return(
<section>
  <Hero/>
  <Info/>
  <WhyUs/>
  <Questions/>
  <Learn/>
</section>
  );
}

export default Home;