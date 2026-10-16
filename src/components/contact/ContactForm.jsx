import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";

const PROJECT_TYPES = [
  "Residential Construction",
  "Renovation & Remodeling",
  "Project Management",
  "Other",
];

const INITIAL = { name: "", phone: "", email: "", type: "", message: "" };

const fieldClass =
  "font-body w-full rounded-md border border-[#003B8E]/25 bg-[#FFFFFF] px-4 py-3 text-[15px] text-[#003B8E] transition-colors placeholder:text-[#003B8E]/50 focus:border-[#FF8000]";

const Label = ({ htmlFor, children, required }) => (
  <label htmlFor={htmlFor} className="font-body mb-1.5 block text-[14px] font-semibold text-[#003B8E]">
    {children}
    {required && <span className="text-[#FF8000]"> *</span>}
  </label>
);

const Error = ({ id, children }) =>
  children ? (
    <p id={id} className="font-body mt-1 text-[13px] font-medium text-[#F04B00]">
      {children}
    </p>
  ) : null;

export default function ContactForm() {
  const [values, setValues] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const validate = () => {
    const er = {};
    if (!values.name.trim()) er.name = "Enter your full name.";
    if (!/^[0-9+\-\s]{10,15}$/.test(values.phone.trim())) er.phone = "Enter a valid phone number.";
    if (!/^\S+@\S+\.\S+$/.test(values.email.trim())) er.email = "Enter a valid email address.";
    if (!values.message.trim()) er.message = "Tell us a little about your project.";
    return er;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const er = validate();
    setErrors(er);
    if (Object.keys(er).length) return;

    setSending(true);
    try {
      // TODO: replace with your API call, e.g.
      // await fetch("/api/enquiry", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(values) });
      await new Promise((r) => setTimeout(r, 700));
      setSent(true);
      setValues(INITIAL);
    } finally {
      setSending(false);
    }
  };

  return (
    <motion.div
      id="contact-form"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="rounded-md border border-[#003B8E]/10 border-t-4 border-t-[#FF8000] bg-[#FFFFFF] p-6 shadow-[0_24px_50px_-30px_rgba(0,59,142,0.4)] sm:p-9"
    >
      <h2 className="font-heading text-[32px] font-bold leading-[1.1] text-[#003B8E] sm:text-[38px]">
        Send us a message
      </h2>
      <p className="font-body mt-2 text-[15px] leading-[1.7] text-[#003B8E]/75">
        Fill out the form below and our team will get back to you shortly.
      </p>

      {sent ? (
        <div role="status" className="flex flex-col items-center py-12 text-center">
          <CheckCircle2 size={48} fill="#FF8000" color="#FFFFFF" />
          <h3 className="font-heading mt-4 text-[24px] font-bold text-[#003B8E]">Message sent</h3>
          <p className="font-body mt-2 max-w-[320px] text-[14px] leading-[1.7] text-[#003B8E]/70">
            Thank you. Our team will contact you within 24 hours.
          </p>
          <button
            type="button"
            onClick={() => setSent(false)}
            className="font-body mt-6 rounded-md border border-[#003B8E]/25 px-5 py-2.5 text-[13.5px] font-semibold text-[#003B8E] transition-colors hover:border-[#FF8000] hover:text-[#FF8000]"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={onSubmit} noValidate className="mt-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="name" required>Full name</Label>
              <input id="name" name="name" value={values.name} onChange={onChange} placeholder="Enter your name" autoComplete="name" className={fieldClass} aria-invalid={!!errors.name} aria-describedby="name-error" />
              <Error id="name-error">{errors.name}</Error>
            </div>
            <div>
              <Label htmlFor="phone" required>Phone number</Label>
              <input id="phone" name="phone" type="tel" value={values.phone} onChange={onChange} placeholder="Enter your phone number" autoComplete="tel" className={fieldClass} aria-invalid={!!errors.phone} aria-describedby="phone-error" />
              <Error id="phone-error">{errors.phone}</Error>
            </div>
            <div>
              <Label htmlFor="email" required>Email address</Label>
              <input id="email" name="email" type="email" value={values.email} onChange={onChange} placeholder="Enter your email address" autoComplete="email" className={fieldClass} aria-invalid={!!errors.email} aria-describedby="email-error" />
              <Error id="email-error">{errors.email}</Error>
            </div>
            <div>
              <Label htmlFor="type">Project type</Label>
              <div className="relative">
                <select
                  id="type"
                  name="type"
                  value={values.type}
                  onChange={onChange}
                  className={`${fieldClass} appearance-none pr-10`}
                  style={{ color: values.type ? "#003B8E" : "#003B8E73" }}
                >
                  <option value="">Select project type</option>
                  {PROJECT_TYPES.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
                <ChevronDown size={16} aria-hidden="true" className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[#003B8E]/60" />
              </div>
            </div>
            <div className="sm:col-span-2">
              <Label htmlFor="message" required>Your message</Label>
              <textarea id="message" name="message" rows={5} value={values.message} onChange={onChange} placeholder="Tell us about your project, requirements and any specific details..." className={`${fieldClass} resize-none`} aria-invalid={!!errors.message} aria-describedby="message-error" />
              <Error id="message-error">{errors.message}</Error>
            </div>
          </div>

          <button
            type="submit"
            disabled={sending}
            className="font-body mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#FF8000] px-6 py-3.5 text-[15px] font-semibold text-[#FFFFFF] transition-colors duration-200 hover:bg-[#F04B00] disabled:opacity-70"
          >
            {sending ? "Sending..." : "Send Message"}
            {!sending && <ArrowRight size={16} />}
          </button>
        </form>
      )}
    </motion.div>
  );
}