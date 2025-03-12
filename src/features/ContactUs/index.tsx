"use client";
import CustomHeader from "@/components/ui/header";
import { toast } from "@/hooks/use-toast";
import Image from "next/image";
import { useState } from "react";

export default function ContactUs() {
  // Define state variables for each input field
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  // Submit handler: POST contact data to /api/contactus
  const handelSubmit = async () => {
    const requestData = {
      firstName,
      lastName,
      phone,
      email,
      message,
    };

    try {
      const response = await fetch("/api/contactus", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      if (response.ok) {
        toast({
          title: "Your query has been submitted",
          description: "Our team will get back to you ASAP",
        });
        // Optionally clear the form after successful submission
        setFirstName("");
        setLastName("");
        setPhone("");
        setEmail("");
        setMessage("");
      } else {
        toast({
          title: "Error",
          description: "There was an error submitting your query. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.log(error)
      toast({
        title: "Network Error",
        description: "Failed to connect to the server.",
        variant: "destructive",
      });
    }
  };

  return (
    <section
      className="bg-[url('/custom-bg/contact-us-bg.png')] bg-cover bg-center bg-no-repeat px-4 md:px-14 xl:px-28 py-12 lg:py-24 flex flex-col items-center lg:gap-12"
      id="lets-talk"
    >
      <CustomHeader whiteHeading="CONTACT" colourHeading="US" />
      <div className="flex flex-col lg:flex-row items-center lg:items-stretch lg:justify-between gap-5 md:gap-8 xl:gap-24 mt-6">
        <Image
          src="/extra/contact-us-cover.png"
          alt="contact-us"
          width={700}
          height={700}
          className="lg:w-[30.625vmax] object-contain"
        />
        <div className="flex flex-col items-center lg:items-stretch gap-4 flex-1">
          <h1 className="text-xl font-pilat text-white font-semibold">
            Have a Questions?
          </h1>
          <p className="text-base text-white/80 text-center">
            Simply fill out the form, and we&apos;ll get back to you as soon as possible.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handelSubmit();
            }}
            className="flex flex-col gap-5 w-full lg:w-auto"
          >
            <div className="flex flex-col lg:flex-row gap-4">
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="text-white/60 text-base tracking-[0.02em] border border-white/30 px-6 py-4 bg-white/10 w-full"
                placeholder="First Name"
              />
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="text-white/60 text-base tracking-[0.02em] border border-white/30 px-6 py-4 bg-white/10 w-full"
                placeholder="Last Name"
              />
            </div>
            <div className="flex flex-col lg:flex-row gap-4">
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="text-white/60 text-base tracking-[0.02em] border border-white/30 px-6 py-4 bg-white/10 w-full"
                placeholder="Phone No"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="text-white/60 text-base tracking-[0.02em] border border-white/30 px-6 py-4 bg-white/10 w-full"
                placeholder="Email Address"
              />
            </div>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="text-white/60 text-base tracking-[0.02em] border border-white/30 px-6 py-4 bg-white/10 w-full"
              placeholder="Write Your Message Here"
              rows={7}
            ></textarea>
            <button
              type="submit"
              className="bg-site-main-color text-[#1e1e1e] font-bold text-xs lg:text-base py-2 xlg:py-4 px-6 lg:px-7 self-center lg:self-start font-pilat transition-transform hover:scale-[1.05] duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
