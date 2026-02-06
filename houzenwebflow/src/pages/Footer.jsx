import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-[40px] md:py-[80px] px-[20px] md:px-[40px] bg-black text-white">
      <div className="container mx-auto flex flex-col gap-[30px] md:gap-[40px]">
        <div className="flex flex-col md:flex-row md:justify-between gap-[30px] md:gap-[20px]">
          <div className="flex flex-col gap-[20px] justify-end w-full md:w-[30%]">
            <h4 className="text-[20px] md:text-[28px] font-[600]">
              Any inquiry? Feel free to contact us
            </h4>
            <div className="flex flex-col gap-[20px]">
              <div className="bg-white text-[#2a2a2a] flex flex-row gap-[10px] w-fit px-[24px] py-[14px] rounded-[8px] text-[14px] md:text-[18px] font-[600]">
                Book Now
                <img
                  src="https://cdn.prod.website-files.com/68ca7130feb656001a9ecc33/68cb832e4ae333057003daba_Vector%20(1).svg"
                  alt="arrow"
                  className="w-[20px] h-[20pxpx]"
                />
              </div>
            </div>
            <div className="flex flex-row gap-[16px] ">
              <a
                href="https://www.facebook.com/"
                className="rounded-[100px] border-[1px] border-[#aaa] justify-center items-center w-[32px] h-[32px] flex"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.facebook.com/"
                className="rounded-[100px] border-[1px] border-[#aaa] justify-center items-center w-[32px] h-[32px] flex"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.facebook.com/"
                className="rounded-[100px] border-[1px] border-[#aaa] justify-center items-center w-[32px] h-[32px] flex"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] md:gap-[40px] w-full md:w-[60%]">
            <div className="flex flex-col gap-[16px]">
              <h6 className="text-[14px] md:text-[16px] text-[#c5c5c5] capitalize">
                location
              </h6>
              <p className="text-[14px] md:text-[16px] text-[#c5c5c5] capitalize">
                2464 Royal Ln. Mesa, New Jersey 45463
              </p>
            </div>
            <div className="flex flex-col gap-[16px]">
              <h6 className="text-[14px] md:text-[16px] text-[#c5c5c5] capitalize">
                Opening time
              </h6>
              <p className="text-[14px] md:text-[16px] text-[#c5c5c5] capitalize">
                Thu-sat: 9.00 pm - 10.00 pm
              </p>
            </div>
            <div className="flex flex-col gap-[16px]">
              <h6 className="text-[14px] md:text-[16px] text-[#c5c5c5] capitalize">
                Email
              </h6>
              <p className="text-[14px] md:text-[16px] text-[#c5c5c5] capitalize">
                abc@gmail.com
              </p>
            </div>
            <div className="flex flex-col gap-[16px]">
              <h6 className="text-[14px] md:text-[16px] text-[#c5c5c5] capitalize">
                Contact Us
              </h6>
              <p className="text-[14px] md:text-[16px] text-[#c5c5c5] capitalize">
                +91 9876543210
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[20px]">
          <div className="flex flex-col md:flex-row md:justify-between gap-[20px]">
            <div className="flex flex-end gap-[20px] w-full md:w-[30%]">
              <img
                className="w-[100%] max-w-[300px]"
                src="https://cdn.prod.website-files.com/68ca7130feb656001a9ecc33/68e9ca77cac479937c054ff4_Group%201430104154.svg"
              />
            </div>
            <div className="flex flex-col w-full md:w-[60%] gap-[40px]">
              <img
                className="rounded-[10px] w-[100%]"
                src="https://cdn.prod.website-files.com/68ca7130feb656001a9ecc33/68cba7d23a37e107e63d8a2c_Rectangle%204437.webp"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center md:justify-between pt-[20px] border-t-[1px] border-[#e8f2d933]">
          <p className="text-[12px] md:text-[14px] text-center md:text-left">
            Copy right © 2024 Houzen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
