import CustomHeader from "@/components/ui/header";
import Image from "next/image";

export default function OurValues() {
  return (
    <div className="bg-[url('/custom-bg/about-value-bg.png')] bg-center bg-cover bg-no-repeat px-4 md:px-14 xl:px-28 pt-12 flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-24 w-full lg:justify-evenly">
      <div className="flex flex-col gap-5 shrink">
        <CustomHeader whiteHeading="OUR VALUES" colourHeading="IN ACTION" />
        <p className="text-sm xlg:text-lg text-center lg:text-left text-white/70 tracking-[0.04em] lg:max-w-2xl w-full">
          At Hybrid Lab, we walk the talk. After both stepping away from Rugby
          league, Brett and Zeb continue to challenge themselves through
          high-intensity events. Brett has competed in events like Turf Games,
          Trinity Throwdown, Hyrox, and marathons. Meanwhile, Zeb, at 40, has
          already secured two Super League premierships &#40;2019-2020&#41; and
          continues to set the bar by competing in events such as Turf Games and
          Hyrox. Together, they push the limits of their potential, showing
          what&apos;s possible at any stage of life.
        </p>
      </div>
      <Image
        src="/extra/about-value-cover.png"
        alt="VALUES IN ACTIONS"
        width={535}
        height={736}
        className="w-80 lg:w-[35rem] shrink-0"
      />
    </div>
  );
}
