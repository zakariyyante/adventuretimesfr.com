'use client';

import Image from 'next/image';
import { track } from '@vercel/analytics';
import { Brand } from '@/app/data/brands';

interface BrandCardProps {
  brand: Brand;
  rank?: number;
  gclidValue?: string;
}

export default function BrandCard({ brand, rank, gclidValue }: BrandCardProps) {
  const finalUrl = `/go?f=${brand.f}${gclidValue ? `&gclid=${gclidValue}` : ''}`;

  const handleCardClick = () => {
    track('Brand Click', { brand: brand.name });
    
    if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
      (window as any).gtag_report_conversion(finalUrl);
    } else {
      window.open(finalUrl, '_blank');
    }
  };

  return (
    <div 
      className="group gaming-card p-1"
      onClick={handleCardClick}
    >
      <div className="bg-[#0f0f12] rounded-[22px] p-6 h-full flex flex-col relative z-10">
        {/* Category & Badge */}
        <div className="flex justify-between items-center mb-6">
          <span className="text-[10px] font-black tracking-[0.2em] text-purple-500 uppercase">
            {rank === 1 ? '🔥 Top Rated' : '⚡ Gaming Site'}
          </span>
          {rank && (
            <span className="text-white/20 font-black text-2xl italic">0{rank}</span>
          )}
        </div>

        {/* Logo Section */}
        <div className="relative w-full h-32 mb-6 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors duration-500 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <Image
            src={brand.logo}
            alt={brand.name}
            width={160}
            height={64}
            className="object-contain z-10 group-hover:scale-110 transition-transform duration-500"
          />
        </div>

        {/* Info */}
        <div className="flex-grow">
          <h3 className="text-2xl font-black text-white mb-2 tracking-tight group-hover:text-purple-400 transition-colors">
            {brand.name}
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            {brand.details}
          </p>
          
          <div className="flex items-center gap-4 mb-8">
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Score</span>
              <span className="text-xl font-black text-cyan-400">{brand.rating.toFixed(1)}</span>
            </div>
            <div className="w-px h-8 bg-white/10"></div>
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Votes</span>
              <span className="text-xl font-black text-white">{brand.votes.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <button 
          className="w-full py-4 bg-white text-black font-black uppercase tracking-widest text-sm rounded-xl hover:bg-purple-500 hover:text-white transition-all duration-300 transform group-hover:translate-y-[-4px] active:translate-y-0 shadow-xl"
          onClick={(e) => {
            e.stopPropagation();
            handleCardClick();
          }}
        >
          Jouer Maintenant
        </button>
        
        {/* Mobile Indicator */}
        {brand.isMobile && (
          <div className="absolute top-6 right-6 text-white/10 group-hover:text-cyan-500/50 transition-colors">
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
          </div>
        )}
      </div>
    </div>
  );
}
