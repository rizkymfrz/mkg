"use client";

import { motion } from "motion/react";
import { MessageSquare, Search, UserCheck, BarChart3 } from "lucide-react";

const steps = [
  {
    step: 1,
    title: "Konsultasi Kebutuhan",
    description:
      "Kami memahami kebutuhan tenaga kerja Anda melalui konsultasi mendalam mengenai kualifikasi, jumlah, dan jadwal penempatan.",
    icon: MessageSquare,
  },
  {
    step: 2,
    title: "Seleksi Kandidat",
    description:
      "Tim rekrutmen kami melakukan proses seleksi ketat meliputi tes kompetensi, wawancara, dan verifikasi latar belakang.",
    icon: Search,
  },
  {
    step: 3,
    title: "Penempatan Tenaga Kerja",
    description:
      "Kandidat terbaik yang telah lolos seleksi ditempatkan sesuai dengan kebutuhan dan standar perusahaan Anda.",
    icon: UserCheck,
  },
  {
    step: 4,
    title: "Monitoring & Evaluasi",
    description:
      "Kami melakukan monitoring berkala dan evaluasi kinerja untuk memastikan kualitas layanan tetap terjaga.",
    icon: BarChart3,
  },
];

export function Process() {
  return (
    <section
      id="proses"
      className="relative overflow-hidden bg-white py-20 lg:py-28"
    >
      <div
        className="absolute inset-0 opacity-[0.1] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #64748b 1px, transparent 1px), linear-gradient(to bottom, #64748b 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-600">
            Alur Kerja
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Proses Kerja Kami
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-base text-muted-foreground">
            Proses yang sistematis dan transparan untuk memastikan Anda
            mendapatkan tenaga kerja terbaik.
          </p>
        </motion.div>
        <div className="mt-14 grid gap-8 md:grid-cols-4">
          {steps.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              className="relative text-center"
            >
              {i < steps.length - 1 && (
                <div className="absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-2rem)] hidden h-0.5 bg-linear-to-r from-brand-200 to-brand-100 md:block" />
              )}
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-600 text-white ">
                <item.icon className="h-7 w-7" />
              </div>
              <div className="mx-auto -mt-3 flex h-6 w-6 items-center justify-center rounded-full bg-accent-gold text-xs font-bold text-brand-950">
                {item.step}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
