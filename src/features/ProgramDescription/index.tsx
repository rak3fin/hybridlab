import Image from "next/image";

export default function ProgramDescription() {
  return (
    <section className="flex flex-col gap-6 px-4 md:px-14 xl:px-28 py-7 lg:py-24">
      <div className="flex flex-col lg:flex-row items-center lg:items-stretch lg:justify-between lg:gap-12">
        <Image
          src="/placeholder/program-placeholder.png"
          alt="programs"
          width={762}
          height={500}
          className="w-[24.87rem] lg:w-[47.63rem] shrink-0"
        />
        <div className="flex flex-col gap-4 lg:self-center">
          <h2 className="font-semibold text-xl font-pilat text-white text-center lg:text-left">
            Comprehensive Support Included
          </h2>
          <p className="text-base text-white/80 text-center lg:text-left">
            Our training sessions are structured in 4-week phases, regularly
            updated to keep your routine engaging and effective. This approach
            helps prevent injuries and promotes balanced development across all
            areas of fitness.
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row items-center lg:items-stretch lg:justify-between lg:gap-12">
        <div className="flex flex-col gap-4 lg:self-center">
          <h2 className="font-semibold text-xl font-pilat text-white text-center lg:text-left">
            Program Structure
          </h2>
          <p className="text-base text-white/80 text-center lg:text-left">
            Our training sessions are structured in 4-week phases, regularly
            updated to keep your routine engaging and effective. This approach
            helps prevent injuries and promotes balanced development across all
            areas of fitness.
          </p>
        </div>
        <Image
          src="/placeholder/program-placeholder.png"
          alt="programs"
          width={762}
          height={500}
          className="w-[24.87rem] lg:w-[47.63rem] shrink-0"
        />
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:items-stretch lg:justify-between lg:gap-12">
        <Image
          src="/placeholder/program-placeholder.png"
          alt="programs"
          width={762}
          height={500}
          className="w-[24.87rem] lg:w-[47.63rem] shrink-0"
        />
        <div className="flex flex-col gap-4 lg:self-center">
          <h2 className="font-semibold text-xl font-pilat text-white text-center lg:text-left">
            Training Tailored to Your Environment
          </h2>
          <p className="text-base text-white/80 text-center lg:text-left">
            Whether you are in a fully equipped gym or a limited-space home
            setup, our programs are adaptable. We offer alternative exercises to
            fit various environments and equipment availability.
          </p>
        </div>
      </div>
    </section>
  );
}
