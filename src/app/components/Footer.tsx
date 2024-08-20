"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import Logopaskibraka from "../../../public/Navbar/Logo.png";
import Image from "next/image";
import { useEffect, useState } from "react";

const Footer = () => {

  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    // Update the year if the component mounts (useful if the year changes)
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="font-Montserrrat border-t-2 border-black/30 relative bg-slate-300 pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex font-bold items-center">
              <Image
                src={Logopaskibraka}
                alt="Logo"
                width={500}
                height={500}
                className="w-[120px] h-[120px] md:w-[150px] md:h-[150px]"
              />
              <h4 className="text-xl md:text-3xl bg-gradient-to-r from-red-500 to-black bg-clip-text text-transparent">
                Paskibra Kecamatan
              </h4>
            </div>
            <h5 className="text-sm md:text-lg mt-0 mb-2 text-black">
              Portal seleksi calon Pasukan Pengibar Bendera <span className=" font-bold">(PASKIBRA)</span>
              Kecamatan Sepatan
            </h5>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-center mt-20">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <ul className="list-unstyled text-sm md:text-lg">
                  <li>
                    <p className=" font-semibold block pb-9">
                      Medsos
                    </p>
                  </li>
                  <li>
                    <a
                      className=" hover:text-red-500 md:text-sm hover:ease-out duration-150  hover:text-blueGray-800 font-semibold block pb-2"
                      href="https://blog.creative-tim.com?ref=njs-profile"
                    >
                      -&gt;  Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      className=" hover:text-red-500 hover:ease-out duration-150 font-semibold block pb-2 md:text-sm"
                      href="https://www.github.com/creativetimofficial?ref=njs-profile"
                    >
                      -&gt; Whatsapp
                    </a>
                  </li>
                </ul>
              </div>

              <div className="w-full lg:w-4/12 px-4 ml-auto mt-6">
                <ul className="list-unstyled text-sm md:text-lg">
                  <li>
                    <p
                      className=" font-semibold block pb-9"
                    >
                      Alamat
                    </p>
                  </li>
                  <li>
                    <a
                      className=" font-semibold block md:text-sm hover:text-red-500 hover:ease-out duration-150" 
                      href="https://blog.creative-tim.com?ref=njs-profile"
                    >
                     -&gt;  Jl. Raya Mauk No.89, Sepatan, Tangerang, Banten 15520,
                      Indonesia.
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 border-gray-600/35 border-t-2">
          <div className=" flex items-center justify-center">
            <div className="w-full px-4 text-center">
              <h1 className=" font-bold text-sm md:text-lg">
                Pasukan Pengibar Bendera Kecamatan Sepatan
              </h1>
              <p className=" text-sm md:text-lg">
                @ All Rights Reserved Pasukan Pengibar Bendera Kecamatan Sepatan {""}
                {currentYear}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
