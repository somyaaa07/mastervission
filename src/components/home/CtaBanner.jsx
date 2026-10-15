// import { motion } from "framer-motion";
// import { ArrowRight, Phone } from "lucide-react";
// import { PHONE_DISPLAY, PHONE_HREF } from "../constants/site";

// export default function CtaBanner() {
//   return (
//     <section
//       id="contact"
//       className="relative isolate overflow-hidden bg-[#003B8E]"
//     >
//       <img
//         src="/images/cta-helmet.jpg"
//         alt="Hard hat and blueprints on a construction desk"
//         className="absolute inset-0 -z-20 h-full w-full object-cover object-right"
//       />
//       <div
//         className="absolute inset-0 -z-10"
//         style={{
//           background:
//             "linear-gradient(90deg, #003B8E 0%, rgba(0,59,142,0.92) 35%, rgba(0,59,142,0.35) 65%, rgba(0,59,142,0) 100%)",
//         }}
//       />

//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//         className="mx-auto max-w-[1280px] px-5 py-14 lg:px-8 lg:py-16"
//       >
//         <p className="font-body text-[12px] font-bold tracking-[0.08em] text-[#FF8000]">
//           Let&apos;s Build Together
//         </p>
//         <h2 className="font-heading mt-2 text-[30px] font-bold leading-[1.15] text-[#FFFFFF] sm:text-[36px]">
//           Ready to Start Your Project?
//         </h2>
//         <p className="font-body mt-3 max-w-[400px] text-[14.5px] leading-[1.7] text-[#FFFFFF]/85">
//           Get in touch with us today for a free consultation and let&apos;s turn
//           your vision into reality.
//         </p>

//         <div className="mt-7 flex flex-wrap gap-4">
//           <a
//             href="#contact"
//             className="font-body inline-flex items-center gap-2 rounded-md bg-[#FF8000] px-6 py-3.5 text-[14.5px] font-semibold text-[#FFFFFF] transition-colors duration-200 hover:bg-[#F04B00]"
//           >
//             Get a Free Quote
//             <ArrowRight size={16} />
//           </a>
//           <a
//             href={PHONE_HREF}
//             className="font-body inline-flex items-center gap-2 rounded-md border border-[#FFFFFF]/80 px-6 py-3.5 text-[14.5px] font-semibold text-[#FFFFFF] transition-colors duration-200 hover:bg-[#FFFFFF] hover:text-[#003B8E]"
//           >
//             <Phone size={16} />
//             {PHONE_DISPLAY}
//           </a>
//         </div>
//       </motion.div>
//     </section>
//   );
// }

import React from 'react'

function Ctabanner() {
  return (
    <div>Ctabanner</div>
  )
}

export default Ctabanner
