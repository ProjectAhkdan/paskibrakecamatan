"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import Profil1 from "../../../public/Tahapan/foto1.jpg";
import Profil2 from "../../../public/Tahapan/foto2.jpg";
import Profil3 from "../../../public/Tahapan/foto3.jpg";
import Logo from "../../../public/Navbar/Logo.png";
import { CardContainer, CardBody, CardItem } from "../components/ui/3dCard";

export default function TahapanSeleksi() {
  const cardskec = [
    {
      title: "Seleksi Administrasi",
      description: "Ketentuan ini tidak dapat dinegosiasikan atau ditawar",
      image: Profil1,
      link: "https://twitter.com/mannupaaji",
    },
    {
      title: "Seleksi Administrasi",
      description: "Ketentuan ini tidak dapat dinegosiasikan atau ditawar",
      image: Profil2,
      link: "https://twitter.com/mannupaaji",
    },
    {
      title: "Seleksi Pancasila dan Wawasan Kebangsaan",
      description: "Ketentuan ini tidak dapat dinegosiasikan atau ditawar",
      image: Profil3,
      link: "https://twitter.com/mannupaaji",
    },
    {
      title: "Seleksi Inteligensia Umum",
      description: "Ketentuan ini tidak dapat dinegosiasikan atau ditawar",
      image: Profil1,
      link: "https://twitter.com/mannupaaji",
    },
    {
      title: "Seleksi Kesehatan",
      description: "Ketentuan ini tidak dapat dinegosiasikan atau ditawar",
      image: Profil2,
      link: "https://twitter.com/mannupaaji",
    },
    {
      title: "Seleksi Parade",
      description: "Ketentuan ini tidak dapat dinegosiasikan atau ditawar",
      image: Profil3,
      link: "https://twitter.com/mannupaaji",
    },
    {
      title: "Seleksi PBB dan Kesamaptaan",
      description: "Ketentuan ini tidak dapat dinegosiasikan atau ditawar",
      image: Profil3,
      link: "https://twitter.com/mannupaaji",
    },
    {
      title: "Seleksi Kepribadian",
      description: "Ketentuan ini tidak dapat dinegosiasikan atau ditawar",
      image: Profil3,
      link: "https://twitter.com/mannupaaji",
    },
    {
      title: "Seleksi Akhir",
      description: "Ketentuan ini tidak dapat dinegosiasikan atau ditawar",
      image: Profil3,
      link: "https://twitter.com/mannupaaji",
    },
  ];

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
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 30,
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
                  <CardItem
                    translateZ="50"
                    className="text-sm md:text-lg font-bold text-red-500"
                  >
                    {card.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-xs md:text-sm max-w-sm mt-2 text-black"
                  >
                    {card.description}
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                      src={card.image}
                      height="1000"
                      width="1000"
                      className="h-40 md:h-60 w-full object-cover rounded-xl"
                      alt="thumbnail"
                    />
                  </CardItem>
                  <div className="flex flex-col md:flex-row justify-between items-center mt-4">
                    <CardItem
                      translateZ={20}
                      as={Link}
                      href={card.link}
                      target="__blank"
                      className="px-4 py-2 rounded-xl text-xs font-normal text-black mb-2 md:mb-0"
                    >
                      Daftar Sekarang →
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                      Sign up
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
