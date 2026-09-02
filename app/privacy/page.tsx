import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="container mx-auto max-w-4xl py-20 px-4 prose prose-invert">
        <h1 className="text-4xl font-bold text-white mb-8">Politique de Confidentialité</h1>
        <p className="text-slate-400">Dernière mise à jour : 26 août 2026</p>
        
        <div className="space-y-6 text-slate-300 mt-10">
          <section>
            <h2 className="text-2xl font-bold text-white">1. Collecte des Données</h2>
            <p>
              Nous collectons des informations minimales nécessaires à l&apos;amélioration de notre service. Cela inclut des données d&apos;utilisation anonymisées via Vercel Analytics et Google Tag.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-white">2. Utilisation des Cookies</h2>
            <p>
              Notre site utilise des cookies pour analyser le trafic et personnaliser votre expérience. En naviguant sur ce site, vous acceptez l&apos;utilisation de ces cookies conformément à notre politique.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-white">3. Liens Affiliés</h2>
            <p>
              PrismeFR.com contient des liens vers des sites tiers. Nous ne sommes pas responsables des politiques de confidentialité de ces sites externes. Nous vous encourageons à lire leurs conditions générales.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-white">4. Vos Droits</h2>
            <p>
              Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos données personnelles. Pour toute demande, veuillez nous contacter.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
