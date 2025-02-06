"use client";
import CustomHeader from "@/components/ui/header";
import { Switch } from "@/components/ui/switch";
import { Check } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ChoosePlan() {
  const [annually, setAnnually] = useState<boolean>(false);
  return (
    <section
      className="bg-[url('/custom-bg/choose-plan-bg.png')] bg-cover bg-no-repeat px-4 md:px-14 xl:px-28 py-12 lg:py-24 flex flex-col lg:flex-row items-center gap-12"
      id="membership"
    >
      <div className="flex flex-col items-center lg:items-stretch gap-5 lg:gap-8">
        <CustomHeader whiteHeading="SIGN UP" colourHeading="NOW" />
        <p className="text-base lg:text-xl text-center lg:text-left text-white/80">
          At Hybrid Lab we believe in making your fitness journey as smooth and
          rewarding as possible. With our Gold Membership, your commitment to
          health and fitness becomes more effortless than ever.
        </p>
        <p className="text-base lg:text-xl text-center lg:text-left text-white/80">
          Choose between a budget friendly, Monthly billing option of $24.99AUD
          a month or a simple Annual billing cycle of $249.99AUD billed every 12
          months.
        </p>
        <p className="text-base lg:text-xl text-center lg:text-left text-white/80">
          At Hybrid Lab we believe in making your fitness journey as smooth and
          rewarding as possible. With our Gold Membership, your commitment to
          health and fitness becomes more effortless than ever.
        </p>
        <Link
          href="/contact-us"
          className="bg-site-main-color text-[#1e1e1e] font-bold text-xs lg:text-base py-2 lg:py-6 px-6 lg:px-8 self-center lg:self-start font-pilat capitalize transition-transform hover:scale-[1.05] duration-300"
        >
          get in touch
        </Link>
      </div>
      <div className="bg-site-main-color px-6 py-5 gap-6 flex flex-col items-center w-full lg:max-w-md">
        <h1 className="text-lg lg:text-2xl font-bold text-center tracking-[0.02em] text-[#181818] font-pilat uppercase">
          Gold membership
        </h1>
        <div className="flex items-center gap-3">
          <span className="text-black text-xs lg:text-lg font-semibold tracking-[0.02em]">
            Monthly
          </span>
          <Switch
            className="data-[state=checked]:bg-[#181818] data-[state=unchecked]:bg-[#181818]"
            checked={annually}
            onCheckedChange={setAnnually}
          />
          <span className="text-black text-xs lg:text-lg font-semibold tracking-[0.02em]">
            Annually
          </span>
        </div>
        <p className="text-xl lg:text-3xl font-semibold tracking-[0.02em] text-[#181818]">
          <span className="font-bold text-4xl lg:text-5xl">
            {annually ? "$249.99" : "$24.99"}/
          </span>
          {annually ? "annum" : "monthly"}
        </p>
        <div className="bg-black/40 w-full h-0.5"></div>
        <div className="flex flex-col gap-5">
          <h2 className="font-semibold text-black text-base lg:text-lg tracking-[0.02em] inline-flex items-center gap-2">
            <Check /> Unlock access to all Challenges.
          </h2>
          <h2 className="font-semibold text-black text-base lg:text-lg tracking-[0.02em] inline-flex items-center gap-2">
            <Check /> 10+ programs &amp; levels Included:
          </h2>
          <p className="text-black text-base lg:text-lg tracking-[0.02em] inline-flex items-center gap-2 ps-4 lg:ps-8">
            Hybrid Running Program, Full body 5 Days and 3 Days split, Hypertrophy
            Muscle Gain Program, Etc
          </p>
          <h2 className="font-semibold text-black text-base lg:text-lg tracking-[0.02em] inline-flex items-center gap-2">
            <Check /> On demand recovery, Mobility, Pilates/yoga workouts
          </h2>
          <h2 className="font-semibold text-black text-base lg:text-lg tracking-[0.02em] inline-flex items-center gap-2">
            <Check /> Meal Recipes and Guides with over 100+ recipes
          </h2>
        </div>
        <button
          type="button"
          className="bg-white text-[#1e1e1e] font-bold text-xs lg:text-base py-2 lg:py-6 px-6 lg:px-7 self-center lg:self-stretch font-pilat transition-transform hover:scale-[1.05] duration-300"
        >
          Enroll Now
        </button>
      </div>
    </section>
  );
}
