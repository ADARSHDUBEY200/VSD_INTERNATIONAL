import { ShieldCheck, Award, CheckCircle, Briefcase } from "lucide-react";

export default function CertificationsCredentials() {


  return (


    <section
    
      className="relative overflow-hidden bg-white py-24 px-6"
      aria-label="Certifications and Credentials"
    >
      {/* Top Accent Divider */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

      <div className="relative mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1F2A44]">
            Certifications &{" "}
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#8C6A2F] bg-clip-text text-transparent">
              Credentials
            </span>
          </h2>

          <p className="mt-6 text-lg text-[#555]">
            Our certifications, experience, and professional expertise reflect
            our commitment to quality, reliability, and excellence in commercial
            kitchen solutions.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* ISO Certification */}
          <div className="group rounded-2xl bg-[#F9F6F1] p-8 text-center shadow-sm transition-all hover:-translate-y-2 hover:shadow-lg">
            <ShieldCheck size={42} className="mx-auto text-[#D4AF37]" />
            <h4 className="mt-4 text-lg font-semibold text-[#1F2A44]">
              ISO 9001:2008 Certified
            </h4>
            <p className="mt-2 text-sm text-[#555]">
              Internationally recognized quality management standards ensuring
              consistent and reliable service delivery.
            </p>
          </div>

          {/* Industry Experience */}
          <div className="group rounded-2xl bg-[#F9F6F1] p-8 text-center shadow-sm transition-all hover:-translate-y-2 hover:shadow-lg">
            <Briefcase size={42} className="mx-auto text-[#D4AF37]" />
            <h4 className="mt-4 text-lg font-semibold text-[#1F2A44]">
              15+ Years of Experience
            </h4>
            <p className="mt-2 text-sm text-[#555]">
              Extensive expertise in hospitality, food service, and industrial
              kitchen projects across India.
            </p>
          </div>

          {/* Professional Team */}
          <div className="group rounded-2xl bg-[#F9F6F1] p-8 text-center shadow-sm transition-all hover:-translate-y-2 hover:shadow-lg">
            <Award size={42} className="mx-auto text-[#D4AF37]" />
            <h4 className="mt-4 text-lg font-semibold text-[#1F2A44]">
              Specialized Professionals
            </h4>
            <p className="mt-2 text-sm text-[#555]">
              Led by experienced industry experts and supported by a highly
              skilled technical team.
            </p>
          </div>

          {/* Quality Commitment */}
          <div className="group rounded-2xl bg-[#F9F6F1] p-8 text-center shadow-sm transition-all hover:-translate-y-2 hover:shadow-lg">
            <CheckCircle size={42} className="mx-auto text-[#D4AF37]" />
            <h4 className="mt-4 text-lg font-semibold text-[#1F2A44]">
              Quality & Compliance
            </h4>
            <p className="mt-2 text-sm text-[#555]">
              Adherence to industry standards, safety norms, and best practices
              across all project executions.
            </p>
          </div>

        </div>

        {/* Trust Statement */}
        <div className="mt-16 max-w-4xl mx-auto text-center text-[#555] leading-relaxed">
          <p>
            At <strong>VSD International</strong>, our credentials are more than
            certifications — they represent our dedication to delivering
            dependable, efficient, and future-ready commercial kitchen
            solutions.
          </p>
        </div>

      </div>
    </section>
  );
}
