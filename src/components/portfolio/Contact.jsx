import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiCheckCircle,
  HiExclamationCircle,
  HiPaperAirplane,
} from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { personalInfo } from "../../data/portfolioData";

const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      });
      setStatus("success");
      formRef.current.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-28 px-6 border-t border-[#1e2d45]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 text-xs font-mono uppercase tracking-widest mb-3">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact Me
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Have a project in mind or want to discuss a role? I'd love to hear
            from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="bg-[#131929] border border-[#1e2d45] rounded-2xl p-7">
              <h3 className="text-white font-bold text-xl mb-6">
                Let's work together
              </h3>

              <div className="space-y-5">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors">
                    <HiMail className="text-blue-400" size={20} />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs">Email</p>
                    <p className="text-slate-200 text-sm font-medium group-hover:text-white transition-colors">
                      {personalInfo.email}
                    </p>
                  </div>
                </a>

                <a
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/20 transition-colors">
                    <HiPhone className="text-green-400" size={20} />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs">Phone / WhatsApp</p>
                    <p className="text-slate-200 text-sm font-medium group-hover:text-white transition-colors">
                      {personalInfo.phone}
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <HiLocationMarker className="text-cyan-400" size={20} />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs">Location</p>
                    <p className="text-slate-200 text-sm font-medium">
                      Chandigarh, India 🇮🇳 · Remote Worldwide 🌍
                    </p>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="mt-8 pt-6 border-t border-[#1e2d45]">
                <p className="text-slate-500 text-xs mb-4">Find me on</p>
                <div className="flex gap-3">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-[#0a0f1e] border border-[#1e2d45] hover:border-slate-500 text-slate-400 hover:text-white px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200"
                  >
                    <FaGithub size={16} />
                    GitHub
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-[#0a0f1e] border border-[#1e2d45] hover:border-blue-500/50 text-slate-400 hover:text-blue-400 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200"
                  >
                    <FaLinkedin size={16} />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* Availability note */}
            <div className="bg-green-500/5 border border-green-500/20 rounded-2xl p-5 flex items-start gap-3">
              <span className="relative flex h-3 w-3 mt-1 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400" />
              </span>
              <div>
                <p className="text-green-400 font-semibold text-sm mb-1">
                  Currently Available
                </p>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Open to remote full-time roles and freelance projects. Typical
                  response time: within 24 hours.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-[#131929] border border-[#1e2d45] rounded-2xl p-7">
              <h3 className="text-white font-bold text-xl mb-6">
                Send a message
              </h3>

              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-3 bg-green-500/10 border border-green-500/30 text-green-400 rounded-xl px-4 py-3 mb-6 text-sm"
                >
                  <HiCheckCircle size={18} />
                  Message sent! I'll get back to you soon.
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-3 bg-red-500/10 border border-red-500/30 text-red-400 rounded-xl px-4 py-3 mb-6 text-sm"
                >
                  <HiExclamationCircle size={18} />
                  Something went wrong. Email me directly at{" "}
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="underline"
                  >
                    {personalInfo.email}
                  </a>
                </motion.div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-slate-400 text-xs font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="from_name"
                      required
                      placeholder="John Doe"
                      className="w-full bg-[#0a0f1e] border border-[#1e2d45] focus:border-blue-500/60 text-slate-200 placeholder:text-slate-600 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 text-xs font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="reply_to"
                      required
                      placeholder="john@company.com"
                      className="w-full bg-[#0a0f1e] border border-[#1e2d45] focus:border-blue-500/60 text-slate-200 placeholder:text-slate-600 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-400 text-xs font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Project inquiry / Job opportunity / Freelance work"
                    className="w-full bg-[#0a0f1e] border border-[#1e2d45] focus:border-blue-500/60 text-slate-200 placeholder:text-slate-600 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 text-xs font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full bg-[#0a0f1e] border border-[#1e2d45] focus:border-blue-500/60 text-slate-200 placeholder:text-slate-600 rounded-xl px-4 py-3 text-sm outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25"
                >
                  {status === "loading" ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <HiPaperAirplane size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
