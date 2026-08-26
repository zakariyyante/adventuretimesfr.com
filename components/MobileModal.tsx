'use client';

import { useEffect, useState } from 'react';
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
      // Prevent scrolling when modal is open
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [gclidValue, mobileBrands.length]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-slate-950 overflow-y-auto">
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-slate-800 flex justify-between items-center bg-slate-900 sticky top-0 z-10">
          <div className="text-white font-black tracking-tighter text-xl">
            ADVENTURE<span className="text-blue-500 text-sm ml-1">MOBILE</span>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-slate-400 hover:text-white p-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>

        {/* Hero */}
        <div className="p-6 bg-gradient-to-b from-blue-900/20 to-transparent text-center">
          <h2 className="text-2xl font-black text-white mb-2 uppercase italic tracking-wide">
            Offres Spéciales <span className="text-blue-500">Mobile</span>
          </h2>
          <p className="text-slate-400 text-sm">Les meilleurs jeux pour votre smartphone</p>
        </div>

        {/* Brand Grid */}
        <div className="p-4 flex flex-col gap-4">
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
        <div className="mt-auto p-8 text-center bg-slate-900/50">
          <div className="flex justify-center items-center gap-2 font-bold text-red-500 text-[10px] mb-4">
            <span>🔞 18+ JOUER RESPONSABLE</span>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-blue-500 text-sm font-bold uppercase tracking-widest border border-blue-500/30 px-6 py-2 rounded-full"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
}
