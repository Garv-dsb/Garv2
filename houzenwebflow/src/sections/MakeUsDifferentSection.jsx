import React from "react";
import WhatMakeCards from "../components/WhatMakeCards";

const MakeUsDifferentSection = () => {
  return (
    <div className="py-[80px] px-[20px]">
      <div className="container mx-auto w-[100%]">
        <div className="flex justify-between ">
          <div className="flex flex-row gap-[40px] w-[100%]">
            <div className="w-[55%]">
              <div className="flex flex-col gap-[16px] item-start">
                <h2 className="text-[#2a2a2a] font-[600] text-[42px] ">
                  What makes us different
                </h2>
                <p className="text-[#666] text-[16px]">
                  Simple steps to buy, sell or rent your properties
                </p>
              </div>
              <div>
                <img
                  className="object-cover w-[100%] "
                  src="https://cdn.prod.website-files.com/68ca7130feb656001a9ecc33/68e0762d32b17a59b6921f8d_Rectangle%2034624215.webp"
                />
              </div>
            </div>

            <div className="w-[45%]">
              <WhatMakeCards />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeUsDifferentSection;
