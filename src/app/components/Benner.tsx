"use client";

import Image from "next/image";
import Logopaskibraka from "../../../public/Beranda/logopaskibraka.png";
import Sbutton from "../components/Hover-button";
import BennerImage from "../../../public/Beranda/Benner.svg";

const Benner = [
  {
    url: BennerImage.src,
  },
];

export default function Home() {
  return (
    <div className="w-full h-[124vh] max-sm:h-[50vh] max-md:h-[55vh] px-3 relative font-Montserrrat">
      <div className="w-full h-full relative">
        <div
          style={{
            backgroundImage: `url(${Benner[0].url})`,
            backgroundSize: "100% auto",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          className="absolute top-0 left-0 w-full h-full bg-center duration-500"
        ></div>

        <div className="absolute top-0 left-0 w-full h-full flex flex-col md:flex-row items-center justify-start px-8 text-white">
          <div className="text-center md:text-left mt-16 md:mt-0">
            <h1 className="bg-gradient-to-r from-red-600 to-white bg-clip-text text-transparent font-bold text-2xl md:text-4xl leading-tight md:leading-normal">
              Selamat Datang Putra Putri Terbaik Kecamatan Sepatan
            </h1>
            <h2 className="text-lg md:text-xl mt-4 max-sm:text-xs">
              Segera daftarkan diri anda sebagai Pasukan Pengibar Bendera Pusaka
              pada website ini ya!
            </h2>
            <div className="mt-6 flex justify-center md:justify-start">
              <Sbutton />
            </div>
          </div>
          <Image
            src={Logopaskibraka}
            alt="logo"
            width={500}
            height={500}
            className="hidden md:block" // Sembunyikan di mobile, tampilkan di layar medium ke atas
          />
        </div>
      </div>
    </div>
  );
}
