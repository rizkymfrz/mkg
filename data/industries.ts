import { Car, Factory, Package, Pill, Mountain } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Industry {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const industries: Industry[] = [
  {
    title: "Manufaktur Otomotif",
    description:
      "Penyediaan tenaga kerja terampil untuk lini produksi dan operasional pabrik otomotif.",
    icon: Car,
  },
  {
    title: "Manufaktur Industri",
    description:
      "Tenaga kerja profesional untuk mendukung proses manufaktur dan operasional industri.",
    icon: Factory,
  },
  {
    title: "Logistik & Distribusi",
    description:
      "Staf operasional dan driver untuk kelancaran rantai pasok dan distribusi barang.",
    icon: Package,
  },
  {
    title: "Farmasi",
    description:
      "Tenaga kerja yang memenuhi standar ketat industri farmasi dan kesehatan.",
    icon: Pill,
  },
  {
    title: "Pertambangan & Material",
    description:
      "Penyediaan tenaga kerja berpengalaman untuk operasional sektor pertambangan.",
    icon: Mountain,
  },
];
