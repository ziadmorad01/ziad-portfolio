import fs from "node:fs";
import path from "node:path";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Journey from "@/components/Journey";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { site } from "@/lib/content";
import { getSiteUrl } from "@/lib/siteUrl";

export default function Home() {
  // The CV button only appears if a (phone-number-free) CV has been added to /public.
  const hasCv = fs.existsSync(path.join(process.cwd(), "public", site.cvFile));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: getSiteUrl(),
    image: `${getSiteUrl()}/images/ziad-morad.jpg`,
    jobTitle: site.role,
    description: site.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Assiut",
      addressCountry: "EG",
    },
    sameAs: [site.github, site.linkedin],
    knowsAbout: [
      "C#",
      "ASP.NET Core",
      "SQL Server",
      "REST APIs",
      "Backend development",
    ],
  };

  return (
    <>
      <a
        href="#main"
        className="sr-only z-[60] rounded-full bg-accent-solid px-5 py-3 font-medium text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero hasCv={hasCv} />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Education />
        <Contact hasCv={hasCv} />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
