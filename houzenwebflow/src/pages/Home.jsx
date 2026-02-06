import React from "react";
import HomeSection from "../sections/HomeSection";
import MarqueeSection from "../sections/MarqueeSection";
import AdvisorSection from "../sections/AdvisorSection";
import PropertiesSection from "../sections/PropertiesSection";
import AccordianSection from "../sections/AccordianSection";
import WhatMakeCards from "../components/WhatMakeCards";
import MakeUsDifferentSection from "../sections/MakeUsDifferentSection";
import FeaturedPropertySection from "../sections/FeaturedPropertySection";
import RealEstateAgents from "../sections/RealEstateAgents";
import ClientsReview from "../sections/ClientsReview";
import BlogSection from "../sections/BlogSection";

const Home = () => {
  return (
    <>
      <div className="z-10 line-height-[80%] ">
        <HomeSection />
      </div>
      <div>
        <MarqueeSection />
      </div>

      <AdvisorSection />

      <div className="bg-[#f8f8f8] py-[40px] md:py-[60px] lg:py-[80px] px-[20px] sm:px-[30px] md:px-[40px] lg:px-[60px]">
        <PropertiesSection />
      </div>

      <div className="bg-[#1a1a1a] px-[20px] md:px-[40px] py-[60px] md:py-[80px]">
        <AccordianSection />
      </div>

      <MakeUsDifferentSection />

      <div className="bg-[#f8f8f8] px-[20px] py-[80px]">
        <FeaturedPropertySection />
      </div>

      <div className="px-[20px] py-[80px] ">
        <RealEstateAgents />
      </div>

      <div className="bg-[#1a1a1a] px-[20px] py-[80px] sm:px-[30px] lg:px-[60px] py-[60px] md:py-[80px] lg:py-[100px]">
        <ClientsReview />
      </div>

      <div className="py-[120px] px-[30px]">
        <BlogSection />
      </div>
    </>
  );
};

export default Home;
