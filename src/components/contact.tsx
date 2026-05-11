"use client";

import { useState } from "react";

import { motion } from "framer-motion";

import { addDoc, collection, serverTimestamp } from "firebase/firestore";

import { Send } from "lucide-react";

import { db } from "@/firebase/config";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState("");

  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    setSuccess("");

    setError("");

    try {
      await addDoc(collection(db, "leads"), {
        ...formData,
        createdAt: serverTimestamp(),
      });

      setSuccess("Tu mensaje fue enviado correctamente.");

      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
      });
    } catch (err) {
      setError("Ocurrió un error al enviar el formulario.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-16 lg:py-24"
    >
      {/* Glow */}
      <div className="absolute left-1/2 top-20 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-yellow-400/10 blur-3xl" />

      <div className="container-premium relative z-10">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            {/* Badge */}
            <span className="mb-5 inline-block w-fit rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-xs font-medium text-yellow-700 sm:text-sm">
              Contacto Estratégico
            </span>

            {/* Title */}
            <h2 className="max-w-xl text-4xl font-black leading-[1] tracking-[-0.05em] text-slate-900 sm:text-5xl md:text-6xl">
              Construyamos soluciones inteligentes para tu empresa
            </h2>

            {/* Text */}
            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Cuéntanos sobre tu proyecto, objetivos o procesos que deseas
              optimizar. Diseñaremos una solución moderna impulsada por
              Inteligencia Artificial.
            </p>

            {/* Stats */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[28px] border border-white/40 bg-white/70 p-6 shadow-sm backdrop-blur-xl">
                <div className="text-4xl font-black tracking-tight text-slate-900">
                  +40
                </div>

                <p className="mt-2 text-sm text-slate-500">
                  Empresas asesoradas
                </p>
              </div>

              <div className="rounded-[28px] border border-white/40 bg-white/70 p-6 shadow-sm backdrop-blur-xl">
                <div className="text-4xl font-black tracking-tight text-slate-900">
                  24/7
                </div>

                <p className="mt-2 text-sm text-slate-500">
                  Optimización inteligente
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
            className="rounded-[32px] border border-white/40 bg-white/75 p-6 shadow-2xl backdrop-blur-xl sm:p-8 lg:p-10"
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Name */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Nombre
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="h-14 w-full rounded-2xl border border-slate-200 bg-white/80 px-5 text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/10"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Correo electrónico
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="correo@empresa.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="h-14 w-full rounded-2xl border border-slate-200 bg-white/80 px-5 text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/10"
                />
              </div>

              {/* Company */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Empresa
                </label>

                <input
                  type="text"
                  name="company"
                  placeholder="Nombre de tu empresa"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="h-14 w-full rounded-2xl border border-slate-200 bg-white/80 px-5 text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/10"
                />
              </div>

              {/* Message */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Mensaje
                </label>

                <textarea
                  name="message"
                  placeholder="Cuéntanos sobre tu proyecto..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full rounded-2xl border border-slate-200 bg-white/80 px-5 py-4 text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/10"
                />
              </div>

              {/* Alerts */}
              {success && (
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-4 text-sm text-emerald-700">
                  {success}
                </div>
              )}

              {error && (
                <div className="rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-600">
                  {error}
                </div>
              )}

              {/* Button */}
              <button
                type="submit"
                disabled={loading}
                className="flex h-14 w-full cursor-pointer items-center justify-center gap-3 rounded-full bg-slate-950 px-8 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.01] hover:bg-black disabled:cursor-not-allowed disabled:opacity-70"
              >
                <Send className="h-4 w-4" />

                {loading ? "Enviando..." : "Enviar Consulta"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}