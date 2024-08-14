/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";
import Data from "@/Data/ServicesData.json";
import Link from "next/link";
import { Fanwood_Text } from "next/font/google";

interface Carddata {
  id: number;
  title: string;
  link: string;
  description: string;
  isFeatured: boolean;
  image: string;
}

function ServicesCards() {
  const featuredData = Data.data.filter(
    (carddata: Carddata) => carddata.isFeatured
  );
  return (
    <div className="py-12 bg-gray-900">
      <div className="mt-10 mx-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
          {featuredData.map((carddata: Carddata) => (
              <div key={carddata.id} className="flex justify-center">
                <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                  <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                    <img
                      className="w-80 h-52 rounded-lg"
                      src={carddata.image}
                      alt=""
                    />
                    <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                      {carddata.title}
                    </p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                      {carddata.description}
                    </p>
                  </div>
                </BackgroundGradient>
              </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default ServicesCards;
