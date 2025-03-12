"use client";

import Footer from "@/features/Footer";
import NavBar from "@/features/NavBar";
import useElementHeight from "@/hooks/useElementHeight";
import Script from "next/script";

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

      {/* Load widget configuration early */}
      <Script id="chat-config" strategy="beforeInteractive">
        {`
          window.widgetConfig = {
            apiKey: "24ca729f-d451-48d1-ae10-ab83a2f1d96f",
            host: "https://chat.yukin.cloud"
          };
        `}
      </Script>

      {/* Load Marked library from CDN */}
      <Script
        id="marked-lib"
        src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"
        strategy="beforeInteractive"
      />

      {/* Load the external widget.js */}
      <Script
        id="widget-js"
        src="https://chat.yukin.cloud/widget.js"
        strategy="afterInteractive"
        onLoad={() => {
          // Since widget.js relies on DOMContentLoaded,
          // we dispatch the event if the document is already loaded.
          if (document.readyState !== "loading") {
            const event = new Event("DOMContentLoaded", {
              bubbles: true,
              cancelable: true,
            });
            document.dispatchEvent(event);
          }
        }}
      />
    </>
  );
}
