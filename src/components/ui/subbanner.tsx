"use client";

import Image from "next/image";
import Link from "next/link";

export default function SubBanner({
  img,
  path,
  heading,
  btnLabel,
  btnPath,
}: {
  img: string;
  path: string;
  heading: string;
  btnLabel: string;
  btnPath: string;
}) {
  return (
    <section className="flex relative">
      <Image
        src={img}
        alt="banner"
        width={1920}
        height={573}
        className="h-64 lg:h-auto object-cover"
      />
      <div className="bg-[linear-gradient(90deg,_#000000_-10.93%,_rgba(0,_0,_0,_0)_100%)] absolute w-full h-full flex flex-col ps-4 lg:ps-32 justify-center gap-2 lg:gap-5">
        <h3 className="text-white text-base xlg:text-2xl tracking-[0.04em] inline-flex gap-2 capitalize">
          <Link href="/">home</Link> / <span className="font-bold">{path}</span>
        </h3>
        <h1 className="font-pilat text-white font-bold text-5xl xlg:text-7xl tracking-[0.04em]">
          {heading}
        </h1>
        <Link
          href={btnPath}
          className="bg-site-main-color text-[#1e1e1e] font-bold text-xs lg:text-base py-5 xlg:py-6 px-6 xlg:px-7 self-start font-pilat transition-transform hover:scale-[1.05] duration-300 mt-4 lg:mt-5"
        >
          {btnLabel}
        </Link>
      </div>
    </section>
  );
}
