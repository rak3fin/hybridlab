
import Image from "next/image";

export default function ProgramDetailsBox({
  supportImg,
  description,
}: {
  supportImg: any;
  description: any;
}) {
  return (
    <div className="overflow-hidden w-full overflow-y-scroll px-4 lg:px-14 lg:h-[91vh] no-scrollbar mt-8 lg:mt-auto py-8">
      {supportImg && supportImg.length >= 0 && (
        <div className="flex gap-4 flex-col lg:flex-row">
          {supportImg.map((img: string, index: number | string) => (
            <div key={index} className="lg:basis-1/3">
              <Image
                src={img}
                alt=""
                width={415}
                height={476}
                className="w-full lg:w-[14vmax]"
              />
            </div>
          ))}
        </div>
      )}
      {description.map(
        (
          { heading, details }: { heading: string; details: string },
          index: number | string
        ) => (
          <div
            key={index}
            className="flex flex-col gap-7 py-7 lg:border-b border-white lg:last:border-0"
          >
            <h1 className="font-bold text-xl xlg:text-2xl tracking-[0.02em] text-site-main-color font-pilat mt-5 mb-3">
              {heading}
            </h1>
            <div
              className="text-sm xlg:text-base text-white tracking-[0.04em] leading-[20px] xl:leading-[26px]"
              dangerouslySetInnerHTML={{ __html: details }}
            />
          </div>
        )
      )}
    </div>
  );
}
