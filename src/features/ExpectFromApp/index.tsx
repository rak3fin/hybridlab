import CustomHeader from "@/components/ui/header";
import Image from "next/image";

export default function ExpectFromApp() {
  const membershipDetails = [
    {
      id: 1,
      title: "10 + Programs",
      description: `Select one of our programs and follow apersonalized training plan tailored to your goals. Our plans are simple to follow and adaptable, allowing you to train at home or in the gym, swap exercises, and adjust session days to fit your schedule.`,
      img: "/extra/app-mockup-right.png",
    },
    {
      id: 2,
      title: "Nutrition that works",
      description: `Discover dietitian-crafted meal guides tailored to your goals and preferences. Enjoy access to a recipe library with over 1,500 nutritious options, allowing you to savor the foods you love while staying on track with your goals.`,
      img: "/extra/app-mockup-center.png",
    },
    {
      id: 3,
      title: "Train On-Demand",
      description: `Our On-Demand workouts bring expert coaching straight to your screen. Smash a hit session with Coach Zeb, hit the Bars with Coach Brett. With over 150 videos available, there's always a session ready for you, anytime, anywhere.`,
      img: "/extra/app-mockup-left.png",
    },
  ];
  return (
    <div className="bg-[url('/custom-bg/what-expect-in-app.png')] bg-cover bg-no-repeat bg-center flex flex-col  px-4 md:px-14 xl:px-28 py-7 lg:py-24 items-center lg:gap-12">
      <CustomHeader whiteHeading="WHAT TO EXPECT" colourHeading="IN THE APP" />
      <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-14 shrink mt-6 lg:mt-0">
        {membershipDetails.map((item) => (
          <div
            className="flex flex-col gap-2 lg:gap-14 items-center"
            key={item.id}
          >
            <div className="">
              <Image
                src={item.img}
                alt="app-mockup"
                width={295}
                height={599}
                className="mb-4 lg:mb-0 w-60 lg:w-[15.36vmax] shrink-0"
              />
            </div>
            <div className="flex flex-col gap-5">
              <h2
                className="font-bold text-lg lg:text-xl text-center text-white font-pilat"
                dangerouslySetInnerHTML={{ __html: item.title }}
              />
              <p
                className="text-xs lg:text-base text-center text-white/60 tracking-[0.04em]"
                dangerouslySetInnerHTML={{ __html: item.description }}
              ></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
