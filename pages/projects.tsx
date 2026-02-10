import Heading from "components/projects/Heading";
import More from "components/projects/More";
import Page from "components/utility/Page";
import Projects from "components/projects/Projects";
import React from "react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

function projects() {
  return (
    <Page
      currentPage="Projects"
      meta={{ title: "Projects", desc: "I love coding using tools like React, NextJS, Tailwind, and many more! Here are some of my favorite projects." }}
    >
      <Heading />
      <ScrollReveal>
        <Projects />
      </ScrollReveal>
      <ScrollReveal>
        <More />
      </ScrollReveal>
    </Page>
  );
}

export default projects;
