import CustomHeader from "@/components/ui/header";
import Image from "next/image";

export default function OurValues() {
  return (
    <div className="bg-[url('/custom-bg/about-value-bg.png')] bg-center bg-cover bg-no-repeat px-4 md:px-14 xl:px-28 pt-12 flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-24">
      <div className="flex flex-col gap-5">
        <CustomHeader whiteHeading="OUR VALUES" colourHeading="IN ACTION" />
        <p className="text-base lg:text-xl text-center lg:text-left text-white/70">
          Hybrid Lab represents the spirit of versatility and inclusivity in the
          fitness world. We are a diverse team of fitness experts,
          nutritionists, and tech enthusiasts dedicated to creating a platform
          that adapts to the evolving needs of modern athletes. Our passion for
          fitness and innovation drives us to continuously improve and expand
          our offerings, ensuring that we meet the demands of a wide range of
          training styles and preferences.
        </p>
      </div>
      <Image
        src="/extra/about-value-cover.png"
        alt="VALUES IN ACTIONS"
        width={535}
        height={736}
        className="w-80 lg:w-[35rem] shrink-0"
      />
    </div>
  );
}
