"use client"

import React, { useEffect, useState } from "react";
import Lenis from "lenis";
import Benner from "./components/Benner";
import Profil from "./profil/page";
import TahapanSeleksi from "./Tahapan Seleksi/page";
import Spinner from "./components/ui/Loader"; 
import Footer from "./components/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Simulasi delay loading untuk melihat spinner berdasarkan kecepatan internet
    const simulateNetworkRequest = () => new Promise((resolve) => setTimeout(resolve, Math.random() * 3000 + 1000));

    const loadData = async () => {
      await simulateNetworkRequest();
      setIsLoading(false); // Sembunyikan spinner setelah data di-load
    };

    loadData();

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="min-h-screen flex items-center justify-center bg-black">
          <Spinner />
        </div>
      ) : (
        <>
          <Benner />
          <Profil />
          <TahapanSeleksi />
          <Footer />
        </>
      )}
    </div>
  );
}
