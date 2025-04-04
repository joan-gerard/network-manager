import React from "react";
import Image from "next/image";
import ThemeIcon from "./ThemeIcon";

const Navbar = () => {
  return (
    <div className="text-white py-4 px-6 border-b-[0.5px] border-b-gray-800 justify-between items-center flex">
      <p className="text-4xl font-black">NM</p>
      <div className="bg-stone-900 rounded p-2 hover:bg-stone-800 hover:cursor-pointer transition-colors duration-200">
        <ThemeIcon />
      </div>
    </div>
  );
};

export default Navbar;
