import CTA from "@/components/home/CTA";
import Hero from "@/components/home/Hero";
import Page from "@/components/utility/Page";

import Projects from "@/components/home/Projects";
import Skills from "@/components/home/Skills";
import Experience from "@/components/home/Experience";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export default function Home() {
  return (
    <Page currentPage="Home" meta={{ desc: "I'm a passionate web developer and designer coding beautiful websites and apps." }}>
      <Hero />
      <div className="mt-20 space-y-32">
        <ScrollReveal>
          <Projects />
        </ScrollReveal>
        <ScrollReveal>
          <Skills />
        </ScrollReveal>
        <ScrollReveal>
          <Experience />
        </ScrollReveal>
      </div>
      <ScrollReveal>
        <CTA />
      </ScrollReveal>
    </Page>
  );
}

