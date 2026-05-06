import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiX, HiTag } from "react-icons/hi";
import { projects } from "../../data/portfolioData";

const filters = [
  { label: "All", value: "all" },
  { label: "Payments", value: "payments" },
  { label: "Automation", value: "automation" },
  { label: "Mobile", value: "mobile" },
  { label: "Professional", value: "professional" },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.categories.includes(activeFilter));

  return (
    <section id="projects" className="py-28 px-6 border-t border-[#1e2d45]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-blue-400 text-xs font-mono uppercase tracking-widest mb-3">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Projects
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Production applications built across payments, automation, and
            real-time systems
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-2 justify-center mb-12"
        >
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeFilter === f.value
                  ? "bg-blue-600 text-white"
                  : "bg-[#131929] border border-[#1e2d45] text-slate-400 hover:text-white hover:border-blue-500/40"
              }`}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                className="group bg-[#131929] border border-[#1e2d45] rounded-2xl p-6 cursor-pointer hover:border-blue-500/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col"
                onClick={() => setSelectedProject(project)}
              >
                {/* Top accent bar */}
                <div
                  className="w-full h-1 rounded-full mb-5 opacity-70"
                  style={{
                    background: `linear-gradient(90deg, ${project.color}, transparent)`,
                  }}
                />

                <div className="flex-1">
                  <h3 className="text-white font-bold text-lg mb-1 group-hover:text-gradient transition-all">
                    {project.name}
                  </h3>
                  <p className="text-slate-400 text-sm mb-4">
                    {project.subtitle}
                  </p>
                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mb-5">
                    {project.description}
                  </p>
                </div>

                {/* Highlight badge */}
                <div
                  className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg mb-4"
                  style={{
                    background: `${project.color}15`,
                    color: project.color,
                    border: `1px solid ${project.color}30`,
                  }}
                >
                  <span>⚡</span>
                  {project.highlight}
                </div>

                {/* Stack tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono text-slate-400 bg-[#0a0f1e] border border-[#1e2d45] px-2.5 py-1 rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 4 && (
                    <span className="text-xs font-mono text-slate-500 bg-[#0a0f1e] border border-[#1e2d45] px-2.5 py-1 rounded-lg">
                      +{project.stack.length - 4}
                    </span>
                  )}
                </div>

                {/* View details hint */}
                <div className="mt-4 pt-4 border-t border-[#1e2d45] flex items-center justify-between">
                  <span className="text-xs text-slate-500">
                    Click to view details
                  </span>
                  <HiTag className="text-slate-600 group-hover:text-blue-400 transition-colors" size={14} />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-slate-500">
            No projects in this category yet.
          </div>
        )}
      </div>

      {/* Project modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative w-full max-w-xl bg-[#131929] border border-[#1e2d45] rounded-2xl p-8 max-h-[85vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 text-slate-400 hover:text-white transition-colors p-1"
              >
                <HiX size={22} />
              </button>

              {/* Accent bar */}
              <div
                className="w-full h-1 rounded-full mb-6"
                style={{
                  background: `linear-gradient(90deg, ${selectedProject.color}, transparent)`,
                }}
              />

              <h3 className="text-white text-2xl font-bold mb-1">
                {selectedProject.name}
              </h3>
              <p className="text-slate-400 text-sm mb-6">
                {selectedProject.subtitle}
              </p>

              <p className="text-slate-300 leading-relaxed mb-6">
                {selectedProject.description}
              </p>

              {/* Highlight */}
              <div
                className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-xl mb-6"
                style={{
                  background: `${selectedProject.color}15`,
                  color: selectedProject.color,
                  border: `1px solid ${selectedProject.color}30`,
                }}
              >
                ⚡ {selectedProject.highlight}
              </div>

              {/* Full stack */}
              <div>
                <p className="text-slate-500 text-xs font-mono uppercase tracking-wider mb-3">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-sm font-mono text-slate-300 bg-[#0a0f1e] border border-[#1e2d45] px-3 py-1.5 rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
