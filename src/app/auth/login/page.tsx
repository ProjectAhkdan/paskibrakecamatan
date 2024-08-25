"use client";

import { useState } from "react";
import React from "react";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import Recaptcha from "../../components/Recaptcha"; // Pastikan path-nya benar
import { cn } from "@/app/libs/utils";

export default function LoginSignUpSlider() {
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!captchaValue) {
      alert("Please complete the CAPTCHA.");
      return;
    }

    const res = await fetch("/api/verify-captcha", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ response: captchaValue }),
    });

    const data = await res.json();
    alert(data.message);
  };

  return (
    <div className="min-h-screen font-Montserrrat text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow-white shadow-lg sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className="mt-12 flex flex-col items-center">
            <span className="text-4xl">👋</span>
            <h1 className="text-2xl text-center xl:text-3xl font-extrabold">
              Welcome Back, Adan
            </h1>
            <p className="text-center text-gray-500">
              Silahkan Masukan Data Anda
            </p>

            <div className="w-full flex-1">
              <div className="flex flex-col items-center"></div>

              <div className="my-12 border-b text-center">
                <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-3/4">
                  Input your Data
                </div>
              </div>

              <div className="mx-auto max-w-xs">
                <form onSubmit={handleSubmit}>
                  <LabelInputContainer>
                    <Label htmlFor="nik">NIK sesuai KTP</Label>
                    <Input
                      className="w-full px-8 py-4 rounded-lg font-medium focus:text-black border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                      type="number"
                      id="nik"
                      placeholder="NIK"
                      required
                    />
                  </LabelInputContainer>

                  {/* CAPTCHA Integration */}
                  <div className="mt-5">
                    <Recaptcha onChange={handleCaptchaChange} />
                  </div>

                  <LabelInputContainer className="mt-5">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      className="w-full px-8 py-4 rounded-lg font-medium focus:text-black border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                      type="password"
                      id="password"
                      placeholder="Password"
                      required
                    />
                  </LabelInputContainer>

                  <button
                    className="relative mt-4 block w-full h-10 bg-gradient-to-br from-black to-neutral-600 text-white rounded-md font-medium shadow-md transition-shadow duration-300 ease-in-out hover:shadow-lg"
                    type="submit"
                  >
                    Sign up <span>&gt;</span>
                    <BottomGradient />
                  </button>
                </form>

                <p className="mt-6 text-xs text-gray-600 text-center">
                  I agree to abide by templatana's
                  <a
                    href="#"
                    className="border-b border-gray-500 border-dotted"
                  >
                    Terms of Service
                  </a>
                  and its
                  <a
                    href="#"
                    className="border-b border-gray-500 border-dotted"
                  >
                    Privacy Policy
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex flex-1 h-[50rem] w-full bg-black rounded-lg bg-grid-white/[0.2] relative items-center justify-center">
          {/* New div for background effect */}
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black rounded-lg [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] z-10"></div>
          {/* Image div positioned on top */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="bg-[url('/Navbar/Logo.png')] w-full h-full bg-contain bg-center bg-no-repeat"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
