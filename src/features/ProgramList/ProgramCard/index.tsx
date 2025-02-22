import Image from "next/image";
import Link from "next/link";

export default function ProgramCard({
  title,
  subTitle,
  subPara,
  btnLink,
  cover,
}: {
  title: string;
  subTitle: string;
  subPara?: string;
  btnLink: string;
  cover: string;
}) {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center lg:items-stretch gap-5 lg:gap-12 lg:p-5 lg:last:border-0 lg:border-b border-white/50 xl:shrink-0 group">
      {cover && (
        <Image
          src={cover}
          alt={title}
          width={398}
          height={388}
          className="lg:w-[13.54vmax] aspect-square object-top object-cover group-hover:scale-110 transition-transform duration-500"
        />
      )}
      <div className="flex flex-col lg:flex-row justify-between gap-7 items-center flex-1">
        <div className="flex flex-col gap-7">
          <h1 className="text-white text-xl xlg:text-2xl font-semibold font-pilat text-center lg:text-left">
            {title}
          </h1>
          <div className="flex flex-col gap-3 lg:gap-5">
            <h2 className="text-base xlg:text-xl text-white font-semibold text-center lg:text-left">
              {subTitle}
            </h2>
            {subPara && (
              <h3 className="text-site-main-color text-sm text-center lg:text-left">
                {subPara}
              </h3>
            )}
          </div>
        </div>
        <Link
          href={btnLink}
          className="bg-site-main-color text-[#1e1e1e] font-bold text-xs lg:text-base py-2 md:py-4 xlg:py-6 px-6 lg:px-8 font-pilat capitalize transition-transform hover:scale-[1.05] duration-300 text-center whitespace-nowrap"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}
