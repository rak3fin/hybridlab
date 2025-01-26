"use client";
import Footer from "@/features/Footer";
import NavBar from "@/features/NavBar";
import useElementHeight from "@/hooks/useElementHeight";

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
      <Footer />
    </>
  );
}
