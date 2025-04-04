"use client";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setDarkMode(savedTheme === "dark");
    }
  }, [])
  
  
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="dark:text-white text-black py-4 px-6 border-b-[0.5px] border-b-gray-800 justify-between items-center flex">
      <p className="text-4xl font-black">NM</p>
      <button
        className="bg-amber-500 hover:bg-amber-600 rounded-full p-2 w-9 h-9 hover:cursor-pointer transition-colors duration-200 text-black shadow-lg"
        onClick={toggleMode}
      >
        <i className={`bx bx-${darkMode ? "sun" : "moon"} text-xl`}></i>
      </button>
    </div>
  );
};

export default Navbar;
