import React, { useState } from "react";
import Image from "next/image";
import { kebabCase } from "@/utils/utils";
import Link from "next/link";
import { motion } from "framer-motion";
import ProjectModal from "./ProjectModal";

function ProjectCard({ project }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        layoutId={`card-${project.id}`}
        onClick={() => setIsOpen(true)}
        className="group relative flex flex-col bg-fun-pink-dark/20 border border-fun-pink/10 rounded-2xl overflow-hidden hover:border-fun-pink/40 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-fun-pink/5 w-full"
      >
        <div className="relative overflow-hidden aspect-video">
          <motion.img
            layoutId={`image-${project.id}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            src={project.img}
            alt={project.title}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-white text-sm font-medium">Click to Zoom</span>
          </div>
        </div>

        <div className="p-5 flex flex-col flex-1 text-left">
          <div className="flex items-center justify-between mb-2">
            <motion.h3
              layoutId={`title-${project.id}`}
              className="text-lg font-bold text-white group-hover:text-fun-pink transition-colors"
            >
              {project.title}
            </motion.h3>
            <div className="flex space-x-2">
              {project.link && (
                <div onClick={(e) => e.stopPropagation()}>
                  <a href={project.link} target="_blank" rel="noreferrer" className="opacity-60 hover:opacity-100">
                    <Image
                      src="/static/icons/external-link.svg"
                      width={16}
                      height={16}
                      alt="Link Icon"
                    />
                  </a>
                </div>
              )}
              {project.github && (
                <div onClick={(e) => e.stopPropagation()}>
                  <a href={project.github} target="_blank" rel="noreferrer" className="opacity-60 hover:opacity-100">
                    <Image
                      src="/static/icons/github.svg"
                      width={16}
                      height={16}
                      alt="Github Icon"
                    />
                  </a>
                </div>
              )}
            </div>
          </div>

          <motion.p
            layoutId={`desc-${project.id}`}
            className="text-fun-gray-light text-sm line-clamp-2 mb-4"
          >
            {project.desc}
          </motion.p>

          <div className="mt-auto flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag, index) => {
              return (
                <span
                  key={tag}
                  className="text-[10px] uppercase tracking-wider font-bold text-fun-pink bg-fun-pink/10 px-2 py-0.5 rounded-md"
                >
                  {tag}
                </span>
              );
            })}
            {project.tags.length > 3 && (
              <span className="text-[10px] font-bold text-fun-gray-light">
                + {project.tags.length - 3} more
              </span>
            )}
          </div>
        </div>
      </motion.div>

      <ProjectModal project={project} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}

export default ProjectCard;
