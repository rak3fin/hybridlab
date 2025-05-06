// app/program/[type]/page.tsx
import { notFound } from "next/navigation";
import ProgramDetailsBox from "@/features/ProgramDetailsBox";
import ProgramGraphics from "@/features/ProgramGraphics";
import MainWebTemplate from "@/templates/MainWebTemplate";
import { All_Program_Details } from "@/helpers/programData";

const origin =
  typeof window !== "undefined"
    ? window.location.origin
    : process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

async function loadProgramData() {
  const url = new URL("/api/training-program", origin).toString();
  let linksObj: Record<string, string> = {};

  try {
    const res = await fetch(url, { cache: "no-store" });
    const arr = await res.json(); // e.g. [{ training_link_1, … }]
    linksObj = Array.isArray(arr) && arr[0] ? arr[0] : {};
  } catch (e) {
    console.error("Error fetching training-program:", e);
  }

  return All_Program_Details.map((item, idx) => ({
    ...item,
    trainingLink: linksObj[`training_link_${idx + 1}`] ?? "",
  }));
}

export async function generateStaticParams() {
  return All_Program_Details.map(({ btnLink }) => ({
    type: btnLink.split("/").pop() ?? "",
  }));
}

export default async function ProgramDetails({
  params,
}: {
  params: { type: string };
}) {
  const { type: slug } = await params;

  const enriched = await loadProgramData();

  const program = enriched.find(
    (p) => p.btnLink.split("/").pop() === slug
  );
  
  if (!program) {
    notFound();
  }

  const {
    title,
    subTitle,
    subPara,
    video,
    supportImg,
    description,
    paraDescription,
    features,
    trainingLink, 
  } = program;

  return (
    <MainWebTemplate>
      <section className="flex flex-col lg:flex-row items-center lg:h-[91vh] lg:basis-1/2">
        <ProgramGraphics
          title={title}
          subTitle={subTitle}
          subPara={subPara}
          video={video}
          trainingLink={trainingLink}
        />
        <ProgramDetailsBox
          description={description}
          supportImg={supportImg}
          features={features}
          paraDescription={paraDescription}
        />
      </section>
    </MainWebTemplate>
  );
}
