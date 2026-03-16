export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "PT Mitra Kerja Gemilang menyediakan tenaga kerja yang kompeten dan profesional. Proses rekrutmen yang cepat dan efisien sangat membantu operasional perusahaan kami.",
    name: "Ahmad Fauzan",
    role: "HR Manager",
    company: "PT Imora Motor",
  },
  {
    quote:
      "Kami sangat puas dengan layanan keamanan yang diberikan. Personel security yang ditempatkan sangat terlatih dan disiplin dalam menjalankan tugasnya.",
    name: "Dewi Hartanti",
    role: "General Affairs Manager",
    company: "PT Moriroku Technology Indonesia",
  },
  {
    quote:
      "Kerjasama dengan MKG sudah berjalan lebih dari 3 tahun. Layanan yang konsisten dan responsif menjadikan mereka mitra terpercaya dalam penyediaan tenaga kerja kami.",
    name: "Budi Santoso",
    role: "Operation Director",
    company: "PT Kaneka Foods Indonesia",
  },
  {
    quote:
      "Program pelatihan yang disediakan sangat membantu meningkatkan kompetensi tenaga kerja di perusahaan kami. Hasilnya terlihat langsung pada produktivitas tim.",
    name: "Siti Rahayu",
    role: "Training Coordinator",
    company: "PT Fuji Seat",
  },
];
