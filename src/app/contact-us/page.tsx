import SubBanner from "@/components/ui/subbanner";
import ContactDetails from "@/features/ContactDetails";
import ContactUs from "@/features/ContactUs";
import MainWebTemplate from "@/templates/MainWebTemplate";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

export default function Contactus() {
  return (
    <MainWebTemplate>
      <SubBanner
        img="/banner/contact-us.png"
        path="Contact Us"
        heading="CONTACT US"
        btnLabel="Get In Touch"
        btnPath="#lets-talk"
      />
      <ContactDetails />
      <div className="flex flex-col lg:flex-row lg:items-stretch lg:justify-between gap-5 md:gap-8 xl:gap-12 w-full bg-[url('/custom-bg/choose-plan-bg.png')] bg-cover bg-no-repeat py-12 px-4 lg:px-32">
        <div className="inline-flex gap-2 text-white/90 text-base xlg:text-lg">
          <span className="flex items-center justify-center border rounded-full p-4 border-white">
            <FaLocationDot />
          </span>
          <span className="self-center">
            Hybrid Lab HQ - 7/49 Leda Drive, Burleigh heads, Qld, 4220
          </span>
        </div>
        <Link
          href="mailTo:info@hybridlabtraining.com"
          className="inline-flex gap-2 text-white/90 text-base xlg:text-lg"
        >
          <span className="flex items-center justify-center border rounded-full p-4 border-white">
            <IoMdMail />
          </span>
          <span className="self-center">info@hybridlabtraining.com</span>
        </Link>
      </div>
      <ContactUs />
    </MainWebTemplate>
  );
}
