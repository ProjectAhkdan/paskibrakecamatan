import React from "react";
import "../../styles/loader.css"; // Pastikan untuk menambahkan animasi kustom di sini

const Spinner = () => {
  return (
    <div className="relative w-15 h-15 flex justify-center items-center rounded-full">
      <span className="absolute top-1/2 left-[80px] w-[35px] h-[7px] bg-white animate-dominos shadow-[2px_2px_3px_0px_black] delay-[0.125s]"></span>
      <span className="absolute top-1/2 left-[70px] w-[35px] h-[7px] bg-white animate-dominos shadow-[2px_2px_3px_0px_black] delay-[0.3s]"></span>
      <span className="absolute top-1/2 left-[60px] w-[35px] h-[7px] bg-white animate-dominos shadow-[2px_2px_3px_0px_black] delay-[0.425s]"></span>
      <span className="absolute top-1/2 left-[50px] w-[35px] h-[7px] bg-white animate-dominos shadow-[2px_2px_3px_0px_black] delay-[0.54s]"></span>
      <span className="absolute top-1/2 left-[40px] w-[35px] h-[7px] bg-white animate-dominos shadow-[2px_2px_3px_0px_black] delay-[0.665s]"></span>
      <span className="absolute top-1/2 left-[30px] w-[35px] h-[7px] bg-white animate-dominos shadow-[2px_2px_3px_0px_black] delay-[0.79s]"></span>
      <span className="absolute top-1/2 left-[20px] w-[35px] h-[7px] bg-white animate-dominos shadow-[2px_2px_3px_0px_black] delay-[0.915s]"></span>
      <span className="absolute top-1/2 left-[10px] w-[35px] h-[7px] bg-white animate-dominos shadow-[2px_2px_3px_0px_black]"></span>
    </div>
  );
};

export default Spinner;
