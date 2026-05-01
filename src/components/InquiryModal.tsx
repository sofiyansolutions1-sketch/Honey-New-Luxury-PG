import { motion, AnimatePresence } from 'motion/react';
import { X, Send } from 'lucide-react';
import { useState } from 'react';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: string;
}

export default function InquiryModal({ isOpen, onClose, initialType = 'Single Sharing' }: InquiryModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    type: initialType
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello, I am interested in Honey New Luxury PG.%0A%0A*Inquiry Details:*%0A- *Name:* ${formData.name}%0A- *Phone:* ${formData.phone}%0A- *Requirement:* ${formData.type}%0A%0A_Sent via Website Inquiry Form_`;
    window.open(`https://wa.me/919271117779?text=${message}`, "_blank");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-neutral-900/60 backdrop-blur-sm"
          />
          
          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="relative bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl overflow-hidden"
          >
            <div className="absolute top-6 right-6">
              <button 
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Close"
              >
                <X className="w-6 h-6 text-gray-400" />
              </button>
            </div>

            <div className="p-8 md:p-12">
              <div className="mb-8">
                <h2 className="text-3xl font-serif text-brand-primary mb-2">Room Inquiry</h2>
                <p className="text-gray-500 text-sm">Please provide your details below. We will connect with you on WhatsApp shortly.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Full Name</label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-transparent focus:border-brand-accent focus:bg-white outline-none transition-all"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Phone Number</label>
                  <input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-transparent focus:border-brand-accent focus:bg-white outline-none transition-all"
                    placeholder="+91..."
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Room Requirement</label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-transparent focus:border-brand-accent focus:bg-white outline-none transition-all appearance-none"
                  >
                    <option value="Single Sharing">Single Sharing (Luxury)</option>
                    <option value="Double Sharing">Double Sharing</option>
                    <option value="Triple Sharing">Triple Sharing</option>
                  </select>
                </div>

                <button 
                  type="submit"
                  className="w-full py-5 bg-brand-primary text-white rounded-2xl font-bold uppercase tracking-widest hover:bg-brand-accent transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
                >
                  Confirm & Inquire <Send className="w-4 h-4" />
                </button>
              </form>
              
              <p className="mt-6 text-center text-[10px] text-gray-400 uppercase tracking-widest font-medium">
                Protected by Honey Luxury PG Privacy Policy
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
