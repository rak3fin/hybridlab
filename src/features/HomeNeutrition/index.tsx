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
      title: "Salmon & Peach Salad",
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
    <section className="bg-[url('/custom-bg/neutrition-bg.png')] bg-cover bg-no-repeat flex flex-col px-4 md:px-14 xl:px-28 py-7 lg:py-16 items-center gap-7 lg:gap-12">
      <div className="flex flex-col items-center gap-3">
        <h1 className="font-bold text-2xl lg:text-4xl text-center lg:text-left text-black tracking-[0.04em] font-pilat uppercase">
          nutrition done right for you
        </h1>
        <p className="text-black/80 text-center text-base lg:max-w-[90ch]">
          Quick, easy and delicious recipes with option to suit all dietary
          requirements, Move with Us to &quot;Eat Hybrid Lab&quot; you will be
          able to achieve your goals whist still foods you love.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        {nutrition.map((item) => (
          <div
            className="bg-white flex flex-col gap-5 p-6 shadow-[0px_4px_23.1px_0px_#00000026] relative justify-between"
            key={item.id}
          >
            <div className="flex flex-col gap-4 mx-2">
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
            </div>
            <div className="flex flex-col gap-4 mx-2">
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
      <div className="flex flex-col items-center gap-4">
        <p className="text-black text-center text-base italic tracking-[0.04em] font-semibold">
          To know more about our meal plans
        </p>
        <Link
          href="#"
          className="border border-[#181818] inline-flex items-center gap-2 text-[#181818] font-bold text-xs lg:text-base py-4 lg:py-4 px-6 lg:px-7 font-pilat tracking-[0.02em] transition-transform hover:scale-[1.05] duration-300 capitalize"
        >
          <svg
            width="28"
            height="26"
            viewBox="0 0 28 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.4206 7.20646H14.4152V4.10588C14.8479 3.97809 15.2277 3.714 15.4982 3.35292C15.7688 2.99183 15.9155 2.55306 15.9165 2.10189C15.9165 1.54443 15.6951 1.00981 15.3009 0.615628C14.9067 0.221448 14.3721 0 13.8146 0C13.2572 0 12.7226 0.221448 12.3284 0.615628C11.9342 1.00981 11.7127 1.54443 11.7127 2.10189C11.7138 2.55306 11.8605 2.99183 12.131 3.35292C12.4015 3.714 12.7814 3.97809 13.2141 4.10588V7.20646H7.2087C6.25306 7.20646 5.33657 7.58609 4.66083 8.26183C3.98509 8.93756 3.60547 9.85406 3.60547 10.8097V22.2199C3.60547 23.1756 3.98509 24.0921 4.66083 24.7678C5.33657 25.4435 6.25306 25.8232 7.2087 25.8232H20.4206C21.3762 25.8232 22.2927 25.4435 22.9684 24.7678C23.6442 24.0921 24.0238 23.1756 24.0238 22.2199V10.8097C24.0238 9.85406 23.6442 8.93756 22.9684 8.26183C22.2927 7.58609 21.3762 7.20646 20.4206 7.20646ZM7.80924 14.1127C7.80924 13.5552 8.03069 13.0206 8.42487 12.6264C8.81905 12.2322 9.35367 12.0108 9.91113 12.0108C10.4686 12.0108 11.0032 12.2322 11.3974 12.6264C11.7916 13.0206 12.013 13.5552 12.013 14.1127C12.013 14.6701 11.7916 15.2047 11.3974 15.5989C11.0032 15.9931 10.4686 16.2145 9.91113 16.2145C9.35367 16.2145 8.81905 15.9931 8.42487 15.5989C8.03069 15.2047 7.80924 14.6701 7.80924 14.1127ZM17.6923 20.688C16.5062 21.2975 15.1652 21.6194 13.8146 21.6194C12.464 21.6194 11.123 21.2975 9.93695 20.688C9.8005 20.6122 9.69886 20.4864 9.65352 20.337C9.60817 20.1877 9.62268 20.0266 9.69396 19.8878C9.76525 19.749 9.88773 19.6433 10.0355 19.5931C10.1833 19.543 10.3448 19.5522 10.4858 19.619C12.5487 20.6796 15.0806 20.6796 17.1434 19.619C17.2839 19.5564 17.4431 19.55 17.5882 19.6011C17.7333 19.6522 17.8534 19.7569 17.9236 19.8938C17.9939 20.0306 18.0091 20.1892 17.9661 20.3369C17.923 20.4846 17.8251 20.6102 17.6923 20.688ZM17.7181 16.2145C17.4421 16.2145 17.1688 16.1602 16.9138 16.0545C16.6588 15.9489 16.4271 15.7941 16.2319 15.5989C16.0367 15.4037 15.8819 15.172 15.7762 14.917C15.6706 14.662 15.6162 14.3887 15.6162 14.1127C15.6162 13.8366 15.6706 13.5633 15.7762 13.3083C15.8819 13.0533 16.0367 12.8216 16.2319 12.6264C16.4271 12.4312 16.6588 12.2764 16.9138 12.1708C17.1688 12.0651 17.4421 12.0108 17.7181 12.0108C18.2756 12.0108 18.8102 12.2322 19.2044 12.6264C19.5986 13.0206 19.82 13.5552 19.82 14.1127C19.82 14.6701 19.5986 15.2047 19.2044 15.5989C18.8102 15.9931 18.2756 16.2145 17.7181 16.2145Z"
              fill="#181818"
            />
            <path
              d="M17.7132 15.0129C18.2107 15.0129 18.614 14.6096 18.614 14.1122C18.614 13.6147 18.2107 13.2114 17.7132 13.2114C17.2158 13.2114 16.8125 13.6147 16.8125 14.1122C16.8125 14.6096 17.2158 15.0129 17.7132 15.0129Z"
              fill="#181818"
            />
            <path
              d="M9.90855 15.0129C10.406 15.0129 10.8093 14.6096 10.8093 14.1122C10.8093 13.6147 10.406 13.2114 9.90855 13.2114C9.41109 13.2114 9.00781 13.6147 9.00781 14.1122C9.00781 14.6096 9.41109 15.0129 9.90855 15.0129Z"
              fill="#181818"
            />
            <path
              d="M25.8211 12.6099H25.2206V20.4162H25.8211C26.2989 20.4162 26.7571 20.2264 27.0949 19.8886C27.4328 19.5508 27.6226 19.0925 27.6226 18.6148V14.4113C27.6226 13.9336 27.4328 13.4753 27.0949 13.1375C26.7571 12.7997 26.2989 12.6099 25.8211 12.6099ZM2.40196 12.6099H1.80147C1.32369 12.6099 0.86548 12.7997 0.527639 13.1375C0.189797 13.4753 0 13.9336 0 14.4113V18.6148C0 19.0925 0.189797 19.5508 0.527639 19.8886C0.86548 20.2264 1.32369 20.4162 1.80147 20.4162H2.40196V12.6099Z"
              fill="#181818"
            />
          </svg>
          ask hybrid bot Assistant
        </Link>
      </div>
    </section>
  );
}
