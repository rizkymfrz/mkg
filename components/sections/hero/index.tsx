"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-brand-950"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-linear-to-br from-brand-950 via-brand-900 to-brand-800" />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>
      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-brand-600/20 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-accent-gold/10 blur-3xl" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex justify-center"
          >
            <div className="inline-flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-3 pr-6 sm:p-4 sm:pr-8 backdrop-blur-md transition-transform hover:scale-105">
              <img
                src="/logo.png"
                alt="Logo PT Mitra Kerja Gemilang"
                className="h-12 sm:h-16 w-auto object-contain"
              />
              <div className="h-10 sm:h-12 w-px bg-white/20" />
              <span className="text-lg sm:text-xl font-bold tracking-wide text-white">
                MITRA KERJA
                <br />
                GEMILANG
              </span>
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-8 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Solusi Penyedia{" "}
            <span className="text-accent-gold">Tenaga Kerja Profesional</span>{" "}
            untuk Perusahaan Anda
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-lg leading-relaxed text-white/70 sm:text-xl max-w-2xl mx-auto"
          >
            Kami menyediakan layanan penyediaan tenaga kerja yang kompeten dan
            terpercaya untuk mendukung operasional dan pertumbuhan bisnis Anda
            di berbagai sektor industri.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-accent-gold hover:bg-accent-gold/90 text-brand-950 font-semibold px-8 h-12 text-base"
            >
              <a href="#kontak">
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
              <a href="#layanan">Pelajari Layanan Kami</a>
            </Button>
          </motion.div>
        </div>
      </div>
      <motion.a
        href="#dipercaya"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white/80 transition-colors"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="h-6 w-6" />
        </motion.div>
      </motion.a>
    </section>
  );
}
