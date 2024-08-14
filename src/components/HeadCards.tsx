import { HoverEffect } from "./ui/card-hover-effect";

export function HeadCards() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Welcome to Tabeeb",
    description:
      "Your trusted source for high-quality medical supplies and medications.",
    link: "https://stripe.com",
  },
  {
    title: "Our mission is",
    description:
      " To provide you with the best products to support your health and wellness.",
    link: "https://netflix.com",
  },
  {
    title: "We are committed",
    description:
      "To offering a wide range of options to meet your needs with convenience and reliability.",
    link: "https://google.com",
  },
  {
    title: "At Tabeeb",
    description:
      "We are here to assist you with personalized advice and recommendations.",
    link: "https://meta.com",
  },
  {
    title: "For your Questions",
    description:
      "We’re here to provide the support and information you need to make informed decisions.",
    link: "https://amazon.com",
  },
  {
    title: "Your Safety and Satisfaction",
    description:
      "We adhere to the highest standards of quality and hygiene in all our products.",
    link: "https://microsoft.com",
  },
];
