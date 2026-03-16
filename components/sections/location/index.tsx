"use client";

import { motion } from "motion/react";
import { MapPin } from "lucide-react";

export function Location() {
  return (
    <section
      id="lokasi"
      className="relative overflow-hidden bg-white py-20 lg:py-28 border-t border-border/50"
    >
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #334155 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-600">
            Lokasi Kami
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Kunjungi Kantor Kami
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2 text-muted-foreground">
            <MapPin className="h-5 w-5 text-brand-600 shrink-0" />
            <p className="text-base text-center">
              Bumi Telukjambe Blok J No. 420, Sukaluyu, Teluk Jambe Timur,
              Karawang Barat
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 overflow-hidden rounded-2xl border border-border/50 bg-muted/30"
        >
          <div className="aspect-video w-full sm:aspect-21/9 lg:h-[500px]">
            <iframe
              src="https://maps.google.com/maps?q=-6.331928,107.2816038&t=&z=17&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Peta Lokasi PT Mitra Kerja Gemilang"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
