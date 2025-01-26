import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomeNeutrition() {
  const nutrition = [
    {
      id: 1,
      title: "waldrof chicken salad",
      cover: {
        src: "/nutrition/waldrof-chicken-salad.png",
        alt: "waldrof-chicken-salad",
      },
      details: [
        {
          id: 1,
          title: "Calories",
          value: "494kcal",
        },
        {
          id: 2,
          title: "Protein",
          value: "40g",
        },
        {
          id: 3,
          title: "Fat",
          value: "11g",
        },
        {
          id: 4,
          title: "Carbs",
          value: "25g",
        },
      ],
    },
    {
      id: 2,
      title: "waldrof chicken salad",
      cover: {
        src: "/nutrition/waldrof-chicken-salad-2.png",
        alt: "waldrof-chicken-salad",
      },
      details: [
        {
          id: 1,
          title: "Calories",
          value: "363kcal",
        },
        {
          id: 2,
          title: "Protein",
          value: "17g",
        },
        {
          id: 3,
          title: "Fat",
          value: "22g",
        },
        {
          id: 4,
          title: "Carbs",
          value: "77g",
        },
      ],
    },
    {
      id: 3,
      title: "Tuna Salad Lettuce Wraps",
      cover: {
        src: "/nutrition/tuna-salad-lattuce-wraps.png",
        alt: "tuna-salad-lattuce-wraps",
      },
      details: [
        {
          id: 1,
          title: "Calories",
          value: "545kcal",
        },
        {
          id: 2,
          title: "Protein",
          value: "38g",
        },
        {
          id: 3,
          title: "Fat",
          value: "71g",
        },
        {
          id: 4,
          title: "Carbs",
          value: "61g",
        },
      ],
    },
    {
      id: 4,
      title: "Spinach Shakshuka",
      cover: {
        src: "/nutrition/spinach-shakshuka.png",
        alt: "spinach-shakshuka",
      },
      details: [
        {
          id: 1,
          title: "Calories",
          value: "354kcal",
        },
        {
          id: 2,
          title: "Protein",
          value: "38g",
        },
        {
          id: 3,
          title: "Fat",
          value: "16g",
        },
        {
          id: 4,
          title: "Carbs",
          value: "33g",
        },
      ],
    },
  ];
  return (
    <section className="bg-[url('/custom-bg/neutrition-bg.png')] bg-cover bg-no-repeat flex flex-col px-4 md:px-14 xl:px-28 py-7 items-center gap-7 lg:gap-12">
      <div className="flex flex-col items-center gap-3">
        <h1 className="font-bold text-2xl lg:text-4xl text-center lg:text-left text-black tracking-[0.04em] font-pilat uppercase">
          nutrition done right for you
        </h1>
        <p className="text-black/80 text-center text-base lg:max-w-[90  ch]">
          Quick, easy and delicious recipes with option to suit all dietary
          requirements, Move with Us to &quot;Eat Hybrid Lab&quot; you
          will be able to achieve your goals whist still foods you love.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        {nutrition.map((item) => (
          <div
            className="bg-white flex flex-col gap-5 px-6 shadow-[0px_4px_23.1px_0px_#00000026] relative"
            key={item.id}
          >
            <Image
              src={item.cover.src}
              alt={item.cover.alt}
              width={350}
              height={295}
              className="w-[21.75rem] lg:w-[18.22vmax]"
            />
            <h1 className="text-black font-semibold font-pilat text-lg lg:text-2xl text-center uppercase">
              {item.title}
            </h1>
            <div className="flex flex-col gap-4 mx-2 mb-6">
              {item.details.map((detail) => (
                <div className="inline-flex gap-4 items-center" key={detail.id}>
                  <h3 className="font-semibold text-base lg:text-lg text-black">
                    {detail.title}
                  </h3>{" "}
                  <span className="border border-black flex-1 border-dashed"></span>{" "}
                  <h3 className="text-base text-black lg:text-lg">
                    {detail.value}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Link
        href="#"
        className="border border-[#181818] inline-flex items-center gap-2 text-[#181818] font-bold text-xs lg:text-base py-5 lg:py-6 px-6 lg:px-7 font-pilat tracking-[0.02em]"
      >
        Show more <ChevronDown />
      </Link>
    </section>
  );
}
