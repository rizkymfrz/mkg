"use client";

import { motion } from "motion/react";
import { CheckCircle2, Phone, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { services } from "@/data/services";

export function ServiceContent({ slug }: { slug: string }) {
  const service = services.find((s) => s.slug === slug);
  if (!service) return null;
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-10"
          >
            <div>
              <h2 className="text-2xl font-bold text-brand-900 sm:text-3xl">
                Tentang Layanan Ini
              </h2>
              <div className="mt-6 prose prose-lg prose-brand text-muted-foreground max-w-none text-justify">
                <p className="leading-relaxed">{service.longDescription}</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-brand-900 sm:text-2xl mb-6">
                Keunggulan Utama
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {service.keyFeatures.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex items-start gap-3 rounded-xl bg-muted/40 p-4 border border-border/50"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                    <span className="text-sm font-medium text-foreground/80 leading-relaxed">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-28 space-y-6">
              <Card className="p-0 border-brand-100 bg-linear-to-b from-brand-50 to-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-brand-900">
                    Butuh Layanan Ini?
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    Konsultasikan kebutuhan spesifik perusahaan Anda dengan tim
                    ahli kami untuk mendapatkan penawaran terbaik.
                  </p>
                  <Button
                    asChild
                    size="lg"
                    className="w-full mt-6 bg-brand-600 hover:bg-brand-700 text-white"
                  >
                    <Link href="/#kontak">
                      Konsultasi Sekarang
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="p-0 border-border/50 bg-white">
                <CardContent className="p-6">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                    Kontak Cepat
                  </h4>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                        <Phone className="h-5 w-5" />
                      </div>
                      <span className="text-sm font-medium text-foreground/80">
                        +62 (0267) 845-6043
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                        <Mail className="h-5 w-5" />
                      </div>
                      <span className="text-sm font-medium text-foreground/80 break-all">
                        info@mitrakerjagemilang.co.id
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
