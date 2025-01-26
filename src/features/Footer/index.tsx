import Image from "next/image";
import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="flex flex-col bg-[#292929] px-4 md:px-14 xl:px-28 py-7 lg:py-14">
      <div className="flex flex-col lg:flex-row lg:justify-between gap-5 md:gap-8 xl:gap-12 mb-14">
        <div className="flex flex-col gap-4 flex-1">
          <Link href="/" className="">
            <Image
              src="/logo-dark.png"
              alt="logo"
              width={94}
              height={66}
              className="w-20 md:w-24"
            />
          </Link>
          <p className="text-sm text-white/80">
            Embrace the ethos of hybrid training and join us on a journey
            towards limitless energy and unparalleled performance.
          </p>
          <div className="inline-flex gap-1 items-center text-white text-sm">
            <FaLocationDot />
            <span>
              Hybrid Lab HQ - 7/49 Leda Drive, Burleigh heads, Qld, 4220
            </span>
          </div>
          <div className="inline-flex gap-1 items-center text-white text-sm">
            <IoMdMail />
            <span>admin@hybridlab.com.au</span>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="font-bold font-pilat text-white text-lg">
            USEFUL LINKS
          </h2>
          <ul className="flex flex-col gap-2">
            <li className="inline-flex gap-1 items-center text-white text-base uppercase">
              <Link href="/">Home</Link>
            </li>
            <li className="inline-flex gap-1 items-center text-white text-base uppercase">
              <Link href="/online-program">ONLINE PROGRAMS</Link>
            </li>
            <li className="inline-flex gap-1 items-center text-white text-base uppercase">
              <Link href="/about-us">ABOUT US</Link>
            </li>
            <li className="inline-flex gap-1 items-center text-white text-base uppercase">
              <Link href="/contact-us">CONTACT US</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="font-bold font-pilat text-white text-lg">
            SOCIAL LINK
          </h2>
          <ul className="flex gap-2">
            <li className="inline-flex gap-1 items-center text-white text-base lg:text-lg">
              <Link href="/">
                <FaFacebookF />
              </Link>
            </li>
            <li className="inline-flex gap-1 items-center text-white text-base lg:text-lg">
              <Link href="/">
                <FaTiktok />
              </Link>
            </li>
            <li className="inline-flex gap-1 items-center text-white text-base lg:text-lg">
              <Link href="/">
                <FaInstagram />
              </Link>
            </li>
            <li className="inline-flex gap-1 items-center text-white text-base lg:text-lg">
              <Link href="/">
                <FaLinkedinIn />
              </Link>
            </li>
            <li className="inline-flex gap-1 items-center text-white text-base lg:text-lg">
              <Link href="/">
                <BsTwitterX />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full bg-white h-0.5"></div>
      <div className="flex items-center justify-center mt-2 lg:mt-4">
        <h1 className="text-white font-light text-sm">
          &copy; 2024 Hybrid Lab. All rights reserved
        </h1>
      </div>
    </footer>
  );
}
