import { useState } from "react";
import { PROJECTS, CATEGORIES } from "../constants";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaTimes } from "react-icons/fa";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeTab === "All"
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === activeTab);

  return (
    <div className="pb-20">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="my-20 text-center text-4xl font-bold text-neutral-200"
      >
        Projects
      </motion.h2>

      {/* FILTER */}
      <div className="flex flex-wrap justify-center gap-3 mb-8 px-4">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
              activeTab === category
                ? "bg-neutral-200 text-neutral-900 border-neutral-200 shadow-[0_0_15px_rgba(255,255,255,0.3)] scale-105"
                : "bg-neutral-900 text-neutral-400 border-neutral-800 hover:border-neutral-600 hover:text-neutral-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="container mx-auto px-4 lg:px-12">
        <style>{`
          .custom-scrollbar::-webkit-scrollbar {
            width: 6px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: #171717;
            border-radius: 4px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background-color: #404040;
            border-radius: 20px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background-color: #525252;
          }
          .custom-scrollbar {
            scrollbar-width: thin;
            scrollbar-color: #404040 #171717;
          }
        `}</style>

        <div className="max-h-[800px] overflow-y-auto custom-scrollbar p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedProject(project)}
                  className="group relative bg-neutral-900/50 border border-neutral-800 rounded-2xl overflow-hidden hover:border-neutral-500 transition-colors duration-300 flex flex-col cursor-pointer"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.alt || project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-neutral-200 text-sm font-medium border border-neutral-500 px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm">
                        Click for Details
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <div className="mb-3">
                      <span className="text-[10px] font-bold text-neutral-300 uppercase tracking-widest border border-neutral-700/50 bg-neutral-800/50 px-2 py-1 rounded">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-neutral-200 mb-3 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-neutral-400 text-sm mb-4 flex-grow line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-neutral-800/50">
                      {project.technologies.slice(0, 4).map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs font-medium text-neutral-400 bg-neutral-800 px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="text-xs font-medium text-neutral-500 px-1 py-1">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-neutral-950/90"
            />

            {/* MODAL CONTENT */}
            <motion.div
              layoutId={`modal-${selectedProject.title}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto custom-scrollbar bg-neutral-900 border border-neutral-700 rounded-2xl shadow-2xl flex flex-col will-change-transform"
            >
              {/* CLOSE BUTTON */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-neutral-400 hover:text-white rounded-full transition-colors border border-neutral-700/50"
              >
                <FaTimes size={20} />
              </button>

              {/* IMAGE */}
              <div className="w-full h-64 sm:h-80 relative flex-shrink-0 bg-neutral-800">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent" />
              </div>

              {/* DETAIL */}
              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-bold text-neutral-300 uppercase tracking-widest border border-neutral-700 bg-neutral-800 px-3 py-1 rounded-full">
                      {selectedProject.category}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-2">
                    {selectedProject.title}
                  </h2>
                </div>

                <div className="prose prose-invert max-w-none">
                  <p className="text-neutral-300 text-base leading-relaxed whitespace-pre-line text-justify">
                    {selectedProject.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-sm font-medium text-neutral-300 bg-neutral-800 border border-neutral-700 px-3 py-1.5 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {selectedProject.github && (
                  <div className="pt-6 border-t border-neutral-800 flex gap-4">
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-neutral-200 text-neutral-900 rounded-full font-bold hover:bg-white hover:scale-105 transition-all"
                    >
                      <FaGithub size={20} /> View Source Code
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
