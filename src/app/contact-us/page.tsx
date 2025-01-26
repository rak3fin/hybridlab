import SubBanner from "@/components/ui/subbanner";
import ContactDetails from "@/features/ContactDetails";
import ContactUs from "@/features/ContactUs";
import MainWebTemplate from "@/templates/MainWebTemplate";

export default function Contactus() {
  return (
    <MainWebTemplate>
      <SubBanner
        img="/banner/contact-us.png"
        path="CONTACT US"
        heading="CONTACT US"
        btnLabel="Know More"
        btnPath="#lets-talk"
      />
      <ContactDetails />
      <ContactUs />
    </MainWebTemplate>
  );
}
