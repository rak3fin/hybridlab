import Image from "next/image";
import Link from "next/link";

export default function ProgramContactBanner() {
  return (
    <section className="bg-[url('/custom-bg/contact-us-bg.png')] bg-cover bg-center bg-no-repeat px-4 md:px-14 xl:px-28 py-7 lg:py-24 flex flex-col items-center lg:gap-12">
      {/* <CustomHeader whiteHeading="CONTACT" colourHeading="US" /> */}
      <div className="flex flex-col-reverse lg:flex-row items-center gap-5 md:gap-8 xl:gap-12 mt-6 lg:mt-0">
        <div className="flex flex-col items-center lg:items-stretch flex-1 gap-5 md:gap-8 xl:gap-12">
          <h1 className="text-xl font-pilat text-white font-semibold lg:text-3xl">
            Get Started Today
          </h1>
          <p className="text-base lg:text-2xl lg:tracking-[0.04em] text-white/80 text-center lg:text-left">
            Transform your approach to fitness with Hybrid Lab. Join us for our
            online programs and begin your journey toward achieving your health
            and fitness goals. We welcome everyone, from beginners to seasoned
            athletes. Let&apos;s build a stronger, healthier you together.
          </p>
          <Link
            href="/contact-us"
            className="px-6 py-3 text-[#1E1E1E] font-bold font-pilat text-xs lg:text-base lg:tracking-[0.02em] bg-white lg:self-start transition-transform hover:scale-[1.05] duration-300 uppercase"
          >
            Join Us
          </Link>
        </div>
        <Image
          src="/extra/contact-us-cover.png"
          alt="contact-us"
          width={700}
          height={700}
          className="lg:w-[30.625vmax] object-contain"
        />
      </div>
    </section>
  );
}
