import Link from "next/link";
import React from "react";
import SectionTitle from "../global/SectionTitle";
import projects from "@/data/content/projects";
import ProjectCard from "../projects/ProjectCard";

function Projects() {
  return (
    <div className="flex flex-col text-left justify-between pt-8 relative">
      <div id="learnmore">
        <SectionTitle title="Featured Projects" />
      </div>
      <p className="text-fun-gray-light text-lg mb-10 max-w-xl">
        Here are some of my favorite projects that I've worked on recently. 
        Each one was built with passion and attention to detail.
      </p>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3 items-stretch">
        {projects.slice(0, 3).map((item) => {
          return (
            <ProjectCard key={item.id} project={item} />
          );
        })}
      </div>
      <div className="relative w-full mt-12 flex justify-center">
        <Link href="/projects">
          <div className="group relative px-12 py-4 rounded-full bg-fun-pink/10 border border-fun-pink/30 text-fun-pink font-bold text-lg hover:bg-fun-pink hover:text-white transition-all duration-300 cursor-pointer overflow-hidden shadow-lg shadow-fun-pink/5">
            <span className="relative z-10">View All Projects</span>
            <div className="absolute inset-0 bg-gradient-to-r from-fun-pink to-fun-pink-light opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Projects;
