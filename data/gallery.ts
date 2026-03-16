export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  title: string;
}

export const galleryData: GalleryImage[] = [
  {
    id: 1,
    src: "/1.jpg",
    alt: "Kegiatan operasional dan pengamanan",
    title: "Pelatihan & Pasukan Keamanan",
  },
  {
    id: 2,
    src: "/2.jpg",
    alt: "Inspeksi fasilitas operasional",
    title: "Inspeksi Rutin",
  },
  {
    id: 3,
    src: "/3.jpg",
    alt: "Briefing pagi personil",
    title: "Briefing Pagi Personil",
  },
  {
    id: 4,
    src: "/4.jpg",
    alt: "Dukungan layanan perkantoran",
    title: "Layanan Dukungan Operasional",
  },
  {
    id: 5,
    src: "/5.jpg",
    alt: "Pengamanan event khusus",
    title: "Pengamanan Event Khusus",
  },
  {
    id: 6,
    src: "/6.jpg",
    alt: "Personil lapangan bertugas",
    title: "Personil Lapangan Siaga",
  },
];
