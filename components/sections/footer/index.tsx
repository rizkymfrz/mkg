import { Separator } from "@/components/ui/separator";
import { MapPin, Phone, Mail, Facebook } from "lucide-react";

const footerLinks = [
  {
    title: "Layanan",
    links: [
      { label: "Jasa Keamanan", href: "/#layanan" },
      { label: "Dukungan Kantor", href: "/#layanan" },
      { label: "Layanan Rekrutmen", href: "/#layanan" },
      { label: "Pelatihan & Workshop", href: "/#layanan" },
      { label: "Konsultasi HR", href: "/#layanan" },
    ],
  },
  {
    title: "Perusahaan",
    links: [
      { label: "Tentang Kami", href: "/#tentang" },
      { label: "Keunggulan", href: "/#keunggulan" },
      { label: "Industri", href: "/#industri" },
      { label: "Testimoni", href: "/#testimoni" },
      { label: "Hubungi Kami", href: "/#kontak" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-brand-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="PT Mitra Kerja Gemilang Logo" className="h-9 w-auto object-contain" />
              <span className="font-bold text-lg">Mitra Kerja Gemilang</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              Solusi penyedia tenaga kerja profesional yang terpercaya untuk
              mendukung operasional dan pertumbuhan bisnis perusahaan Anda di
              berbagai sektor industri.
            </p>

            <div className="mt-6 space-y-3">
              <div className="flex items-start gap-3 text-sm text-white/60">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                <span>
                  Bumi Telukjambe Blok J No. 420, Sukaluyu, Teluk Jambe Timur,
                  Karawang Barat
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/60">
                <Phone className="h-4 w-4 shrink-0 text-brand-500" />
                <span>+62 (0267) 845-6043</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/60">
                <Mail className="h-4 w-4 shrink-0 text-brand-500" />
                <span>info@mitrakerjagemilang.co.id</span>
              </div>
            </div>
          </div>
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white/80">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/50 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Separator className="my-10 bg-white/10" />
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} PT Mitra Kerja Gemilang. Semua hak
            dilindungi.
          </p>
          <div className="flex items-center gap-6">
            <a 
              href="https://www.facebook.com/mitra.kerja.gemilang.2025?rdid=wgeIUM9vfHIN96n4&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1CYMSnMeag%2F%23" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white transition-colors"
              aria-label="Facebook PT Mitra Kerja Gemilang"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <p className="text-sm text-white/40">
              Karawang, Jawa Barat, Indonesia
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
