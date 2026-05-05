import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiArrowRight, HiMail } from "react-icons/hi";
import { typewriterSequence, personalInfo } from "../../data/portfolioData";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-[#0a0f1e]">
        <div
          className="absolute top-1/4 left-1/5 w-[500px] h-[500px] rounded-full opacity-25"
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.4) 0%, transparent 70%)",
            animation: "pulse 4s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/5 w-[400px] h-[400px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(6,182,212,0.4) 0%, transparent 70%)",
            animation: "pulse 4s ease-in-out infinite 2s",
          }}
        />
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(148,163,184,0.07) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 flex flex-col lg:flex-row items-center gap-16">
        {/* Text side */}
        <div className="flex-1 text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-blue-400 text-sm font-mono font-medium mb-4 tracking-widest uppercase"
          >
            👋 Hey there, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-white leading-tight"
          >
            Nikhil
            <br />
            <span className="text-gradient">Arora</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-xl md:text-2xl font-semibold text-slate-300 mb-6 min-h-[2rem]"
          >
            <TypeAnimation
              sequence={typewriterSequence}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-cyan-400"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-slate-400 text-lg leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0"
          >
            I build fast, scalable apps — from payment systems to automated
            data pipelines.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
          >
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-3.5 rounded-xl font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5"
            >
              <HiMail size={18} />
              Hire Me
            </a>
            <a
              href="#projects"
              className="flex items-center justify-center gap-2 bg-[#131929] hover:bg-[#1a2235] text-slate-200 border border-[#1e2d45] hover:border-blue-500/50 px-8 py-3.5 rounded-xl font-semibold transition-all duration-200 hover:-translate-y-0.5"
            >
              View My Work
              <HiArrowRight size={18} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex items-center gap-6 justify-center lg:justify-start"
          >
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 hover:text-white transition-colors duration-200"
              aria-label="GitHub"
            >
              <FaGithub size={22} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 hover:text-blue-400 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-slate-500 hover:text-cyan-400 transition-colors duration-200"
              aria-label="Email"
            >
              <HiMail size={22} />
            </a>
            <div className="h-4 w-px bg-[#1e2d45]" />
            <span className="text-slate-500 text-sm font-mono">
              aroranikhil.in
            </span>
          </motion.div>
        </div>

        {/* Profile photo side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative flex-shrink-0"
        >
          <div className="relative w-60 h-60 md:w-72 md:h-72 lg:w-80 lg:h-80">
            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 blur-2xl opacity-35" />
            {/* Gradient ring */}
            <div className="absolute inset-0 rounded-full p-[3px] bg-gradient-to-r from-blue-500 to-cyan-500">
              <div className="w-full h-full rounded-full bg-[#0e1527] flex items-center justify-center overflow-hidden">
                <img
                  src="/profile.jpg"
                  alt="Nikhil Arora"
                  className="w-full h-full object-cover rounded-full"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                <div
                  style={{ display: "none" }}
                  className="w-full h-full items-center justify-center bg-gradient-to-br from-blue-900 to-slate-900 rounded-full"
                >
                  <span className="text-6xl font-bold text-white/70 font-mono">
                    NA
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Available badge */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#0e1527] border border-[#1e2d45] rounded-2xl px-4 py-2.5 flex items-center gap-2.5 shadow-xl">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
            </span>
            <span className="text-sm font-medium text-green-400">
              Available for Work
            </span>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-slate-600 text-xs tracking-widest uppercase">
          scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-slate-600 to-transparent" />
      </motion.div>
    </section>
  );
}
