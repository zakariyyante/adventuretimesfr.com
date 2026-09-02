import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer id="contact" className="bg-[#05070a] border-t border-white/5 pt-16 pb-12 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Top Row: Logo & Summary */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          <Link href="/" className="flex items-center group">
            <div className="relative h-10 w-48">
              <Image
                src="/logo.png"
                alt="PrismeFR.com"
                fill
                className="object-contain"
              />
            </div>
          </Link>
          <div className="max-w-md text-slate-500 text-xs text-left md:text-right leading-relaxed">
            Comparateur indépendant de sites de jeux en ligne licenciés par l&apos;ANJ en France. Nous ne sommes pas un opérateur de jeu et n&apos;acceptons pas de paris.
          </div>
        </div>

        {/* Second Row: Regulatory Logos */}
        <div className="flex items-center gap-6 mb-10 opacity-60">
          <div className="relative w-8 h-8">
            <Image src="/age-18.svg" alt="18+" fill className="object-contain invert brightness-200" />
          </div>
          <div className="relative w-16 h-8">
            <Image src="/anj.webp" alt="ANJ" fill className="object-contain grayscale brightness-200" />
          </div>
          <div className="relative w-20 h-8">
            <Image src="/mediateur.webp" alt="Médiateur" fill className="object-contain grayscale brightness-200" />
          </div>
          <div className="relative w-24 h-8">
            <Image src="/joueurs.webp" alt="Joueurs Info Service" fill className="object-contain grayscale brightness-200" />
          </div>
        </div>

        {/* Third Row: Disclaimers */}
        <div className="space-y-6 mb-12">
          <p className="text-slate-500 text-[10px] leading-relaxed max-w-5xl">
            Jouer comporte des risques et peut entraîner une dépendance. Jeu interdit aux mineurs de moins de 18 ans — jouez avec modération et de manière responsable. Ce site est un comparateur indépendant et ne recommande que des opérateurs agréés par l&apos;ANJ. Si vous avez besoin d&apos;aide, contactez le 09 74 75 13 13 (Joueurs Info Service) ou visitez <Link href="https://www.joueurs-info-service.fr/" target="_blank" className="hover:text-white underline transition-colors">joueurs-info-service.fr</Link>.
          </p>
          <p className="text-slate-500 text-[10px] leading-relaxed">
            Nous pouvons recevoir des commissions des opérateurs présentés ; cela n&apos;influence pas nos évaluations.
          </p>
        </div>

        {/* Divider Line */}
        <div className="h-px w-full bg-white/5 mb-8"></div>

        {/* Fifth Row: Navigation Links */}
        <div className="flex flex-wrap gap-x-8 gap-y-4 mb-8 text-[10px] font-black uppercase tracking-[0.1em]">
          <Link href="/privacy" className="text-slate-500 hover:text-white transition-colors">Politique de Cookies</Link>
          <Link href="/terms" className="text-slate-500 hover:text-white transition-colors">Conditions Générales</Link>
          <Link href="/privacy" className="text-slate-500 hover:text-white transition-colors">Confidentialité</Link>
          <Link href="/#guide" className="text-slate-500 hover:text-white transition-colors">Jeu Responsable</Link>
          <Link href="/#about" className="text-slate-500 hover:text-white transition-colors">À Propos</Link>
          <Link href="/#contact" className="text-slate-500 hover:text-white transition-colors">Contact</Link>
        </div>

        {/* Sixth Row: Copyright */}
        <div className="text-slate-600 text-[10px] font-medium tracking-wide">
          © {currentYear} <span className="font-black">PrismeFR.com</span>. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
