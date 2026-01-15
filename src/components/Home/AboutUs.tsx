import React from 'react'
import { Sparkles, Rocket, ShieldCheck } from "lucide-react";
import LetsConnect from '../utils/LetsConnect';

const AboutUs = () => {
  return (
    <section className="relative overflow-hidden bg-[#F9F6F1]">

      <LetsConnect/>

      {/* Luxury Background Gradients */}
      <div className="absolute -top-40 -left-40 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-[#D4AF37]/30 to-[#1F2A44]/30 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-[#1F2A44]/30 to-black/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className='p-10'>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-white/60 px-4 py-1 text-sm font-medium text-[#1F2A44] backdrop-blur">
            <Sparkles size={16} className="text-[#D4AF37]" />
            About VSD International
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-extrabold leading-tight text-[#1F2A44]">
            Complete Commercial Kitchen{" "}
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#8C6A2F] bg-clip-text text-transparent">
              Solutions Partner
            </span>
          </h2>

          <p className="mt-6 text-lg text-[#3A3A3A] max-w-xl">
            VSD International is an <strong>ISO 9001:2008 certified company</strong> specializing
            in innovative and modern commercial kitchen solutions for the hospitality
            and food service industry.
          </p>

          <p className="mt-4 text-[#555] max-w-xl">
            With over <strong>15 years of industry experience</strong>, we serve hotels,
            restaurants, clubs, banquets, bakeries, hospitals, food courts,
            industrial kitchens, and institutional cafeterias across India.
          </p>
        </div>

        {/* RIGHT FEATURES */}
        <div className="grid gap-6">

          {/* Card 1 */}
          <div className="group relative rounded-2xl border border-[#D4AF37]/30 bg-white/70 p-6 backdrop-blur-xl transition-all hover:-translate-y-2 hover:shadow-xl">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#D4AF37]/20 to-transparent opacity-0 group-hover:opacity-100 transition" />
            <div className="relative flex items-start gap-4">
              <Rocket className="text-[#D4AF37]" size={32} />
              <div>
                <h3 className="text-xl font-semibold text-[#1F2A44]">
                  Turnkey Kitchen Solutions
                </h3>
                <p className="mt-2 text-[#555]">
                  End-to-end execution using international-standard equipment and
                  custom-fabricated kitchen systems.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative rounded-2xl border border-[#1F2A44]/20 bg-white/70 p-6 backdrop-blur-xl transition-all hover:-translate-y-2 hover:shadow-xl">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#1F2A44]/20 to-transparent opacity-0 group-hover:opacity-100 transition" />
            <div className="relative flex items-start gap-4">
              <Sparkles className="text-[#1F2A44]" size={32} />
              <div>
                <h3 className="text-xl font-semibold text-[#1F2A44]">
                  Expert Consultation & Design
                </h3>
                <p className="mt-2 text-[#555]">
                  Professional guidance on kitchen layouts, exhaust systems,
                  refrigeration, and equipment planning.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group relative rounded-2xl border border-black/20 bg-white/70 p-6 backdrop-blur-xl transition-all hover:-translate-y-2 hover:shadow-xl">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition" />
            <div className="relative flex items-start gap-4">
              <ShieldCheck className="text-black" size={32} />
              <div>
                <h3 className="text-xl font-semibold text-[#1F2A44]">
                  Reliable After-Sales Support
                </h3>
                <p className="mt-2 text-[#555]">
                  Dedicated engineers providing maintenance, repairs, and
                  long-term service support under the VSD brand.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default AboutUs