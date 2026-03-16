"use client";

import { motion } from "motion/react";
import { industries } from "@/data/industries";

export function Industries() {
  return (
    <section id="industri" className="relative overflow-hidden bg-slate-50 py-20 lg:py-28">
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #334155 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-600">
            Sektor Industri
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Industri yang Kami Layani
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-base text-muted-foreground">
            Kami telah berpengalaman menyediakan tenaga kerja profesional untuk
            berbagai sektor industri di Indonesia.
          </p>
        </motion.div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group flex flex-col items-center rounded-2xl border border-border/50 bg-white p-8 text-center transition-all duration-300 hover:border-brand-200 "
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-all duration-300 group-hover:bg-brand-600 group-hover:text-white group-hover:scale-110">
                <industry.icon className="h-8 w-8" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-foreground">
                {industry.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {industry.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
