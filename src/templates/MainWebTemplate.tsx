"use client";
import Footer from "@/features/Footer";
import NavBar from "@/features/NavBar";
import useElementHeight from "@/hooks/useElementHeight";
import Image from "next/image";

export default function MainWebTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  const [marginTop, navbarRef] = useElementHeight([]);

  return (
    <>
      <NavBar ref={navbarRef} />
      <main style={{ marginTop }}>{children}</main>
      <button type="button" className="fixed bottom-5 right-5">
        <Image src="/Bot-logo.png" alt="bot" width={76} height={76} />
      </button>
      <Footer />
    </>
  );
}
