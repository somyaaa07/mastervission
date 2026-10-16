const PHONE = "917838117117"; // country code + number, no "+" or spaces
const MESSAGE = "Hello! I'd like to know more about your services.";

export default function ContactButtons() {
  const whatsappUrl = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`;
  const callUrl = `tel:+${PHONE}`;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      {/* Call button */}
      <a
        href={callUrl}
        aria-label="Call us"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white shadow-lg transition hover:scale-110"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2a1 1 0 011-.25 11.4 11.4 0 003.6.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1z" />
        </svg>
      </a>

      {/* WhatsApp button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-110"
      >
        <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2a10 10 0 00-8.6 15.1L2 22l5-1.3A10 10 0 1012 2zm0 18.2a8.2 8.2 0 01-4.2-1.15l-.3-.18-3 .8.8-2.9-.2-.3A8.2 8.2 0 1112 20.2zm4.5-6.1c-.25-.12-1.46-.72-1.69-.8-.23-.09-.39-.12-.55.12-.17.25-.64.8-.78.97-.14.16-.29.18-.54.06a6.7 6.7 0 01-3.3-2.88c-.25-.43.25-.4.72-1.34a.45.45 0 000-.43c-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42h-.47a.9.9 0 00-.65.3c-.22.25-.85.83-.85 2.03s.87 2.36.99 2.52c.12.17 1.71 2.6 4.14 3.65 1.54.66 2.14.72 2.91.6.47-.07 1.46-.6 1.66-1.17.2-.58.2-1.07.14-1.17-.06-.1-.22-.16-.47-.28z" />
        </svg>
      </a>
    </div>
  );
}