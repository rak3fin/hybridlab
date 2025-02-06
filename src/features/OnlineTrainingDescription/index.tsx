import CustomHeader from "@/components/ui/header";
import ProgramList from "../ProgramList";

export default function OnlineTrainingDescription() {
  return (
    <>
      <section
        className="flex flex-col px-4 md:px-14 xl:px-28 pt-7 lg:py-12"
        id="online-training"
      >
        <div className="flex flex-col items-center gap-4 lg:gap-7">
          <CustomHeader
            whiteHeading="Welcome to Hybrid Lab"
            colourHeading="Online Training"
          />
          <p className="text-base text-center text-white/80 lg:tracking-[0.04em] lg:text-2xl">
            At Hybrid Lab, we are dedicated to enhancing your fitness journey
            through a dynamic blend of strength and endurance training. Our
            online programs are designed to cater to athletes and fitness
            enthusiasts at all levels, whether you&apos;re working out at home
            or in a gym.
          </p>
        </div>
      </section>
      <ProgramList />
      {/* <OnlinePrograms showMore={false} /> */}
    </>
  );
}
