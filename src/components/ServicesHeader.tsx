"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";

export default function ServicesHeader() {
  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Medication
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          At Medical Store, we procure all our medicines from only certified and
          registered pharmacies in Pakistan such as Kausar Medicos, Tayyab
          Medical, Time Medicos, etc. and authorized distributors of
          manufacturing companies. We sell high-quality drugs and practice
          hygiene measures to make sure all the prescriptions are safely placed
          in the best conditions.
        </p>
      </div>
      <BackgroundBeams />
    </div>
  );
}
