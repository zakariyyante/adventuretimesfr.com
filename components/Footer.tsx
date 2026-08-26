import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-12">
          <Link href="/" className="mb-8">
            <div className="relative h-12 w-48">
              <Image
                src="/logo.svg"
                alt="Adventure Times FR Logo"
                fill
                className="object-contain"
              />
            </div>
          </Link>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 w-full max-w-4xl text-center md:text-left">
            <div className="col-span-2 md:col-span-1">
              <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-sm">Navigation</h4>
              <ul className="space-y-2 text-slate-500 text-sm">
                <li><Link href="/" className="hover:text-blue-500 transition-colors">Accueil</Link></li>
                <li><Link href="/#brands" className="hover:text-blue-500 transition-colors">Sites Populaires</Link></li>
                <li><Link href="/#guide" className="hover:text-blue-500 transition-colors">Guide du Joueur</Link></li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-sm">Légal</h4>
              <ul className="space-y-2 text-slate-500 text-sm">
                <li><Link href="/privacy" className="hover:text-blue-500 transition-colors">Politique de Confidentialité</Link></li>
                <li><Link href="/terms" className="hover:text-blue-500 transition-colors">Conditions d&apos;Utilisation</Link></li>
                <li><Link href="/#contact" className="hover:text-blue-500 transition-colors">Nous Contacter</Link></li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-2">
              <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-sm text-center md:text-left">Avertissement</h4>
              <p className="text-slate-500 text-xs leading-relaxed text-center md:text-left">
                AdventureTimesFR est un site de comparaison indépendant soutenu par les frais de publicité des marques présentées. Nous nous efforçons de fournir des informations précises et à jour, mais le contenu est fourni &quot;tel quel&quot;. Les jeux en ligne comportent des risques. Veuillez jouer de manière responsable. Reglementé par les autorités compétentes.
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col items-center gap-6 border-t border-slate-900 pt-8">
          <div className="flex items-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all">
            <div className="relative w-8 h-8">
              <div className="border-2 border-slate-500 rounded-full w-8 h-8 flex items-center justify-center font-bold text-slate-500 text-[10px]">18+</div>
            </div>
            {/* Regulatory Logos would go here */}
            <div className="text-slate-500 font-bold text-xs">ANJ</div>
            <div className="text-slate-500 font-bold text-xs">JEUX RESPONSABLES</div>
          </div>
          
          <p className="text-slate-600 text-[10px] uppercase tracking-[0.2em]">
            © {currentYear} ADVENTURETIMESFR.COM - TOUS DROITS RÉSERVÉS
          </p>
        </div>
      </div>
    </footer>
  );
}
