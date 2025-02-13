import CustomHeader from "@/components/ui/header";
import Image from "next/image";

export default function BecomeHybridAthlete() {
  return (
    <div className="bg-[url('/custom-bg/home-becoming-hybrid-bg.png')] bg-center bg-cover bg-no-repeat px-4 md:px-14 xl:px-28 flex flex-col lg:flex-row items-center justify-between">
      <div className="flex flex-col gap-5 lg:max-w-3xl self-center">
        <CustomHeader whiteHeading="BECOME A" colourHeading="HYBRID ATHLETE" />
        <p className="text-sm lg:text-lg text-center lg:text-left text-white/70">
          Whether your ambition is to lift heavy, build muscle, or become an
          endurance athlete, Hybrid Lab is here to support you.
        </p>
        <p className="text-sm lg:text-lg text-center lg:text-left text-white/70">
          Our platform offers customized training plans and nutritional advice
          tailored to your specific needs, ensuring that you have the resources
          to succeed in any fitness endeavor.
        </p>
        <p className="text-sm lg:text-lg text-center lg:text-left text-white/70">
          Join us at Hybrid Lab, and let&apos;s redefine what&apos;s possible in
          the world of athletic training-anyone, anything, anywhere.
        </p>
      </div>
      <Image
        src="/extra/become-hybrid-lab.png"
        alt="become hybrid lab"
        width={631}
        height={817}
        className="w-80 lg:w-[32.8vmax]"
      />
    </div>
  );
}
