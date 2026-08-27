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
    id: "fps-tactique",
    f: 1,
    name: "FPS Tactique",
    logo: "/brands/valorant_logo.png",
    rating: 9.9,
    details: "FPS tactique 5v5 : Précision et équipe. Rondes courtes, agents avec capacités uniques et méta en constante évolution.",
    url: "https://playvalorant.com/fr-fr/?clickid=",
    isMobile: false,
    votes: 45200,
  },
  {
    id: "battle-royale",
    f: 2,
    name: "Battle Royale",
    logo: "/brands/apex_logo.png",
    rating: 9.7,
    details: "BR avec mouvement : Escouades et légendes. Combats vertigineux, ping intuitif et saisons fraîches.",
    url: "https://www.ea.com/fr-fr/games/apex-legends?payload=",
    isMobile: true,
    votes: 32800,
  },
  {
    id: "moba-strategie",
    f: 3,
    name: "MOBA Stratégie",
    logo: "/brands/lol_logo.png",
    rating: 9.5,
    details: "Stratégie en équipe : Voies, objectifs, teamfight. Profondeur tactique et communauté énorme sur PC.",
    url: "https://www.leagueoflegends.com/fr-fr/?visit_id=",
    isMobile: false,
    votes: 125000,
  },
  {
    id: "creation-sandbox",
    f: 4,
    name: "Création & Sandbox",
    logo: "/brands/roblox_logo.png",
    rating: 9.3,
    details: "Mondes à créer : Jouez ou construisez. Des milliers d'expériences sociales — du casual au compétitif.",
    url: "https://www.roblox.com/?clickid=",
    isMobile: true,
    votes: 89400,
  },
  {
    id: "aventure-rpg",
    f: 5,
    name: "Aventure RPG",
    logo: "/brands/genshin_logo.png",
    rating: 9.1,
    details: "Monde ouvert de fantaisie : Explorez et combinez les éléments. Personnages et combats élémentaires dans un univers vivant.",
    url: "https://genshin.hoyoverse.com/fr/?payload=",
    isMobile: true,
    votes: 67200,
  },
  {
    id: "social-deduction",
    f: 6,
    name: "Social Déduction",
    logo: "/brands/amongus_logo.png",
    rating: 8.9,
    details: "Déduisez et survivez : Équipage vs imposteurs. Parties courtes, chat et tension sociale — idéal entre amis.",
    url: "https://www.innersloth.com/games/among-us/?visit_id=",
    isMobile: true,
    votes: 54100,
  },
];
