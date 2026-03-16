import {
  Award,
  ClipboardCheck,
  Zap,
  HeadphonesIcon,
  BarChart3,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Advantage {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const advantages: Advantage[] = [
  {
    title: "Tenaga Kerja Berpengalaman",
    description:
      "Kami menyediakan tenaga kerja yang telah terseleksi dan memiliki pengalaman di berbagai bidang industri.",
    icon: Award,
  },
  {
    title: "Proses Rekrutmen Profesional",
    description:
      "Proses seleksi ketat dan terstandarisasi untuk memastikan kualitas setiap kandidat yang kami tempatkan.",
    icon: ClipboardCheck,
  },
  {
    title: "Penempatan Cepat & Efisien",
    description:
      "Sistem penempatan yang responsif sehingga kebutuhan tenaga kerja Anda dapat terpenuhi dengan cepat.",
    icon: Zap,
  },
  {
    title: "Dukungan Operasional Penuh",
    description:
      "Tim support kami siap membantu menangani segala kebutuhan operasional terkait tenaga kerja yang ditempatkan.",
    icon: HeadphonesIcon,
  },
  {
    title: "Monitoring Kinerja Berkala",
    description:
      "Evaluasi dan monitoring performa tenaga kerja secara berkala untuk menjamin standar kualitas layanan.",
    icon: BarChart3,
  },
];
