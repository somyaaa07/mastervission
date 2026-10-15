
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Phone } from "lucide-react";

const PHONE_DISPLAY = "+91 7838117117";
const PHONE_HREF = "tel:+917838117117";

const ADDRESS_LINES = [
  "UGA-47, Galaxy Diamond Plaza, Haibatpur",
  "Sector 4, Greater Noida, Uttar Pradesh - 201016",
];

const ADDRESS_QUERY =
  "UGA-47, Galaxy Diamond Plaza, Haibatpur, Sector 4, Greater Noida, Uttar Pradesh 201016, India";

export default function LocationMap() {
  return (
    <motion.div
      id="location"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
      className="flex flex-col rounded-lg bg-[#003B8E] p-6 sm:p-7"
    >
      <h2 className="font-heading text-[28px] font-bold leading-[1.15] text-white sm:text-[32px]">
        Our Location
      </h2>

      <p className="font-body mt-2 text-[14px] leading-[1.7] text-white/80">
        Visit our office or find us on the map below.
      </p>

      {/* Google Map */}
      <div className="mt-5 min-h-[280px] flex-1 overflow-hidden rounded-md bg-white">
        <iframe
          title="Mastervision Infra LLP office location"
          src={`https://www.google.com/maps?q=${encodeURIComponent(
            ADDRESS_QUERY
          )}&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-full min-h-[280px] w-full border-0"
          allowFullScreen
        />
      </div>

      {/* Office Address */}
      <div className="mt-5 flex flex-col gap-5">
        <div className="flex items-start gap-3">
          <MapPin
            size={26}
            fill="#FF8000"
            color="#FFFFFF"
            className="mt-0.5 shrink-0"
          />

          <div>
            <p className="font-body text-[14px] font-bold text-white">
              Office Address
            </p>

            <p className="font-body mt-1 text-[13.5px] leading-[1.7] text-white/90">
              {ADDRESS_LINES[0]}
              <br />
              {ADDRESS_LINES[1]}
            </p>
          </div>
        </div>

        {/* Contact Number */}
        <a
          href={PHONE_HREF}
          className="flex w-fit items-center gap-3 text-white transition-colors hover:text-[#FF8000]"
        >
          <Phone size={22} className="shrink-0" />

          <span>
            <span className="block text-[14px] font-bold">
              Contact Number
            </span>
            <span className="mt-1 block text-[13.5px] text-white/90">
              {PHONE_DISPLAY}
            </span>
          </span>
        </a>

        {/* Directions Button */}
        <a
          href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
            ADDRESS_QUERY
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="font-body inline-flex w-fit items-center gap-2 rounded-md border border-white/80 px-5 py-3 text-[13.5px] font-semibold text-white transition-colors duration-200 hover:bg-white hover:text-[#003B8E]"
        >
          Get Directions
          <ArrowRight size={16} />
        </a>
      </div>
    </motion.div>
  );
}
