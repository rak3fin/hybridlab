import CustomHeader from "@/components/ui/header";
import Image from "next/image";
import { FaCirclePlay } from "react-icons/fa6";

export default function AboutVideo() {
  return (
    <section className="flex flex-col gap-7 lg:gap-12 mx-4 md:mx-14 xl:mx-28 my-12 lg:my-24 items-center">
      <CustomHeader whiteHeading="ABOUT" colourHeading="HYBRID LAB" />
      <div className="flex flex-col gap-5 lg:gap-10">
        <div className="relative">
          <Image
            src="/placeholder/video-placeholder.png"
            alt="video"
            width={1660}
            height={700}
            className="w-full aspect-video"
          />
          <button
            type="button"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl lg:text-6xl"
          >
            <FaCirclePlay />
          </button>
        </div>
        <h1 className="text-white font-bold text-lg text-center lg:text-3xl">
          Hybrid Training : A Balanced Approach to Fitness
        </h1>
        <p className="text-base text-white/80 text-center lg:text-xl">
          Imagine combining the power of weightlifting with the endurance of
          running in a single workout routine. That&apos;s hybrid training—it
          blends strength and cardiovascular exercises to give you the best of
          both worlds. By mixing up your workout, you&apos;re not just focusing
          on one type of exercise, so you reduce the chance of getting bored or
          injuring yourself from doing the same thing over and over.
        </p>
      </div>
      <div className="flex flex-col gap-7 lg:gap-12">
        <h1 className="text-white font-bold text-lg text-center lg:text-3xl">
          Other Videos
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
          {["strength program", "functional program", "Accessibility"].map(
            (item) => (
              <div key={item} className="flex flex-col gap-5">
                <div className="relative">
                  <Image
                    src="/placeholder/program-placeholder.png"
                    alt="video"
                    width={500}
                    height={500}
                    className="w-full aspect-square"
                  />
                  <button
                    type="button"
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl lg:text-4xl"
                  >
                    <FaCirclePlay />
                  </button>
                </div>
                <h2 className="text-white font-semibold font-pilat tracking-[0.04em] text-xl text-center lg:text-2xl uppercase">
                  {item}
                </h2>
              </div>
            )
          )}
        </div>
        <p className="text-base text-white text-center lg:text-xl max-w-[90ch] self-center">
          In essence, hybrid training is about being versatile—keeping your body
          guessing and your mind engaged. It&apos;s ideal for anyone who wants
          to get fit, stay healthy, and have fun doing it.
        </p>
      </div>
    </section>
  );
}
