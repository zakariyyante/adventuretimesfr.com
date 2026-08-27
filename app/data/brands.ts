export interface Brand {
  id: string;
  f: number;
  name: string;
  logo: string;
  rating: number;
  details: string;
  url: string;
  isMobile: boolean;
  votes: number;
}

export const brands: Brand[] = [
  {
    id: "pmu",
    f: 1,
    name: "PMU",
    logo: "/brands/pmu_logo.png",
    rating: 9.9,
    details: "Parie sur l'excellence : Sports, Hippique et Poker. Profitez de l'offre de bienvenue sur votre premier pari.",
    url: "https://inscription.pmu.fr/?clickid=",
    isMobile: true,
    votes: 45200,
  },
  {
    id: "pokerstars",
    f: 2,
    name: "PokerStars",
    logo: "/brands/pokerstars_logo.png",
    rating: 9.8,
    details: "La référence mondiale du Poker et des paris sportifs. Jouez sur la plus grande plateforme avec des tournois exclusifs.",
    url: "https://www.pokerstars.fr/sports/pages/multi-sport/100-bonus/?payload=",
    isMobile: true,
    votes: 32800,
  }
];
