"use client";

import { useEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import { Menu, X } from "lucide-react";

const links = [
  {
    label: "Servicios",
    href: "#services",
  },
  {
    label: "Nosotros",
    href: "#about",
  },
  {
    label: "Recursos",
    href: "#testimonials",
  },
  {
    label: "Contacto",
    href: "#contact",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setIsOpen(false);
  };

  return (
    <>
      {/* NAVBAR */}
      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "border-b border-black/5 bg-[#f5f3ee]/80 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="container-premium">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <button
              onClick={scrollToTop}
              className="cursor-pointer text-xl font-black tracking-tight text-slate-900 transition-opacity duration-300 hover:opacity-80"
            >
              Carlos Torres
            </button>

            {/* Desktop Nav */}
            <nav className="hidden items-center gap-10 lg:flex">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="cursor-pointer text-sm font-medium text-slate-600 transition-colors duration-300 hover:text-slate-950"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <a
                href="#contact"
                className="cursor-pointer rounded-full bg-slate-950 px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02]"
              >
                Agendar Consultoría
              </a>
            </div>

            {/* Mobile Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-black/10 bg-white/70 text-slate-900 backdrop-blur-xl transition-all duration-300 hover:bg-white lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                damping: 30,
                stiffness: 260,
              }}
              className="fixed right-0 top-0 z-[70] flex h-full w-[88%] max-w-[420px] flex-col bg-[#f5f3ee] shadow-2xl"
            >
              {/* Top */}
              <div className="flex items-center justify-between border-b border-black/5 px-6 py-6">
                <div>
                  <button
                    onClick={scrollToTop}
                    className="cursor-pointer text-left"
                  >
                    <div className="text-lg font-black tracking-tight text-slate-900">
                      Carlos Torres
                    </div>

                    <div className="mt-1 text-xs uppercase tracking-[0.25em] text-slate-500">
                      IA CONSULTING
                    </div>
                  </button>
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-black/10 bg-white text-slate-900"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Links */}
              <div className="flex flex-1 flex-col px-6 py-10">
                <nav className="space-y-2">
                  {links.map((link, index) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: index * 0.08,
                      }}
                      className="flex cursor-pointer items-center justify-between rounded-2xl border border-transparent bg-white/70 px-5 py-5 text-lg font-semibold text-slate-900 transition-all duration-300 hover:border-black/5 hover:bg-white"
                    >
                      {link.label}

                      <span className="text-slate-400">→</span>
                    </motion.a>
                  ))}
                </nav>

                {/* CTA */}
                <div className="mt-auto pt-10">
                  <a
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    className="flex cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-5 text-sm font-semibold text-white transition-all duration-300"
                  >
                    Agendar Consultoría
                  </a>

                  <p className="mt-5 text-center text-sm leading-relaxed text-slate-500">
                    Automatización, inteligencia artificial y soluciones
                    digitales para empresas modernas.
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}