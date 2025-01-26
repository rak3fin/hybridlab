import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import Calculator from "./Calculator";

export default function MacroCalculator() {
  return (
    <section className="flex relative">
      <Image
        src="/extra/macro-calculator-cover.png"
        alt="macro-calculator"
        width={1920}
        height={573}
      />
      <div className="bg-[linear-gradient(90deg,_#000000_-10.93%,_rgba(0,_0,_0,_0)_100%)] absolute w-full h-full flex flex-col ps-4 lg:ps-32 justify-center gap-2 lg:gap-5">
        <h3 className="font-pilat text-white font-black text-base lg:text-6xl tracking-[0.04em]">
          MACRO
        </h3>
        <h1 className="font-pilat text-white font-black text-3xl lg:text-7xl tracking-[0.04em]">
          CALCULATOR
        </h1>
        <h4 className="font-pilat text-white text-xs lg:text-2xl tracking-[0.04em] font-semibold">
          FIND OUT YOUR DAILY MACRO TARGETS
        </h4>
        <Dialog>
          <DialogTrigger className="bg-site-main-color text-[#1e1e1e] font-bold text-xs lg:text-base py-2 lg:py-6 px-6 lg:px-7 self-start font-pilat">
            CALCULATE
          </DialogTrigger>
          <DialogContent className="bg-[#383838] border-none outline-none">
            <DialogHeader>
              <DialogTitle></DialogTitle>
              <DialogDescription>
                <Calculator />
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
