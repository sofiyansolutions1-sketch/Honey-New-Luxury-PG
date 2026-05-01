import { Send, Phone, Mail, MapPin } from 'lucide-react';

export default function ContactSection() {
  return (
    <section className="py-24 bg-brand-primary text-white overflow-hidden relative" id="contact">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-accent/10 -skew-x-12 translate-x-1/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-serif mb-8 max-w-lg">Ready to Move In? Let's Talk.</h2>
            <p className="text-white/60 mb-12 text-lg">Send us a message or give us a call. Our team will help you find the perfect room within hours.</p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-brand-accent" />
                </div>
                <div>
                  <p className="text-sm text-white/40 uppercase tracking-widest font-bold mb-1">Contact Person: Shubham</p>
                  <p className="text-xl">+91 92711 17779</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-brand-accent" />
                </div>
                <div>
                  <p className="text-sm text-white/40 uppercase tracking-widest font-bold mb-1">Visit Us</p>
                  <p className="text-sm leading-relaxed max-w-xs">
                    Om Sai Apartment, Above Ram Rajya Bank, Sainath Nagar, near Manipal hospital, Kharadi- Pune 411014
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-[3rem] p-8 md:p-12 text-gray-900 shadow-2xl overflow-hidden">
              <form 
                className="space-y-6" 
                id="contact-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  const name = (document.getElementById('contact-name') as HTMLInputElement).value;
                  const phone = (document.getElementById('contact-phone') as HTMLInputElement).value;
                  const interest = (document.getElementById('contact-interest') as HTMLSelectElement).value;
                  
                  const message = `Hello, I am interested in Honey New Luxury PG.%0A%0A*Details:*%0A- Name: ${name}%0A- Phone: ${phone}%0A- Requirement: ${interest}`;
                  window.open(`https://wa.me/919271117779?text=${message}`, "_blank");
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Full Name</label>
                    <input type="text" required className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:border-brand-accent focus:bg-white focus:ring-0 transition-all outline-none" placeholder="Name" id="contact-name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Phone</label>
                    <input type="tel" required className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:border-brand-accent focus:bg-white focus:ring-0 transition-all outline-none" placeholder="+91..." id="contact-phone" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Occupancy</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:border-brand-accent focus:bg-white focus:ring-0 transition-all outline-none appearance-none" id="contact-interest">
                    <option>Single Occupancy (Luxury)</option>
                    <option>Double Occupancy</option>
                    <option>Triple Occupancy</option>
                  </select>
                </div>

                <button type="submit" className="w-full py-4 bg-brand-primary text-white rounded-xl font-bold uppercase tracking-widest hover:bg-brand-accent transition-all flex items-center justify-center gap-3" id="submit-btn" title="Inquire on WhatsApp">
                  Inquire Now <Send className="w-4 h-4" />
                </button>
              </form>
            </div>

            {/* Advanced Map Section */}
            <div className="relative group w-full h-80 md:h-96 rounded-[2.5rem] overflow-hidden border-8 border-white/5 shadow-2xl" id="location-map">
              <iframe
                title="Honey New Luxury PG Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.47!2d73.9338!3d18.5399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c188024d3787%3A0x68cf7aa3f88ba103!2sHONEY%20NEW%20LUXURY%20PG%20BOYS%20AND%20GIRLS!5e0!3m2!1sen!2sin!4v1714530000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(0.1) contrast(1.1)' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              {/* Advanced Overlay Button */}
              <div className="absolute inset-0 bg-black/5 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-[2px]">
                <a 
                  href="https://www.google.com/maps/place/HONEY+NEW+LUXURY+PG+BOYS+AND+GIRLS/@18.5400174,73.9324713,662m/data=!3m1!1e3!4m6!3m5!1s0x3bc2c188024d3787:0x68cf7aa3f88ba103!8m2!3d18.5399818!4d73.9338768!16s%2Fg%2F11trwnd23y"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-brand-primary px-8 py-3 rounded-2xl font-bold uppercase tracking-widest flex items-center gap-3 shadow-2xl hover:bg-brand-accent hover:text-white transition-all transform hover:-translate-y-1"
                >
                  <MapPin className="w-5 h-5" />
                  Get Directions
                </a>
              </div>

              {/* Floating Badge */}
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-white/50 flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-primary">Live Location</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
