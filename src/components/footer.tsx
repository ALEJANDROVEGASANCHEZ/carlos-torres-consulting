"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className="w-full border-t border-black/10 bg-[#f5f1e8]">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-14 md:flex-row md:items-center md:justify-between">
          {/* LEFT */}
          <div className="space-y-4">
            <h2 className="text-2xl font-black tracking-tight text-[#0b172a]">
              Carlos Torres
            </h2>

            <p className="max-w-md text-sm leading-7 text-[#334155]">
              Consultoría estratégica en inteligencia artificial,
              automatización y transformación digital para empresas modernas.
            </p>
          </div>

          {/* SOCIALS */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="https://facebook.com/marketerosperuweb/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white text-[#0b172a] transition-all duration-300 hover:-translate-y-1 hover:bg-[#0b172a] hover:text-white"
            >
              <FaFacebookF size={18} />
            </Link>

            <Link
              href="https://instagram.com/froilan_vega_sanchez/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white text-[#0b172a] transition-all duration-300 hover:-translate-y-1 hover:bg-[#0b172a] hover:text-white"
            >
              <FaInstagram size={18} />
            </Link>

            <Link
              href="https://tiktok.com/@alejandrovega9683"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white text-[#0b172a] transition-all duration-300 hover:-translate-y-1 hover:bg-[#0b172a] hover:text-white"
            >
              <FaTiktok size={18} />
            </Link>

            <Link
              href="https://linkedin.com/in/alejandro-vega-sanchez-507125289"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white text-[#0b172a] transition-all duration-300 hover:-translate-y-1 hover:bg-[#0b172a] hover:text-white"
            >
              <FaLinkedinIn size={18} />
            </Link>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-black/10 py-6">
          <p className="text-center text-sm text-[#64748b]">
            © 2026 Carlos Torres Consulting. Todos los derechos reservados.
          </p>
        </div>
      </footer>

      {/* WHATSAPP PREMIUM FLOAT */}
      <div className="fixed bottom-6 right-6 z-[9999] flex items-center gap-3">
        {/* MESSAGE */}
        <div className="hidden rounded-2xl bg-white px-4 py-3 shadow-2xl md:block">
          <p className="text-sm leading-none text-black">
            ¿Dudas o consultas?
          </p>

          <p className="mt-1 text-sm font-bold leading-none text-black">
            Chatea con nosotros
          </p>
        </div>

        {/* BUTTON */}
        <Link
          href="https://wa.me/51912094171"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-300 hover:scale-110"
        >
          <FaWhatsapp size={30} />
        </Link>
      </div>
    </>
  );
}