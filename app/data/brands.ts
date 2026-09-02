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
    id: "bwin",
    f: 1,
    name: "bwin",
    logo: "/brands/bwin_logo.png",
    rating: 9.9,
    details: "L'excellence des paris sportifs et du poker. Jouez avec l'un des leaders mondiaux et profitez des meilleures cotes.",
    url: "https://sports.bwin.fr/?clickid=",
    isMobile: true,
    votes: 82400,
  }
];
