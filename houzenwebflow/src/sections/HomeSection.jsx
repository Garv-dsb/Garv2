import React from "react";

const HomeSection = () => {
  return (
    <>
      <img
        className="absolute top-0 z-[-1] object-cover w-full h-[550px] md:h-[800px] lg:h-[950px] max-w-[3232px] mx-auto overflow-hidden"
        src="https://cdn.prod.website-files.com/68ca7130feb656001a9ecc33/68e7260db91a32af69a6918a_ccxsds.webp"
        alt="Home Background"
      />
      <div className="container mx-auto pt-[calc(150px - 112px)] px-[30px] h-[250px] md:h-[680px] lg:h-[800px]  flex flex-col justify-between">
        <h2 className="text-white text-[48px] md:text-[96px] lg:text-[190px] font-[600] p-0">
          Dream Home
        </h2>

        <div className="relative flex-col flex-start item-start translate-y-[100px] w-[100%] max-w-[1100px] mx-auto">
          <div className="rounded-t-[10px] flex flex-row overflow-x-auto relative w-fit">
            <div className="bg-white py-[16px]  px-[20px] px-[30px] font-[16px] sm:font-[18px] font-[400]">
              Buy
            </div>
            <div className="bg-white opacity-80 py-[16px] sm:py-[20px] px-[20px] sm:px-[30px] font-[16px] sm:font-[18px] font-[400]">
              Rent
            </div>
            <div className="bg-white opacity-80 py-[16px] sm:py-[20px] px-[20px] sm:px-[30px] font-[16px] sm:font-[18px] font-[400]">
              Sell
            </div>
          </div>

          <div className="bg-white p-[16px] sm:p-[20px] shadow-xl rounded-b-[10px] rounded-r-lg w-[100%] ">
            <form className="flex flex-col md:flex-row gap-[12px] md:gap-0">
              <div className="w-[100%] md:pr-[20px]">
                <input
                  className="h-[45px] sm:h-[50px] w-[100%] border border-gray-300 border-r-[0px] border-l-[0px] border-t-[0px] rounded-[5px] px-[15px] outline-none text-[14px] sm:text-[16px]"
                  type="text"
                  placeholder="Your Name"
                />
              </div>
              <div className="w-[100%] md:pr-[20px]">
                <input
                  className="h-[45px] sm:h-[50px] w-[100%] border border-gray-300 border-r-[0px] border-l-[0px] border-t-[0px] rounded-[5px] px-[15px] outline-none text-[14px] sm:text-[16px]"
                  type="text"
                  placeholder="Your Email"
                />
              </div>
              <div className="w-[100%] md:pr-[20px]">
                <select className="h-[45px] sm:h-[50px] w-[100%] border border-gray-300 border-r-[0px] border-l-[0px] border-t-[0px] rounded-[5px] px-[15px] outline-none text-[14px] sm:text-[16px]">
                  <option>Property Type</option>
                  <option>Service 1</option>
                  <option>Service 2</option>
                  <option>Service 3</option>
                </select>
              </div>
              <div>
                <button className="bg-black text-white w-full md:w-[150px] h-[45px] sm:h-[50px] px-[25px] rounded-[8px] text-[14px] sm:text-[16px] py-[9px] whitespace-nowrap">
                  Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSection;
