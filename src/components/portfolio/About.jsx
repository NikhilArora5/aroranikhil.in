import React from "react";
import { motion } from "framer-motion";
import { stats } from "../../data/portfolioData";
let profilePhoto = null;
try { profilePhoto = require("../../assets/images/nikhil.jpg"); } catch (e) {}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

export default function About() {
  return (
    <section id="about" className="py-28 px-6 border-t border-[#1e2d45]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 text-xs font-mono uppercase tracking-widest mb-3">
            About Me
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Who I Am
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio card */}
          <motion.div
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <div className="bg-[#131929] border border-[#1e2d45] rounded-2xl p-8 h-full card-glow transition-all duration-300">
              {/* Profile photo */}
              {profilePhoto && (
                <div className="flex items-center gap-5 mb-7">
                  <div className="relative flex-shrink-0">
                    <div className="w-20 h-20 rounded-full p-0.5" style={{ background: "linear-gradient(135deg, #3b82f6, #06b6d4)" }}>
                      <img
                        src={profilePhoto}
                        alt="Nikhil Arora"
                        className="w-full h-full rounded-full object-cover object-top"
                      />
                    </div>
                    <span className="absolute bottom-0.5 right-0.5 w-4 h-4 bg-green-400 rounded-full border-2 border-[#131929]" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg leading-tight">Nikhil Arora</p>
                    <p className="text-slate-400 text-sm">Full Stack Developer</p>
                  </div>
                </div>
              )}

              {/* Available badge */}
              <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-400 border border-green-500/30 rounded-full px-4 py-1.5 text-sm font-medium mb-7">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                </span>
                Available for remote opportunities &amp; freelance projects
              </div>

              <p className="text-slate-300 text-lg leading-relaxed mb-5">
                I'm a Full Stack Developer based in Chandigarh, India with{" "}
                <span className="text-white font-semibold">
                  3+ years of experience
                </span>{" "}
                building production-grade web and mobile applications. My core
                strengths are the MERN stack, React Native, Stripe payment
                systems, and end-to-end workflow automation with n8n and
                Playwright.
              </p>
              <p className="text-slate-400 leading-relaxed mb-8">
                I've shipped real products at two companies — handling payment
                flows, automating data pipelines, and building real-time
                systems. I care about clean code, fast delivery, and solutions
                that actually work in production at scale.
              </p>

              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">🎓</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">
                      Bachelor of Engineering
                    </p>
                    <p className="text-slate-400 text-xs">
                      Panjab University, Chandigarh
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">📍</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">
                      Chandigarh, India 🇮🇳
                    </p>
                    <p className="text-slate-400 text-xs">
                      Remote worldwide 🌍
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            variants={fadeUp}
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col gap-4"
          >
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  variants={fadeUp}
                  custom={2 + i * 0.5}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="bg-[#131929] border border-[#1e2d45] rounded-2xl p-6 text-center hover:border-blue-500/40 card-glow transition-all duration-300 group"
                >
                  <div className="text-4xl font-bold text-gradient mb-2">
                    {stat.value}
                  </div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Key achievement callouts */}
            <div className="bg-[#131929] border border-[#1e2d45] rounded-2xl p-6 space-y-4">
              {[
                {
                  icon: "⚡",
                  color: "yellow",
                  text: "Reduced server load ~70% via cron optimization",
                },
                {
                  icon: "🤖",
                  color: "cyan",
                  text: "Built Playwright + n8n pipeline eliminating 100% manual work",
                },
                {
                  icon: "💳",
                  color: "blue",
                  text: "Stripe Terminal S700 — one of few Node.js hardware implementations",
                },
                {
                  icon: "🚀",
                  color: "green",
                  text: "4+ production apps shipped in under 12 months",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-xl mt-0.5 flex-shrink-0">
                    {item.icon}
                  </span>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
