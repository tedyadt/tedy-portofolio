import React from "react";
import LogoLoop from "@/components/global/LogoLoop/LogoLoop";
import SectionTitle from "../global/SectionTitle";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiPostgresql,
  SiLaravel,
  SiNodedotjs,
  SiGit,
  SiAmazonwebservices,
  SiFigma,
} from "react-icons/si";

const techLogos = [
  {
    node: (
      <SiReact className="opacity-60 hover:opacity-100 transition-opacity duration-300" />
    ),
    title: "React",
    href: "https://react.dev",
  },
  {
    node: (
      <SiNextdotjs className="opacity-60 hover:opacity-100 transition-opacity duration-300" />
    ),
    title: "Next.js",
    href: "https://nextjs.org",
  },
  {
    node: (
      <SiTypescript className="opacity-60 hover:opacity-100 transition-opacity duration-300" />
    ),
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: (
      <SiTailwindcss className="opacity-60 hover:opacity-100 transition-opacity duration-300" />
    ),
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  {
    node: (
      <SiHtml5 className="opacity-60 hover:opacity-100 transition-opacity duration-300" />
    ),
    title: "HTML",
  },
  {
    node: (
      <SiCss3 className="opacity-80 hover:opacity-100 transition-opacity duration-300" />
    ),
    title: "CSS",
  },
  {
    node: (
      <SiJavascript className="opacity-80 hover:opacity-100 transition-opacity duration-300" />
    ),
    title: "Javascript",
  },
  {
    node: (
      <SiPostgresql className="opacity-80 hover:opacity-100 transition-opacity duration-300" />
    ),
    title: "PostgreSQL",
  },
  {
    node: (
      <SiLaravel className="opacity-80 hover:opacity-100 transition-opacity duration-300" />
    ),
    title: "Laravel",
  },
  {
    node: (
      <SiNodedotjs className="opacity-80 hover:opacity-100 transition-opacity duration-300" />
    ),
    title: "NodeJS",
  },
  {
    node: (
      <SiGit className="opacity-80 hover:opacity-100 transition-opacity duration-300" />
    ),
    title: "Git",
  },
  {
    node: (
      <SiAmazonwebservices className="opacity-80 hover:opacity-100 transition-opacity duration-300" />
    ),
    title: "AWS",
  },
  {
    node: (
      <SiFigma className="opacity-80 hover:opacity-100 transition-opacity duration-300" />
    ),
    title: "Figma",
  },
];

function Skills() {
  return (
    <div className="relative py-12 px-4 md:px-0 flex flex-col items-end">
      {/* Container for both text and logo, both right-aligned */}
      <div className="w-full flex flex-col md:flex-row-reverse items-center justify-between gap-10">
        {/* Right Side: Header - Clean & Simple */}
        <div
          id="learnmore"
          className="w-full md:w-1/3 text-center md:text-right space-y-2"
        >
          <div className="relative inline-block md:block">
            <SectionTitle title="Professional Toolbelt" />
          </div>
          <p className="text-fun-gray-light text-base md:text-lg leading-relaxed">
            Crafting digital experiences with modern technologies.
          </p>
        </div>

        {/* Left/Middle side shifted right: Cleanest Logo Loop */}
        <div className="w-full md:w-2/3 overflow-hidden relative">
          <div className="py-2">
            <LogoLoop
              logos={techLogos}
              speed={30}
              direction="left"
              logoHeight={40}
              gap={70}
              hoverSpeed={5}
              scaleOnHover
              fadeOut
              ariaLabel="Technology partners"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
