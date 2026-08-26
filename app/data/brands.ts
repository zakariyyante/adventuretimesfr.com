export interface Brand {
  id: string;
  name: string;
  logo: string;
  rating: number;
  bonus: string;
  url: string;
  isMobile: boolean;
  votes: number;
}

export const brands: Brand[] = [
  {
    id: "forge-of-empires",
    name: "Forge of Empires",
    logo: "/brands/foe.svg",
    rating: 9.9,
    bonus: "Bonus de Bienvenue : 1000 Diamants + Pack de démarrage",
    url: "https://track.example.com/click?pid=1&clickid=",
    isMobile: true,
    votes: 12450,
  },
  {
    id: "elvenar",
    name: "Elvenar",
    logo: "/brands/elvenar.svg",
    rating: 9.7,
    bonus: "Construisez votre royaume : 500 Pièces d'or offertes",
    url: "https://track.example.com/click?pid=2&payload=",
    isMobile: true,
    votes: 8900,
  },
  {
    id: "rail-nation",
    name: "Rail Nation",
    logo: "/brands/railnation.svg",
    rating: 9.5,
    bonus: "Devenez magnat du rail : Pack Premium 7 jours",
    url: "https://track.example.com/click?pid=3&visit_id=",
    isMobile: false,
    votes: 5600,
  },
  {
    id: "grepolis",
    name: "Grepolis",
    logo: "/brands/grepolis.svg",
    rating: 9.3,
    bonus: "Conquérez la Grèce : 200 Or + Héros gratuit",
    url: "https://track.example.com/click?pid=4&clickid=",
    isMobile: true,
    votes: 15200,
  },
  {
    id: "tribal-wars-2",
    name: "Tribal Wars 2",
    logo: "/brands/tw2.svg",
    rating: 9.1,
    bonus: "Dominez le Moyen Âge : Bonus de ressources 20%",
    url: "https://track.example.com/click?pid=5&payload=",
    isMobile: false,
    votes: 7800,
  },
  {
    id: "ogame",
    name: "OGame",
    logo: "/brands/ogame.svg",
    rating: 8.9,
    bonus: "Bataille spatiale : Pack de ressources Nouveau Joueur",
    url: "https://track.example.com/click?pid=6&visit_id=",
    isMobile: true,
    votes: 22000,
  },
];
