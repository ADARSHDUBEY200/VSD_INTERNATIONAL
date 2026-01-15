

import {
    ShieldCheck,
    Clock,
    Users,
    Settings,
    ThumbsUp,
} from "lucide-react";

export default function WhyVSDInternational() {
    return (
        <section
            className="relative overflow-hidden bg-[#130f01] py-24 px-6"
            aria-label="Why VSD International"
        >
            {/* Background Gold Accent */}
            <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[#D4AF37]/20 blur-3xl" />
            <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-3xl" />

            <div className="relative mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* LEFT – CONTENT */}
                <div>
                    <span className="inline-block mb-4 text-sm font-semibold tracking-wide text-[#D4AF37] uppercase">
                        Why Choose Us
                    </span>

                    <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-white">
                        Why <span className="text-[#D4AF37]">VSD International</span>
                    </h2>

                    <p className="mt-6 text-lg text-white/80 max-w-xl">
                        With a strong foundation built on quality, experience, and trust,
                        VSD International stands as a preferred partner for commercial
                        kitchen solutions across the hospitality and food service industry.
                    </p>

                    <p className="mt-4 text-white/70 max-w-xl">
                        Our commitment goes beyond supplying equipment — we deliver
                        reliability, precision, and long-term operational value.
                    </p>
                </div>

                {/* RIGHT – DIFFERENT DESIGN LIST */}
                <div className="relative">

                    {/* Vertical Line */}
                    <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#D4AF37] to-transparent hidden sm:block" />

                    <div className="space-y-8 pl-0 sm:pl-12">

                        {[
                            {
                                icon: ShieldCheck,
                                title: "ISO 9001:2008 Certified Company",
                                desc: "International quality standards ensuring consistency, reliability, and compliance across all projects.",
                            },
                            {
                                icon: Clock,
                                title: "15+ Years of Industry Experience",
                                desc: "Deep expertise gained through years of delivering commercial kitchen projects across diverse sectors.",
                            },
                            {
                                icon: Settings,
                                title: "Complete Turnkey Expertise",
                                desc: "From design and fabrication to installation and commissioning — all under one roof.",
                            },
                            {
                                icon: Users,
                                title: "Skilled Technical & Sales Team",
                                desc: "Professionally trained teams providing expert consultation, execution, and support.",
                            },
                            {
                                icon: ThumbsUp,
                                title: "Reliable After-Sales Support",
                                desc: "Dedicated service engineers ensuring long-term performance and hassle-free operations.",
                            },
                        ].map((item, index) => (
                            <div key={index} className="flex items-start gap-5">
                                <div className="flex-shrink-0">
                                    <item.icon
                                        size={28}
                                        className="text-[#D4AF37]"
                                    />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-white">
                                        {item.title}
                                    </h4>
                                    <p className="mt-1 text-sm text-white/75 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>

            </div>
        </section>
    );
}
