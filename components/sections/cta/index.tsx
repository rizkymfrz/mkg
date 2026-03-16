"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-linear-to-r from-brand-700 via-brand-800 to-brand-900 py-20 lg:py-24">
      <div className="absolute inset-0">
        <div className="absolute -top-20 left-1/4 h-60 w-60 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-20 right-1/4 h-60 w-60 rounded-full bg-accent-gold/10 blur-3xl" />
      </div>
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Butuh Tenaga Kerja Profesional untuk{" "}
            <span className="text-accent-gold">Perusahaan Anda?</span>
          </h2>
          <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">
            Konsultasikan kebutuhan tenaga kerja perusahaan Anda dengan tim
            kami. Kami siap membantu Anda menemukan solusi terbaik.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              asChild
              size="lg"
              className="bg-accent-gold hover:bg-accent-gold/90 text-brand-950 font-semibold px-8 h-12 text-base"
            >
              <a href="/#kontak">
                Konsultasi Sekarang
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 hover:text-white px-8 h-12 text-base bg-transparent"
            >
              <a href="tel:+622678456043">
                <Phone className="mr-2 h-4 w-4" />
                Hubungi Kami
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
