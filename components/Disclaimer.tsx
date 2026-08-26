import Link from 'next/link';

export default function Disclaimer() {
  return (
    <div className="bg-slate-900 border-y border-slate-800 py-4 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-center md:text-left text-xs text-slate-400">
        <div className="flex items-center gap-2 font-bold text-red-500">
          <span className="text-lg">🔞</span>
          <span>POUR ADULTES DE 18 ANS ET PLUS UNIQUEMENT.</span>
        </div>
        <div className="hidden md:block w-px h-4 bg-slate-700"></div>
        <p>
          Jouez de manière responsable. Pour obtenir de l&apos;aide, visitez{" "}
          <Link href="https://www.joueurs-info-service.fr/" target="_blank" className="text-blue-500 hover:underline">
            Joueurs Info Service
          </Link>{" "}
          ou appelez le 09 74 75 13 13.
        </p>
      </div>
    </div>
  );
}
