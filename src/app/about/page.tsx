import AboutHybridLab from "@/features/AboutHybridLab";
import AboutVideo from "@/features/AboutVideo";
import ChoosePlan from "@/features/ChoosePlan";
import OurJourney from "@/features/OurJourney";
import OurValues from "@/features/OurValues";
import MainWebTemplate from "@/templates/MainWebTemplate";
import Link from "next/link";

export default function About() {
  return (
    <MainWebTemplate>
      <section className="flex relative">
        <video
          src="/custom-bg/running vid final.mp4"
          width={1920}
          className="h-64 lg:h-[35.8rem] object-cover"
          autoPlay
          muted
          height={573}
        ></video>
        <div className="bg-[linear-gradient(90deg,_#000000_-10.93%,_rgba(0,_0,_0,_0)_100%)] absolute w-full h-full flex flex-col ps-4 lg:ps-32 justify-center gap-2 lg:gap-5">
          <h3 className="text-white text-base xlg:text-2xl tracking-[0.04em] inline-flex gap-2 capitalize">
            <Link href="/">home</Link> /{" "}
            <span className="font-bold">About Us</span>
          </h3>
          <h1 className="font-pilat text-white font-bold text-5xl xlg:text-7xl tracking-[0.04em]">
            ABOUT US
          </h1>
          <Link
            href="#about-us"
            className="bg-site-main-color text-[#1e1e1e] font-bold text-xs lg:text-base py-5 xlg:py-6 px-6 xlg:px-7 self-start font-pilat transition-transform hover:scale-[1.05] duration-300 mt-4 lg:mt-5"
          >
            Know More
          </Link>
        </div>
      </section>
      <OurJourney />
      <AboutHybridLab />
      <OurValues />
      <AboutVideo />
      <ChoosePlan />
    </MainWebTemplate>
  );
}
