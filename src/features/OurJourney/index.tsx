import CustomHeader from "@/components/ui/header";
import Image from "next/image";

export default function OurJourney() {
  return (
    <div
      className="bg-[url('/custom-bg/our-journey-bg.png')] bg-center bg-cover bg-no-repeat px-4 md:px-14 xl:px-28 py-12 lg:py-24 flex flex-col lg:gap-12"
      id="about-us"
    >
      <div className="flex flex-col lg:flex-row items-center lg:items-center justify-center lg:justify-between gap-7 lg:gap-14">
        <div className="flex flex-col lg:flex-row gap-5 shrink-0">
          <Image
            src="/extra/our-journey-cover.png"
            alt="VALUES IN ACTIONS"
            width={449}
            height={369}
            className="w-80 lg:w-[23.38vmax] lg:h-[31.25rem] object-cover"
          />
          <Image
            src="/extra/our-journey-cover-2.png"
            alt="VALUES IN ACTIONS"
            width={418}
            height={439}
            className="w-80 lg:w-[21.77vmax] lg:h-[31.25rem] object-cover"
          />
          {/* <Image
          src="/extra/our-journey-cover-2.png"
          alt="VALUES IN ACTIONS"
          width={700}
          height={550}
          className="w-80 lg:w-[35rem]"
        /> */}
        </div>
        <div className="flex flex-col gap-5 self-center">
          <CustomHeader whiteHeading="WHO" colourHeading="WE ARE" />
          <p className="text-sm xlg:text-base text-center lg:text-left text-white lg:max-w-lg">
            At Hybrid Lab, we&apos;re passionate about helping you Reach Your
            Potential. Founded by Zeb Taia and Brett Stratton, our platform is
            built to push limits and redefine what&apos;s possible in fitness.{" "}
            <br />
            Zeb Taia; a former professional rugby league player - has spent
            years mastering strength, conditioning, and high-intensity training.
            Now at 40 years old, Zeb continues to challenge himself, pushing the
            boundaries of what&apos;s possible both mentally and physically. A
            proud Husband and father of three, Zeb refuses to make excuses,
            instead focusing on finding reasons to push forward and be his best
            every day. Whether in events like Hyrox or Turf Games, Zeb leads by
            example and proves that age is no barrier to peak performance.
          </p>
        </div>
      </div>
      <p className="text-sm xlg:text-base text-center lg:text-left text-white ">
        Brett Stratton has been in the fitness industry for over 13 years,
        transitioning from a semi-professional rugby league player to a fitness
        expert. Originally from New Zealand, he moved to the Gold Coast at 12
        and was immediately inspired by the fitness culture. Becoming a
        qualified personal trainer at just 16. <br /> Brett&apos;s journey has
        included working in both commercial and boutique gyms, exploring
        everything from strength training, hypertrophy, and conditioning to
        calisthenics and endurance running. His passion lies in testing the
        limits of the mind and body, and that&apos;s why Hybrid Lab exists - to
        help others unlock their full potential. <br />
      </p>
      <p className="text-center lg:text-left text-white tracking-[0.04em] text-sm xlg:text-lg font-medium">
        Together, Zeb and Brett bring a wealth of knowledge and hands-on
        experience, providing a dynamic platform for athletes to push themselves
        across all areas of fitness.
      </p>
    </div>
  );
}
