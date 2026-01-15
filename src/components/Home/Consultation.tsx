"use client";

import {
    DraftingCompass,
    Layout,
    Wind,
    Snowflake,
    Wrench,
    MessageSquare,
} from "lucide-react";

export default function ConsultationDesignSupport() {
    return (
        <section
            className="relative overflow-hidden bg-gradient-to-b from-white to-[#F9F6F1] py-24 px-6"
            aria-label="Consultation and Design Support"
        >
            {/* Top Divider */}
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

            <div className="relative mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* LEFT – CONTENT */}
                <div>
                    <span className="inline-block mb-4 text-sm font-semibold tracking-wide text-[#D4AF37] uppercase">
                        Expert Guidance
                    </span>

                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#1F2A44]">
                        Consultation &{" "}
                        <span className="bg-gradient-to-r from-[#D4AF37] to-[#8C6A2F] bg-clip-text text-transparent">
                            Design Support
                        </span>
                    </h2>

                    <p className="mt-6 text-lg text-[#555] max-w-xl">
                        At VSD International, our consultation and design services ensure
                        that every commercial kitchen is planned for efficiency, safety,
                        compliance, and long-term performance.
                    </p>

                    <p className="mt-4 text-[#666] max-w-xl">
                        Our experienced professionals work closely with clients to
                        understand operational needs and deliver optimized, future-ready
                        kitchen solutions.
                    </p>
                </div>

                {/* RIGHT – CHECKLIST STYLE */}
                <div className="rounded-3xl bg-white/80 backdrop-blur-xl p-10 shadow-sm">

                    <ul className="space-y-6">

                        {[
                            {
                                icon: Layout,
                                title: "Kitchen Layout Planning",
                                desc: "Workflow-oriented layout design for maximum productivity and hygiene.",
                            },
                            {
                                icon: DraftingCompass,
                                title: "Equipment Selection & Specification",
                                desc: "Expert guidance on selecting the right equipment based on capacity and usage.",
                            },
                            {
                                icon: Wind,
                                title: "Exhaust & Ventilation Design",
                                desc: "Efficient exhaust and fresh air systems meeting safety and compliance standards.",
                            },
                            {
                                icon: Snowflake,
                                title: "Refrigeration Planning",
                                desc: "Customized refrigeration solutions for storage, preparation, and service areas.",
                            },
                            {
                                icon: Wrench,
                                title: "Renovation & Upgrade Support",
                                desc: "Professional assistance for kitchen upgrades, replacements, and modernization.",
                            },
                            {
                                icon: MessageSquare,
                                title: "Technical & Budget Consultation",
                                desc: "Cost-effective planning aligned with timelines, budgets, and operational goals.",
                            },
                        ].map((item, index) => (
                            <li key={index} className="flex items-start gap-4">
                                <div className="flex-shrink-0">
                                    <item.icon size={28} className="text-[#D4AF37]" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-[#1F2A44]">
                                        {item.title}
                                    </h4>
                                    <p className="mt-1 text-sm text-[#555] leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </li>
                        ))}

                    </ul>
                </div>

            </div>
        </section>
    );
}
