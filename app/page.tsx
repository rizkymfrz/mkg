import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { TrustedBy } from "@/components/sections/trusted-by";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { WhyUs } from "@/components/sections/why-us";
import { Industries } from "@/components/sections/industries";
import { Process } from "@/components/sections/process";
import { Stats } from "@/components/sections/stats";
import { Gallery } from "@/components/sections/gallery";
import { Testimonials } from "@/components/sections/testimonials";
import { CTA } from "@/components/sections/cta";
import { Contact } from "@/components/sections/contact";
import { Location } from "@/components/sections/location";
import { Footer } from "@/components/sections/footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <About />
        <Services />
        <WhyUs />
        <Industries />
        <Process />
        <Stats />
        <Gallery />
        <Testimonials />
        <CTA />
        <Contact />
        <Location />
      </main>
      <Footer />
    </>
  );
}
