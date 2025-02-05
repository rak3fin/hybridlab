import ProgramDetailsBox from "@/features/ProgramDetailsBox";
import ProgramGraphics from "@/features/ProgramGraphics";
import { All_Program_Details } from "@/helpers/programData";
import MainWebTemplate from "@/templates/MainWebTemplate";

export async function generateStaticParams() {
  return All_Program_Details.map(({ btnLink }) => ({
    type: btnLink.split("/").pop(),
  }));
}

function getProgramBySlug(slug: string) {
  return All_Program_Details.find(
    ({ btnLink }) => btnLink.split("/").pop() === slug
  );
}

export default async function ProgramDetails({
  params,
}: {
  params: Promise<{ type: string }>;
}) {
  const { type } = await params;
  const pageData: any = getProgramBySlug(type);
  const {
    title,
    subTitle,
    subPara,
    video,
    supportImg,
    description,
    paraDescription,
  } = pageData;

  return (
    <MainWebTemplate>
      <section className="flex flex-col lg:flex-row items-center lg:h-[91vh] lg:basis-1/2">
        <ProgramGraphics
          title={title}
          subTitle={subTitle}
          subPara={subPara}
          video={video}
          paraDescription={paraDescription}
        />
        <ProgramDetailsBox description={description} supportImg={supportImg} />
      </section>
    </MainWebTemplate>
  );
}
