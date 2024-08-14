"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { FaHome } from "react-icons/fa";
import { RiSurgicalMaskLine } from "react-icons/ri";
import { AiOutlineMedicineBox } from "react-icons/ai";
import { MdConnectWithoutContact } from "react-icons/md";
export default function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <FaHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
        name: "Medication",
        link: "/medication",
        icon: <AiOutlineMedicineBox className="h-4 w-4 text-neutral-500 dark:text-white" />,
      },
    {
      name: "Instruments",
      link: "/instruments",
      icon: <RiSurgicalMaskLine className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
