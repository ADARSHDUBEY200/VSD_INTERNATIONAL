"use client";

import {
  PencilRuler,
  Truck,
  Settings,
  ClipboardCheck,
} from "lucide-react";

export default function TurnkeyProjectExpertise() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-[#F9F6F1] to-white py-24 px-6"
      aria-label="Turnkey Project Expertise"
    >
      {/* Top Divider */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

      <div className="relative mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1F2A44]">
            Turnkey Project{" "}
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#8C6A2F] bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>

          <p className="mt-6 text-lg text-[#555]">
            VSD International delivers complete turnkey commercial kitchen
            projects with seamless coordination, precision execution, and
            uncompromised quality.
          </p>
        </div>

        {/* Expertise Steps */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {[
            {
              icon: PencilRuler,
              title: "Design & Planning",
              desc: "Professional kitchen layout planning aligned with workflow, safety, and operational efficiency.",
            },
            {
              icon: Settings,
              title: "Equipment & Fabrication",
              desc: "Supply of international-standard equipment and custom-fabricated stainless steel solutions.",
            },
            {
              icon: Truck,
              title: "Installation & Commissioning",
              desc: "On-site installation, testing, and commissioning executed by experienced technical teams.",
            },
            {
              icon: ClipboardCheck,
              title: "Handover & Support",
              desc: "Smooth project handover with training, documentation, and reliable after-sales support.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="group rounded-2xl bg-white/80 backdrop-blur-xl p-8 text-center shadow-sm transition-all hover:-translate-y-2 hover:shadow-lg"
            >
              <item.icon size={42} className="mx-auto text-[#D4AF37]" />
              <h4 className="mt-4 text-xl font-semibold text-[#1F2A44]">
                {item.title}
              </h4>
              <p className="mt-3 text-sm text-[#555] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

        {/* Bottom Statement */}
        <div className="mt-16 max-w-4xl mx-auto text-center text-[#555] leading-relaxed">
          <p>
            From concept to completion,
            <strong> VSD International </strong>
            ensures timely delivery, cost optimization, and hassle-free project
            execution — allowing our clients to focus on their core operations.
          </p>
        </div>

      </div>
    </section>
  );
}
