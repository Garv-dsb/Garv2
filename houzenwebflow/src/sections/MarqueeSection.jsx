import React from "react";

const MarqueeSection = () => {
  return (
    <div className="mt-50 md:mt-25 py-[20px] px-[20px] px-[30px] md:px-[40px]">
      <div className="container mx-auto flex flex-row items-center gap-[20px]">
        <h3 className="py-8 w-[15%] capitalize text-[13px] md:w-[25%] md:text-[14px]  md:text-[18px] lg:text-[22px] font-[600] flex-shrink-0">
          Trusted by the world fastest growing company
        </h3>
        <div className="relative flex overflow-x-hidden">
          <div className="animate-marquee py-15 whitespace-nowrap flex flex-row">
            <img
              className="h-[38px]"
              src="https://cdn.prod.website-files.com/68ca7130feb656001a9ecc33/68cbcbb27a4691e2897995ac_Frame%201215874905.png"
            />
            <img
              className="h-[38px]"
              src="https://cdn.prod.website-files.com/68ca7130feb656001a9ecc33/68cbcbb27a4691e2897995ac_Frame%201215874905.png"
            />
            <img
              className="h-[38px]"
              src="https://cdn.prod.website-files.com/68ca7130feb656001a9ecc33/68cbcbb27a4691e2897995ac_Frame%201215874905.png"
            />
            <img
              className="h-[38px]"
              src="https://cdn.prod.website-files.com/68ca7130feb656001a9ecc33/68cbcbb27a4691e2897995ac_Frame%201215874905.png"
            />
            <img
              className="h-[38px]"
              src="https://cdn.prod.website-files.com/68ca7130feb656001a9ecc33/68cbcbb27a4691e2897995ac_Frame%201215874905.png"
            />
            <img
              className="h-[38px]"
              src="https://cdn.prod.website-files.com/68ca7130feb656001a9ecc33/68cbcbb27a4691e2897995ac_Frame%201215874905.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarqueeSection;
