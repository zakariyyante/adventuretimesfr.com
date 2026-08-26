import { brands } from "./data/brands";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BrandCard from "@/components/BrandCard";
import Disclaimer from "@/components/Disclaimer";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import MobileModal from "@/components/MobileModal";

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function Home({ searchParams }: PageProps) {
  const params = await searchParams;
  const gclid = typeof params.gclid === 'string' ? params.gclid : "";

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      
      <section id="brands" className="py-12 px-4 bg-slate-950">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
            <div>
              <h2 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight">
                Top <span className="text-blue-500">Marques</span> Partenaires
              </h2>
              <p className="text-slate-500 mt-2">Mise à jour quotidienne par nos experts</p>
            </div>
            <div className="text-xs text-slate-600 bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
              AFFICHAGE DE {brands.length} SITES VÉRIFIÉS
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {brands.map((brand, index) => (
              <div key={brand.id} className={index < 3 ? "md:col-span-3" : "md:col-span-1"}>
                <BrandCard 
                  brand={brand} 
                  rank={index + 1} 
                  gclidValue={gclid}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Disclaimer />
      
      {/* Guide Section (Placeholder) */}
      <section id="guide" className="py-20 px-4 border-t border-slate-900 bg-slate-950">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Guide Complet des Jeux par Navigateur</h2>
          <p className="text-slate-400 leading-relaxed mb-8">
            Les jeux par navigateur en France connaissent un essor sans précédent. Plus besoin de téléchargements lourds ou de PC de compétition. Lancez votre navigateur, et plongez dans des univers médiévaux, spatiaux ou de stratégie en quelques secondes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <div className="p-4 bg-slate-900 rounded-lg">
              <h4 className="text-blue-400 font-bold mb-2">Accessibilité Totale</h4>
              <p className="text-sm text-slate-500">Jouez sur n&apos;importe quel ordinateur, au bureau ou à la maison.</p>
            </div>
            <div className="p-4 bg-slate-900 rounded-lg">
              <h4 className="text-blue-400 font-bold mb-2">Gratuité (Free-to-play)</h4>
              <p className="text-sm text-slate-500">La plupart des titres sont gratuits avec des options de confort.</p>
            </div>
          </div>
        </div>
      </section>

      <AboutSection />
      
      <Footer />
      
      <MobileModal brands={brands} gclidValue={gclid} />
    </main>
  );
}
