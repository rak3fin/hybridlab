import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import CustomHeader from "@/components/ui/header";
import { All_Program_Details } from "@/helpers/programData";
import Image from "next/image";
import Link from "next/link";

export default function OnlinePrograms() {
  return (
    <section className="bg-[#181818] flex flex-col px-4 md:px-14 xl:px-28 py-7 lg:py-24 items-center gap-7 lg:gap-12">
      <CustomHeader whiteHeading="ONLINE" colourHeading="PROGRAMS" />
      <Carousel>
        <CarouselContent>
          {All_Program_Details.map((program) => <CarouselItem className="basis-full md:basis-1/2 xl:basis-1/4" key={program.title}><Link
            href={program.btnLink}
            className="flex items-center justify-center relative group select-none"

          >
            <div className="overflow-hidden self-stretch">
              <Image
                src={program.cover}
                alt={program.title}
                width={400}
                height={624}
                className="w-full transition-transform hover:scale-110 group-hover:scale-110 duration-500 object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-full flex flex-col items-center py-6 gap-4 xl:gap-6 bg-[linear-gradient(180deg,_rgba(0,_0,_0,_0)_0%,_rgba(0,_0,_0,_0.75)_89.9%)]">
              <h1 className="text-white font-semibold text-center text-xl uppercase font-pilat max-w-[10ch]">
                {program.shortTitle}
              </h1>
              <div className="flex items-center justify-between px-2 w-full">
                {program.features.map((item, index) => <div key={index} className="flex flex-col gap-1 items-center text-xl justify-between text-white capitalize">
                  <item.icon />
                  <h3 className="text-center text-sm">{item.content}</h3>
                </div>)}
              </div>
            </div>
          </Link></CarouselItem>)}
        </CarouselContent>
        <CarouselPrevious className="border border-site-main-color text-site-main-color bg-transparent hidden md:inline-flex focus-within:bg-transparent hover:bg-transparent hover:text-site-main-color" />
        <CarouselNext className="border border-site-main-color text-site-main-color bg-transparent hidden md:inline-flex focus-within:bg-transparent hover:bg-transparent hover:text-site-main-color" />
      </Carousel>
    </section>
  );
}
