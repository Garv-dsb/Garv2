import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full px-[20px] pt-[20px] bg-transparent ">
      <div className="flex justify-between pb-[12px]">
        <img
          className="w-[125px]"
          src="https://cdn.prod.website-files.com/68ca7130feb656001a9ecc33/68ea46760129319e670370c5_White.svg"
          alt="Logo"
        />
        <div
          className="text-white text-3xl cursor-pointer transition duration-300 lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <IoMdClose /> : <GiHamburgerMenu />}
        </div>
      </div>
      {/* <div className="hidden md:flex ">
        <a href="#" className="text-gray-700 hover:text-blue-500">
          Home
        </a>
        <a href="#" className="text-gray-700 hover:text-blue-500">
          About
        </a>
        <a href="#" className="text-gray-700 hover:text-blue-500">
          Services
        </a>
        <a href="#" className="text-gray-700 hover:text-blue-500">
          Contact
        </a>
      </div> */}
    </nav>
  );
};

export default Navbar;
