import React from "react";
import { motion } from "framer-motion";
import { HiLocationMarker, HiBadgeCheck } from "react-icons/hi";
import { experience } from "../../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 border-t border-[#1e2d45]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 text-xs font-mono uppercase tracking-widest mb-3">
            Work History
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Experience
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-[#1e2d45] to-transparent" />

          <div className="space-y-12">
            {experience.map((job, i) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative pl-16 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-3.5 md:left-5 top-6 flex items-center justify-center">
                  <div
                    className={`w-5 h-5 rounded-full border-2 ${
                      job.current
                        ? "border-blue-400 bg-blue-400/20"
                        : "border-slate-600 bg-[#0a0f1e]"
                    } z-10`}
                  >
                    {job.current && (
                      <span className="absolute inset-0 rounded-full bg-blue-400/30 animate-ping" />
                    )}
                  </div>
                </div>

                {/* Card */}
                <div className="bg-[#131929] border border-[#1e2d45] rounded-2xl p-7 hover:border-blue-500/30 card-glow transition-all duration-300">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-white text-xl font-bold">
                          {job.role}
                        </h3>
                        {job.current && (
                          <span className="text-xs font-semibold bg-blue-500/15 text-blue-400 border border-blue-500/30 px-2.5 py-1 rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-blue-400 font-semibold text-base">
                        {job.company}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-1.5">
                      <span className="flex items-center gap-1.5 text-slate-500 text-xs">
                        <HiLocationMarker size={12} />
                        {job.location}
                      </span>
                    </div>
                  </div>

                  {/* Achievements */}
                  <ul className="space-y-3">
                    {job.achievements.map((item, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <HiBadgeCheck
                          className="text-blue-400 flex-shrink-0 mt-0.5"
                          size={16}
                        />
                        <span className="text-slate-300 text-sm leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
