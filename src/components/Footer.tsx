import Link from "next/link";
import { HiOutlineMail } from "react-icons/hi";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-24">
        <Link href="/projects">
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4">
          I am relatively skilled in developing and preserving e-trade programs and have a
          track record of turning in successful projects on time.
          </p>
        </div>
        </Link>
        <div className="md:pl-24">
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-3">
            <li>
              <Link
                href="/"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:text-white transition-colors duration-300"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-white transition-colors duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-white transition-colors duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <div className="space-y-3">
            <Link href="" className="text-white flex items-center space-x-2">
              <HiOutlineMail />
              <p className="text-white">aumair1259@gmail.com</p>
            </Link>
            <Link href="" className="text-white flex items-center space-x-2">
              <IoCall />
              <p className="text-white">+92 309 4041460</p>
            </Link>
            <Link href="" className="text-white flex items-center space-x-2">
              <FaLocationDot />
              <p className="text-white">Lahore, Punjab, Pakistan</p>
            </Link>
            <Link
              href="https://www.linkedin.com/in/abdul-wajid-nasir"
              className="text-white flex items-center space-x-2"
            >
              <FaLinkedin />
              <p className="text-white">Linkedin</p>
            </Link>
          </div>
        </div>
      </div>
      <p className="text-center text-xs pt-8">
        © 2024 Umair Bin Nasir. All rights reserved.
      </p>
    </footer>
  );
}
export default Footer;