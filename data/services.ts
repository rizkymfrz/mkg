import {
  Shield,
  Building2,
  Truck,
  Users,
  GraduationCap,
  BookOpen,
  Briefcase,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  keyFeatures: string[];
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    id: "security",
    slug: "jasa-keamanan",
    title: "Jasa Keamanan (Security)",
    description:
      "Penyediaan tenaga keamanan profesional yang terlatih dan bersertifikasi untuk menjaga keamanan dan ketertiban di lingkungan perusahaan Anda.",
    longDescription:
      "Layanan Jasa Keamanan kami dikelola oleh tenaga profesional yang telah melalui proses seleksi ketat dan pelatihan komprehensif. Kami berdedikasi untuk menciptakan lingkungan yang aman dan kondusif bagi bisnis Anda beroperasi, meminimalkan risiko, dan merespons situasi darurat dengan cepat dan tepat.",
    keyFeatures: [
      "Personil bersertifikat Garda Pratama/Madya",
      "Sistem patroli terukur dan terawasi 24/7",
      "Pelatihan tanggap darurat (K3 & P3K)",
      "Prosedur operasional standar (SOP) keamanan ketat",
    ],
    icon: Shield,
  },
  {
    id: "office-support",
    slug: "dukungan-kantor",
    title: "Dukungan Kantor & Fasilitas",
    description:
      "Layanan Office Boy, Cleaning Service, dan Gardener yang handal untuk memastikan lingkungan kerja Anda selalu bersih, rapi, dan nyaman.",
    longDescription:
      "Kebersihan dan kenyamanan fasilitas kerja berdampak langsung pada produktivitas karyawan. Layanan dukungan kantor kami menyediakan tenaga kebersihan, office boy, dan staf fasilitas yang terlatih, teliti, dan memiliki standar pelayanan tinggi untuk merawat area kerja Anda.",
    keyFeatures: [
      "Standar kebersihan setara industri perhotelan",
      "Penggunaan bahan kimia pembersih yang aman dan ramah lingkungan",
      "Penjadwalan pembersihan rutin tanpa mengganggu operasional",
      "Tenaga kerja dengan attitude profesional dan sopan",
    ],
    icon: Building2,
  },
  {
    id: "operational-support",
    slug: "dukungan-operasional",
    title: "Dukungan Operasional",
    description:
      "Penyediaan tenaga driver profesional dan staf operasional lainnya untuk mendukung kelancaran aktivitas bisnis harian perusahaan Anda.",
    longDescription:
      "Mobilitas dan operasional harian yang lancar adalah kunci efisiensi perusahaan. Kami menyediakan tenaga pengemudi profesional (eksekutif maupun logistik), kurir, dan staf administrasi operasional yang siap mendukung ritme kerja perusahaan Anda dengan tingkat kedisiplinan tinggi.",
    keyFeatures: [
      "Driver berpengalaman dengan surat izin mengemudi (SIM) valid",
      "Pengetahuan rute yang luas dan pemahaman perawatan kendaraan dasar",
      "Staf operasional yang cekatan dan dapat diandalkan",
      "Kemampuan adaptasi dengan jadwal kerja dinamis",
    ],
    icon: Truck,
  },
  {
    id: "recruitment",
    slug: "layanan-rekrutmen",
    title: "Layanan Rekrutmen",
    description:
      "Proses rekrutmen menyeluruh mulai dari seleksi, wawancara, hingga penempatan kandidat terbaik yang sesuai dengan kebutuhan perusahaan Anda.",
    longDescription:
      "Menemukan talenta yang tepat membutuhkan waktu dan sumber daya yang signifikan. Melalui layanan rekrutmen MKG, kami mengambil alih proses kompleks tersebut—mulai dari sourcing kandidat, psychotest, background check, hingga negosiasi penawaran—sehingga Anda dapat fokus pada bisnis inti Anda.",
    keyFeatures: [
      "Database kandidat yang luas dan terverifikasi",
      "Alat tes psikologi (Psychotest) yang reliabel",
      "Verifikasi latar belakang (Background Check) mendalam",
      "Jaminan penggantian kandidat dalam masa garansi",
    ],
    icon: Users,
  },
  {
    id: "internship",
    slug: "program-magang",
    title: "Program Magang",
    description:
      "Program magang terstruktur yang dirancang untuk mengembangkan potensi dan kompetensi calon tenaga kerja profesional masa depan.",
    longDescription:
      "Kami bekerja sama dengan berbagai institusi pendidikan untuk memfasilitasi program magang terstruktur. Program ini tidak hanya membantu perusahaan Anda menemukan bibit unggul sejak dini, tetapi juga berkontribusi dalam peningkatan kualitas sumber daya manusia nasional melalui pemaparan dunia kerja nyata.",
    keyFeatures: [
      "Kurikulum magang berbasis kompetensi industri",
      "Sistem mentoring dan evaluasi berkala",
      "Dukungan administrasi kerjasama institusi",
      "Peluang talent pipeline jangka panjang",
    ],
    icon: GraduationCap,
  },
  {
    id: "training",
    slug: "pelatihan-workshop",
    title: "Pelatihan & Workshop",
    description:
      "Program pelatihan dan workshop untuk meningkatkan kompetensi, keterampilan, dan produktivitas tenaga kerja di perusahaan Anda.",
    longDescription:
      "Investasi pada kompetensi karyawan adalah kunci pertumbuhan perusahaan berkesinambungan. MKG menghadirkan beragam modul pelatihan in-house maupun public workshop, mulai dari soft skills seperti kepemimpinan dan komunikasi, hingga hard skills terkait standar operasional K3 dan keamanan.",
    keyFeatures: [
      "Modul pelatihan yang disesuaikan (Customized Training)",
      "Instruktur tersertifikasi dan praktisi berpengalaman",
      "Sertifikat penyelesaian untuk peserta",
      "Laporan evaluasi pasca-pelatihan",
    ],
    icon: BookOpen,
  },
  {
    id: "hr-consulting",
    slug: "konsultasi-hr",
    title: "Konsultasi HR",
    description:
      "Layanan konsultasi sumber daya manusia yang komprehensif untuk membantu perusahaan dalam pengelolaan dan pengembangan SDM secara optimal.",
    longDescription:
      "Tantangan operasional HR modern memerlukan pendekatan strategis, bukan sekadar administratif. Layanan Konsultasi HR kami merancang solusi sistematis untuk KPI, Performance Appraisal, Struktur Skala Upah, hingga penyusunan Peraturan Perusahaan untuk memastikan operasional SDM Anda produktif dan taat hukum.",
    keyFeatures: [
      "Pembuatan SOP dan kebijakan SDM",
      "Struktur dan skala upah berbasis kinerja",
      "Solusi penyelesaian perselisihan hubungan industrial",
      "Audit kepatuhan ketenagakerjaan (Labor Compliance)",
    ],
    icon: Briefcase,
  },
];
