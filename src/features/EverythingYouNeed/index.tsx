import CustomHeader from "@/components/ui/header";
import Image from "next/image";
import Link from "next/link";

export default function EverythingYouNeed() {
  const membershipDetails = [
    {
      id: 1,
      title: `Hybrid Lab: In APP <span style="font-weight: 400; color: rgba(255, 255, 255, 0.6)">(Home & Gym Workouts)</span>`,
      description: `Tailored programs with exercise swaps and options for both home and gym, designed to suit your goals and experience.`,
    },
    {
      id: 2,
      title: "Personalized Nutrition",
      description: `Fuel your journey with meal guides from dieticians and 1500+ delicious recipes to match your goals.`,
    },
    {
      id: 3,
      title: "Stay Accountable",
      description: `Track your progress—goals, hydration, sleep, and steps—to stay motivated every day.`,
    },
    {
      id: 4,
      title: "Expert Coaching",
      description: `Unlock exclusive workouts with top coaches like Zeb Taia and calisthenics expert Brett Stratton, all on-demand. <br /> Train smarter. Eat better. Achieve more with Hybrid Lab.`,
    },
  ];
  return (
    <div className="bg-[url('/custom-bg/everything-you-need-bg.png')] bg-cover bg-no-repeat bg-center flex flex-col  px-4 md:px-14 xl:px-28 py-7 lg:py-24 items-center lg:gap-12">
      <CustomHeader
        whiteHeading="EVERYTHING YOU NEED"
        colourHeading="IN ONE APP"
      />
      <div className="flex flex-col lg:flex-row items-center lg:gap-16 xl:gap-36 mt-8 lg:mt-0">
        <Image
          src="/extra/app-mockup.png"
          alt="everything-you-need"
          width={719}
          height={719}
          className="mb-4 lg:mb-0 lg:w-[37.44vmax] shrink-0"
        />
        <div className="flex flex-col items-center lg:items-stretch gap-5 lg:gap-8 shrink">
          {membershipDetails.map((item) => (
            <div
              className="flex flex-col gap-2 items-center lg:items-stretch"
              key={item.id}
            >
              <h2
                className="font-bold text-xl lg:text-2xl text-center lg:text-left text-white"
                dangerouslySetInnerHTML={{ __html: item.title }}
              />
              <p
                className="text-base lg:text-xl text-center lg:text-left text-white/60 tracking-[0.04em]"
                dangerouslySetInnerHTML={{ __html: item.description }}
              ></p>
            </div>
          ))}
          <Link
            href="#membership"
            className="bg-site-main-color text-[#1e1e1e] font-bold text-xs lg:text-base py-5 lg:py-6 px-6 lg:px-7 lg:self-start font-pilat transition-transform hover:scale-[1.05] duration-300"
          >
            Download App
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
    </div>
  );
}
