import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Education } from "@/components/site/Education";
import { Experience } from "@/components/site/Experience";
import { Expertise } from "@/components/site/Expertise";
import { Skills } from "@/components/site/Skills";
import { Services } from "@/components/site/Services";
import { Testimonials } from "@/components/site/Testimonials";
import { OnlineConsultation } from "@/components/site/OnlineConsultation";
import { Contact, Footer } from "@/components/site/Contact";
import { ScrollToTop } from "@/components/site/ScrollToTop";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vartika Ojha — Advocate & Legal Consultant" },
      {
        name: "description",
        content:
          "Office of Vartika Ojha — Advocate and Legal Consultant offering counsel in constitutional, corporate, criminal, competition, consumer and international trade law.",
      },
      { property: "og:title", content: "Vartika Ojha — Advocate & Legal Consultant" },
      {
        property: "og:description",
        content:
          "Premium legal counsel and advocacy across constitutional, corporate, criminal and trade law.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground animate-book-open">
      <Nav />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Expertise />
        <Skills />
        <Services />
        <OnlineConsultation />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
