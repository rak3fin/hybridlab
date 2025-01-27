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

  return (
    <nav
      className="flex justify-between w-full items-center px-4 md:px-16 xl:px-32 py-5 shadow-[0px_3px_20px_0px_#00000017] bg-[#f3f3f3] fixed top-0 left-0 z-50"
      ref={ref}
    >
      <Link href="/">
        <Image
          src="/logo.png"
          alt="logo"
          width={77}
          height={54}
          className="w-11 md:w-20"
        />
      </Link>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <AlignRight size={26} />
          </SheetTrigger>
          <SheetContent side="right" className="w-full">
            <SheetHeader>
              <SheetTitle></SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-10 items-center font-semibold text-lg font-pilat">
              <Link
                href="/"
                className={`pb-1 hover:border-b-2 border-black ${
                  isActiveRoute("/") ? "border-b-2" : "border-0"
                }`}
              >
                Home
              </Link>
              <Link
                href="/online-program"
                className={`pb-1 hover:border-b-2 border-black ${
                  isActiveRoute("/online-program") ? "border-b-2" : "border-0"
                }`}
              >
                Online Programs
              </Link>
              <Link
                href="/about"
                className={`pb-1 hover:border-b-2 border-black ${
                  isActiveRoute("/about") ? "border-b-2" : "border-0"
                }`}
              >
                About Us
              </Link>
              <Link
                href="/contact-us"
                className={`pb-1 hover:border-b-2 border-black ${
                  isActiveRoute("/contact-us") ? "border-b-2" : "border-0"
                }`}
              >
                Contact Us
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <div className="hidden md:flex gap-14 font-pilat font-semibold">
        <Link
          href="/"
          className={`pb-1 hover:border-b-2 border-black ${
            isActiveRoute("/") ? "border-b-2" : "border-0"
          }`}
        >
          Home
        </Link>
        <Link
          href="/online-program"
          className={`pb-1 hover:border-b-2 border-black ${
            isActiveRoute("/online-program") ? "border-b-2" : "border-0"
          }`}
        >
          Online Programs
        </Link>
        <Link
          href="/about"
          className={`pb-1 hover:border-b-2 border-black ${
            isActiveRoute("/about") ? "border-b-2" : "border-0"
          }`}
        >
          About Us
        </Link>
        <Link
          href="/contact-us"
          className={`pb-1 hover:border-b-2 border-black ${
            isActiveRoute("/contact-us") ? "border-b-2" : "border-0"
          }`}
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
}
