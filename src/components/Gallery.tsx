import { motion } from 'motion/react';

const exterior = [
  'https://iili.io/Bs4saON.jpg',
  'https://iili.io/Bs4ZqJf.jpg',
  'https://iili.io/Bs4bDBI.jpg',
  'https://iili.io/Bs4hVst.jpg',
];

const rooms = [
  'https://iili.io/Bs4FSmF.jpg',
  'https://iili.io/Bs4ugI4.jpg',
  'https://iili.io/Bs4cgSI.jpg',
  'https://iili.io/Bs41kMb.jpg',
  'https://iili.io/Bs4BeCg.jpg',
  'https://iili.io/Bs4nXX1.jpg',
  'https://iili.io/Bs4G124.jpg',
  'https://iili.io/Bs4zubp.jpg',
];

const facilities = [
  'https://iili.io/Bs4VAsn.jpg',
  'https://iili.io/Bs4WZaj.jpg',
  'https://iili.io/Bs4jguR.jpg',
  'https://iili.io/Bs4NuX2.jpg',
  'https://iili.io/Bs4Own2.jpg',
];

const ScrollRow = ({ images, title, duration, reverse = false }: { images: string[], title: string, duration: number, reverse?: boolean }) => (
  <div className="space-y-3">
    <div className="flex items-center gap-3 px-4 md:px-0">
      <div className="w-8 h-[1px] bg-brand-accent" />
      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">{title}</span>
    </div>
    <div className="flex overflow-hidden group">
      <motion.div
        initial={{ x: reverse ? "-50%" : "0%" }}
        animate={{ x: reverse ? "0%" : "-50%" }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
        className="flex gap-4 min-w-max py-2"
      >
        {[...images, ...images].map((src, i) => (
          <div key={i} className="w-56 h-36 md:w-80 md:h-52 rounded-2xl overflow-hidden shadow-sm border border-gray-100">
            <img src={src} alt={title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
          </div>
        ))}
      </motion.div>
    </div>
  </div>
);

export default function Gallery() {
  return (
    <section className="py-20 bg-[#fafafa] overflow-hidden" id="gallery">
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-serif text-brand-primary tracking-tight">Our Living Spaces</h2>
        <p className="text-gray-500 text-sm mt-2 max-w-xl font-medium">Categorized view of our premium property, comfort-driven rooms, and modern amenities available at Honey New Luxury PG.</p>
      </div>
      
      <div className="space-y-12">
        <ScrollRow title="PG Exterior & Area" images={exterior} duration={35} />
        <ScrollRow title="Our Premium Rooms" images={rooms} duration={45} reverse />
        <ScrollRow title="Modern Facilities" images={facilities} duration={40} />
      </div>
    </section>
  );
}
