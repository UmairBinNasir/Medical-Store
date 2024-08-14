import ServicesCards from "@/components/ServicesCards";
import ServicesHeader from "@/components/ServicesHeader";
import Slider from "@/components/Slider";
import Tooltip from "@/components/Tooltip";
import React from "react";

function Services() {
  return (
    <div>
      <div>
        <ServicesHeader />
        <Slider />
        <ServicesCards />
      </div>
      <div>
        <Tooltip />
      </div>
    </div>
  );
}

export default Services;
