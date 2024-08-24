"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { cardskec } from "./DataTP";
import { cardskab } from "./DataTP";
import Logo from "../../../public/Navbar/Logo.png";
import { CardContainer, CardBody, CardItem } from "../components/ui/3dCard";
import { Button } from "../components/ui/moving-border";

/* CSS Swiper*/
import "../styles/swipper.css";

export default function TahapanSeleksi() {

  return (
    <div className="bg-slate-300 rounded-t-3xl py-6 relative font-Montserrrat">
      <div className="flex items-center justify-between px-6 md:px-12 lg:px-20 mb-6">
        <Image src={Logo} alt="Logo" width={50} height={50} />
        <div className="text-center">
          <h1 className="text-xl md:text-2xl font-bold text-red-600">
            Tahapan Seleksi
          </h1>
          <p className="text-xs md:text-sm text-black font-bold">
            Berikut Seleksi Tingkat KECAMATAN SEPATAN
          </p>
        </div>
      </div>
      <div className="px-4 md:px-5 lg:px-5">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
        >
          {cardskec.map((card, index) => (
            <SwiperSlide key={index}>
              <CardContainer className="inter-var">
                <CardBody className="border-2 border-black relative group/card mx-2 md:mx-2 w-auto h-auto rounded-t-xl rounded-b-xl p-4 md:p-6 shadow-lg transition-shadow duration-500 ease-in-out hover:shadow-[0_4px_8px_rgba(255,0,0,0.5)]">
                  <TruncateTitlekec
                    title={card.title}
                    className="text-sm md:text-lg font-bold text-red-500"
                  />
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-xs md:text-sm max-w-sm mt-2 text-black"
                  >
                    {card.description}
                  </CardItem>
                  <div className="flex flex-col md:flex-row justify-between items-center mt-4">
                    <CardItem
                      translateZ={20}
                      as={Link}
                      href={card.link}
                      target="__blank"
                      className="px-4 py-2 rounded-xl text-xs font-normal text-black mb-2 md:mb-0"
                    >
                      <span className="block md:hidden">Daftar Sekarang ↓</span>
                      <span className="hidden md:block">Daftar Sekarang →</span>
                    </CardItem>

                    <CardItem
                      translateZ={20}
                    >
                      <Button
                        borderRadius="1.75rem"
                        className=" bg-black text-white font-bold"
                      >
                        Sign up
                      </Button>
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex items-center justify-between px-6 md:px-12 lg:px-20 mb-6">
        <Image src={Logo} alt="Logo" width={50} height={50} />
        <div className="text-center">
          <h1 className="text-xl md:text-2xl font-bold text-red-600">
            Tahapan Seleksi
          </h1>
          <p className="text-xs md:text-sm text-black font-bold">
            Berikut Seleksi Tingkat KECAMATAN SEPATAN
          </p>
        </div>
      </div>
      <div className="px-4 md:px-5 lg:px-5">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
        >
          {cardskab.map((card, index) => (
            <SwiperSlide key={index}>
              <CardContainer className="inter-var">
                <CardBody className="border-2 border-black relative group/card mx-2 md:mx-2 w-auto h-auto rounded-t-xl rounded-b-xl p-4 md:p-6 shadow-lg transition-shadow duration-500 ease-in-out hover:shadow-[0_4px_8px_rgba(255,0,0,0.5)]">
                  <TruncateTitlekab
                    title={card.title}
                    className="text-sm md:text-lg font-bold text-red-500"
                  />
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-xs md:text-sm max-w-sm mt-2 text-black"
                  >
                    {card.description}
                  </CardItem>
                  <div className="flex flex-col md:flex-row justify-between items-center mt-4">
                    <CardItem
                      translateZ={20}
                      as={Link}
                      href={card.link}
                      target="__blank"
                      className="px-4 py-2 rounded-xl text-xs font-normal text-black mb-2 md:mb-0"
                    >
                      <span className="block md:hidden">Daftar Sekarang ↓</span>
                      <span className="hidden md:block">Daftar Sekarang →</span>
                    </CardItem>

                    <CardItem
                      translateZ={20}
                    >
                      <Button
                        borderRadius="1.75rem"
                        className=" bg-black text-white font-bold"
                      >
                        Sign up
                      </Button>
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

const TruncateTitlekec = ({
  title,
  className,
}: {
  title: string;
  className: string;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => setIsExpanded(!isExpanded);

  return (
    <CardItem translateZ="50" className={className}>
      {truncateText(title, isExpanded)}
      <button
        onClick={handleToggle}
        className="text-blue-500 text-sm underline ml-1"
      >
        {isExpanded ? "Sembunyikan" : "Lihat selengkapnya"}
      </button>
    </CardItem>
  );
};

const TruncateTitlekab = ({
  title,
  className,
}: {
  title: string;
  className: string;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => setIsExpanded(!isExpanded);

  return (
    <CardItem translateZ="50" className={className}>
      {truncateText(title, isExpanded)}
      <button
        onClick={handleToggle}
        className="text-blue-500 text-sm underline ml-1"
      >
        {isExpanded ? "Sembunyikan" : "Lihat selengkapnya"}
      </button>
    </CardItem>
  );
};

const truncateText = (text: string, isExpanded: boolean) => {
  if (isExpanded) return text;
  return `${text.split(" ")[0]}...`;
};
