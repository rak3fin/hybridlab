import SubBanner from "@/components/ui/subbanner";
import ChoosePlan from "@/features/ChoosePlan";
import OnlineTrainingDescription from "@/features/OnlineTrainingDescription";
import ProgramContactBanner from "@/features/ProgramContactBanner";
import MainWebTemplate from "@/templates/MainWebTemplate";

export default function OnlinePrograms() {
  return (
    <MainWebTemplate>
      <SubBanner
        img="/banner/online-program.png"
        path="Online Programs"
        heading="Online Programs"
        btnLabel="Explore Now"
        btnPath="#online-training"
      />
      <OnlineTrainingDescription />
      <ChoosePlan />
      {/* <ProgramDescription /> */}
      <ProgramContactBanner />
    </MainWebTemplate>
  );
}
