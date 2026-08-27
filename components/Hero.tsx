export default function Hero() {
  return (
    <section className="relative pt-48 pb-24 px-6 overflow-hidden bg-[#050505]">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full pointer-events-none opacity-10">
        <div className="absolute top-[-10%] left-1/4 w-[50%] h-[50%] bg-cyan-500/20 blur-[120px] rounded-full"></div>
      </div>
      
      <div className="container mx-auto max-w-7xl relative z-10 text-center">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl md:text-7xl font-black tracking-tighter text-white mb-10 uppercase leading-[1.1] max-w-5xl">
            Les jeux <span className="text-cyan-400">à</span> lancer dans le <br className="hidden md:block" />
            navigateur en France
          </h1>
          
          <p className="text-slate-400 text-lg md:text-xl font-medium mb-12 leading-relaxed max-w-3xl">
            Des jeux qui s&apos;ouvrent dans un onglet, sans installation, <br className="hidden md:block" />
            avec des catégories lisibles et des communautés actives.
          </p>
        </div>
      </div>
      
      {/* Minimal scanline effect */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]"></div>
    </section>
  );
}
