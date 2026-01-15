import { Building2, UtensilsCrossed, Hospital, Factory } from "lucide-react";

export default function TrustedIndustry() {

    return (


        <section
            className="relative overflow-hidden bg-gradient-to-b from-[#FFFFFF] to-[#F9F6F1] py-24 px-6"
            aria-label="Trusted by the Hospitality Industry"
        >
            {/* Subtle Gold Accent */}
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

            <div className="relative mx-auto max-w-7xl text-center">

                {/* Heading */}
                <h2 className="text-4xl md:text-5xl font-extrabold text-[#1F2A44]">
                    Trusted by the{" "}
                    <span className="bg-gradient-to-r from-[#D4AF37] to-[#8C6A2F] bg-clip-text text-transparent">
                        Hospitality Industry
                    </span>
                </h2>

                <p className="mt-6 text-lg text-[#555] max-w-3xl mx-auto">
                    For over <strong>15 years</strong>, VSD International has been a
                    preferred partner for commercial kitchen solutions across India,
                    delivering reliability, precision, and hassle-free execution.
                </p>

                {/* Industry Cards */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">

                    <div className="group rounded-2xl bg-white/80 backdrop-blur-xl p-8 shadow-sm transition-all hover:-translate-y-2 hover:shadow-lg">
                        <Building2 className="mx-auto text-[#D4AF37]" size={42} />
                        <h4 className="mt-4 text-lg font-semibold text-[#1F2A44]">
                            Hotels & Resorts
                        </h4>
                    </div>

                    <div className="group rounded-2xl bg-white/80 backdrop-blur-xl p-8 shadow-sm transition-all hover:-translate-y2 hover:shadow-lg">
                        <UtensilsCrossed className="mx-auto text-[#D4AF37]" size={42} />
                        <h4 className="mt-4 text-lg font-semibold text-[#1F2A44]">
                            Restaurants & Cafés
                        </h4>
                    </div>

                    <div className="group rounded-2xl bg-white/80 backdrop-blur-xl p-8 shadow-sm transition-all hover:-translate-y-2 hover:shadow-lg">
                        <Hospital className="mx-auto text-[#D4AF37]" size={42} />
                        <h4 className="mt-4 text-lg font-semibold text-[#1F2A44]">
                            Hospitals & Healthcare
                        </h4>
                    </div>

                    <div className="group rounded-2xl bg-white/80 backdrop-blur-xl p-8 shadow-sm transition-all hover:-translate-y-2 hover:shadow-lg">
                        <Factory className="mx-auto text-[#D4AF37]" size={42} />
                        <h4 className="mt-4 text-lg font-semibold text-[#1F2A44]">
                            Industrial Kitchens
                        </h4>
                    </div>

                </div>

                {/* Trust Statement */}
                <div className="mt-16 max-w-4xl mx-auto text-[#555] text-base leading-relaxed">
                    <p>
                        As an <strong>ISO 9001:2008 certified company</strong>, we specialize
                        in turnkey commercial kitchen projects using internationally
                        branded equipment and custom-fabricated solutions. Our clients trust
                        us for our technical expertise, timely execution, and dependable
                        after-sales service.
                    </p>

                    <p className="mt-4 font-medium text-[#1F2A44]">
                        Experience a hassle-free kitchen transformation with VSD
                        International.
                    </p>
                </div>

            </div>


        </section>


    );
}
