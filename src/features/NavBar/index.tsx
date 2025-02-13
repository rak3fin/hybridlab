"use client";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar({
  ref,
}: {
  ref: React.RefObject<HTMLDivElement | null>;
}) {
  const pathname = usePathname();

  const isActiveRoute = (href: string) => {
    return pathname === href ? true : false;
  };

  const isActiveSubRoute = (href: string) => {
    return pathname.includes(href) ? true : false;
  };

  return (
    <nav
      className="flex justify-between w-full items-center px-4 md:px-16 xlg:px-32 py-5 bg-[#181818] fixed top-0 left-0 z-50"
      ref={ref}
    >
      <Link href="/">
        <Image
          src="/logo.png"
          alt="logo"
          width={381}
          height={30}
          className="w-40 min-[1200px]:w-[23.8rem]"
        />
      </Link>
      <div className="min-[1200px]:hidden bg-inherit">
        <Sheet>
          <SheetTrigger>
            <AlignRight size={26} className="text-white" />
          </SheetTrigger>
          <SheetContent side="right" className="w-full bg-inherit">
            <SheetHeader>
              <SheetTitle></SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-10 items-center font-semibold text-lg font-pilat relative h-full text-white">
              <Link
                href="/"
                className={`pb-1 hover:border-b-2 border-white ${
                  isActiveRoute("/") ? "border-b-2" : "border-0"
                }`}
              >
                Home
              </Link>
              <Link
                href="/online-program"
                className={`pb-1 hover:border-b-2 border-white ${
                  isActiveRoute("/online-program") ||
                  isActiveSubRoute("/program/")
                    ? "border-b-2"
                    : "border-0"
                }`}
              >
                Online Programs
              </Link>
              <Link
                href="/about"
                className={`pb-1 hover:border-b-2 border-white ${
                  isActiveRoute("/about") ? "border-b-2" : "border-0"
                }`}
              >
                About Us
              </Link>
              <Link
                href="/contact-us"
                className={`pb-1 hover:border-b-2 border-white ${
                  isActiveRoute("/contact-us") ? "border-b-2" : "border-0"
                }`}
              >
                Contact Us
              </Link>
              <Image
                src={"/extra/nav-symbol.svg"}
                alt="shape"
                width={227}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[100]"
                height={162}
              />
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <div className="hidden min-[1200px]:flex gap-14 font-pilat font-semibold text-white">
        <Link
          href="/"
          className={`pb-1 hover:border-b-2 border-white ${
            isActiveRoute("/") ? "border-b-2" : "border-0"
          }`}
        >
          Home
        </Link>
        <Link
          href="/online-program"
          className={`pb-1 hover:border-b-2 border-white ${
            isActiveRoute("/online-program") || isActiveSubRoute("/program/")
              ? "border-b-2"
              : "border-0"
          }`}
        >
          Online Programs
        </Link>
        <Link
          href="/about"
          className={`pb-1 hover:border-b-2 border-white ${
            isActiveRoute("/about") ? "border-b-2" : "border-0"
          }`}
        >
          About Us
        </Link>
        <Link
          href="/contact-us"
          className={`pb-1 hover:border-b-2 border-white ${
            isActiveRoute("/contact-us") ? "border-b-2" : "border-0"
          }`}
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
}
