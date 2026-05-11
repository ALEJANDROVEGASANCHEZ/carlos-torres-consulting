import Image from "next/image";

import Navbar from "@/components/navbar";

import Services from "@/components/services";

import About from "@/components/about";

import Testimonials from "@/components/testimonials";

import Contact from "@/components/contact";

import Footer from "@/components/footer";

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f5f3ee] text-slate-900">
      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden pt-28 pb-20 lg:pt-32 lg:pb-28">
        {/* MAIN GLOW */}
        <div className="absolute left-1/2 top-10 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-yellow-400/10 blur-3xl lg:h-[800px] lg:w-[800px]" />

        {/* SECONDARY GLOW */}
        <div className="absolute right-[-120px] top-[20%] h-[320px] w-[320px] rounded-full bg-amber-300/10 blur-3xl" />

        <div className="container-premium relative z-10">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            {/* LEFT */}
            <div>
              {/* Badge */}
              <div className="glass-premium shadow-premium inline-flex items-center rounded-full px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.35em] text-slate-700 sm:text-xs">
                Consultor en Inteligencia Artificial
              </div>

              {/* Title */}
              <h1 className="mt-8 max-w-[760px] text-5xl font-black uppercase leading-[0.9] tracking-[-0.08em] text-black sm:text-6xl md:text-7xl lg:text-[6.5rem]">
                Automatizo negocios usando inteligencia artificial moderna
              </h1>

              {/* Description */}
              <p className="mt-8 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg lg:text-xl">
                Desarrollo soluciones inteligentes para empresas,
                emprendedores y marcas que desean crecer, optimizar procesos y
                aumentar productividad.
              </p>

              {/* Buttons */}
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="flex cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-5 text-sm font-semibold text-white transition-all duration-500 hover:scale-[1.02] hover:bg-black"
                >
                  Solicitar asesoría
                </a>

                <a
                  href="#services"
                  className="glass-premium flex cursor-pointer items-center justify-center rounded-full px-8 py-5 text-sm font-semibold text-slate-900 transition-all duration-500 hover:bg-white"
                >
                  Ver servicios
                </a>
              </div>

              {/* Stats */}
              <div className="mt-14 grid grid-cols-3 gap-5 sm:gap-8">
                <div>
                  <div className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                    +120
                  </div>

                  <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                    Procesos automatizados
                  </p>
                </div>

                <div>
                  <div className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                    +40
                  </div>

                  <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                    Empresas asesoradas
                  </p>
                </div>

                <div>
                  <div className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                    95%
                  </div>

                  <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                    Clientes satisfechos
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative">
              {/* Image */}
              <div className="shadow-premium relative overflow-hidden rounded-[32px] sm:rounded-[36px] lg:rounded-[40px]">
                {/* Overlay */}
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                <div className="relative h-[420px] w-full sm:h-[560px] lg:h-[720px]">
                  <Image
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1200&auto=format&fit=crop"
                    alt="Consultor IA"
                    fill
                    priority
                    className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                  />
                </div>
              </div>

              {/* Floating Card */}
              <div className="glass-premium shadow-premium absolute bottom-5 left-5 right-5 rounded-[28px] p-6 sm:bottom-8 sm:left-8 sm:right-auto sm:max-w-[420px] sm:p-8">
                <div className="text-[10px] font-semibold uppercase tracking-[0.35em] text-yellow-600 sm:text-xs">
                  IA + NEGOCIOS
                </div>

                <div className="mt-4 text-3xl font-black leading-[0.95] tracking-tight text-slate-900 sm:text-5xl">
                  Automatización estratégica
                </div>
              </div>

              {/* MOBILE FLOAT */}
              <div className="glass-premium shadow-premium absolute right-4 top-4 z-20 rounded-2xl px-4 py-3 sm:hidden">
                <div className="text-[9px] font-semibold uppercase tracking-[0.28em] text-slate-500">
                  IA SYSTEM
                </div>

                <div className="mt-1 text-lg font-black text-slate-950">
                  Smart Automation
                </div>
              </div>

              {/* DESKTOP FLOAT */}
              <div className="animate-float-slow absolute -right-5 top-10 hidden rounded-3xl border border-white/40 bg-white/70 px-6 py-5 shadow-2xl backdrop-blur-xl lg:block">
                <div className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                  IA SYSTEM
                </div>

                <div className="mt-2 text-2xl font-black text-slate-950">
                  Smart Automation
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <Services />

      {/* ABOUT */}
      <About />

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* CONTACT */}
      <Contact />

      {/* FOOTER */}
      <Footer />
    </main>
  );
}