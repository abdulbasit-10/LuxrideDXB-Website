import { FaWhatsapp } from 'react-icons/fa';

const whatsappUrl = `https://wa.me/971523695478?text=${encodeURIComponent(
  'Hello LuxRideDXB, I would like to make an inquiry.',
)}`;

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with LuxRideDXB on WhatsApp"
      title="Chat with us on WhatsApp"
      className="fixed right-[18px] bottom-[18px] z-50 flex h-[58px] w-[58px] items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_8px_24px_rgba(0,0,0,0.28)] transition duration-200 hover:scale-105 hover:bg-[#20bd5a] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[#25d366] md:right-[26px] md:bottom-[26px]"
    >
      <FaWhatsapp aria-hidden="true" className="h-[34px] w-[34px]" />
    </a>
  );
}
