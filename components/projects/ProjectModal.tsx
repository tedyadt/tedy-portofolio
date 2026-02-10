import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface ProjectModalProps {
  project: any;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
          />
          <motion.div
            layoutId={`card-${project.id}`}
            className="relative w-full max-w-4xl bg-fun-pink-darker border border-fun-pink/30 rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-64 md:h-full min-h-[300px] bg-black/20 group/img">
                <motion.img
                  layoutId={`image-${project.id}`}
                  src={project.img}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-contain p-4 cursor-zoom-in"
                  onClick={() => window.open(project.img, '_blank')}
                />
                <div className="absolute bottom-4 right-4 opacity-0 group-hover/img:opacity-100 transition-opacity">
                  <button 
                    onClick={() => window.open(project.img, '_blank')}
                    className="flex items-center space-x-2 px-3 py-1.5 bg-black/60 backdrop-blur-md border border-white/20 rounded-lg text-white text-xs font-medium hover:bg-fun-pink transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                    <span>Zoom Full</span>
                  </button>
                </div>
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <motion.div layoutId={`title-${project.id}`}>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{project.title}</h2>
                </motion.div>
                <motion.div layoutId={`desc-${project.id}`}>
                  <p className="text-fun-gray-light text-lg mb-8 leading-relaxed">
                    {project.desc}
                  </p>
                </motion.div>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-fun-pink/10 border border-fun-pink/20 text-fun-pink rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 bg-fun-pink hover:bg-fun-pink-light text-white font-bold py-3 px-6 rounded-xl text-center transition-colors"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center bg-fun-gray-dark hover:bg-fun-gray-darker text-white font-bold py-3 px-6 rounded-xl transition-colors border border-fun-gray/20"
                    >
                      <Image src="/static/icons/github.svg" width={24} height={24} alt="Github" />
                    </a>
                  )}
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
