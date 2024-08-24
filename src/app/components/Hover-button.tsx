"use client";
import React from "react";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";
import Link from "next/link";

export default function HoverButton() {
  return (
    <div className="flex text-center py-3 gap-5">
      <div>
        <Link href="/login">
          <button className="text-[10px] shadow-black shadow-sm border-b-2 border-[#FF0000] text-white px-4 py-2 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-gradient-to-b from-white to-gray-500 hover:text-black transition duration-200">
            DAFTAR
          </button>
        </Link>
      </div>
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="bg-black text-white flex items-center space-x-2"
      >
        <Link href="/auth/login">
          <span className="text-[10px] font-bold">MASUK</span>
        </Link>
      </HoverBorderGradient>
    </div>
  );
}
