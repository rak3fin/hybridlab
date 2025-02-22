import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

export default function ProgramDetailsBox({
  supportImg,
  description, features
}: {
  supportImg: any;
  description: any;
  features: any
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
      <div className="flex items-center justify-between px-2 md:px-3 w-full">
        {features.map((item: any, index: number) => (
          <div
            key={index}
            className="flex flex-col gap-2 items-center text-2xl xlg:text-3xl justify-between text-white capitalize my-6"
          >
            <item.icon />
            <h3 className="text-center text-sm">{item.content}</h3>
          </div>
        ))}
      </div>
      <Accordion
        type="single"
        collapsible
        defaultValue={
          description.length === 1 ? "0" : `${description.length - 1}`
        }
      >
        {description.map(
          (
            { heading, details }: { heading: string; details: string },
            index: number | string
          ) => (
            <AccordionItem
              value={`${index}`}
              key={index}
              className="flex flex-col gap-7 lg:border-b border-white lg:last:border-0"
            >
              <AccordionTrigger className="font-bold text-xl xlg:text-2xl tracking-[0.02em] text-site-main-color font-pilat mt-5 mb-3 text-left">
                {heading}
              </AccordionTrigger>
              <AccordionContent>
                {Array.isArray(details) ? (
                  <Accordion type="single" collapsible defaultValue="0">
                    {details.map((item, index) => (
                      <AccordionItem
                        value={`${index}`}
                        key={index}
                        className="flex flex-col gap-7 lg:border-b border-white lg:last:border-0"
                      >
                        <AccordionTrigger className="font-bold text-xl text-white text-left">
                          {item.title}
                        </AccordionTrigger>
                        <AccordionContent>
                          <div
                            className="text-sm xlg:text-base text-white tracking-[0.04em] leading-[20px] xl:leading-[26px]"
                            dangerouslySetInnerHTML={{ __html: item.content }}
                          />
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                ) : (
                  <div
                    className="text-sm xlg:text-base text-white tracking-[0.04em] leading-[20px] xl:leading-[26px]"
                    dangerouslySetInnerHTML={{ __html: details }}
                  />
                )}
              </AccordionContent>
            </AccordionItem>
          )
        )}
      </Accordion>
    </div>
  );
}
