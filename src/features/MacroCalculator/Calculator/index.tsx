"use client";
import { Slider } from "@/components/ui/slider";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { MoveLeft, MoveRight } from "lucide-react";
import { useState } from "react";
import { IoMdFemale, IoMdMale } from "react-icons/io";

export default function Calculator() {
  const [gender, setGender] = useState<string>("male");
  const [heightType, setHeightType] = useState<string>("feet");
  const [weightType, setWeightType] = useState<string>("kg");
  const [height, setHeight] = useState<string>("5");
  const [weight, setWeight] = useState<string>("60");
  const [fillUpComplete, setFillUpComplete] = useState<boolean>(false);

  return (
    <div className="flex flex-col gap-10">
      {fillUpComplete ? (
        <>
          <div className="flex gap-6">
            <button
              type="button"
              onClick={() => setFillUpComplete(false)}
              className="text-4xl text-white"
            >
              <MoveLeft />
            </button>
            <h1 className="text-white font-semibold text-2xl text-center font-pilat uppercase self-center flex-1">
              Fill Details
            </h1>
          </div>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Name"
              className="text-white/60 text-base tracking-[0.02em] border border-white/30 px-6 py-4 bg-white/10 w-full"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="text-white/60 text-base tracking-[0.02em] border border-white/30 px-6 py-4 bg-white/10 w-full"
            />
            <input
              type="email"
              placeholder="Email"
              className="text-white/60 text-base tracking-[0.02em] border border-white/30 px-6 py-4 bg-white/10 w-full"
            />
          </div>
          <button
            type="button"
            className="bg-site-main-color text-[#1e1e1e] font-bold text-xs lg:text-base py-5 lg:py-6 px-6 lg:px-7 self-center font-pilat inline-flex gap-4 uppercase"
          >
            Submit
          </button>
        </>
      ) : (
        <>
          <h1 className="text-white font-semibold text-2xl text-center font-pilat uppercase">
            MACRO CALCULTOR
          </h1>
          <ToggleGroup type="single" value={gender} onValueChange={setGender}>
            <ToggleGroupItem
              value="male"
              className="inline-flex gap-2 font-pilat tracking-[0.02em] rounded-none data-[state=off]:bg-[#242424] data-[state=on]:bg-site-main-color data-[state=off]:text-white data-[state=on]:text-black"
            >
              <IoMdMale />
              <span>MALE</span>
            </ToggleGroupItem>
            <ToggleGroupItem
              value="female"
              className="inline-flex gap-2 font-pilat tracking-[0.02em] rounded-none data-[state=off]:bg-[#242424] data-[state=on]:bg-site-main-color data-[state=off]:text-white data-[state=on]:text-black"
            >
              <IoMdFemale />
              <span>FEMALE</span>
            </ToggleGroupItem>
          </ToggleGroup>
          <div className="flex flex-col gap-6">
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <h3 className="text-base font-semibold tracking-[0.04em] text-white">
                  Height
                </h3>
                <ToggleGroup
                  type="single"
                  value={heightType}
                  onValueChange={setHeightType}
                >
                  <ToggleGroupItem
                    value="feet"
                    className="inline-flex gap-2 tracking-[0.02em] rounded-none text-white data-[state=off]:bg-[#242424] data-[state=on]:bg-site-main-color data-[state=off]:text-white data-[state=on]:text-black"
                  >
                    <span>FEET</span>
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    value="cm"
                    className="inline-flex gap-2 tracking-[0.02em] rounded-none text-white data-[state=off]:bg-[#242424] data-[state=on]:bg-site-main-color data-[state=off]:text-white data-[state=on]:text-black"
                  >
                    <span>CM</span>
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>
              <div className="flex gap-2 items-center">
                <input
                  type="number"
                  name=""
                  id=""
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  placeholder=""
                  className="bg-transparent border-b w-11 text-white text-center outline-none"
                />
              </div>
            </div>
            <Slider
              className=""
              value={[Number(height)]}
              min={5}
              max={8}
              onValueChange={(e) => setHeight(e[0].toString())}
            />
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <h3 className="text-base font-semibold tracking-[0.04em] text-white">
                  Weight
                </h3>
                <ToggleGroup
                  type="single"
                  value={weightType}
                  onValueChange={setWeightType}
                >
                  <ToggleGroupItem
                    value="kg"
                    className="inline-flex gap-2 tracking-[0.02em] rounded-none text-white data-[state=off]:bg-[#242424] data-[state=on]:bg-site-main-color data-[state=off]:text-white data-[state=on]:text-black"
                  >
                    <span>KG</span>
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    value="pounds"
                    className="inline-flex gap-2 tracking-[0.02em] rounded-none text-white data-[state=off]:bg-[#242424] data-[state=on]:bg-site-main-color data-[state=off]:text-white data-[state=on]:text-black"
                  >
                    <span>POUNDS</span>
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>
              <div className="flex gap-2 items-center">
                <input
                  type="number"
                  name=""
                  id=""
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder=""
                  className="bg-transparent border-b w-11 text-white outline-none text-center"
                />
              </div>
            </div>
            <Slider
              className=""
              min={60}
              max={150}
              value={[parseInt(weight)]}
              onValueChange={(e) => setWeight(e[0].toString())}
            />
          </div>
          <button
            type="button"
            className="bg-site-main-color text-[#1e1e1e] font-bold text-xs lg:text-base py-5 lg:py-6 px-6 lg:px-7 self-center font-pilat inline-flex gap-4"
            onClick={() => setFillUpComplete(true)}
          >
            Next <MoveRight />
          </button>
        </>
      )}
    </div>
  );
}
