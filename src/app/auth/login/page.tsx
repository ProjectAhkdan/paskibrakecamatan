"use client";

import Image from "next/image";
import React, { useState } from "react";
import BGg from "../../../../public/Login/Kab1.jpg";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";

export default function LoginSignUpSlider() {

  return (
    <div className="relative h-screen w-full font-Montserrrat">
      <div className="h-full w-full">
        <Image src={BGg} alt="background" layout="fill" objectFit="cover" />
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 backdrop-blur-sm"></div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <div className="md:w-[900px] w-11/12 h-96 md:h-96 shadow shadow-white rounded-lg backdrop-blur-sm bg-white/15 flex flex-col md:flex-row">
          {/* Elemen tambahan dengan background merah */}
          <div className="md:w-1/2 w-full h-1/2 md:h-full bg-red-500 flex justify-center items-center relative rounded-t-lg md:rounded-l-lg md:rounded-tr-none">
            <div className="absolute inset-0">
              <Image
                src={BGg}
                alt="background"
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
              />
              <div className="absolute rounded-t-lg md:rounded-l-lg md:rounded-tr-none top-0 left-0 w-full h-full bg-black/50"></div>
            </div>
            <div className="absolute">
              <div className=" inset-0 justify-start items-center pl-16 pr-36">
                <span className="text-3xl text text-center ">👋</span>
                <p className="text-white relative z-10 md:text-xl font-normal">
                  Welcome back{" "}
                  <span className=" gradient-text animate-gradient font-extrabold text-2xl">
                    (nama orangnya)
                  </span>
                </p>
              </div>

              <div className=" inset-0 justify-start items-center pl-16 pr-7">
                <p className="text-white mt-2 md:text-xs font-light">
                  Masuk untuk mengakses dashboard Paskibra Kecamatan Sepatan
                </p>
              </div>
            </div>
          </div>

          {/* Elemen tambahan dengan background putih */}
          <div className="md:w-1/2 w-full h-1/2 md:h-full flex justify-center items-center rounded-b-lg md:rounded-r-lg md:rounded-bl-none">
   
          </div>
        </div>
      </div>
    </div>
  );
}
