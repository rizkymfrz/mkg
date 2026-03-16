import { clients } from "@/data/clients";

export function TrustedBy() {
  const duplicatedClients = [...clients, ...clients, ...clients];

  return (
    <section id="dipercaya" className="bg-white py-16 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          Dipercaya oleh Berbagai Perusahaan
        </p>
      </div>
      <div className="mt-8 overflow-hidden pb-4">
        <div className="animate-marquee flex w-max items-stretch gap-6 px-4">
          {duplicatedClients.map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              className="group flex w-48 shrink-0 flex-col items-center justify-between gap-4 rounded-xl bg-white p-5 border border-border/50"
            >
              <div className="flex flex-1 w-full items-center justify-center">
                <img
                  src={client.logo}
                  alt={`Logo ${client.name}`}
                  className="max-h-16 max-w-32 object-contain transition-all duration-300"
                />
              </div>
              <span className="w-full text-center text-xs font-semibold text-muted-foreground/80 leading-snug">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
