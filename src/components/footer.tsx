"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-black/5 bg-[#f5f3ee] py-14 lg:py-16">
      {/* Glow */}
      <div className="absolute left-1/2 top-0 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-yellow-400/10 blur-3xl" />

      <div className="container-premium relative z-10">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* BRAND */}
          <div className="lg:col-span-2">
            <motion.h3
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              viewport={{ once: true }}
              className="text-3xl font-black tracking-tight text-slate-900"
            >
              Carlos Torres
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              viewport={{ once: true }}
              className="mt-5 max-w-md text-base leading-relaxed text-slate-600"
            >
              Consultoría especializada en automatización, inteligencia
              artificial y soluciones digitales modernas para empresas que
              buscan crecer.
            </motion.p>
          </div>

          {/* LINKS */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-900">
              Navegación
            </h4>

            <ul className="mt-5 space-y-4">
              <li>
                <a
                  href="#services"
                  className="text-slate-600 transition-colors duration-300 hover:text-slate-950"
                >
                  Servicios
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="text-slate-600 transition-colors duration-300 hover:text-slate-950"
                >
                  Nosotros
                </a>
              </li>

              <li>
                <a
                  href="#testimonials"
                  className="text-slate-600 transition-colors duration-300 hover:text-slate-950"
                >
                  Resultados
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="text-slate-600 transition-colors duration-300 hover:text-slate-950"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-900">
              Contacto
            </h4>

            <div className="mt-5 space-y-4">
              <p className="text-slate-600">
                contacto@consultoriaia.com
              </p>

              <p className="text-slate-600">
                Lima, Perú
              </p>

              <div className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs font-medium text-emerald-700">
                Disponible para proyectos
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col gap-4 border-t border-black/5 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 Carlos Torres. Todos los derechos reservados.
          </p>

          <p>
            Diseñado con enfoque premium y automatización inteligente.
          </p>
        </div>
      </div>
    </footer>
  );
}