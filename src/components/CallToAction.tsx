"use client";

import { Phone, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CallToAction() {
    return (
        <section
            className="relative overflow-hidden bg-gradient-to-r from-[#fdf1db] via-[#fff2d7] to-[#fff3d8] pt-20 px-6"
            aria-label="Contact VSD International"
        >
            {/* Subtle Overlay */}
            <div className="absolute inset-0 bg-black/10" />

            <div className="relative mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-[#dea03b] p-10 rounded-t-4xl">

                {/* LEFT CONTENT */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-white">
                        Let’s Build Your{" "}
                        <span className="underline decoration-white/40">
                            Commercial Kitchen
                        </span>{" "}
                        Together
                    </h2>

                    <p className="mt-6 text-lg text-white/90 max-w-xl">
                        Partner with <strong>VSD International</strong> for ISO-certified,
                        end-to-end commercial kitchen solutions. From consultation and
                        design to execution and after-sales support — we deliver with
                        precision, quality, and trust.
                    </p>
                </div>

                {/* RIGHT CTA ACTIONS */}
                <div className="flex flex-col sm:flex-row gap-6 justify-start lg:justify-end">

                    {/* Primary CTA */}
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center gap-3 rounded-full bg-[#1F2A44] px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
                        aria-label="Request a consultation with VSD International"
                    >
                        Request Consultation
                        <ArrowRight size={18} />
                    </Link>

                    {/* Secondary CTA */}
                    <a
                        href="tel:+91XXXXXXXXXX"
                        className="inline-flex items-center justify-center gap-3 rounded-full border border-white/60 px-8 py-4 text-base font-semibold text-white backdrop-blur transition-all hover:bg-white hover:text-[#1F2A44]"
                        aria-label="Call VSD International"
                    >
                        <Phone size={18} />
                        Call Our Experts
                    </a>
                </div>
            </div>

        </section>
    );
}
