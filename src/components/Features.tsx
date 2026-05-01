import { Shield, Wifi, Utensils, Wind, Zap, Coffee, Trash2, Camera } from 'lucide-react';
import { motion } from 'motion/react';

const amenities = [
  { icon: Utensils, title: 'Homely Food', desc: 'North & South Indian meals. Mon-Fri (B&D), Sat-Sun (B,L,D).' },
  { icon: Wifi, title: 'High-Speed Wi-Fi', desc: 'Fiber-optic internet access throughout the premises.' },
  { icon: Wind, title: '24hr Hot Water', desc: 'Continuous hot water supply for all residents.' },
  { icon: Zap, title: 'Appliances', desc: 'Refrigerator and Washing Machine provided in common areas.' },
  { icon: Coffee, title: 'Drinking Water', desc: 'Pure Aquaguard drinking water available 24/7.' },
  { icon: Shield, title: 'Security', desc: 'Professional security staff and surveillance systems.' },
  { icon: Trash2, title: 'Housekeeping', desc: 'Regular cleaning to maintain a high level of hygiene.' },
  { icon: Camera, title: 'Easy Access', desc: 'Located near Manipal Hospital and major tech hubs.' },
];

export default function Features() {
  return (
    <section className="py-16 md:py-24 bg-white" id="amenities">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-serif mb-3">Premium Living Essentials</h2>
          <p className="text-gray-500 text-sm md:text-base max-w-2xl">Tailored specifically for students and working professionals seeking comfort.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {amenities.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-5 md:p-6 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:border-brand-accent/20 hover:shadow-lg transition-all group"
            >
              <div className="bg-white w-10 h-10 rounded-xl flex items-center justify-center mb-4 shadow-sm group-hover:bg-brand-accent transition-colors">
                <item.icon className="w-5 h-5 text-brand-accent group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-sm md:text-base font-semibold mb-1">{item.title}</h3>
              <p className="text-gray-400 text-[11px] md:text-xs leading-snug">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
