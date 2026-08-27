import Link from 'next/link';
import Image from 'next/image';

export default function Disclaimer() {
  return (
    <div className="bg-white/5 border-y border-white/5 py-6 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
        <div className="flex items-center gap-3 font-black text-red-500 text-[10px] uppercase tracking-[0.2em]">
          <div className="relative w-6 h-6">
            <Image src="/age-18.svg" alt="18+" fill className="object-contain" />
          </div>
          <div className="relative w-12 h-6 opacity-80">
            <Image src="/anj.webp" alt="ANJ" fill className="object-contain grayscale" />
          </div>
          <span>18+ Uniquement.</span>
        </div>
        <div className="hidden md:block w-px h-4 bg-white/10"></div>
        <p className="text-slate-500 text-[10px] font-medium leading-relaxed">
          Le jeu comporte des risques : endettement, isolement, dépendance. Pour être aidé, appelez le 09 74 75 13 13 (appel non surtaxé) ou visitez{" "}
          <Link href="https://www.joueurs-info-service.fr/" target="_blank" className="text-cyan-400 hover:text-cyan-300 underline transition-colors">
            joueurs-info-service.fr
          </Link>.
        </p>
      </div>
    </div>
  );
}
