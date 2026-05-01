import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#fcfcfc] py-20 border-t border-gray-100" id="main-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20 text-left">
          {/* Logo and About */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <img 
                 src="https://iili.io/BsQ8bmN.png" 
                 onError={(e) => { e.currentTarget.src = 'https://iili.io/BsQ8bmN.jpg'; }}
                 alt="Honey PG Logo" 
                 className="h-12 w-auto" 
              />
            </div>
            <p className="text-gray-400 text-base leading-relaxed max-w-sm">
              Providing modern, secure, and luxury living for students and professionals in Kharadi, Pune.
            </p>
          </div>
          
          {/* Navigation */}
          <div className="md:col-span-2">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] mb-8 text-neutral-900">Explore</h4>
            <ul className="space-y-4 text-gray-500 text-base font-medium">
              <li><a href="#" className="hover:text-neutral-900 transition-colors">Home</a></li>
              <li><a href="#rooms" className="hover:text-neutral-900 transition-colors">Rooms</a></li>
              <li><a href="#amenities" className="hover:text-neutral-900 transition-colors">Amenities</a></li>
              <li><a href="#contact" className="hover:text-neutral-900 transition-colors">Inquiry</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="md:col-span-2">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] mb-8 text-neutral-900">Policies</h4>
            <ul className="space-y-4 text-gray-500 text-base font-medium">
              <li><a href="#" className="hover:text-neutral-900 transition-colors">House Rules</a></li>
              <li><a href="#" className="hover:text-neutral-900 transition-colors">Safety Guide</a></li>
              <li><a href="#" className="hover:text-neutral-900 transition-colors">Refunds</a></li>
            </ul>
          </div>

          {/* Stay Connected */}
          <div className="md:col-span-3">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] mb-8 text-neutral-900">Contact</h4>
            <div className="space-y-4 text-gray-500 text-base font-medium">
              <p className="flex items-center gap-2">honeypg7779@gmail.com</p>
              <div className="space-y-1">
                <p>9271117779</p>
                <p>9271117778</p>
              </div>
              <p className="text-xs leading-relaxed mt-6">
                L no 2, Honey New Luxury PG, Om Sai Apartment, above Ramrajya Sahakari Bank, Kharadi, Pune - 411014
              </p>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">
          <p>© 2026 HONEY NEW LUXURY PG PUNE</p>
          <p className="text-gray-900">Luxury For Everyone</p>
        </div>
      </div>
    </footer>
  );
}
