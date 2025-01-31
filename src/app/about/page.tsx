import SubBanner from "@/components/ui/subbanner";
import AboutHybridLab from "@/features/AboutHybridLab";
import AboutVideo from "@/features/AboutVideo";
import ChoosePlan from "@/features/ChoosePlan";
import OurJourney from "@/features/OurJourney";
import OurValues from "@/features/OurValues";
import MainWebTemplate from "@/templates/MainWebTemplate";

export default function About() {
  return (
    <MainWebTemplate>
      <SubBanner
        img="/banner/about.png"
        path="About Us"
        heading="ABOUT US"
        btnLabel="Know More"
        btnPath="#about-us"
      />
      <OurJourney />
      <AboutHybridLab />
      <OurValues />
      <AboutVideo />
      <ChoosePlan />
    </MainWebTemplate>
  );
}
