"use client";

import Image from "next/image";
import Logopaskibraka from "../../../public/Beranda/logopaskibraka.png";
import Sbutton from "../components/Hover-button";
import Benner from "../../../public/Beranda/Benner.svg";

export default function Home() {
  return (
    <div id="Beranda" className="min-h-screen w-full relative py-16">
      {/* Gambar background dengan z-index lebih rendah dan padding */}
      <div
        className="absolute inset-0 w-full"
        style={{
          zIndex: -1,
          backgroundImage: `url(${Benner.src})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* Konten dengan z-index lebih tinggi */}
      <div className="relative z-1 px-3 md:px-7 pt-16 md:pt-28 flex flex-col md:flex-row items-center h-full">
        <div className="flex flex-col items-center text-center md:text-left md:items-start w-full md:w-1/2 py-10 md:py-20 font-Montserrrat text-white md:pl-16 md:pr-8">
          <h1 className="text-2xl md:text-3xl lg:text-4xl bg-gradient-to-r from-red-600 to-white bg-clip-text text-transparent font-bold">
            Selamat Datang Putra Putri Terbaik Kecamatan Sepatan
          </h1>
          <p className="mt-4 text-sm md:text-base">
            Segera daftarkan diri anda sebagai Pasukan Pengibar Bendera Pusaka
            pada website ini ya!
          </p>
          <div className="mt-4">
            <Sbutton />
          </div>
        </div>

        {/* Gambar yang hanya muncul di layar lebih besar */}
        <div className="hidden md:flex justify-center items-center w-full md:w-1/2 px-4 md:px-16 py-3">
          <Image
            src={Logopaskibraka}
            width={507}
            height={480}
            alt="Logo"
            className="w-full h-full"
          />
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          #Beranda > div {
            background-position: top;
          }
        }

        @media (min-width: 1025px) {
          #Beranda > div {
            background-position: center;
          }
        }
      `}</style>
    </div>
  );
}
