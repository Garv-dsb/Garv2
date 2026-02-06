import React from "react";
import HotelCard from "../components/HotelCard";

const PropertiesSection = () => {
  return (
    <div className=" container mx-auto flex flex-col gap-[30px] md:gap-[50px] lg:gap-[60px]">
      <div className="flex flex-col justify-center items-center gap-[12px] md:gap-[16px]">
        <h2 className="text-[#2a2a2a] text-[24px] sm:text-[32px] md:text-[38px] lg:text-[42px] font-[700] text-center">
          Explore our latest properties
        </h2>
        <p className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] text-[#666] font-[500] text-center">
          Explore latest and featured properties for sale
        </p>
      </div>
      <div className="flex flex-wrap gap-[15px] sm:gap-[18px] md:gap-[20px] ">
        <HotelCard
          mainImage={
            "https://cdn.prod.website-files.com/68ce0b6acf3842139fd99c12/68ce1526f01cc4d6490715a5_1%20(8).webp"
          }
          title="Greenfield Park, NJ"
          description="Skyline Network"
        />
        <HotelCard
          mainImage={
            "https://cdn.prod.website-files.com/68ce0b6acf3842139fd99c12/68ce1492386b6f6b0e48f241_1%20(7).webp"
          }
          title="Riverstone Heights, TX"
          description="Lakeview apartments"
        />
        <HotelCard
          mainImage={
            "https://cdn.prod.website-files.com/68ce0b6acf3842139fd99c12/68ce13f9cc974b96261a6d2b_1%20(6).webp"
          }
          title="Sunnyvale, CA"
          description="Sunset Villas"
        />
        <HotelCard
          mainImage={
            "https://cdn.prod.website-files.com/68ce0b6acf3842139fd99c12/68ce138e3117b13140ab7f62_1%20(5).webp"
          }
          title="Maplewood, MN"
          description="Maple Residency"
        />
        <HotelCard
          mainImage={
            "https://cdn.prod.website-files.com/68ce0b6acf3842139fd99c12/68ce12dcc50b8dffe59758fe_1%20(4).webp"
          }
          title="Maplewood, MN"
          description="Maple Residency"
        />
        <HotelCard
          mainImage={
            "https://cdn.prod.website-files.com/68ce0b6acf3842139fd99c12/68ce11ea6961feb9ad3f13c6_1%20(3).webp"
          }
          title="Maplewood, MN"
          description="Maple Residency"
        />
      </div>
      <div className="flex justify-center">
        <div className="bg-black px-[20px] sm:px-[24px] py-[12px] sm:py-[14px] w-fit text-[14px] sm:text-[16px] md:text-[18px] text-white rounded-[8px] flex flex-row items-center gap-[10px] cursor-pointer">
          <p>View All</p>
          <img src="https://cdn.prod.website-files.com/68ca7130feb656001a9ecc33/68cb7fc6c51bd1961ef869df_Vector.svg" />
        </div>
      </div>
    </div>
  );
};

export default PropertiesSection;
