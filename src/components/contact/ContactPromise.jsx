import { Quote } from "lucide-react";
import SafeImage from "../ui/SafeImage";

export default function ContactPromise() {
  return (
    <div className="relative isolate flex min-h-[380px] flex-col justify-between overflow-hidden rounded-md bg-[#003B8E] p-6 sm:p-8 lg:min-h-[440px]">
      <SafeImage
        src="/images/contact-promise.jpg"
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-right"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{ background: "linear-gradient(180deg, rgba(0,59,142,0.94) 0%, rgba(0,59,142,0.55) 50%, rgba(0,59,142,0.25) 100%)" }}
      />

      <h2 className="font-heading max-w-[340px] border-l-4 border-[#FF8000] pl-4 text-[32px] font-bold leading-[1.1] text-[#FFFFFF] sm:text-[38px]">
        Let&apos;s create spaces for a brighter tomorrow
      </h2>

      <div className="mt-10 flex items-start gap-4 rounded-md border border-[#FFFFFF]/25 bg-[#003B8E]/85 p-5 backdrop-blur-sm sm:max-w-[420px]">
        <Quote size={28} fill="#FF8000" color="#FF8000" aria-hidden="true" className="shrink-0" />
        <p className="font-body text-[14.5px] leading-[1.7] text-[#FFFFFF]">
          We believe every great project starts with a conversation. Let&apos;s discuss how we can bring your vision to life.
        </p>
      </div>
    </div>
  );
}
