export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 bg-slate-950">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-12 text-center">
          Comment Nous Évaluons les Sites de <span className="gold-text">Jeux</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-blue-500 text-3xl">♠</span> Pourquoi Nos Revues Se Distinguent
            </h3>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✓</span>
                <span>Analyses approfondies des mécaniques de jeu et de la progression.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✓</span>
                <span>Vérification de la sécurité et de la licence des plateformes.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✓</span>
                <span>Comparaison réelle des bonus et offres de bienvenue.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✓</span>
                <span>Évaluation de la compatibilité mobile et de la fluidité technique.</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl border-l-4 border-l-red-500/50">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-red-500 text-3xl">♣</span> Jeu Responsable
            </h3>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Le jeu doit rester un plaisir. Nous nous engageons à promouvoir des pratiques de jeu sûres et responsables. Si vous ou quelqu&apos;un que vous connaissez avez des difficultés avec le jeu, des ressources sont disponibles.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-4 p-3 bg-slate-950 rounded-lg">
                <span className="text-red-500 font-bold">ANJ</span>
                <span className="text-sm text-slate-300 underline cursor-pointer">anj.fr</span>
              </div>
              <div className="flex items-center gap-4 p-3 bg-slate-950 rounded-lg">
                <span className="text-red-500 font-bold">Helpline</span>
                <span className="text-sm text-slate-300">09 74 75 13 13</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
