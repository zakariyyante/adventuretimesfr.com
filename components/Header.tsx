import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-700 bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative h-12 w-48">
            <Image
              src="/logo.svg"
              alt="Adventure Times FR"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <Link href="/" className="transition-colors hover:text-blue-500 text-slate-200">Accueil</Link>
          <Link href="/#brands" className="transition-colors hover:text-blue-500 text-slate-200">Sites</Link>
          <Link href="/#guide" className="transition-colors hover:text-blue-500 text-slate-200">Guide</Link>
          <Link href="/#about" className="transition-colors hover:text-blue-500 text-slate-200">À Propos</Link>
          <Link href="/#contact" className="transition-colors hover:text-blue-500 text-slate-200">Contact</Link>
        </nav>
        
        <div className="md:hidden">
          {/* Simple Mobile Menu Trigger */}
          <button className="text-slate-200 p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
        </div>
      </div>
    </header>
  );
}
