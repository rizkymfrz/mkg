import { clients } from "@/data/clients";
import { Building2 } from "lucide-react";

export function TrustedBy() {
  const duplicatedClients = [...clients, ...clients];

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
              className="flex shrink-0 items-center gap-3 rounded-lg border border-border/50 bg-muted/30 px-6 py-3"
            >
              <Building2 className="h-5 w-5 text-brand-600 shrink-0" />
              <span className="whitespace-nowrap text-sm font-medium text-foreground/70">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
