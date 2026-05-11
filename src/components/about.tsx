"use client";

import { motion } from "framer-motion";

import {
  BrainCircuit,
  BarChart3,
  Workflow,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: BrainCircuit,
    title: "Automatización Inteligente",
    description:
      "Implementamos sistemas impulsados por IA para optimizar procesos empresariales y aumentar productividad.",
  },
  {
    icon: Workflow,
    title: "Integraciones Escalables",
    description:
      "Diseñamos arquitecturas modernas conectando herramientas, APIs y flujos automatizados.",
  },
  {
    icon: BarChart3,
    title: "Decisiones Basadas en Datos",
    description:
      "Transformamos datos en estrategias accionables mediante dashboards y análisis inteligentes.",
  },
  {
    icon: ShieldCheck,
    title: "Soluciones Empresariales",
    description:
      "Creamos plataformas robustas, seguras y preparadas para crecimiento empresarial.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-16 lg:py-24"
    >
      {/* Glow */}
      <div className="absolute left-1/2 top-24 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-yellow-400/10 blur-3xl" />

      <div className="container-premium relative z-10">
        {/* Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center lg:mb-14">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            viewport={{ once: true }}
            className="mb-4 inline-block rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-xs font-medium text-yellow-700 sm:text-sm"
          >
            Consultoría IA Premium
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
            className="text-4xl font-black leading-[1] tracking-[-0.05em] text-slate-900 sm:text-5xl md:text-6xl"
          >
            Soluciones modernas para empresas que quieren escalar con IA
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg"
          >
            Diseñamos experiencias digitales, automatizaciones y sistemas
            inteligentes que optimizan operaciones, reducen costos y potencian
            el crecimiento empresarial.
          </motion.p>
        </div>

        {/* Metrics */}
        <div className="mb-10 grid gap-5 md:grid-cols-3 lg:mb-14 lg:gap-6">
          {[
            { number: "+120", label: "Procesos Automatizados" },
            { number: "+40", label: "Clientes Digitales" },
            { number: "24/7", label: "Optimización Inteligente" },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              className="rounded-[28px] border border-white/40 bg-white/75 p-7 shadow-sm backdrop-blur-xl sm:p-8"
            >
              <div className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
                {item.number}
              </div>

              <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:text-sm">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Features */}
        <div className="grid gap-5 md:grid-cols-2 lg:gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                className="group rounded-[28px] border border-white/40 bg-white/75 p-7 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:p-9"
              >
                {/* Icon */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400/10 text-yellow-600 sm:h-16 sm:w-16">
                  <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>

                {/* Title */}
                <h3 className="text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-4xl">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}