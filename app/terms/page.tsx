import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsOfService() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="container mx-auto max-w-4xl py-20 px-4 prose prose-invert">
        <h1 className="text-4xl font-bold text-white mb-8 uppercase tracking-tighter">Conditions d&apos;Utilisation</h1>
        <p className="text-slate-400">Dernière mise à jour : 2 septembre 2026</p>
        
        <div className="space-y-6 text-slate-300 mt-10">
          <section>
            <h2 className="text-2xl font-bold text-white uppercase tracking-tight">1. Acceptation des Conditions</h2>
            <p>
              En accédant à PrismeFR.com, vous acceptez d&apos;être lié par ces conditions d&apos;utilisation et toutes les lois et réglementations applicables en France.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-white">2. Nature du Service</h2>
            <p>
              Ce site est une plateforme de comparaison et d&apos;affiliation. Nous ne proposons pas directement de jeux, mais nous redirigeons vers des partenaires tiers. Les offres affichées peuvent changer sans préavis.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-white">3. Responsabilité de l&apos;Utilisateur</h2>
            <p>
              Vous devez avoir au moins 18 ans pour utiliser les services de nos partenaires. Il est de votre responsabilité de vérifier la légalité des jeux dans votre juridiction.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-white uppercase tracking-tight">4. Limitation de Responsabilité</h2>
            <p>
              PrismeFR.com ne pourra être tenu responsable de toute perte ou dommage résultant de votre utilisation des sites tiers recommandés. Jouez toujours de manière responsable.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
