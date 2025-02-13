import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CustomHeader from "@/components/ui/header";
import Image from "next/image";
import Link from "next/link";

export default function EverythingYouNeed() {
  const membershipDetails = [
    {
      id: 1,
      title: `Hybrid Lab: In APP`,
      description: `Tailored programs with exercise swaps and options for both home and gym, designed to suit your goals and experience.`,
      value: "Hybrid Lab",
    },
    {
      id: 2,
      title: "Personalized Nutrition",
      description: `Fuel your journey with meal guides from dieticians and 1500+ delicious recipes to match your goals.`,
      value: "Personalized Nutrition",
    },
    {
      id: 3,
      title: "Stay Accountable",
      description: `Track your progress—goals, hydration, sleep, and steps—to stay motivated every day.`,
      value: "stay accontable",
    },
    {
      id: 4,
      title: "Expert Coaching",
      description: `Unlock exclusive workouts with top coaches like Zeb Taia and calisthenics expert Brett Stratton, all on-demand. <br /> Train smarter. Eat better. Achieve more with Hybrid Lab.`,
      value: "Expert Coaching",
    },
  ];
  return (
    <div className="bg-[url('/custom-bg/everything-you-need-bg.png')] bg-cover bg-no-repeat bg-center flex flex-col  px-4 md:px-14 xl:px-28 py-7 lg:py-24 items-center lg:gap-12">
      <div className="flex flex-col lg:flex-row items-center lg:gap-16 mt-8 lg:mt-0">
        <Image
          src="/extra/app-mockup.png"
          alt="everything-you-need"
          width={883}
          height={883}
          className="mb-4 lg:mb-0 lg:w-[46vmax] shrink-0"
        />
        <div className="flex flex-col items-center lg:items-stretch gap-5 lg:gap-8 shrink">
          <CustomHeader
            whiteHeading="EVERYTHING YOU NEED"
            colourHeading="IN ONE APP"
          />
          <Accordion type="single" collapsible defaultValue="Hybrid Lab">
            {membershipDetails.map((item) => (
              <AccordionItem value={item.value} key={item.id}>
                <AccordionTrigger className="font-bold text-xl lg:text-xl text-center lg:text-left text-white">
                  <span dangerouslySetInnerHTML={{ __html: item.title }} />
                </AccordionTrigger>
                <AccordionContent className="text-xs lg:text-base text-center lg:text-left text-white/60 tracking-[0.04em]">
                  <span
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
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
