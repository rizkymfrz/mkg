"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navLinks = [
  { label: "Tentang", href: "/#tentang" },
  { label: "Layanan", href: "/#layanan" },
  { label: "Keunggulan", href: "/#keunggulan" },
  { label: "Industri", href: "/#industri" },
  { label: "Galeri", href: "/#galeri" },
  { label: "Testimoni", href: "/#testimoni" },
  { label: "Kontak", href: "/#kontak" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 md:h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="/" className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="PT Mitra Kerja Gemilang Logo"
            className="h-9 w-auto object-contain"
          />
          <span
            className={`font-bold text-lg transition-colors duration-300 block ${
              scrolled ? "text-brand-900" : "text-white"
            }`}
          >
            Mitra Kerja Gemilang
          </span>
        </a>
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors duration-300 hover:bg-brand-700/10 ${
                scrolled
                  ? "text-foreground/70 hover:text-foreground"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
          <Button
            asChild
            size="lg"
            className="ml-3 bg-brand-600 hover:bg-brand-700 text-white"
          >
            <a href="/#kontak">Hubungi Kami</a>
          </Button>
        </nav>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className={`lg:hidden ${
                scrolled ? "text-foreground" : "text-white"
              }`}
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <SheetTitle className="text-brand-900 font-bold">
              Menu Navigasi
            </SheetTitle>
            <nav className="mt-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground/70 hover:bg-brand-50 hover:text-brand-700 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <Button
                asChild
                className="mt-4 bg-brand-600 hover:bg-brand-700 text-white"
              >
                <a href="/#kontak" onClick={() => setOpen(false)}>
                  Hubungi Kami
                </a>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
}
