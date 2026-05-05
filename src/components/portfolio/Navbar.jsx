import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#available", label: "Hire Me" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0f1e]/90 backdrop-blur-md border-b border-[#1e2d45]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.a
          href="#hero"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl font-bold"
        >
          <span className="text-gradient">Nikhil</span>
          <span className="text-white">.</span>
        </motion.a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 + 0.2, duration: 0.4 }}
              className={
                link.href === "#available"
                  ? "text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-lg transition-all duration-200"
                  : "text-sm font-medium text-slate-400 hover:text-white transition-colors duration-200"
              }
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-slate-300 hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#0d1524]/98 backdrop-blur-md border-t border-[#1e2d45] overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className={
                    link.href === "#available"
                      ? "mt-2 text-center font-semibold bg-blue-600 text-white px-4 py-2.5 rounded-lg text-sm"
                      : "text-slate-300 hover:text-white py-2.5 text-sm font-medium border-b border-[#1e2d45] last:border-0 transition-colors"
                  }
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
