"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, ShieldCheck, Users } from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-50"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-linear-to-br from-white via-slate-50 to-brand-50" />
        <div
          className="absolute inset-0 opacity-[0.1]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #94a3b8 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>
      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-brand-600/10 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-accent-gold/20 blur-3xl" />
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-[0.08]">
        <img
          src="/logo.png"
          alt="Watermark PT Mitra Kerja Gemilang"
          className="w-[90vw] max-w-2xl object-contain drop-shadow-xl"
        />
      </div>
      
      {/* Seamless transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-white to-transparent pointer-events-none z-0" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center rounded-full border border-brand-200/50 bg-brand-50/50 px-4 py-1.5 text-sm font-medium text-brand-700 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
            </span>
            #1 Kepercayaan Perusahaan
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-8 text-4xl font-bold leading-tight tracking-tight text-brand-950 sm:text-5xl lg:text-6xl"
          >
            Solusi Penyedia{" "}
            <span className="text-brand-600">Tenaga Kerja Profesional</span>{" "}
            untuk Perusahaan Anda
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl max-w-2xl mx-auto"
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
              className="bg-brand-600 hover:bg-brand-700 text-white font-semibold px-8 h-12 text-base"
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
              className="border-border text-foreground hover:bg-slate-100 hover:text-brand-950 px-8 h-12 text-base bg-white"
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-brand-950 transition-colors"
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
