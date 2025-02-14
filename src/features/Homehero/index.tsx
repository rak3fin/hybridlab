import Image from "next/image";
import Link from "next/link";

export default function Homehero() {
  return (
    <div className="bg-[url('/custom-bg/home-hero-bg.png')] bg-cover bg-no-repeat bg-center px-5 md:px-14 xlg:px-28 py-7 flex flex-col lg:flex-row items-center md:gap-20 xlg:gap-40">
      <div className="flex flex-col items-center lg:items-stretch my-4 gap-4 lg:gap-8">
        <h3 className="font-black tracking-[0.04em] text-base md:text-2xl xlg:text-3xl text-white">
          BECOME A
        </h3>
        <h1 className="text-site-main-color font-bold text-3xl md:text-7xl font-pilat text-center lg:text-left -mt-3">
          HYBRID ATHLETE
        </h1>
        <div className="flex flex-col lg:flex-row gap-7 items-center lg:items-stretch mt-4">
          <h3 className="font-semibold text-center lg:text-left text-xl md:text-3xl xlg:text-4xl tracking-[0.05em] text-white inline-flex items-center">
            <span className="text-center">&#x2022;</span> ANYONE
          </h3>
          <h3 className="font-semibold text-center lg:text-left text-xl md:text-3xl xlg:text-4xl tracking-[0.05em] text-white inline-flex items-center">
            <span className="text-center">&#x2022;</span> ANYTHING
          </h3>
          <h3 className="font-semibold text-center lg:text-left text-xl md:text-3xl xlg:text-4xl tracking-[0.05em] text-white inline-flex items-center">
            <span className="text-center">&#x2022;</span> ANYWHERE
          </h3>
        </div>
        <p className="text-center lg:text-left font-medium text-base md:text-xl xlg:text-2xl text-white/80">
          <span className="font-bold text-white">
            Unlock your full potential with Hybrid Lab.
          </span>{" "}
          The key to your next level of training found in one app.
        </p>
        <Link
          href="#membership"
          className="bg-site-main-color text-[#1e1e1e] font-bold text-xs lg:text-base py-5 xlg:py-6 px-6 lg:px-7 lg:self-start font-pilat transition-transform hover:scale-[1.05] duration-300"
        >
          Get Started Now
        </Link>
        <div className="flex flex-col lg:flex-row gap-2 lg:gap-6">
          <Image
            src="/extra/play-button.png"
            alt="play"
            width={210}
            height={72}
            className="w-36 lg:w-[11vmax]"
          />
          <Image
            src="/extra/appstore-button.png"
            alt="play"
            width={210}
            height={72}
            className="w-36 lg:w-[11vmax]"
          />
        </div>
      </div>
      <Image
        src="/extra/home-hero-cover.png"
        alt="home-hero"
        width={588}
        height={808}
        className="w-56 lg:w-[30.625vmax]"
      />
    </div>
  );
}
