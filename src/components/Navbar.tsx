import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Home, X, Menu } from 'lucide-react';

export default function Navbar({ onInquire }: { onInquire: () => void }) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Facility', href: '#amenities' },
    { label: 'Rooms', href: '#rooms' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Location', href: '#contact' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100" id="navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex items-center gap-2">
            <img 
               src="https://iili.io/BsQ8bmN.png" 
               onError={(e) => { e.currentTarget.src = 'https://iili.io/BsQ8bmN.jpg'; }}
               alt="Honey PG Logo" 
               className="h-10 md:h-12 w-auto" 
            />
            <span className="font-serif text-xl md:text-2xl font-black tracking-tighter text-brand-primary uppercase">Honey PG</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10 items-center">
            {menuItems.map((item) => (
              <a 
                key={item.label} 
                href={item.href} 
                className="text-[11px] font-bold uppercase tracking-widest text-gray-500 hover:text-brand-accent transition-colors"
              >
                {item.label}
              </a>
            ))}
            <button 
              onClick={onInquire} 
              className="bg-brand-primary text-white px-6 py-2.5 rounded-xl text-[11px] font-bold uppercase tracking-widest hover:bg-brand-accent transition-all shadow-md"
            >
              Inquire
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center">
             <button 
              onClick={toggleMenu} 
              className="p-2 text-brand-primary hover:text-brand-accent transition-colors" 
              id="mobile-menu-toggle"
              aria-label="Toggle Menu"
            >
               {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
             </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-16 left-0 w-full bg-white border-b border-gray-100 shadow-xl md:hidden overflow-hidden"
          >
            <div className="px-4 py-8 space-y-6 flex flex-col items-center">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-serif text-brand-primary hover:text-brand-accent transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <button 
                onClick={() => {
                  setIsOpen(false);
                  onInquire();
                }}
                className="w-full text-center bg-brand-primary text-white py-4 rounded-2xl font-bold uppercase tracking-widest"
              >
                Book Your Stay
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
