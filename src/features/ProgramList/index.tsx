import CustomHeader from "@/components/ui/header";
import ProgramCard from "./ProgramCard";
import { All_Program_Details } from "@/helpers/programData";

export default function ProgramList() {

  return (
    <section className="flex flex-col px-4 md:px-14 xl:px-28 py-7 lg:py-24 items-center gap-7 md:gap-12 xl:gap-24">
      <CustomHeader
        whiteHeading="EXPLORE OUR"
        colourHeading="TRAINING PROGRAMS"
      />
      <div className="flex flex-col flex-1 gap-8 self-stretch">
        {All_Program_Details.map((item) => (
          <ProgramCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}
