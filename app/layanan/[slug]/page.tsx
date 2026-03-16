import { services } from "@/data/services";
import { notFound } from "next/navigation";
import { ServiceHero } from "@/components/sections/service-detail/hero";
import { ServiceContent } from "@/components/sections/service-detail/content";
import { Process } from "@/components/sections/process";
import { CTA } from "@/components/sections/cta";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";

export function generateStaticParams() {
  return services.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const service = services.find((s) => s.slug === resolvedParams.slug);
  if (!service)
    return { title: "Layanan Tidak Ditemukan | PT Mitra Kerja Gemilang" };

  return {
    title: `${service.title} | Layanan PT Mitra Kerja Gemilang`,
    description: service.description,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const service = services.find((s) => s.slug === resolvedParams.slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main>
        <ServiceHero slug={service.slug} />
        <ServiceContent slug={service.slug} />
        <Process />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
