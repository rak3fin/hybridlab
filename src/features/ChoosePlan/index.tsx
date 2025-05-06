"use client";

import CustomHeader from "@/components/ui/header";
import { Switch } from "@/components/ui/switch";
import { Check } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function ChoosePlan() {
  /* ───────────────────────────────
     STATE
  ──────────────────────────────── */
  const [annually, setAnnually] = useState(false);
  const [monthlyUrl, setMonthlyUrl] = useState<string>("#membership");
  const [annualUrl, setAnnualUrl] = useState<string>("#membership");

  /* ───────────────────────────────
     FETCH MEMBERSHIP LINKS ONCE
  ──────────────────────────────── */
  useEffect(() => {
    const fetchMembershipLinks = async () => {
      try {
        const res = await fetch("/api/membership-link");
        const data = await res.json();              // [{ monthly, annual }]
        if (Array.isArray(data) && data[0]) {
          setMonthlyUrl(data[0].monthly || "#membership");
          setAnnualUrl(data[0].annual || "#membership");
        }
      } catch (err) {
        console.error("Error fetching membership links:", err);
      }
    };
    fetchMembershipLinks();
  }, []);

  /* ───────────────────────────────
     RENDER
  ──────────────────────────────── */
  return (
    <section
      id="membership"
      className="bg-[url('/custom-bg/choose-plan-bg.png')] bg-cover bg-no-repeat
                 px-4 md:px-14 xl:px-28 py-12 lg:py-24 flex flex-col lg:flex-row
                 items-center gap-12 lg:justify-evenly"
    >
      {/* LEFT SIDE */}
      <div className="flex flex-col items-center lg:items-stretch gap-5 lg:gap-8 lg:max-w-lg w-full">
        <CustomHeader whiteHeading="SIGN UP" colourHeading="NOW" />
        <p className="text-base xlg:text-lg text-center lg:text-left text-white/80">
          At Hybrid Lab we believe in making your fitness journey as smooth and
          rewarding as possible. With our Gold Membership, your commitment to
          health and fitness becomes more effortless than ever.
        </p>
        <p className="text-base xlg:text-lg text-center lg:text-left text-white/80">
          Choose between a budget-friendly monthly billing option of $24.99 AUD or
          a simple annual cycle of $249.99 AUD billed every 12 months.
        </p>
        <Link
          href="/contact-us"
          className="bg-site-main-color text-[#1e1e1e] font-bold text-xs lg:text-base
                     py-2 md:py-4 xg:py-6 px-6 xlg:px-8 self-center lg:self-start
                     font-pilat capitalize transition-transform hover:scale-[1.05] duration-300"
        >
          get in touch
        </Link>
      </div>

      {/* RIGHT CARD */}
      <div className="bg-site-main-color px-6 py-5 gap-6 flex flex-col items-center w-full lg:max-w-md">
        <h1 className="text-lg lg:text-2xl font-bold text-center tracking-[0.02em] text-[#181818] font-pilat uppercase">
          Gold membership
        </h1>

        {/* MONTHLY ↔ ANNUAL TOGGLE */}
        <div className="flex items-center gap-3">
          <span className="text-black text-xs lg:text-lg font-semibold">Monthly</span>
          <Switch
            checked={annually}
            onCheckedChange={setAnnually}
            className="data-[state=checked]:bg-[#181818] data-[state=unchecked]:bg-[#181818]"
          />
          <span className="text-black text-xs lg:text-lg font-semibold">Annually</span>
        </div>

        {/* PRICE */}
        <p className="text-xl lg:text-3xl font-semibold tracking-[0.02em] text-[#181818]">
          <span className="font-bold text-4xl lg:text-5xl">
            {annually ? "$249.99" : "$24.99"}/
          </span>
          {annually ? "annum" : "monthly"}
        </p>

        <div className="bg-black/40 w-full h-0.5" />

        {/* FEATURES */}
        <div className="flex flex-col gap-5">
          {[
            "Unlock access to all Challenges.",
            "10+ programs & levels Included:",
            "On-demand recovery, mobility, Pilates/yoga workouts",
            "Meal recipes and guides with over 100+ recipes",
          ].map((text, i) => (
            <h2
              key={i}
              className="font-semibold text-black text-base lg:text-lg tracking-[0.02em] inline-flex items-center gap-2"
            >
              <Check /> {text}
            </h2>
          ))}
          <p className="text-black text-base xlg:text-lg ps-4 lg:ps-8">
            Hybrid Running Program, Full-body 5-Day and 3-Day split, Hypertrophy
            Muscle-Gain Program, etc.
          </p>
        </div>

        {/* ENROLL BUTTON */}
        <button
          type="button"
          onClick={() =>
            window.open(annually ? annualUrl : monthlyUrl, "_blank", "noopener,noreferrer")
          }
          className="bg-white text-[#1e1e1e] font-bold text-xs lg:text-base
                     py-2 md:py-4 xlg:py-6 px-6 lg:px-7 transition-transform
                     hover:scale-[1.05] duration-300"
        >
          Enroll Now
        </button>
      </div>
    </section>
  );
}
