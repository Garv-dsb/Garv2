import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="container mx-auto w-full px-[16px] md:px-[30px] lg:px-[40px] pt-[16px] md:pt-[24px] lg:pt-[30px] pb-[16px] md:pb-[24px] lg:pb-[30px] bg-transparent relative">
      <div className="flex justify-between items-center gap-[16px] md:gap-[20px] lg:gap-[30px]">
        <img
          className="w-[90px] md:w-[110px] lg:w-[130px] h-auto flex-shrink-0"
          src="https://cdn.prod.website-files.com/68ca7130feb656001a9ecc33/68ea46760129319e670370c5_White.svg"
          alt="Logo"
        />

        <div
          className="md:hidden text-white text-[24px] cursor-pointer "
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <IoMdClose /> : <GiHamburgerMenu />}
        </div>

        <div className="hidden md:flex items-center justify-center flex-1 gap-[20px] md:gap-[28px] lg:gap-[40px]">
          <a
            href="#"
            className="text-white text-[13px] md:text-[14px] lg:text-[15px] "
          >
            Home
          </a>
          <a
            href="#"
            className="text-white text-[13px] md:text-[14px] lg:text-[15px] "
          >
            About
          </a>
          <a
            href="#"
            className="text-white text-[13px] md:text-[14px] lg:text-[15px] "
          >
            Contact
          </a>
          <a
            href="#"
            className="text-white text-[13px] md:text-[14px] lg:text-[15px] "
          >
            Properties
          </a>
          <a
            href="#"
            className="text-white text-[13px] md:text-[14px] lg:text-[15px] "
          >
            Blog
          </a>
        </div>

        <div className="hidden md:flex py-[10px] md:py-[11px] lg:py-[14px] px-[16px] md:px-[18px] lg:px-[24px] rounded-[6px] md:rounded-[7px] lg:rounded-[8px] gap-[10px] md:gap-[14px] lg:gap-[16px] bg-white text-[#2a2a2a] text-[14px] md:text-[14px] lg:text-[16px] font-[500] md:font-[400] ">
          Explore
          <img
            src="https://cdn.prod.website-files.com/68ca7130feb656001a9ecc33/68cb832e4ae333057003daba_Vector%20(1).svg"
            alt="arrow"
            className="w-[16px] md:w-[18px] lg:w-[20px] h-[16px] md:h-[18px] lg:h-[20px] object-contain"
          />
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute left-[16px] right-[16px] top-[calc(100%+8px)] z-50 flex flex-col gap-[16px] bg-white bg-opacity-[97%] backdrop-blur-sm p-[16px] md:p-[20px] rounded-[8px] md:rounded-[10px] shadow-2xl border border-white border-opacity-10 animate-in fade-in duration-200">
          <a href="#" className="text-black text-[14px] font-[500]  py-[8px]">
            Home
          </a>
          <a href="#" className="text-black text-[14px] font-[500]  py-[8px]">
            About
          </a>
          <a href="#" className="text-black text-[14px] font-[500]  py-[8px]">
            Contact
          </a>
          <a href="#" className="text-black text-[14px] font-[500]  py-[8px]">
            Properties
          </a>
          <a href="#" className="text-black text-[14px] font-[500]  py-[8px]">
            Blog
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
