import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { personalInfo } from "../../data/portfolioData";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#available", label: "Hire Me" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#1e2d45] bg-[#0a0f1e]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
          {/* Brand */}
          <div>
            <a href="#hero" className="text-2xl font-bold">
              <span className="text-gradient">Nikhil</span>
              <span className="text-white">.</span>
            </a>
            <p className="text-slate-500 text-sm mt-1.5">
              Full Stack Developer · Available for Remote Work
            </p>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-xl bg-[#131929] border border-[#1e2d45] hover:border-slate-500 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-xl bg-[#131929] border border-[#1e2d45] hover:border-blue-500/50 flex items-center justify-center text-slate-400 hover:text-blue-400 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="w-10 h-10 rounded-xl bg-[#131929] border border-[#1e2d45] hover:border-cyan-500/50 flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-all duration-200"
              aria-label="Email"
            >
              <HiMail size={18} />
            </a>
          </div>
        </div>

        {/* Nav links */}
        <div className="flex flex-wrap gap-x-8 gap-y-3 justify-center mb-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-500 hover:text-slate-300 text-sm transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-[#1e2d45] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} Nikhil Arora · All rights reserved
          </p>
          <p className="text-slate-600 text-sm">
            Built with React &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
