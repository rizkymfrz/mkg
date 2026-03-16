"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Alamat",
    lines: [
      "Bumi Telukjambe Blok J No. 420",
      "Sukaluyu, Teluk Jambe Timur",
      "Karawang Barat",
    ],
  },
  {
    icon: Phone,
    title: "Telepon",
    lines: ["+62 (0267) 845-6043", "0812-8860-6271"],
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["info@mitrakerjagemilang.co.id"],
  },
  {
    icon: Clock,
    title: "Jam Operasional",
    lines: ["Senin - Jumat: 08:00 - 17:00", "Sabtu: 08:00 - 12:00"],
  },
];

export function Contact() {
  return (
    <section id="kontak" className="relative overflow-hidden bg-brand-50 py-20 lg:py-28">
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #334155 1px, transparent 0)",
          backgroundSize: "40px 40px",
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
            Hubungi Kami
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Siap Membantu Anda
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-base text-muted-foreground">
            Hubungi kami untuk konsultasi kebutuhan tenaga kerja perusahaan
            Anda. Tim kami siap memberikan solusi terbaik.
          </p>
        </motion.div>
        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-6"
          >
            {contactInfo.map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {item.title}
                  </h3>
                  {item.lines.map((line) => (
                    <p key={line} className="text-sm text-muted-foreground">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <Card className="p-0 border-border/50">
              <CardContent className="p-6 sm:p-8">
                <form
                  className="space-y-5"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="mb-1.5 block text-sm font-medium text-foreground"
                      >
                        Nama Lengkap
                      </label>
                      <Input
                        id="contact-name"
                        placeholder="Masukkan nama Anda"
                        className="bg-white"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-company"
                        className="mb-1.5 block text-sm font-medium text-foreground"
                      >
                        Perusahaan
                      </label>
                      <Input
                        id="contact-company"
                        placeholder="Nama perusahaan"
                        className="bg-white"
                      />
                    </div>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="mb-1.5 block text-sm font-medium text-foreground"
                      >
                        Email
                      </label>
                      <Input
                        id="contact-email"
                        type="email"
                        placeholder="email@perusahaan.com"
                        className="bg-white"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="mb-1.5 block text-sm font-medium text-foreground"
                      >
                        No. Telepon
                      </label>
                      <Input
                        id="contact-phone"
                        type="tel"
                        placeholder="08xx-xxxx-xxxx"
                        className="bg-white"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="mb-1.5 block text-sm font-medium text-foreground"
                    >
                      Pesan
                    </label>
                    <Textarea
                      id="contact-message"
                      placeholder="Jelaskan kebutuhan tenaga kerja Anda..."
                      rows={5}
                      className="bg-white resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-brand-600 hover:bg-brand-700 text-white h-12"
                  >
                    Kirim Pesan
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
