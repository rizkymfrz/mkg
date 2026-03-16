"use client";

import { stats } from "@/data/stats";
import { useCountUp } from "@/hooks/use-count-up";

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp({ end: value, duration: 2000 });

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl font-bold text-white sm:text-5xl">
        {count}
        <span className="text-accent-gold">{suffix}</span>
      </div>
      <p className="mt-2 text-sm font-medium text-white/70">{label}</p>
    </div>
  );
}

export function Stats() {
  return (
    <section id="pencapaian" className="relative overflow-hidden bg-brand-950 py-20 lg:py-24">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute -top-20 -left-20 h-60 w-60 rounded-full bg-brand-600/20 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-accent-gold/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent-gold">
            Angka Berbicara
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Pencapaian Perusahaan
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatItem
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
