"use client";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
// import useClickOutSide from "@/hooks/useClickOutSide";
import Link from "next/link";
// import { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function ProgramGraphics({
  video,
  title,
  subTitle,
  subPara,
}: {
  video: string[];
  title: string;
  subTitle: string;
  subPara?: string;
}) {
  // const [showVideoModal, setShowVideoModal] = useState<boolean>(false);
  // const [videoId, setVideoId] = useState<string>("");
  // const playerRef = useClickOutSide(() => setShowVideoModal(false));

  // const handelStartVideo = (id: string) => {
  //   setVideoId(id);
  //   setShowVideoModal(true);
  // };

  return (
    <section className="flex-col flex items-center lg:items-stretch gap-6 bg-[#333535] px-4 md:px-12 xl:px-24 py-8 xl:shrink-0 lg:h-full lg:max-w-[60vmax] overflow-y-hidden">
      <Link
        href="/online-program"
        className="hidden lg:inline-flex gap-3 items-center text-white hover:text-site-main-color font-semibold font-pilat tracking-[0.02em] text-base"
      >
        <FaArrowLeftLong />
        <span>Back to Online Program Page</span>
      </Link>
      <Carousel className="max-w-[40vmax]">
        <CarouselContent className="">
          {video.map((item: any, index: string | number) => (
            <CarouselItem key={index}>
              <div className="relative">
                {/* <Image
                  src={item.src}
                  alt="video-thumb"
                  width={633}
                  height={311}
                  className="w-[40vmax] h-[30vh] object-cover"
                />
                <button
                  type="button"
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl lg:text-4xl group-hover:scale-125 transition-transform duration-300"
                  onClick={() => handelStartVideo(item.videoId)}
                >
                  <Image
                    src="/extra/play-icon.svg"
                    alt="play-button"
                    width={80}
                    height={80}
                  />
                </button> */}
                <video
                  src={item}
                  width={633}
                  height={311}
                  className="w-full object-cover"
                  autoPlay
                  muted
                  loop
                ></video>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {video.length > 1 && (
          <div className="flex items-center gap-4 relative w-full justify-center mt-10">
            <CarouselPrevious className="text-black bg-site-main-color hover:bg-transparent hover:text-white relative size-6 lg:size-12 translate-x-0 translate-y-0 left-0" />
            <CarouselNext className="text-black bg-site-main-color hover:bg-transparent hover:text-white relative size-6 lg:size-12 translate-x-0 translate-y-0 right-0" />
          </div>
        )}
      </Carousel>
      <div className="flex flex-col items-center lg:items-stretch gap-6">
        <h1 className="font-bold text-lg xlg:text-2xl tracking-[0.04em] text-white text-center lg:text-left font-pilat">
          {title}
        </h1>
        <div className="flex flex-col gap-4">
          <h3 className="text-base font-semibold text-center lg:text-left lg:text-lg text-white">
            {subTitle}
          </h3>
          {subPara && (
            <h4 className="text-sm text-center lg:text-left text-site-main-color xlg:text-base">
              {subPara}
            </h4>
          )}
        </div>

        <Button className="bg-site-main-color text-[#1e1e1e] font-bold text-xs lg:text-base py-2 lg:py-6 px-6 lg:px-8 font-pilat capitalize transition-transform hover:scale-[1.05] duration-300 text-center whitespace-nowrap lg:self-start rounded-none">
          Buy Now
        </Button>
      </div>
      {/* {showVideoModal && (
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
      )} */}
    </section>
  );
}
