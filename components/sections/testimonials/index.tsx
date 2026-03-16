"use client";

import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/data/testimonials";
import { Quote } from "lucide-react";

export function Testimonials() {
  return (
    <section id="testimoni" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-600">
            Apa Kata Klien
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Testimoni Klien
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-base text-muted-foreground">
            Kepercayaan dan kepuasan klien adalah kebanggaan kami.
          </p>
        </motion.div>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Card className="p-0 h-full border-border/50 bg-linear-to-br from-white to-muted/20">
                <CardContent className="p-6 sm:p-8">
                  <Quote className="h-8 w-8 text-brand-200" />
                  <blockquote className="mt-4 text-base leading-relaxed text-foreground/80 italic">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {t.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {t.role} — {t.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
