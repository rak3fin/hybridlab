import CustomHeader from "@/components/ui/header";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function OnlinePrograms({
  showMore = true,
}: {
  showMore?: boolean;
}) {
  const onlineProgarms = [
    {
      id: 1,
      title: "HYROX PROGRAM",
      cover: {
        src: "/programs/hyrox.png",
        alt: "hyrox",
      },
    },
    {
      id: 2,
      title: "strength program",
      cover: {
        src: "/programs/strentgth.png",
        alt: "strength",
      },
    },
    {
      id: 3,
      title: "functional program",
      cover: {
        src: "/programs/functional.png",
        alt: "functional",
      },
    },
    {
      id: 4,
      title: "conditioning program",
      cover: {
        src: "/programs/conditioning.png",
        alt: "conditioning",
      },
    },
  ];
  return (
    <section className="bg-[#181818] flex flex-col px-4 md:px-14 xl:px-28 py-7 lg:py-24 items-center gap-7 lg:gap-12">
      <CustomHeader whiteHeading="ONLINE" colourHeading="PROGRAMS" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 justify-between">
        {onlineProgarms.map((program) => (
          <div
            className="flex items-center justify-center relative"
            key={program.id}
          >
            <div className="overflow-hidden">
              <Image
                src={program.cover.src}
                alt={program.cover.alt}
                width={400}
                height={624}
                className="w-[25rem] lg:w-[20.8vmax] transition-transform hover:scale-110 duration-500"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-full flex flex-col items-center py-14 bg-[linear-gradient(180deg,_rgba(0,_0,_0,_0)_0%,_rgba(0,_0,_0,_0.75)_89.9%)]">
              <h1 className="text-white font-semibold text-center text-xl uppercase font-pilat max-w-[10ch]">
                {program.title}
              </h1>
            </div>
          </div>
        ))}
      </div>
      {showMore && (
        <Link
          href="/online-program"
          className="border border-white inline-flex items-center gap-2 text-white font-bold text-xs lg:text-base py-5 lg:py-6 px-6 lg:px-7 font-pilat transition-transform hover:scale-[1.05] duration-300"
        >
          View All <MoveRight />
        </Link>
      )}
    </section>
  );
}
