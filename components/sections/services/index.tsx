"use client";

import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { services } from "@/data/services";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Services() {
  return (
    <section id="layanan" className="relative overflow-hidden bg-slate-50 py-20 lg:py-28">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, black 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-600">
            Apa yang Kami Tawarkan
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Layanan Kami
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-base text-muted-foreground">
            Beragam layanan penyediaan tenaga kerja dan HR yang dirancang untuk
            memenuhi kebutuhan operasional perusahaan Anda.
          </p>
        </motion.div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Card className="p-0 group h-full border-border/50 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-brand-200">
                <Link
                  href={`/layanan/${service.slug}`}
                  className="block h-full"
                >
                  <CardContent className="p-6 h-full flex flex-col">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-foreground group-hover:text-brand-700 transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground grow">
                      {service.description}
                    </p>
                    <div className="mt-6 flex items-center text-sm font-semibold text-brand-600 opacity-80 group-hover:opacity-100 transition-opacity">
                      Pelajari Lebih Lanjut
                      <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Link>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
