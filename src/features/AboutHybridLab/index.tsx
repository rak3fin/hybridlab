import CustomHeader from "@/components/ui/header";
import Image from "next/image";

export default function AboutHybridLab() {
  return (
    <section
      className="flex flex-col items-center gap-7 lg:gap-12 px-4 md:px-14 xl:px-28 py-7 lg:py-24"
      id="about-us"
    >
      <CustomHeader
        whiteHeading="Hybrid Lab: Redefining Athletic Training For The"
        colourHeading="Modern Athlete"
      />
      <div className="flex flex-col-reverse lg:flex-row items-center lg:items-stretch lg:justify-between gap-5 lg:gap-12">
        <div className="flex flex-col gap-7 lg:gap-12 lg:self-center">
          <h2 className="font-bold text-lg lg:text-3xl font-pilat text-white text-center lg:text-left">
            Our <span className="text-site-main-color">Vision</span>
          </h2>
          <p className="text-base text-white/60 text-center lg:text-left">
            At Hybrid Lab, our vision is to revolutionize the world of athletic
            training by breaking down traditional barriers and empowering
            athletes to explore diverse niches of fitness. We aim to create a
            dynamic and inclusive community where individuals can pursue their
            unique training passions, challenge norms, and redefine what it
            means to be an athlete. Our ultimate goal is to inspire everyone to
            achieve their highest potential, no matter their chosen discipline,
            background, or location.
          </p>
        </div>
        <Image
          src="/about/about-cover-1.png"
          alt="programs"
          width={762}
          height={500}
          className="w-[24.87rem] xl:w-[47.63rem] shrink-0"
        />
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:items-stretch lg:justify-between gap-5 lg:gap-12">
        <Image
          src="/about/about-cover-2.png"
          alt="about"
          width={762}
          height={500}
          className="w-[24.87rem] xl:w-[47.63rem] shrink-0"
        />
        <div className="flex flex-col gap-4 lg:self-center">
          <h2 className="font-bold text-lg lg:text-3xl font-pilat text-white text-center lg:text-left">
            Our <span className="text-site-main-color">Mission</span>
          </h2>
          <p className="text-base text-white/60 text-center lg:text-left">
            Our mission at Hybrid Lab is to provide a comprehensive, online
            fitness platformthat caters to the varied needs of athletes. Whether
            your goal is to lift heavyweights, build muscle, run long distances,
            or excel in endurance sports, we offertailored training programs and
            nutritional guidance to support your journey. Byintegrating
            cutting-edge technology with expert knowledge, we
            deliverpersonalized experiences that help athletes of all levels
            reach their full potential.
          </p>
        </div>
      </div>
    </section>
  );
}
