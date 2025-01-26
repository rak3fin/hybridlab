import Image from "next/image";
import Link from "next/link";

export default function Homehero() {
  return (
    <div className="bg-[url('/custom-bg/home-hero-bg.png')] bg-cover bg-no-repeat px-5 md:px-14 xl:px-28 py-7 flex flex-col lg:flex-row items-center lg:gap-40">
      <Image
        src="/extra/home-hero-cover.png"
        alt="home-hero"
        width={588}
        height={808}
        className="w-56 lg:w-[30.625vmax]"
      />
      <div className="flex flex-col items-center lg:items-stretch my-4 gap-4 lg:gap-8">
        <h3 className="font-black tracking-[0.04em] text-base md:text-2xl xl:text-4xl text-white">
          BECOME A
        </h3>
        <h1 className="text-site-main-color font-black text-3xl md:text-5xl xl:text-7xl font-pilat text-center lg:text-left">
          HYBRID ATHLETE
        </h1>
        <h3 className="font-semibold text-center lg:text-left text-xl md:text-3xl xl:text-5xl tracking-[0.05em] text-white">
          ANYONE
        </h3>
        <h3 className="font-semibold text-center lg:text-left text-xl md:text-3xl xl:text-5xl tracking-[0.05em] text-white">
          ANYTHING
        </h3>
        <h3 className="font-semibold text-center lg:text-left text-xl md:text-3xl xl:text-5xl tracking-[0.05em] text-white">
          ANYWHERE
        </h3>
        <p className="text-center lg:text-left font-semibold text-base md:text-xl xl:text-2xl text-white/80">
          <span className="font-bold text-white">
            Unlock your full potential with Hybrid Lab.
          </span>{" "}
          The Key to your next level of training found in one app.
        </p>
        <Link
          href="#"
          className="bg-site-main-color text-[#1e1e1e] font-bold text-xs lg:text-base py-5 lg:py-6 px-6 lg:px-7 lg:self-start font-pilat"
        >
          GET STARTED NOW
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
    </div>
  );
}
