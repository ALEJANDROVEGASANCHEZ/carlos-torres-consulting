"use client";

import { motion } from "framer-motion";

import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Miguel Torres",
    role: "CEO · Tech Solutions",
    content:
      "La automatización implementada optimizó completamente nuestros procesos internos y mejoró la productividad del equipo.",
  },
  {
    name: "Andrea Rojas",
    role: "Founder · Digital Agency",
    content:
      "La experiencia fue extremadamente profesional. Logramos integrar IA en nuestras operaciones de forma rápida y eficiente.",
  },
  {
    name: "Carlos Medina",
    role: "Director · Startup SaaS",
    content:
      "El nivel visual, técnico y estratégico del trabajo superó completamente nuestras expectativas.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden py-16 lg:py-24"
    >
      {/* Glow */}
      <div className="absolute left-1/2 top-20 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-yellow-400/10 blur-3xl" />

      <div className="container-premium relative z-10">
        {/* Header */}
        <div className="mx-auto mb-10 max-w-4xl text-center lg:mb-14">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            viewport={{ once: true }}
            className="mb-4 inline-block rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-xs font-medium text-yellow-700 sm:text-sm"
          >
            Resultados Reales
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
            className="text-4xl font-black leading-[1] tracking-[-0.05em] text-slate-900 sm:text-5xl md:text-6xl"
          >
            Empresas que ya están escalando con Inteligencia Artificial
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg"
          >
            Ayudamos a empresas modernas a automatizar procesos, optimizar
            operaciones y construir sistemas digitales escalables.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid gap-5 lg:grid-cols-3 lg:gap-6">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              className="group rounded-[28px] border border-white/40 bg-white/75 p-7 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:p-8"
            >
              {/* Quote */}
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400/10 text-yellow-600">
                <Quote className="h-6 w-6" />
              </div>

              {/* Text */}
              <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
                {item.content}
              </p>

              {/* User */}
              <div className="mt-8 border-t border-black/5 pt-6">
                <h4 className="text-lg font-bold tracking-tight text-slate-900">
                  {item.name}
                </h4>

                <p className="mt-1 text-sm text-slate-500">
                  {item.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="relative mt-14 overflow-hidden rounded-[32px] border border-white/10 bg-slate-950 px-6 py-14 shadow-2xl sm:px-10 sm:py-16 lg:mt-16 lg:rounded-[40px] lg:px-16 lg:py-20"
        >
          {/* Glow */}
          <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-yellow-400/20 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-4xl text-center">
            {/* Badge */}
            <span className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-yellow-300 sm:text-sm">
              Transformación Digital Inteligente
            </span>

            {/* Title */}
            <h3 className="mt-7 text-4xl font-black leading-[1] tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
              Lleva tu empresa al siguiente nivel con IA y automatización
            </h3>

            {/* Text */}
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Creamos soluciones modernas, escalables y estratégicas para
              empresas que buscan crecimiento digital real.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a
                href="#contact"
                className="flex items-center justify-center rounded-full bg-yellow-400 px-8 py-4 text-sm font-semibold text-slate-950 transition-all duration-300 hover:scale-[1.02]"
              >
                Agendar Consultoría
              </a>

              <a
                href="#services"
                className="flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-medium text-white transition-all duration-300 hover:bg-white/10"
              >
                Explorar Servicios
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}