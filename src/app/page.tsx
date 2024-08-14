import { HeadCards } from "@/components/HeadCards";
import HomeCards from "@/components/HomeCards";
import HomeLayout from "@/components/HomeLayout";
import SparklesBg from "@/components/SparklesBg";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <SparklesBg />
      <HeadCards />
      <HomeCards />
      <HomeLayout />
    </main>
  );
}
