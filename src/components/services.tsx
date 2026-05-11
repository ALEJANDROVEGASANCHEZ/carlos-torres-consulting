"use client";

import { motion } from "framer-motion";

import {
  Bot,
  Sparkles,
  LayoutDashboard,
  BrainCircuit,
} from "lucide-react";

const services = [
  {
    icon: BrainCircuit,
    title: "Automatización con IA",
    description:
      "Optimización de procesos empresariales mediante inteligencia artificial y automatizaciones modernas.",
  },
  {
    icon: Bot,
    title: "Chatbots Inteligentes",
    description:
      "Implementación de asistentes virtuales para atención al cliente, ventas y soporte automatizado.",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboards y Sistemas",
    description:
      "Desarrollo de plataformas internas, paneles administrativos y herramientas digitales empresariales.",
  },
  {
    icon: Sparkles,
    title: "Consultoría Estratégica",
    description:
      "Análisis y planificación de soluciones IA adaptadas al modelo de negocio de cada empresa.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden py-16 lg:py-24"
    >
      {/* Glow */}
      <div className="absolute left-1/2 top-20 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-yellow-400/10 blur-3xl" />

      <div className="container-premium relative z-10">
        {/* Header */}
        <div className="mb-10 max-w-5xl lg:mb-14">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.32em] text-yellow-600 sm:text-sm sm:tracking-[0.35em]">
            Servicios
          </span>

          <h2 className="max-w-5xl text-4xl font-black leading-[0.95] tracking-[-0.06em] text-black sm:text-5xl md:text-6xl lg:text-7xl">
            Soluciones modernas para empresas que quieren crecer.
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-5 md:grid-cols-2 lg:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="group glass-premium shadow-premium rounded-[28px] p-7 transition-all duration-500 hover:shadow-2xl sm:p-9 lg:rounded-[32px] lg:p-10"
              >
                {/* Icon */}
                <div className="animate-float-slow mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400 text-black shadow-lg sm:h-16 sm:w-16">
                  <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>

                {/* Title */}
                <h3 className="text-3xl font-black leading-tight tracking-tight text-black sm:text-4xl">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-600 sm:text-lg">
                  {service.description}
                </p>

                {/* Link */}
                <div className="mt-8 inline-flex items-center text-sm font-semibold text-black">
                  Más información

                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}