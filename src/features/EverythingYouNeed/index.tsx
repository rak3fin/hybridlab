import CustomHeader from "@/components/ui/header";
import Image from "next/image";
import Link from "next/link";

export default function EverythingYouNeed() {
  const membershipDetails = [
    {
      id: 1,
      title: "10 + Programs",
      description: `Select one of our programs and follow apersonalized training plan tailored to your goals. Our plans are simple to follow and adaptable, allowing you to train at home or in the gym, swap exercises, and adjust session days to fit your schedule.`,
    },
    {
      id: 2,
      title: "Nutrition that works",
      description: `Discover dietitian-crafted meal guides tailored to your goals and preferences. Enjoy access to a recipe library with over 1,500 nutritious options, allowing you to savor the foods you love while staying on track with your goals.`,
    },
    {
      id: 3,
      title: "Train ON-Demand",
      description: `Our On-Demand workouts bring expert coaching straight to your screen. Smash a hit session with Coach Zeb, hit the Bars with Coach Brett. With over 150 videos available, there's always a session ready for you, anytime, anywhere.`,
    },
  ];
  return (
    <div className="bg-[url('/custom-bg/everything-you-need-bg.png')] bg-cover bg-no-repeat bg-center flex flex-col  px-4 md:px-14 xl:px-28 py-7 lg:py-24 items-center lg:gap-12">
      <CustomHeader
        whiteHeading="EVERYTHING YOU NEED"
        colourHeading="IN ONE APP"
      />
      <div className="flex flex-col lg:flex-row items-center lg:gap-16 xl:gap-36">
        <Image
          src="/extra/app-mockup.png"
          alt="everything-you-need"
          width={719}
          height={719}
          className="mb-4 lg:mb-0 lg:w-[37.44vmax]"
        />
        <div className="flex flex-col items-center lg:items-stretch gap-5 lg:gap-14">
          {membershipDetails.map((item) => (
            <div
              className="flex flex-col gap-2 items-center lg:items-stretch"
              key={item.id}
            >
              <h2 className="font-bold text-2xl lg:text-2xl text-center lg:text-left text-white">
                {item.title}
              </h2>
              <p
                className="text-base lg:text-xl text-center lg:text-left text-white/60 tracking-[0.04em]"
                dangerouslySetInnerHTML={{ __html: item.description }}
              ></p>
            </div>
          ))}
          <Link
            href="#membership"
            className="bg-site-main-color text-[#1e1e1e] font-bold text-xs lg:text-base py-5 lg:py-6 px-6 lg:px-7 lg:self-start font-pilat"
          >
            JOIN MEMBERSHIP
          </Link>
        </div>
      </div>
    </div>
  );
}
