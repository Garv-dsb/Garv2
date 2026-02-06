import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { IoReorderThreeOutline } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" top-0 z-[10] w-full bg-image">
      <div className="flex justify-between px-[16px] md:px-[32px] lg:px-[64px] bg-white border-b-[1px] border-[#bbb9b5] relative">
        {/* Logo  */}
        <a
          href="#"
          className="w-[96px] max-w-[128px] relative items-center py-[16px] pr-[16px] text-[16px] decoration-none float-left leading-[1.1] md:w-[128px] lg:w-[128px]  flex items-center"
        >
          <img
            className="inline-block w-full h-full"
            src="https://cdn.prod.website-files.com/696074945cb163c33f02bf78/69609dc5d13aa253649678cc_HOMURA.svg"
            alt="Logo"
          />
        </a>

        {/* Hamburger Menu  */}
        <div className="my-auto relative p-[8px] bg-black text-white h-fit float-right hover:cursor-pointer text-[24px]  lg:hidden">
          {isOpen ? (
            <IoMdClose
              className="h-[24px] w-[24px] text-white"
              onClick={() => setIsOpen(!isOpen)}
            />
          ) : (
            <IoReorderThreeOutline
              className="h-[24px] w-[24px] text-white"
              onClick={() => setIsOpen(!isOpen)}
            />
          )}
        </div>

        {/* Nav Items - Only display on Large screens  */}

        <div className="hidden lg:flex bg-[#0000] flex flex-row w-[66.67%] justify-center items-center h-full w-full my-auto ">
          <ul className="flex flex-row gap-[32px]">
            <li className="text-[#a6e00a] text-[16px] leading-[1.1] font-[400]">
              Home
            </li>
            <li className="text-black text-[16px] leading-[1.1] font-[400]">
              About
            </li>
            <li className="text-black text-[16px] leading-[1.1] font-[400]">
              Properties
            </li>
            <li className="text-black text-[16px] leading-[1.1] font-[400]">
              Services
            </li>
          </ul>
        </div>

        <div className="hidden lg:flex flex py-[16px] pl-[16px] items-end w-[16.67%]">
          <a
            className="border-[1px] border-[#081010] text-[#081010] bg-[#0000] text-[18px] leading-[1.3] text-center px-[32px] py-[12px] font-[500] w-[100%]"
            href="#"
          >
            Contact
          </a>
        </div>
      </div>

      {/* Mobile Menu  */}
      {isOpen ? (
        <div className="absolute px-[16px] pt-[4px] z-400 w-full md:px-[32px]">
          <div className="flex flex-col gap-[32px] mx-auto text-center py-[64px] px-[16px] border-[1px] border-[#bbb9b5] bg-[#fffdfa] rounded-[8px] md:grid ">
            <a className="text-[16px] leading-[1.1] font-[400] p-0 font-[400] ">
              Home
            </a>
            <a className="text-[16px] leading-[1.1] font-[400] p-0 font-[400] ">
              About
            </a>
            <a className="text-[16px] leading-[1.1] font-[400] p-0 font-[400] ">
              Contact
            </a>
            <a className="text-[16px] leading-[1.1] font-[400] p-0 font-[400] ">
              Service
            </a>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
