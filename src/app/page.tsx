import BecomeHybridAthlete from "@/features/BecomeHybridAthlete";
import ChoosePlan from "@/features/ChoosePlan";
import ContactUs from "@/features/ContactUs";
import EverythingYouNeed from "@/features/EverythingYouNeed";
import Homehero from "@/features/Homehero";
import HomeNeutrition from "@/features/HomeNeutrition";
import MacroCalculator from "@/features/MacroCalculator";
import OnlinePrograms from "@/features/OnlinePrograms";
import MainWebTemplate from "@/templates/MainWebTemplate";

export default function Home() {
  return (
    <MainWebTemplate>
      <Homehero />
      <BecomeHybridAthlete />
      <EverythingYouNeed />
      <OnlinePrograms />
      <HomeNeutrition />
      <MacroCalculator />
      <ChoosePlan />
      <ContactUs />
    </MainWebTemplate>
  );
}
