"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { services } from "@/data/services";

export function ServiceHero({ slug }: { slug: string }) {
  const service = services.find((s) => s.slug === slug);
  if (!service) return null;
  return (
    <section className="relative overflow-hidden bg-brand-950 pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-linear-to-br from-brand-950 via-brand-900 to-brand-800" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex items-center justify-center gap-2 text-sm text-white/60 font-medium"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Beranda
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link
              href="/#layanan"
              className="hover:text-white transition-colors"
            >
              Layanan
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-accent-gold">{service.title}</span>
          </motion.nav>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-accent-gold backdrop-blur-sm"
          >
            <service.icon className="h-8 w-8" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            {service.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 text-lg leading-relaxed text-white/70 sm:text-xl"
          >
            {service.description}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
