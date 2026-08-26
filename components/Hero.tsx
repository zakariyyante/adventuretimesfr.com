export default function Hero() {
  const currentYear = new Date().getFullYear();
  
  return (
    <section className="relative py-20 px-4 overflow-hidden bg-slate-950">
      <div className="absolute inset-0 felt-texture opacity-30"></div>
      <div className="container mx-auto relative z-10 text-center">
        <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-400 mb-8">
          <span className="mr-2">🏆</span> Le premier centre d&apos;examen des jeux en France {currentYear}
        </div>
        
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
          Trouvez les Meilleurs Sites de <span className="gold-text">Jeux par Navigateur</span> en France
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-12">
          Revues d&apos;experts, bonus exclusifs et paiements rapides. Tout ce dont vous avez besoin pour jouer en toute sécurité.
        </p>
        
        <div className="flex flex-wrap justify-center gap-6">
          <div className="flex items-center space-x-2 bg-slate-900/50 border border-slate-800 px-6 py-3 rounded-xl">
            <span className="text-green-500 text-xl">🛡️</span>
            <span className="font-semibold text-slate-200">Sous Licence</span>
          </div>
          <div className="flex items-center space-x-2 bg-slate-900/50 border border-slate-800 px-6 py-3 rounded-xl">
            <span className="text-blue-500 text-xl">⭐</span>
            <span className="font-semibold text-slate-200">Approuvé par des Experts</span>
          </div>
          <div className="flex items-center space-x-2 bg-slate-900/50 border border-slate-800 px-6 py-3 rounded-xl">
            <span className="text-yellow-500 text-xl">⚡</span>
            <span className="font-semibold text-slate-200">Retraits Rapides</span>
          </div>
        </div>
      </div>
    </section>
  );
}
