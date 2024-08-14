"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Risek Insta Powder",
    designation: "20/1100 mg 10 Sachet",
    image:
      "/services/1.jpg",
  },
  {
    id: 2,
    name: "Panadol Paracetamol",
    designation: "500mg",
    image:
      "/services/4.jpg",
  },
  {
    id: 3,
    name: "CAC-1000 Plus tablet",
    designation: "Orange 20’s",
    image:
      "/services/6.jpg",
  },
  {
    id: 4,
    name: "GNC TRIFLEX",
    designation: "CapsuleLETS",
    image:
      "/services/8.jpg",
  },
  {
    id: 5,
    name: "Risek Insta Powder",
    designation: "20/1100 mg 10 Sachet",
    image:
      "/services/9.jpg",
  },
  {
    id: 6,
    name: "Panadol Paracetamol",
    designation: "500mg",
    image:
      "/services/10.jpg",
  },
];

export default function Tooltip() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
