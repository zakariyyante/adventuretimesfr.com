import { brands } from "./data/brands";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BrandCard from "@/components/BrandCard";
import Disclaimer from "@/components/Disclaimer";
import Footer from "@/components/Footer";
import MobileModal from "@/components/MobileModal";

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function Home({ searchParams }: PageProps) {
  const params = await searchParams;
  const gclid = typeof params.gclid === 'string' ? params.gclid : "";

  return (
    <main className="min-h-screen flex flex-col bg-[#050505]">
      <Header />
      <Hero />
      
      {/* Brand Grid Section */}
      <section id="brands" className="py-24 px-6 relative">
        <div className="container mx-auto">
          <div className="flex flex-col items-start mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4">
              NOTRE <span className="text-purple-500 italic">CATALOGUE</span>
            </h2>
            <p className="text-slate-500 font-medium max-w-lg">
              Une sélection exclusive avec une communauté active, des liens officiels et des sessions qui s&apos;adaptent à votre routine.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brands.map((brand, index) => (
              <BrandCard 
                key={brand.id} 
                brand={brand} 
                rank={index + 1} 
                gclidValue={gclid}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Our Method Section - Direct translation from source */}
      <section id="guide" className="py-24 px-6 border-y border-white/5 bg-[#08080a]">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="text-purple-500 text-[10px] font-black uppercase tracking-[0.3em] mb-4">NOTRE MÉTHODE</div>
              <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8 leading-none">
                COMMENT NOUS <br /><span className="text-cyan-400">CHOISISSONS CES JEUX</span>
              </h2>
              <p className="text-slate-400 text-lg mb-12 leading-relaxed">
                En France, chaque titre n&apos;entre dans la liste que s&apos;il possède une communauté active, des règles claires et une session compréhensible rapidement — sans vitrine infinie.
              </p>
              
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 shrink-0 rounded-2xl bg-white/5 flex items-center justify-center text-purple-500 font-black text-xl border border-white/10 shadow-[0_0_15px_rgba(168,85,247,0.1)]">01</div>
                  <div>
                    <h4 className="text-white font-bold mb-2 uppercase tracking-widest text-sm">Accès Clair</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">Page officielle facile à trouver et démarrage compréhensible dès les premières minutes.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 shrink-0 rounded-2xl bg-white/5 flex items-center justify-center text-cyan-400 font-black text-xl border border-white/10 shadow-[0_0_15px_rgba(6,182,212,0.1)]">02</div>
                  <div>
                    <h4 className="text-white font-bold mb-2 uppercase tracking-widest text-sm">Session Utile</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">Possibilité de faire une partie courte ou une session longue sans perdre le fil.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 shrink-0 rounded-2xl bg-white/5 flex items-center justify-center text-pink-500 font-black text-xl border border-white/10 shadow-[0_0_15px_rgba(236,72,153,0.1)]">03</div>
                  <div>
                    <h4 className="text-white font-bold mb-2 uppercase tracking-widest text-sm">Communauté</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">Classements, amis ou guides : le jeu continue de vivre hors de l&apos;écran de chargement.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative aspect-square bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-[40px] border border-white/10 overflow-hidden group">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-[200px] font-black text-white/5 select-none transition-transform duration-700 group-hover:scale-125">FR</div>
              </div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-purple-500/20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="text-pink-500 text-[10px] font-black uppercase tracking-[0.3em] mb-4 text-center">MAP DES CATÉGORIES</div>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-16 text-center">
            CATÉGORIES POUR <span className="text-pink-500">CHAQUE ENVIE</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Compétitif et Ranked", desc: "Parties courtes, méta en mouvement et focus sur l'équipe ou la précision.", icon: "🎯" },
              { title: "Création et Sandbox", desc: "Mondes partagés où vous jouez ou construisez à votre rythme.", icon: "🏗️" },
              { title: "Aventure et Exploration", desc: "Grandes cartes, personnages et progression au fil du temps.", icon: "🗺️" },
              { title: "Social et Party", desc: "Sessions rapides entre amis — tension, humour et déduction.", icon: "🤝" }
            ].map((cat, i) => (
              <div key={i} className="p-8 rounded-[32px] bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
                <div className="text-3xl mb-6 group-hover:scale-110 transition-transform">{cat.icon}</div>
                <h4 className="text-white font-black uppercase tracking-widest text-sm mb-4">{cat.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Start Section */}
      <section className="py-24 px-6 bg-[#0a0a0c]">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="text-cyan-400 text-[10px] font-black uppercase tracking-[0.3em] mb-4">COMMENT COMMENCER</div>
          <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-8 italic text-center">TROIS GESTES POUR <span className="text-purple-500">DÉMARRER</span></h2>
          <div className="grid md:grid-cols-3 gap-12 mt-16">
            <div>
              <div className="text-slate-800 font-black text-6xl mb-4 italic">01</div>
              <h4 className="text-white font-bold mb-2 uppercase tracking-widest text-xs">Choisissez votre style</h4>
              <p className="text-slate-500 text-sm">Compétitif, création ou aventure : partez de l&apos;envie du moment.</p>
            </div>
            <div>
              <div className="text-slate-800 font-black text-6xl mb-4 italic">02</div>
              <h4 className="text-white font-bold mb-2 uppercase tracking-widest text-xs">Ouvrez le lien officiel</h4>
              <p className="text-slate-500 text-sm">Utilisez toujours la page de l&apos;éditeur — évitez les raccourcis douteux.</p>
            </div>
            <div>
              <div className="text-slate-800 font-black text-6xl mb-4 italic">03</div>
              <h4 className="text-white font-bold mb-2 uppercase tracking-widest text-xs">Définissez la session</h4>
              <p className="text-slate-500 text-sm">Marquez combien de temps vous allez jouer et fermez quand l&apos;heure arrive.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Short List Benefits Section - Matching preminovax */}
      <section className="py-24 px-6 border-y border-white/5">
        <div className="container mx-auto">
          <div className="text-purple-500 text-[10px] font-black uppercase tracking-[0.3em] mb-4 text-center">LISTE COURTE</div>
          <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-16 text-center italic">UNE SÉLECTION DE PROPOS <span className="text-purple-500">LIMITÉE</span></h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
              <h4 className="text-white font-bold mb-4 uppercase text-sm flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-purple-500"></span> Links officiels
              </h4>
              <p className="text-slate-500 text-sm leading-relaxed">Chaque carte pointe directement vers la page de l&apos;éditeur.</p>
            </div>
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
              <h4 className="text-white font-bold mb-4 uppercase text-sm flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span> Sessions lisibles
              </h4>
              <p className="text-slate-500 text-sm leading-relaxed">Vous savez à quoi vous attendre dès les premières minutes.</p>
            </div>
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
              <h4 className="text-white font-bold mb-4 uppercase text-sm flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-pink-500"></span> Moins, mais mieux
              </h4>
              <p className="text-slate-500 text-sm leading-relaxed">Une sélection courte qui permet de vraiment suivre les titres.</p>
            </div>
          </div>
        </div>
      </section>

      <Disclaimer />
      
      {/* Footer & Compliance Section */}
      <section id="about" className="pt-24 pb-12 px-6">
        <div className="container mx-auto text-center">
          <div className="text-red-500 text-[10px] font-black uppercase tracking-[0.3em] mb-4">FRANCE • RYTHME SAIN</div>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-16 leading-none">
            MAINTENIR LE CONTRÔLE <br /><span className="text-red-500">DE LA SESSION</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 text-left max-w-5xl mx-auto mb-20">
            <div className="p-8 rounded-[40px] bg-white/5 border border-white/10">
              <p className="text-slate-400 text-sm leading-relaxed">
                Décidez au départ combien de temps vous allez jouer et fermez quand l&apos;heure arrive.
              </p>
            </div>
            <div className="p-8 rounded-[40px] bg-white/5 border border-white/10">
              <p className="text-slate-400 text-sm leading-relaxed">
                Désactivez les rappels et notifications qui réouvrent &quot;juste une partie de plus&quot;.
              </p>
            </div>
            <div className="p-8 rounded-[40px] bg-white/5 border border-white/10">
              <p className="text-slate-400 text-sm leading-relaxed">
                Changez de catégorie quand la session cesse d&apos;être agréable et devient automatique.
              </p>
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <div className="px-6 py-3 rounded-2xl bg-black text-red-500 font-bold text-[10px] uppercase tracking-widest border border-red-500/30 shadow-[0_0_15px_rgba(239,68,68,0.1)]">
              ANJ.FR
            </div>
            <div className="px-6 py-3 rounded-2xl bg-black text-slate-400 font-bold text-[10px] uppercase tracking-widest border border-white/10">
              09 74 75 13 13
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      <MobileModal brands={brands} gclidValue={gclid} />
    </main>
  );
}
