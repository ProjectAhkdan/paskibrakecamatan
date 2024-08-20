import React from "react";
import "../../styles/loader.css"; // Pastikan untuk menambahkan animasi kustom di sini

const Spinner = () => {
  return (
    <div className="relative flex justify-center items-center">
      <div className="relative w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 flex justify-center items-center rounded-full">
        <span className="absolute top-1/2 left-[75%] w-7 h-1.5 bg-white animate-dominos shadow-[2px_2px_3px_0px_black] delay-[0.125s]"></span>
        <span className="absolute top-1/2 left-[65%] w-7 h-1.5 bg-white animate-dominos shadow-[2px_2px_3px_0px_black] delay-[0.3s]"></span>
        <span className="absolute top-1/2 left-[55%] w-7 h-1.5 bg-white animate-dominos shadow-[2px_2px_3px_0px_black] delay-[0.425s]"></span>
        <span className="absolute top-1/2 left-[45%] w-7 h-1.5 bg-white animate-dominos shadow-[2px_2px_3px_0px_black] delay-[0.54s]"></span>
        <span className="absolute top-1/2 left-[35%] w-7 h-1.5 bg-white animate-dominos shadow-[2px_2px_3px_0px_black] delay-[0.665s]"></span>
        <span className="absolute top-1/2 left-[25%] w-7 h-1.5 bg-white animate-dominos shadow-[2px_2px_3px_0px_black] delay-[0.79s]"></span>
        <span className="absolute top-1/2 left-[15%] w-7 h-1.5 bg-white animate-dominos shadow-[2px_2px_3px_0px_black] delay-[0.915s]"></span>
        <span className="absolute top-1/2 left-[5%] w-7 h-1.5 bg-white animate-dominos shadow-[2px_2px_3px_0px_black]"></span>
      </div>
    </div>
  );
};

export default Spinner;
