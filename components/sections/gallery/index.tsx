"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { galleryData } from "@/data/gallery";

export function Gallery() {
  return (
    <section id="galeri" className="bg-muted/30 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-600">
            Galeri Kami
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Dokumentasi Kegiatan
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-base text-muted-foreground">
            Momen-momen dedikasi dan profesionalisme tenaga kerja kami di lapangan.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-4 grid-cols-2 md:grid-cols-3">
          {galleryData.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group relative aspect-4/3 overflow-hidden rounded-2xl bg-muted"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-brand-950/80 via-brand-950/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="font-medium text-white line-clamp-2">
                  {item.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
