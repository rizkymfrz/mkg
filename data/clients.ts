export interface Client {
  name: string;
  shortName?: string;
  logo: string;
}

export const clients: Client[] = [
  { name: "PT Imora Motor (Honda)", shortName: "Imora Motor", logo: "/client/hondaimora.png" },
  { name: "PT Prospect Motor (Honda)", shortName: "Prospect Motor", logo: "/client/prospectmotorgroup.png" },
  { name: "PT Moriroku Technology Indonesia", shortName: "Moriroku", logo: "/client/moriroku.png" },
  { name: "PT Fuji Seat", shortName: "Fuji Seat", logo: "/client/fujiseat.png" },
  { name: "PT Kaneka Foods Indonesia", shortName: "Kaneka Foods", logo: "/client/kanekafoods.png" },
  { name: "PT Sibelco Lautan Minerals", shortName: "Sibelco", logo: "/client/sibelco.png" },
  { name: "PT SCG Lightweight Concrete Indonesia", shortName: "SCG", logo: "/client/scg.png" },
];
