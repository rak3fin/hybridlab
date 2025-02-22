"use client";
import CustomHeader from "@/components/ui/header";
import useClickOutSide from "@/hooks/useClickOutSide";
import Image from "next/image";
import { useState } from "react";

export default function AboutVideo() {
  const [showVideoModal, setShowVideoModal] = useState<boolean>(false);
  const [videoId, setVideoId] = useState("");
  const playerRef = useClickOutSide(() => setShowVideoModal(false));

  const handelStartVideo = (id: string) => {
    setVideoId(id);
    setShowVideoModal(true);
  };
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
            className="w-full"
          />
        </div>
        <h1 className="text-white font-bold text-lg text-center xlg:text-3xl">
          Hybrid Training : A Balanced Approach to Fitness
        </h1>
        <p className="text-base text-white/80 text-center xlg:text-lg">
          Imagine combining the power of weightlifting with the endurance of
          running in a single workout routine. That&apos;s hybrid training—it
          blends strength and cardiovascular exercises to give you the best of
          both worlds. By mixing up your workout, you&apos;re not just focusing
          on one type of exercise, so you reduce the chance of getting bored or
          injuring yourself from doing the same thing over and over.
        </p>
      </div>
      <div className="flex flex-col gap-7 lg:gap-12">
        <h1 className="text-white font-bold text-lg text-center xlg:text-3xl">
          Other Videos
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
          {[
            {
              title: "strength program",
              img: "/video-thumb/strength.png",
              videoId: "1qVyyOCF38CnLMjwySv1mOPLRQq9bqNGb",
            },
            {
              title: "functional program",
              img: "/video-thumb/functional.png",
              videoId: "10ujVhemUdyJssv-8QmQ72z6AiV8x5bVV",
            },
            {
              title: "conditioning program",
              img: "/video-thumb/condition.png",
              videoId: "1Nb-pZSHM0FQgFIq1EVHUtaH7Dq_WGyJK",
            },
          ].map((item) => (
            <div key={item.title} className="flex flex-col gap-5">
              <div className="relative group">
                <Image
                  src={item.img}
                  alt="video"
                  width={500}
                  height={500}
                  className="w-full aspect-square"
                />
                <button
                  type="button"
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl xlg:text-4xl group-hover:scale-125 transition-transform duration-300"
                  onClick={() => handelStartVideo(item.videoId)}
                >
                  <Image
                    src="/extra/play-icon.svg"
                    alt="play-button"
                    width={80}
                    height={80}
                  />
                </button>
              </div>
              <h2 className="text-white font-semibold font-pilat tracking-[0.04em] text-xl text-center lg:text-2xl uppercase">
                {item.title}
              </h2>
            </div>
          ))}
        </div>
        <p className="text-base text-white text-center xlg:text-lg max-w-[90ch] self-center">
          In essence, hybrid training is about being versatile—keeping your body
          guessing and your mind engaged. It&apos;s ideal for anyone who wants
          to get fit, stay healthy, and have fun doing it.
        </p>
      </div>
      {showVideoModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/80 z-[1100] flex items-center justify-center overflow-hidden">
          <div
            className={`w-[80vw] h-[33vh] lg:h-[75vh] relative`}
            ref={playerRef}
          >
            <iframe
              src={`https://drive.google.com/file/d/${videoId}/preview`}
              width="100%"
              height="100%"
              allow="autoplay"
              className="border-none"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}
