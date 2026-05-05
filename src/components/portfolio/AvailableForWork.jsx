import React from "react";
import { motion } from "framer-motion";
import {
  HiCode,
  HiDeviceMobile,
  HiCurrencyDollar,
  HiCog,
  HiServer,
  HiDatabase,
  HiArrowRight,
} from "react-icons/hi";
import { freelanceServices, processSteps } from "../../data/portfolioData";

const serviceIcons = {
  code: HiCode,
  mobile: HiDeviceMobile,
  payment: HiCurrencyDollar,
  automation: HiCog,
  api: HiServer,
  scraping: HiDatabase,
};

const serviceColors = [
  "from-blue-500/10 to-blue-600/5 border-blue-500/20",
  "from-violet-500/10 to-violet-600/5 border-violet-500/20",
  "from-green-500/10 to-green-600/5 border-green-500/20",
  "from-orange-500/10 to-orange-600/5 border-orange-500/20",
  "from-cyan-500/10 to-cyan-600/5 border-cyan-500/20",
  "from-pink-500/10 to-pink-600/5 border-pink-500/20",
];

const iconColors = [
  "text-blue-400",
  "text-violet-400",
  "text-green-400",
  "text-orange-400",
  "text-cyan-400",
  "text-pink-400",
];

export default function AvailableForWork() {
  return (
    <section
      id="available"
      className="py-28 px-6 border-t border-[#1e2d45] relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-green-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Status badge */}
          <div className="inline-flex items-center gap-3 bg-green-500/10 border border-green-500/30 text-green-400 rounded-full px-6 py-2.5 mb-8">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400" />
            </span>
            <span className="font-semibold">Currently Available</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Open to Remote Jobs &amp;
            <br />
            <span className="text-gradient-green">Freelance Projects</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            I'm actively looking for remote full-time roles and freelance
            projects. Based in India, available worldwide across all timezones.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {freelanceServices.map((service, i) => {
            const Icon = serviceIcons[service.icon];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`bg-gradient-to-br ${serviceColors[i]} border rounded-2xl p-6 card-glow transition-all duration-300 hover:-translate-y-1`}
              >
                <div
                  className={`w-11 h-11 rounded-xl bg-[#0a0f1e]/60 flex items-center justify-center mb-4`}
                >
                  <Icon className={iconColors[i]} size={22} />
                </div>
                <h3 className="text-white font-semibold mb-2">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* How we work together */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="bg-[#131929] border border-[#1e2d45] rounded-2xl p-8 mb-10"
        >
          <h3 className="text-white font-bold text-xl text-center mb-8">
            How We Work Together
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <div key={step.step} className="flex flex-col items-center text-center relative">
                {i < processSteps.length - 1 && (
                  <HiArrowRight className="hidden md:block absolute -right-3 top-3 text-slate-600 z-10" size={16} />
                )}
                <div className="w-12 h-12 rounded-full bg-blue-600/15 border border-blue-500/30 flex items-center justify-center mb-3">
                  <span className="text-blue-400 font-bold font-mono text-sm">
                    {step.step}
                  </span>
                </div>
                <p className="text-white font-semibold mb-1">{step.label}</p>
                <p className="text-slate-400 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5"
          >
            Let's Talk
            <HiArrowRight size={20} />
          </a>
          <p className="text-slate-500 text-sm mt-4">
            Response within 24 hours · Chandigarh, India 🇮🇳 · Remote Worldwide 🌍
          </p>
        </motion.div>
      </div>
    </section>
  );
}
