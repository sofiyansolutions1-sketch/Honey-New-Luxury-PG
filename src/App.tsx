/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import Features from './components/Features';
import RoomCards from './components/RoomCards';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import FloatingActions from './components/FloatingActions';
import InquiryModal from './components/InquiryModal';

export default function App() {
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
  const [selectedRoomType, setSelectedRoomType] = useState('Single Sharing');

  const openInquiry = (type?: string) => {
    if (type) setSelectedRoomType(type);
    setIsInquiryModalOpen(true);
  };

  return (
    <div className="min-h-screen">
      <Navbar onInquire={() => openInquiry()} />
      <main>
        <HeroSlider onInquire={() => openInquiry()} />
        
        {/* Welcome Section */}
        <section className="py-16 bg-white" id="welcome">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-serif mb-4 text-brand-primary">
              Honey New Luxury PG
            </h2>
            <div className="w-20 h-1 bg-brand-accent mx-auto mb-6" />
            <p className="max-w-2xl mx-auto text-gray-500 text-lg leading-relaxed font-medium">
              Male / Female Accommodation
            </p>
            <p className="max-w-2xl mx-auto text-gray-400 mt-4 leading-relaxed">
              Experience upscale co-living in the heart of Kharadi, Pune. We provide luxury accommodations 
              specifically tailored for ambitious students and top-tier working professionals.
            </p>
          </div>
        </section>

        <RoomCards onSelectRoom={openInquiry} />
        <Features />
        <Gallery />
        <ContactSection />
      </main>
      <Footer />
      <FloatingActions />

      <InquiryModal 
        isOpen={isInquiryModalOpen} 
        onClose={() => setIsInquiryModalOpen(false)} 
        initialType={selectedRoomType}
      />
    </div>
  );
}
