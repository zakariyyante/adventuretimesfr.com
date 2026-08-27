import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="fixed top-0 z-[60] w-full border-b border-white/5 bg-[#050505]/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        <Link href="/" className="flex items-center group">
          <div className="relative h-10 w-48 transform group-hover:scale-105 transition-transform duration-300">
            <Image
              src="/logo.png"
              alt="adventuretimesfr.com"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-10 text-[10px] font-black uppercase tracking-[0.2em]">
          <Link href="/" className="text-white hover:text-purple-500 transition-colors">Accueil</Link>
          <Link href="/#brands" className="text-slate-400 hover:text-purple-500 transition-colors">Jeux</Link>
          <Link href="/#guide" className="text-slate-400 hover:text-purple-500 transition-colors">Méthode</Link>
          <Link href="/#about" className="text-slate-400 hover:text-purple-500 transition-colors">À Propos</Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Link 
            href="/#brands" 
            className="hidden sm:block px-6 py-2.5 bg-white text-black text-[10px] font-black uppercase tracking-[0.2em] rounded-full hover:bg-purple-500 hover:text-white transition-all"
          >
            Jouer
          </Link>
          <button className="md:hidden text-white p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
        </div>
      </div>
    </header>
  );
}
