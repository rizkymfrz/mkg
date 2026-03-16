"use client";

import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Berpengalaman di berbagai sektor industri",
  "Bermitra dengan perusahaan nasional & instansi pemerintah",
  "Proses rekrutmen profesional & terstandarisasi",
  "Tenaga kerja kompeten & berdedikasi",
];

export function About() {
  return (
    <section id="tentang" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-brand-600">
              Tentang Perusahaan
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Mitra Terpercaya dalam Penyediaan{" "}
              <span className="text-brand-700">Tenaga Kerja Profesional</span>
            </h2>
            <p className="mt-6 text-base text-justify leading-relaxed text-muted-foreground">
              <strong className="text-foreground">
                PT Mitra Kerja Gemilang
              </strong>{" "}
              menyediakan layanan penyediaan tenaga kerja profesional yang telah
              dipercaya oleh berbagai perusahaan nasional maupun instansi
              pemerintah. Dengan pengalaman dan komitmen terhadap kualitas, kami
              memastikan setiap tenaga kerja yang kami tempatkan memiliki
              kompetensi dan dedikasi tinggi.
            </p>
            <p className="mt-4 text-base text-justify leading-relaxed text-muted-foreground">
              Kami berkomitmen untuk menjadi mitra strategis perusahaan Anda
              dalam memenuhi kebutuhan sumber daya manusia yang berkualitas,
              mulai dari tenaga keamanan, staf pendukung operasional, hingga
              layanan konsultasi HR yang komprehensif.
            </p>

            <ul className="mt-8 space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                  <span className="text-sm font-medium text-foreground/80">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl bg-linear-to-br from-brand-50 to-brand-100 p-8 lg:p-12">
              <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-brand-200/50 blur-2xl" />
              <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-accent-gold/20 blur-2xl" />

              <div className="relative space-y-6">
                <div className="rounded-xl bg-white/80 p-6 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-brand-700">
                    Visi Kami
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Menjadi perusahaan penyedia tenaga kerja terdepan yang
                    terpercaya dan profesional di Indonesia.
                  </p>
                </div>
                <div className="rounded-xl bg-white/80 p-6 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-accent-gold">
                    Misi Kami
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Menyediakan tenaga kerja berkualitas melalui proses seleksi
                    yang ketat dan pelatihan yang berkesinambungan untuk
                    mendukung keberhasilan klien.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
