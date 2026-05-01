import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Call Button (Blue) */}
      <a
        href="tel:+919271117779"
        className="bg-[#2563eb] text-white p-4 rounded-full shadow-[0_8px_30px_rgb(37,99,235,0.3)] hover:scale-110 active:scale-95 transition-all flex items-center justify-center group"
        id="call-btn"
      >
        <Phone className="w-6 h-6 fill-white stroke-none group-hover:animate-pulse" />
      </a>

      {/* WhatsApp Button (Green) */}
      <a
        href="https://wa.me/919271117779"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#00c853] text-white p-4 rounded-full shadow-[0_8px_30px_rgb(0,200,83,0.3)] hover:scale-110 active:scale-95 transition-all flex items-center justify-center group"
        id="whatsapp-btn"
      >
        <MessageCircle className="w-6 h-6 fill-white stroke-none group-hover:rotate-12 transition-transform" />
      </a>
    </div>
  );
}
