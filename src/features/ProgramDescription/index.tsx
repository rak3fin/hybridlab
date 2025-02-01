import Image from "next/image";

export default function ProgramDescription() {
  return (
    <section className="flex flex-col gap-6 px-4 md:px-14 xl:px-28 py-7 lg:py-24">
      <div className="flex flex-col lg:flex-row items-center lg:items-stretch lg:justify-between lg:gap-12">
        <Image
          src="/online-programs/program-1.png"
          alt="programs"
          width={762}
          height={500}
          className="w-[24.87rem] xl:w-[47.63rem]"
        />
        <div className="flex flex-col gap-4 lg:self-center">
          <h2 className="font-semibold text-xl lg:text-3xl font-pilat text-white text-center lg:text-left">
            Comprehensive Support Included
          </h2>
          <p className="text-base text-white/80 text-center lg:text-left">
            Our training sessions are structured in 4-week phases, regularly
            updated to keep your routine engaging and effective. This approach
            helps prevent injuries and promotes balanced development across all
            areas of fitness.
          </p>
          <div className="flex items-center self-center lg:self-start gap-2">
            <button
              type="button"
              className="text-3xl lg:text-4xl group-hover:scale-125 transition-transform duration-300"
              // onClick={() => handelStartVideo(item.videoId)}
            >
              <Image
                src="/extra/play-video-white.svg"
                alt="play-button"
                width={61}
                height={61}
              />
            </button>
            <span className="font-pilat font-semibold text-base lg:text-xl text-white self-center">
              Play Video
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row items-center lg:items-stretch lg:justify-between lg:gap-12">
        <div className="flex flex-col gap-4 lg:self-center">
          <h2 className="font-semibold text-xl lg:text-3xl font-pilat text-white text-center lg:text-left">
            Program Structure
          </h2>
          <p className="text-base text-white/80 text-center lg:text-left">
            Our training sessions are structured in 4-week phases, regularly
            updated to keep your routine engaging and effective. This approach
            helps prevent injuries and promotes balanced development across all
            areas of fitness.
          </p>
          <div className="flex items-center self-center lg:self-start gap-2">
            <button
              type="button"
              className="text-3xl lg:text-4xl group-hover:scale-125 transition-transform duration-300"
              // onClick={() => handelStartVideo(item.videoId)}
            >
              <Image
                src="/extra/play-video-white.svg"
                alt="play-button"
                width={61}
                height={61}
              />
            </button>
            <span className="font-pilat font-semibold text-base lg:text-xl text-white self-center">
              Play Video
            </span>
          </div>
        </div>
        <Image
          src="/online-programs/program-2.png"
          alt="programs"
          width={762}
          height={500}
          className="w-[24.87rem] xl:w-[47.63rem] shrink-0"
        />
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:items-stretch lg:justify-between lg:gap-12">
        <Image
          src="/online-programs/program-3.png"
          alt="programs"
          width={762}
          height={500}
          className="w-[24.87rem] xl:w-[47.63rem] shrink-0"
        />
        <div className="flex flex-col gap-4 lg:self-center">
          <h2 className="font-semibold text-xl lg:text-3xl font-pilat text-white text-center lg:text-left">
            Training Tailored to Your Environment
          </h2>
          <p className="text-base text-white/80 text-center lg:text-left">
            Whether you are in a fully equipped gym or a limited-space home
            setup, our programs are adaptable. We offer alternative exercises to
            fit various environments and equipment availability.
          </p>
          <div className="flex items-center self-center lg:self-start gap-2">
            <button
              type="button"
              className="text-3xl lg:text-4xl group-hover:scale-125 transition-transform duration-300"
              // onClick={() => handelStartVideo(item.videoId)}
            >
              <Image
                src="/extra/play-video-white.svg"
                alt="play-button"
                width={61}
                height={61}
              />
            </button>
            <span className="font-pilat font-semibold text-base lg:text-xl text-white self-center">
              Play Video
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
