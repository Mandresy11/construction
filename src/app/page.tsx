import { About } from "@/components/About";
import { CtaContact } from "@/components/CtaContact";
import { MobileCtaBubble } from "@/components/MobileCtaBubble";
import { Faq } from "@/components/Faq";
import { Hero } from "@/components/Hero";
import { Process } from "@/components/Process";
import { Realisations } from "@/components/Realisations";
import { Services } from "@/components/Services";
import { ServicesDetail } from "@/components/ServicesDetail";
import { SiteFooter } from "@/components/SiteFooter";
import { Testimonials } from "@/components/Testimonials";
import { ZoneIntervention } from "@/components/ZoneIntervention";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Hero />
      <Services />
      <ServicesDetail />
      <Process />
      <Realisations />
      <About />
      <ZoneIntervention />
      <Testimonials />
      <Faq />
      <CtaContact />
      <SiteFooter />
      <MobileCtaBubble />
    </div>
  );
}
