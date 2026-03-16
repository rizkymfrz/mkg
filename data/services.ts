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
  title: string;
  description: string;
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    id: "security",
    title: "Jasa Keamanan (Security)",
    description:
      "Penyediaan tenaga keamanan profesional yang terlatih dan bersertifikasi untuk menjaga keamanan dan ketertiban di lingkungan perusahaan Anda.",
    icon: Shield,
  },
  {
    id: "office-support",
    title: "Dukungan Kantor & Fasilitas",
    description:
      "Layanan Office Boy, Cleaning Service, dan Gardener yang handal untuk memastikan lingkungan kerja Anda selalu bersih, rapi, dan nyaman.",
    icon: Building2,
  },
  {
    id: "operational-support",
    title: "Dukungan Operasional",
    description:
      "Penyediaan tenaga driver profesional dan staf operasional lainnya untuk mendukung kelancaran aktivitas bisnis harian perusahaan Anda.",
    icon: Truck,
  },
  {
    id: "recruitment",
    title: "Layanan Rekrutmen",
    description:
      "Proses rekrutmen menyeluruh mulai dari seleksi, wawancara, hingga penempatan kandidat terbaik yang sesuai dengan kebutuhan perusahaan Anda.",
    icon: Users,
  },
  {
    id: "internship",
    title: "Program Magang",
    description:
      "Program magang terstruktur yang dirancang untuk mengembangkan potensi dan kompetensi calon tenaga kerja profesional masa depan.",
    icon: GraduationCap,
  },
  {
    id: "training",
    title: "Pelatihan & Workshop",
    description:
      "Program pelatihan dan workshop untuk meningkatkan kompetensi, keterampilan, dan produktivitas tenaga kerja di perusahaan Anda.",
    icon: BookOpen,
  },
  {
    id: "hr-consulting",
    title: "Konsultasi HR",
    description:
      "Layanan konsultasi sumber daya manusia yang komprehensif untuk membantu perusahaan dalam pengelolaan dan pengembangan SDM secara optimal.",
    icon: Briefcase,
  },
];
