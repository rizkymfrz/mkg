import { Separator } from "@/components/ui/separator";
import { MapPin, Phone, Mail, Facebook } from "lucide-react";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

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
              <img
                src="/logo.png"
                alt="PT Mitra Kerja Gemilang Logo"
                className="h-9 w-auto object-contain"
              />
              <span className="font-bold text-lg">Mitra Kerja Gemilang</span>
            </div>
            <p className="text-justify mt-4 max-w-sm text-sm leading-relaxed text-white/60">
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
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/mitra.kerja.gemilang.2025?rdid=wgeIUM9vfHIN96n4&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1CYMSnMeag%2F%23"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1877F2] text-white"
                aria-label="Facebook PT Mitra Kerja Gemilang"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/6285691608964"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white"
                aria-label="WhatsApp PT Mitra Kerja Gemilang"
              >
                <WhatsAppIcon className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm text-white/40">
              Karawang, Jawa Barat, Indonesia
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
