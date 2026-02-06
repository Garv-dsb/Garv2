import React from "react";

const AdvisorSection = () => {
  return (
    <div className="flex flex-col px-[30px] pb-[120px] gap-[30px] ">
      <div className="container mx-auto">
        <h2 className="capitalize w-[100%] max-w-[650px] text-[28px] sm:text-[36px] md:text-[42px] font-[600] opacity-80">
          Making your dreams with our advisors
        </h2>

        <div className="flex md:flex-col lg:flex-row gap-[30px] md:gap-[40px]">
          <div className="flex flex-col sm:flex-row gap-[15px] sm:gap-[20px] items-end">
            <img
              className="w-full sm:w-[49%] rounded-lg h-fit "
              src="https://cdn.prod.website-files.com/68ca7130feb656001a9ecc33/68cbd2850ff4c0c36a68dd68_Frame%201215875527.webp"
            />
            <img
              className="w-full sm:w-[49%] rounded-lg h-auto"
              src="https://cdn.prod.website-files.com/68ca7130feb656001a9ecc33/68cbd32784262aadf1c8cfe7_Frame%201215875526.webp"
            />
          </div>

          <div className="flex flex-col gap-[30px] md:gap-[40px]">
            <div className="flex flex-col gap-[16px] items-start">
              <p className="text-[#666] text-[14px] sm:text-[15px] md:text-[16px] leading-[140%]">
                Our mission is to provide a seamless and user-
                friendlyexperience for individuals and families searching for
                their dream home.
              </p>
              <div className="bg-black px-[20px] sm:px-[24px] py-[12px] sm:py-[14px] text-[14px] sm:text-[16px] md:text-[18px] text-white rounded-[8px] flex flex-row items-center gap-[10px] cursor-pointer">
                <p>Read More</p>
                <img src="https://cdn.prod.website-files.com/68ca7130feb656001a9ecc33/68cb7fc6c51bd1961ef869df_Vector.svg" />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between border-[#d0d5dd] border-t-[1px] gap-[30px] sm:gap-[40px] w-full pt-[30px] md:pt-[40px]">
              <div className="flex flex-col gap-[24px] w-full sm:w-[45%]">
                <img
                  className="w-[40px] sm:w-[44px] h-[40px] sm:h-[44px]"
                  src="https://cdn.prod.website-files.com/68ca7130feb656001a9ecc33/68e7796ca69125daa8e53de3_real-estate_942140%201.svg"
                />
                <div className="flex flex-col gap-[8px]">
                  <p className="text-[18px] sm:text-[20px] capitalize">
                    Clear legality
                  </p>
                  <p className="text-[#666] text-[14px] sm:text-[15px] md:text-[16px] font-[500]">
                    Discover the best properties
                    <br />
                    to match your budget.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-[24px] w-full sm:w-[45%]">
                <img
                  className="w-[40px] sm:w-[44px] h-[40px] sm:h-[44px]"
                  src="https://cdn.prod.website-files.com/68ca7130feb656001a9ecc33/68e77997cce90f65a12419dd_Capa_1.svg"
                />
                <div className="flex flex-col gap-[8px]">
                  <p className="text-[18px] sm:text-[20px] capitalize">
                    Excellent deals
                  </p>
                  <p className="text-[#666] text-[14px] sm:text-[15px] md:text-[16px] font-[500]">
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
    </div>
  );
};

export default AdvisorSection;
