"use client"

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Logopasko from "../../../public/Navbar/Logo.png";
import { motion } from "framer-motion";

type MenuItem = {
  name: string;
  link: string;
};

const menuItems: MenuItem[] = [
  { name: "Beranda", link: "/#Beranda" },
  { name: "Profil", link: "/#Profil" },
  { name: "Galeri", link: "/services" },
  { name: "Tahapan Seleksi", link: "/#Tahapan Seleksi" },
  { name: "Kontak", link: "/contact" }
];

const FloatingNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`py-3 px-16 z-50 max-sm:px-6 fixed top-0 left-0 w-full transition-all duration-300 ${isScrolled || isOpen ? 'backdrop-blur-sm shadow-sm shadow-white' : 'bg-transparent'}`}>
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-4 px-1 font-Montserrrat font-bold">
          <div className="w-14 h-14 max-sm:w-8 max-sm:h-8">
            <Image src={Logopasko} width={56} height={56} alt="Logo" />
          </div>
          <div className="flex items-center gap-4 max-sm:gap-2 text-base max-sm:text-sm">
            <span className="bg-gradient-to-r from-[#FF0000] to-[#990000] bg-clip-text text-transparent max-sm:text-xs">
              Paskibra
            </span>
            <span className="shadow-text text-sm text-white max-sm:text-xs">
              Kecamatan Sepatan
            </span>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <ul className="hidden md:flex space-x-2">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.link}
                  className="text-white hover:bg-red-500 hover:shadow-lg px-3 py-2 rounded-md text-[13px] font-Montserrrat transition-shadow"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="md:hidden flex items-center px-4">
            <button onClick={toggleMenu} type="button" className="block">
              <span className={`w-[30px] h-[2px] my-2 block bg-white transition-transform ${isOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
              <span className={`w-[30px] h-[2px] my-2 block bg-white transition-transform ${isOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
              <span className={`w-[30px] h-[2px] my-2 block bg-white transition-opacity ${isOpen ? 'opacity-0' : ''}`}></span>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -25 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="top-full left-0 w-full backdrop-blur-md shadow-lg md:hidden z-50 bg-white/10"
        >
          <ul className="flex flex-col space-y-2 p-4">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.link}
                  className="block text-white font-bold hover:bg-red-500 hover:shadow-lg px-4 py-2 rounded-md text-[13px] font-Montserrrat transition-shadow"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default FloatingNav;
