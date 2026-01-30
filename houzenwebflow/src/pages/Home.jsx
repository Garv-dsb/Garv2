import React from "react";
import HotelCard from "../components/HotelCard";

const Home = () => {
  return (
    <div>
      <img
        className="absolute top-0 z-[-1] object-cover w-[100%] h-[650px]"
        src="https://cdn.prod.website-files.com/68ca7130feb656001a9ecc33/68e7260db91a32af69a6918a_ccxsds.webp"
        alt="Home Background"
      />
      <div className=" z-10 line-height-[80%]  px-[20px] h-[550px] flex flex-col justify-between">
        <h2 className="text-white text-[115px] font-[600] p-0">Dream Home</h2>

        <div className=" relative flex-col flex-start item-start translate-y-[100px] ">
          <div className="rounded-t-[10px] flex flex-row overflow-hidden relative w-fit">
            <div className="bg-white py-[20px] px-[30px] font-[18px] font-[400]">
              Buy
            </div>
            <div className="bg-white opacity-80 py-[20px] px-[30px] font-[18px] font-[400]">
              Rent
            </div>
            <div className="bg-white opacity-80 py-[20px] px-[30px] font-[18px] font-[400]">
              Sell
            </div>
          </div>

          <div className="bg-white p-[20px] shadow-xl rounded-b-[10px]  rounded-r-lg w-[100%] ">
            <form className="flex">
              <div className="w-[100%] pr-[20px]">
                <input
                  className="h-[50px] w-[100%] border border-gray-300 border-r-[0px] border-l-[0px] border-t-[0px] rounded-[5px] px-[15px] outline-none"
                  type="text"
                  placeholder="Your Name"
                />
              </div>
              <div className="w-[100%] pr-[20px]">
                <input
                  className="h-[50px] w-[100%] border border-gray-300 border-r-[0px] border-l-[0px] border-t-[0px] rounded-[5px] px-[15px] outline-none"
                  type="text"
                  placeholder="Your Email"
                />
              </div>
              <div className="w-[100%] pr-[20px]">
                <select className="h-[50px] w-[100%] border border-gray-300 border-r-[0px] border-l-[0px] border-t-[0px] rounded-[5px] px-[15px] outline-none">
                  <option>Property Type</option>
                  <option>Service 1</option>
                  <option>Service 2</option>
                  <option>Service 3</option>
                </select>
              </div>
              <div>
                <button className="bg-black text-white w-[150px] h-[50px] px-[25px] rounded-[8px] text-[16px] py-[9px] px-[15px]">
                  Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="mt-25 py-[13px] px-[20px] flex flex-row">
        <h3 className="py-12 capitalize text-[22px]">
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

      <div className="flex flex-col px-[20px] pb-[80px] gap-[40px]">
        <h2 className="capitalize w-[100%] max-w-[650px] text-[42px] font-[600] opacity-80">
          Making your dreams with our advisors
        </h2>

        <div className="flex flex-col gap-[40px]">
          <div className="flex flex-row gap-[20px]">
            <img
              className="w-[49%] rounded-lg h-auto"
              src="https://cdn.prod.website-files.com/68ca7130feb656001a9ecc33/68cbd2850ff4c0c36a68dd68_Frame%201215875527.webp"
            />
            <img
              className="w-[49%] rounded-lg h-auto"
              src="https://cdn.prod.website-files.com/68ca7130feb656001a9ecc33/68cbd32784262aadf1c8cfe7_Frame%201215875526.webp"
            />
          </div>

          <div className=" flex flex-col gap-[40px] ">
            <div className="flex flex-col gap-[16px] items-start">
              <p className="text-[#666] text-[16px] leading-[140%]">
                Our mission is to provide a seamless and user-
                friendlyexperience for individuals and families searching for
                their dream home.
              </p>
              <div className="bg-black px-[24px] py-[14px] text-[18px] text-white rounded-[8px] flex flex-row items-center gap-[10px] cursor-pointer">
                <p>Read More</p>
                <img src="https://cdn.prod.website-files.com/68ca7130feb656001a9ecc33/68cb7fc6c51bd1961ef869df_Vector.svg" />
              </div>
            </div>
            <div className="flex justify-between border-[#d0d5dd] border-t-[1px] max-w-[80%] pt-[40px]">
              <div className="flex flex-col gap-[24px] w-[45%]">
                <img
                  className="w-[44px] h-[44px] "
                  src="https://cdn.prod.website-files.com/68ca7130feb656001a9ecc33/68e7796ca69125daa8e53de3_real-estate_942140%201.svg"
                />
                <div className="flex flex-col gap-[8px]">
                  <p className="text-[20px] capitalize">Clear legality</p>
                  <p className="text-[#666] text-[16px] font-[500] ">
                    Discover the best properties
                    <br />
                    to match your budget.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-[24px] w-[45%]">
                <img
                  className="w-[44px] h-[44px] "
                  src="https://cdn.prod.website-files.com/68ca7130feb656001a9ecc33/68e77997cce90f65a12419dd_Capa_1.svg"
                />
                <div className="flex flex-col gap-[8px]">
                  <p className="text-[20px] capitalize">Excellent deals</p>
                  <p className="text-[#666] text-[16px] font-[500] ">
                    Discover the best properties
                    <br />
                    to match your budget.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f8f8f8] py-[80px] px-[20px] ">
        <div className="flex flex-col gap-[60px] ">
          <div className="flex flex-col justify-center items-center gap-[16px] ">
            <h2 className="text-[#2a2a2a] text-[42px] font-[700] ">
              Explore our latest properties
            </h2>
            <p className="text-[16px] text-[#666] font-[500] ">
              Explore latest and featured properties for sale
            </p>
          </div>
          <div className="flex flex-row flex-wrap gap-[20px]">
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
            <div className="bg-black px-[24px] py-[14px] w-fit text-[18px] text-white rounded-[8px] flex flex-row items-center gap-[10px] cursor-pointer">
              <p>View All</p>
              <img src="https://cdn.prod.website-files.com/68ca7130feb656001a9ecc33/68cb7fc6c51bd1961ef869df_Vector.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
