import { whatsappUrl } from "./contact-links";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-4 right-4 z-50 grid h-12 w-12 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_18px_45px_rgba(37,211,102,0.35)] ring-1 ring-white/20 transition hover:-translate-y-1 hover:bg-[#20bd5a] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-slate-950 sm:bottom-5 sm:right-5 sm:h-14 sm:w-14"
    >
      <svg
        aria-hidden="true"
        className="h-6 w-6 sm:h-7 sm:w-7"
        viewBox="0 0 32 32"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16.04 3.2A12.72 12.72 0 0 0 5.08 22.36L3.2 29.2l7-1.84A12.72 12.72 0 1 0 16.04 3.2Zm0 2.16a10.56 10.56 0 1 1-5.38 19.65l-.39-.23-4.16 1.09 1.11-4.05-.26-.42A10.56 10.56 0 0 1 16.04 5.36Zm-4.48 5.66c-.25-.57-.52-.58-.76-.59h-.65c-.23 0-.6.08-.92.43-.31.34-1.2 1.17-1.2 2.86s1.23 3.32 1.4 3.55c.17.23 2.37 3.79 5.86 5.16 2.9 1.14 3.49.91 4.12.86.63-.06 2.03-.83 2.32-1.63.29-.8.29-1.49.2-1.63-.09-.14-.31-.23-.66-.4-.34-.17-2.03-1-2.35-1.12-.31-.11-.54-.17-.77.17-.23.34-.89 1.12-1.09 1.35-.2.23-.4.26-.74.09-.34-.17-1.44-.53-2.74-1.69-1.01-.9-1.7-2.02-1.9-2.36-.2-.34-.02-.53.15-.7.15-.15.34-.4.51-.6.17-.2.23-.34.34-.57.11-.23.06-.43-.03-.6-.08-.17-.75-1.86-1.05-2.51Z" />
      </svg>
    </a>
  );
}
