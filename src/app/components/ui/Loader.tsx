import React from "react";
import "../../styles/loader.css"; // Pastikan untuk menambahkan animasi kustom di sini

const Spinner = () => {
  return (
    <div className="relative flex justify-center items-center">
    <div className="relative w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 flex justify-center items-center rounded-full">
    <span className="absolute top-1/2 left-[75%] w-7 h-1.5 bg-white shadow-[2px_2px_3px_0px_black] animate-dominos"></span>
    <span className="absolute top-1/2 left-[75%] w-7 h-1.5 bg-white shadow-[2px_2px_3px_0px_black] animate-dominos1"></span>
    <span className="absolute top-1/2 left-[65%] w-7 h-1.5 bg-white shadow-[2px_2px_3px_0px_black] animate-dominos2"></span>
    <span className="absolute top-1/2 left-[55%] w-7 h-1.5 bg-white shadow-[2px_2px_3px_0px_black] animate-dominos3"></span>
    <span className="absolute top-1/2 left-[45%] w-7 h-1.5 bg-white shadow-[2px_2px_3px_0px_black] animate-dominos4"></span>
    <span className="absolute top-1/2 left-[35%] w-7 h-1.5 bg-white shadow-[2px_2px_3px_0px_black] animate-dominos5"></span>
    <span className="absolute top-1/2 left-[25%] w-7 h-1.5 bg-white shadow-[2px_2px_3px_0px_black] animate-dominos6"></span>
    <span className="absolute top-1/2 left-[15%] w-7 h-1.5 bg-white shadow-[2px_2px_3px_0px_black] animate-dominos7"></span>
    <span className="absolute top-1/2 left-[5%] w-7 h-1.5 bg-white shadow-[2px_2px_3px_0px_black] animate-dominos"></span>
    </div>
  </div>
  
  );
};

export default Spinner;
