import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaCog,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiStripe,
  SiSocketdotio,
  SiPostman,
} from "react-icons/si";
import { skillGroups } from "../../data/portfolioData";

const categoryIcons = {
  Frontend: <FaReact className="text-cyan-400" size={20} />,
  Backend: <FaNodeJs className="text-green-400" size={20} />,
  Databases: <SiMongodb className="text-green-500" size={20} />,
  "Payments & APIs": <SiStripe className="text-violet-400" size={20} />,
  Automation: <FaCog className="text-orange-400" size={20} />,
  "Cloud & DevOps": <FaAws className="text-yellow-400" size={20} />,
};

const skillIconMap = {
  "React.js": <FaReact className="text-cyan-400" size={14} />,
  "Next.js": <SiNextdotjs className="text-white" size={14} />,
  "React Native": <FaReact className="text-blue-400" size={14} />,
  Redux: <SiRedux className="text-purple-400" size={14} />,
  "Redux Toolkit": <SiRedux className="text-purple-400" size={14} />,
  "Tailwind CSS": <SiTailwindcss className="text-cyan-400" size={14} />,
  HTML5: <FaHtml5 className="text-orange-400" size={14} />,
  CSS3: <FaCss3Alt className="text-blue-400" size={14} />,
  "Node.js": <FaNodeJs className="text-green-400" size={14} />,
  "Express.js": <SiExpress className="text-slate-400" size={14} />,
  "REST APIs": <span className="text-slate-400 text-xs font-mono">API</span>,
  "Socket.io": <SiSocketdotio className="text-white" size={14} />,
  MongoDB: <SiMongodb className="text-green-500" size={14} />,
  PostgreSQL: <SiPostgresql className="text-blue-400" size={14} />,
  SQL: <span className="text-blue-300 text-xs font-mono">SQL</span>,
  Firebase: <SiFirebase className="text-yellow-400" size={14} />,
  "Stripe Connect OAuth": <SiStripe className="text-violet-400" size={14} />,
  "Stripe Terminal (S700)": <SiStripe className="text-violet-400" size={14} />,
  "Stripe Webhooks": <SiStripe className="text-violet-400" size={14} />,
  "Stripe SDK": <SiStripe className="text-violet-400" size={14} />,
  n8n: <FaCog className="text-orange-400" size={14} />,
  Playwright: <FaCog className="text-green-400" size={14} />,
  "Web Scraping": <FaCog className="text-orange-400" size={14} />,
  "Cron Jobs": <FaCog className="text-slate-400" size={14} />,
  "AWS EC2": <FaAws className="text-yellow-400" size={14} />,
  "AWS S3": <FaAws className="text-yellow-400" size={14} />,
  Git: <FaGitAlt className="text-orange-500" size={14} />,
  GitHub: <FaGitAlt className="text-white" size={14} />,
  Postman: <SiPostman className="text-orange-500" size={14} />,
  Jira: <span className="text-blue-400 text-xs font-mono">J</span>,
};

const categoryColors = {
  Frontend: "from-cyan-500/10 to-blue-500/10 border-cyan-500/20",
  Backend: "from-green-500/10 to-emerald-500/10 border-green-500/20",
  Databases: "from-green-500/10 to-teal-500/10 border-green-500/20",
  "Payments & APIs": "from-violet-500/10 to-purple-500/10 border-violet-500/20",
  Automation: "from-orange-500/10 to-amber-500/10 border-orange-500/20",
  "Cloud & DevOps": "from-yellow-500/10 to-amber-500/10 border-yellow-500/20",
};

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 border-t border-[#1e2d45]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 text-xs font-mono uppercase tracking-widest mb-3">
            Tech Stack
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills &amp; Technologies
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Tools and technologies I've used to ship production applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: gi * 0.08 }}
              className={`bg-gradient-to-br ${categoryColors[group.category]} border rounded-2xl p-6 card-glow transition-all duration-300`}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-lg bg-[#0a0f1e]/60 flex items-center justify-center">
                  {categoryIcons[group.category]}
                </div>
                <h3 className="text-white font-semibold text-sm">
                  {group.category}
                </h3>
              </div>

              {/* Skill tags */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1.5 bg-[#0a0f1e]/60 border border-[#1e2d45] text-slate-300 text-xs font-mono px-3 py-1.5 rounded-lg hover:border-blue-500/40 hover:text-white transition-all duration-200"
                  >
                    {skillIconMap[skill] && (
                      <span className="flex-shrink-0">
                        {skillIconMap[skill]}
                      </span>
                    )}
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
