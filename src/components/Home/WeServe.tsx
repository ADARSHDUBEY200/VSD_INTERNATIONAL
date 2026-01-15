import {
    Hotel,
    Utensils,
    Cake,
    Hospital,
    Factory,
    Store,
    Building2,
    CookingPot,
} from "lucide-react";

export default function IndustriesWeServe() {
    return (
        <section
            className="relative overflow-hidden bg-gradient-to-b from-[#F9F6F1] to-white py-24 px-6"
            aria-label="Industries We Serve"
        >
            {/* Top Divider */}
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

            <div className="relative mx-auto max-w-7xl">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#1F2A44]">
                        Industries{" "}
                        <span className="bg-gradient-to-r from-[#D4AF37] to-[#8C6A2F] bg-clip-text text-transparent">
                            We Serve
                        </span>
                    </h2>

                    <p className="mt-6 text-lg text-[#555]">
                        VSD International provides innovative and reliable commercial kitchen
                        solutions across a wide range of hospitality, food service, and
                        institutional industries.
                    </p>
                </div>

                {/* Industry Grid */}
                <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">

                    {[
                        { icon: Hotel, label: "Hotels & Resorts" },
                        { icon: Utensils, label: "Restaurants & Cafés" },
                        { icon: Building2, label: "Banquets & Clubs" },
                        { icon: Store, label: "Fast Food Outlets & Food Courts" },
                        { icon: Cake, label: "Bakeries & Confectionaries" },
                        { icon: Hospital, label: "Hospitals & Healthcare" },
                        { icon: Factory, label: "Food Processing Units" },
                        { icon: CookingPot, label: "Industrial & Institutional Kitchens" },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="group rounded-2xl bg-white/80 backdrop-blur-xl p-8 text-center shadow-sm transition-all hover:-translate-y-2 hover:shadow-lg"
                        >
                            <item.icon
                                size={40}
                                className="mx-auto text-[#D4AF37]"
                            />
                            <h4 className="mt-4 text-base font-semibold text-[#1F2A44]">
                                {item.label}
                            </h4>
                        </div>
                    ))}

                </div>

                {/* Bottom Trust Line */}
                <div className="mt-16 max-w-4xl mx-auto text-center text-[#555] leading-relaxed">
                    <p>
                        From boutique restaurants to large-scale institutional kitchens,
                        <strong> VSD International </strong>
                        delivers tailored solutions that meet operational, hygiene, and
                        efficiency standards across every industry we serve.
                    </p>
                </div>

            </div>
        </section>
    );
}
