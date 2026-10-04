import UrgencyBar from "@/components/UrgencyBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProEndorsements from "@/components/ProEndorsements";
import LeadCoach from "@/components/LeadCoach";
import ProblemAgitation from "@/components/ProblemAgitation";
import CorePhilosophy from "@/components/CorePhilosophy";
import Methodology from "@/components/Methodology";
import Qualification from "@/components/Qualification";
import FAQ from "@/components/FAQ";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <div className="relative">
      <UrgencyBar />
      <Header />
      
      <main>
        <Hero />
        <ProEndorsements />
        <LeadCoach />
        <ProblemAgitation />
        <CorePhilosophy />
        <Methodology />
        <Qualification />
        <FAQ />
        <LeadForm />
      </main>

      <Footer />
      <MobileStickyCTA />
      <FloatingWhatsApp />
    </div>
  );
}
