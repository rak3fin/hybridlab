import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

export default function ContactDetails() {
  return (
    <section className="flex flex-col items-center my-12 mx-4 gap-3 lg:gap-7 lg:mx-32">
      <h2 className="tracking-[0.04em] text-xl xlg:text-3xl font-bold text-center text-white">
        Let&apos;s talk
      </h2>
      <p className="text-white/80 text-base text-center lg:tracking-[0.07em] xlg:text-2xl">
        Have questions, feedback, or inquiries? We&apos;d love to hear from you!
        Feel free to reach out to us using the contact information below or fill
        out the form, and we&apos;ll get back to you as soon as possible.
      </p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4211.40384479134!2d153.42805428712273!3d-28.10285258197589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b910305e1098a49%3A0x811e87c432fc9d5c!2sUnit%207%2F49%20Leda%20Dr%2C%20Burleigh%20Heads%20QLD%204220%2C%20Australia!5e1!3m2!1sen!2sin!4v1737906603916!5m2!1sen!2sin"
        width="100%"
        height="100%"
        allowFullScreen={false}
        loading="lazy"
        className="mt-9 h-48 lg:h-[35rem] lg:w-[65%]"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      
    </section>
  );
}
