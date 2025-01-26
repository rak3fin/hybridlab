import CustomHeader from "@/components/ui/header";
import Image from "next/image";

export default function OurJourney() {
  return (
    <div className="bg-[url('/custom-bg/our-journey-bg.png')] bg-center bg-cover bg-no-repeat px-4 md:px-14 xl:px-28 py-12 lg:py-24 flex flex-col-reverse lg:flex-row items-center justify-between gap-7 lg:gap-28">
      <Image
        src="/extra/our-journey-cover.png"
        alt="VALUES IN ACTIONS"
        width={535}
        height={736}
        className="w-80 lg:w-[35rem]"
      />
      <div className="flex flex-col gap-5 lg:max-w-3xl">
        <CustomHeader whiteHeading="DISCOVER" colourHeading="OUR JOURNEY" />
        <p className="text-base lg:text-xl text-center lg:text-left text-white/80">
          Hybrid Lab represents the spirit of versatility and inclusivity in the
          fitness world. We are a diverse team of fitness experts,
          nutritionists, and tech enthusiasts dedicated to creating a platform
          that adapts to the evolving needs of modern athletes. Our passion for
          fitness and innovation drives us to continuously improve and expand
          our offerings, ensuring that we meet the demands of a wide range of
          training styles and preferences.
        </p>
      </div>
    </div>
  );
}
