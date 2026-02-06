import React from "react";

const FeaturedPropertySection = () => {
  return (
    <div className="container mx-auto flex flex-col gap-[60px]">
      <div className="flex justify-between">
        <h2 className="md:max-w-[300px] text-[42px] font-[400] capitalize">
          Our featured Property
        </h2>
        <p className="text-[16px] font-[#666] md:max-w-[320px] ">
          Our mission is to provide a seamless and user-friendly experience for
          individuals and families searching for their dream home.
        </p>
      </div>
      <div>
        <div className="flex flex-col justify-center items-center ">
          <div className="rounded-[10px] flex justify-center bg-white overflow-hidden">
            <div className="bg-[#171717] text-white px-[20px] py-[10px] font-[500] text-[16px] ">
              Luxury
            </div>
            <div className=" text-black px-[20px] py-[10px] font-[500] text-[16px] ">
              Luxury
            </div>
            <div className="] text-black px-[20px] py-[10px] font-[500] text-[16px] ">
              Luxury
            </div>
            <div className=" text-black px-[20px] py-[10px] font-[500] text-[16px] ">
              Luxury
            </div>
          </div>

          <div className="pt-[30px] ">
            <div className="flex flex-col gap-[20px] items-center">
              <div className="relative   w-[100%] shadow-md">
                <img
                  className="rounded-[10px]  w-full object-cover"
                  src="https://cdn.prod.website-files.com/68ce0b6acf3842139fd99c12/68e12c8d4c60e2add224f2f5_c9ad82b24647bd1d344423304298c91ce238539f.webp"
                />
              </div>

              <div className="flex gap-[20px] md:flex-col lg:flex-row">
                <div className=" md:w-[50%] shadow-md">
                  <img
                    className="rounded-[10px]"
                    src="https://cdn.prod.website-files.com/68ce0b6acf3842139fd99c12/68e2455f58b60449ec2ea932_1305.webp"
                  />
                </div>
                <div className="flex flex-col py-[20px] px-[30px] gap-[40px] rounded-[10px] bg-white shadow-lg">
                  <div className="flex flex-col gap-[30px] ">
                    <div className="flex flex-col gap-[10px] ">
                      <h3 className="text-[#2a2a2a] text-[28px] font-[600]">
                        Skyline Network
                      </h3>
                      <p className="text-[#666] text-[16px] ">
                        Discover the best properties handpicked to match your
                        lifestyle and budget & worked with experienced real
                        estate professionals
                      </p>
                    </div>
                    <div className="flex justify-between ">
                      <div className="flex flex-col w-[55%] gap-[14px]">
                        <ol className="list-disc flex flex-col gap-[8px] ">
                          <li className="text-[#666] text-[16px]">
                            Easy access to diplomatic zones and corporate hubs
                          </li>
                          <li className="text-[#666] text-[16px]">
                            private balcony & walk-in closet
                          </li>
                          <li className="text-[#666] text-[16px]">
                            Earthquake-resistant structure
                          </li>
                        </ol>
                      </div>
                      <div className="flex flex-col w-[55%] gap-[14px]">
                        <ol className="list-disc flex flex-col gap-[8px] ">
                          <li className="text-[#666] text-[16px]">
                            Modular kitchen
                          </li>

                          <li className="text-[#666] text-[16px]">
                            Rooftop garden
                          </li>
                        </ol>
                      </div>
                    </div>
                    <div className="flex justify-between gap-[10px] ">
                      <div className="flex flex-col gap-[8px] ">
                        <h3 className="text-[18px] font-[400] text-[2a2a2a] ">
                          Greenfield Park, NJ
                        </h3>
                        <p className="text-[16px] text-[#666]">Location</p>
                      </div>
                      <div className="flex flex-col gap-[8px] ">
                        <h3 className="text-[18px] font-[400] text-[2a2a2a] ">
                          1250sqft
                        </h3>
                        <p className="text-[16px] text-[#666]">Area</p>
                      </div>
                      <div className="flex flex-col gap-[8px] ">
                        <h3 className="text-[18px] font-[400] text-[2a2a2a] ">
                          3-4
                        </h3>
                        <p className="text-[16px] text-[#666]">Rooms</p>
                      </div>
                      <div className="flex flex-col gap-[8px] ">
                        <h3 className="text-[18px] font-[400] text-[2a2a2a] ">
                          2022
                        </h3>
                        <p className="text-[16px] text-[#666]">Year</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-black px-[20px] w-fit sm:px-[24px] py-[12px] sm:py-[14px] text-[14px] sm:text-[16px] md:text-[18px] text-white rounded-[8px] flex flex-row items-center gap-[10px] cursor-pointer">
                <p>View Property</p>
                <img src="https://cdn.prod.website-files.com/68ca7130feb656001a9ecc33/68cb7fc6c51bd1961ef869df_Vector.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPropertySection;
