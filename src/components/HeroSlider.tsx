import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const images = [
  {
    url: 'https://iili.io/Bs4saON.jpg',
    title: 'Honey New Luxury PG',
    subtitle: 'Premium living for Pune professionals.'
  },
  {
    url: 'https://iili.io/Bs4FSmF.jpg',
    title: 'Modern Kharadi Spaces',
    subtitle: 'Luxury and comfort in every square foot.'
  },
  {
    url: 'https://iili.io/Bs4VAsn.jpg',
    title: 'Executive Living',
    subtitle: 'Tailored for the modern professional.'
  }
];

export default function HeroSlider({ onInquire }: { onInquire: () => void }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section className="relative h-[40vh] md:h-[60vh] w-full overflow-hidden" id="hero-slider">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-black/15 z-10" />
          <img
            src={images[index].url}
            alt={images[index].title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-20 h-full flex flex-col justify-center px-4 md:px-12 pointer-events-none">
        <motion.div
          key={`text-${index}`}
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-xl pointer-events-auto"
        >
          <div className="w-12 h-1 bg-brand-accent mb-4" />
          <h1 className="text-2xl md:text-4xl text-white font-serif mb-1 tracking-tight">
            {images[index].title}
          </h1>
          <p className="text-[10px] md:text-xs text-white/90 font-bold uppercase tracking-[0.2em] mb-6">
            {images[index].subtitle}
          </p>
          <button 
            onClick={onInquire}
            className="bg-white text-brand-primary px-8 py-3 rounded-xl text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-brand-accent hover:text-white transition-all shadow-2xl"
          >
            Quick Inquiry
          </button>
        </motion.div>
      </div>

      <div className="absolute bottom-6 right-6 md:right-12 z-20 flex gap-4">
        <button onClick={prev} className="p-2 border border-white/20 rounded-full text-white hover:bg-white hover:text-brand-primary transition-all">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button onClick={next} className="p-2 border border-white/20 rounded-full text-white hover:bg-white hover:text-brand-primary transition-all">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
