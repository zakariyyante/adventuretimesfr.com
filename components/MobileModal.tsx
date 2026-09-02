'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Brand } from '@/app/data/brands';
import BrandCard from './BrandCard';

interface MobileModalProps {
  brands: Brand[];
  gclidValue: string;
}

export default function MobileModal({ brands, gclidValue }: MobileModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  const mobileBrands = brands.filter(b => b.isMobile);

  useEffect(() => {
    if (gclidValue && mobileBrands.length > 0) {
      setIsOpen(true);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [gclidValue, mobileBrands.length]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-[#050505] overflow-y-auto">
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-white/5 flex justify-between items-center bg-[#050505] sticky top-0 z-10 backdrop-blur-xl">
          <div className="text-white font-black tracking-tighter text-2xl italic">
            PRISME<span className="text-cyan-400 text-sm ml-1 not-italic">FR</span>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>

        {/* Hero */}
        <div className="p-8 text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 blur-[80px] rounded-full"></div>
          <h2 className="text-4xl font-black text-white mb-4 uppercase italic tracking-tighter leading-none">
            OFFRES <br /><span className="text-purple-500">EXCLUSIVES</span>
          </h2>
          <p className="text-slate-500 text-sm font-medium">Les meilleurs titres pour votre smartphone.</p>
        </div>

        {/* Brand Grid */}
        <div className="p-6 flex flex-col gap-6">
          {mobileBrands.map((brand, idx) => (
            <BrandCard 
              key={brand.id} 
              brand={brand} 
              rank={idx + 1} 
              gclidValue={gclidValue}
            />
          ))}
        </div>

        {/* Footer info */}
        <div className="mt-auto p-12 text-center bg-white/5">
          <div className="flex justify-center items-center gap-4 mb-8">
            <div className="relative w-8 h-8">
              <Image src="/age-18.svg" alt="18+" fill className="object-contain" />
            </div>
            <div className="relative w-16 h-8">
              <Image src="/anj.webp" alt="ANJ" fill className="object-contain" />
            </div>
            <div className="relative w-20 h-8">
              <Image src="/mediateur.webp" alt="Médiateur" fill className="object-contain" />
            </div>
            <div className="relative w-24 h-8">
              <Image src="/joueurs.webp" alt="Joueurs Info Service" fill className="object-contain" />
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="w-full py-4 bg-white text-black font-black uppercase tracking-widest text-sm rounded-2xl"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
}
