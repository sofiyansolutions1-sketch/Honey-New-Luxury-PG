import { motion } from 'motion/react';
import { Users, Info, ArrowRight } from 'lucide-react';

const rooms = [
  {
    type: 'Luxury Single',
    sharing: 'Single Sharing',
    price: '12,999',
    image: 'https://iili.io/Bs4FSmF.jpg',
    tags: ['Luxury', 'Privacy']
  },
  {
    type: 'Comfort Duo',
    sharing: 'Double Sharing',
    price: '8,000',
    image: 'https://iili.io/Bs4zubp.jpg',
    tags: ['Popular']
  },
  {
    type: 'Value Trio',
    sharing: 'Triple Sharing',
    price: '6,500',
    image: 'https://iili.io/Bs41kMb.jpg',
    tags: ['Best Value']
  }
];

export default function RoomCards({ onSelectRoom }: { onSelectRoom: (type: string) => void }) {
  return (
    <section className="py-16 md:py-24 bg-gray-50" id="rooms">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 space-y-4 md:space-y-0">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif mb-2">Room Categories</h2>
            <p className="text-gray-400 text-sm md:text-base">MALE / FEMALE accommodation available.</p>
          </div>
          <div className="bg-white px-6 py-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col sm:flex-row gap-4 sm:gap-8 italic">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest"><span className="text-brand-accent mr-2">●</span> Deposit: ₹2000</p>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest"><span className="text-brand-accent mr-2">●</span> Maintenance: ₹1000 (One-time)</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {rooms.map((room, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="relative h-48 md:h-64 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.type}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  {room.tags.map(tag => (
                    <span key={tag} className="bg-brand-primary text-white px-2 py-1 rounded-lg text-[9px] font-bold uppercase tracking-widest">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-2 text-brand-accent mb-1">
                  <Users className="w-3 h-3" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">{room.sharing}</span>
                </div>
                <h3 className="text-lg md:text-xl font-serif mb-6">{room.type}</h3>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                  <div>
                    <span className="text-gray-400 text-[10px] uppercase font-bold tracking-widest">Starts from</span>
                    <p className="text-xl md:text-2xl font-serif text-brand-primary">₹{room.price}</p>
                  </div>
                  <button 
                    onClick={() => onSelectRoom(room.sharing)}
                    className="bg-brand-primary text-white px-6 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-brand-accent transition-all shadow-md group-hover:scale-105"
                  >
                    Inquire Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
