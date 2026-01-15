

import {
  CookingPot,
  Wrench,
  LayoutDashboard,
  Wind,
  Snowflake,
  Headset,
} from "lucide-react";

export default function OurSolutions() {
    
  return (


    <section
      className="relative overflow-hidden bg-white py-24 px-6"
      aria-label="Our Solutions"
    >
      {/* Top Accent Divider */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

      <div className="relative mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1F2A44]">
            Our{" "}
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#8C6A2F] bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>

          <p className="mt-6 text-lg text-[#555]">
            VSD International offers comprehensive commercial kitchen solutions
            designed to enhance efficiency, hygiene, and operational performance
            across hospitality and food service environments.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Solution Card */}
          {[
            {
              icon: CookingPot,
              title: "Commercial Kitchen Equipment",
              desc: "Supply of high-quality, internationally branded commercial kitchen equipment tailored to operational needs.",
            },
            {
              icon: LayoutDashboard,
              title: "Turnkey Kitchen Projects",
              desc: "End-to-end project execution from design and planning to installation and commissioning.",
            },
            {
              icon: Wrench,
              title: "Custom Fabrication",
              desc: "Precision-engineered stainless steel fabrication customized for workflow efficiency and hygiene.",
            },
            {
              icon: Wind,
              title: "Exhaust & Ventilation Systems",
              desc: "Efficient exhaust, fresh air, and ventilation systems ensuring safety and compliance.",
            },
            {
              icon: Snowflake,
              title: "Refrigeration Solutions",
              desc: "Reliable cold storage and refrigeration systems designed for commercial food operations.",
            },
            {
              icon: Headset,
              title: "After-Sales Service & Support",
              desc: "Dedicated technical support, maintenance, and troubleshooting by trained service engineers.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="group rounded-2xl bg-[#F9F6F1] p-8 shadow-sm transition-all hover:-translate-y-2 hover:shadow-lg"
            >
              <item.icon size={42} className="text-[#D4AF37]" />
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
            Whether you are setting up a new kitchen, upgrading existing
            facilities, or planning a complete renovation,
            <strong> VSD International </strong>
            delivers economical, time-saving, and future-ready solutions.
          </p>
        </div>

      </div>
    </section>


  );

  
}
