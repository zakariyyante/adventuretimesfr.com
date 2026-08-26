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
  const buildUrl = (url: string, gclid?: string) => {
    if (!gclid) return url;
    // Append gclid to the trailing parameter (assuming it ends with = )
    return `${url}${gclid}`;
  };

  const finalUrl = buildUrl(brand.url, gclidValue);

  const handleCardClick = () => {
    // Vercel Analytics tracking
    track('Brand Click', { brand: brand.name });
    
    // Google Ads Conversion tracking (if gtag is available)
    const win = window as typeof window & { gtag_report_conversion?: (url: string) => void };
    if (typeof window !== 'undefined' && win.gtag_report_conversion) {
      win.gtag_report_conversion(finalUrl);
    } else {
      window.open(finalUrl, '_blank');
    }
  };

  const getRankBadge = (rank: number) => {
    if (rank === 1) return <div className="absolute -top-3 -left-3 bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg z-20">#1 GOLD</div>;
    if (rank === 2) return <div className="absolute -top-3 -left-3 bg-slate-300 text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg z-20">#2 SILVER</div>;
    if (rank === 3) return <div className="absolute -top-3 -left-3 bg-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg z-20">#3 BRONZE</div>;
    return null;
  };

  return (
    <div 
      className="relative casino-card-bg rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6 group cursor-pointer overflow-hidden"
      onClick={handleCardClick}
    >
      {rank && getRankBadge(rank)}
      
      {/* Corner Decorations */}
      <div className="absolute -top-1 -right-1 w-8 h-8 border-t-2 border-r-2 border-blue-500/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-2 border-l-2 border-blue-500/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>

      {/* LEFT: Logo + Rating */}
      <div className="flex flex-col items-center gap-3 w-full md:w-1/3">
        <div className="relative w-40 h-20 bg-slate-900 rounded-lg p-4 flex items-center justify-center">
          <Image
            src={brand.logo}
            alt={brand.name}
            width={120}
            height={48}
            className="object-contain"
          />
        </div>
        <div className="flex flex-col items-center">
          <div className="text-2xl font-bold text-white">{brand.rating.toFixed(1)}</div>
          <div className="flex text-yellow-500 text-sm">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={i < Math.floor(brand.rating / 2) ? "opacity-100" : "opacity-30"}>★</span>
            ))}
          </div>
          <div className="text-[10px] text-slate-500 mt-1 uppercase tracking-widest">{brand.votes} VOTES</div>
        </div>
      </div>

      {/* RIGHT: Bonus + CTA */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full md:w-2/3 gap-6">
        <div className="text-center md:text-left">
          <div className="text-sm text-blue-400 font-semibold mb-1 uppercase tracking-wider">OFFRE EXCLUSIVE</div>
          <div className="text-lg md:text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
            {brand.bonus}
          </div>
        </div>
        
        <div className="flex flex-col items-center gap-3 w-full md:w-auto">
          <button 
            className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-black uppercase tracking-widest rounded-xl transition-all shadow-[0_4px_20px_rgba(59,130,246,0.4)] active:scale-95"
            onClick={(e) => {
              e.stopPropagation();
              handleCardClick();
            }}
          >
            Visiter
          </button>
          <div className="text-[10px] text-slate-500 font-medium italic">T&C s&apos;appliquent</div>
        </div>
      </div>
      
      {/* Mobile Indicator */}
      {brand.isMobile && (
        <div className="absolute top-4 right-4 text-slate-500">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
        </div>
      )}
    </div>
  );
}
