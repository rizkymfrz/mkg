import { clients } from "@/data/clients";
import { Building2 } from "lucide-react";

export function TrustedBy() {
  const duplicatedClients = [...clients, ...clients, ...clients];

  return (
    <section id="dipercaya" className="bg-white py-16 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          Dipercaya oleh Berbagai Perusahaan
        </p>
      </div>
      <div className="mt-8 overflow-hidden">
        <div className="animate-marquee flex w-max items-center gap-8 px-4">
          {duplicatedClients.map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              className="group flex h-24 w-48 shrink-0 items-center justify-center rounded-xl bg-white px-6 py-4 border border-border/50"
            >
              <img
                src={client.logo}
                alt={`Logo ${client.name}`}
                className="max-h-full max-w-full object-contain transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
