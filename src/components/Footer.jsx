"use client";

import {
    Phone,
    Mail,
    MapPin,
    ShieldCheck,
} from "lucide-react";

const Footer = () => {
    return (
        <footer className="relative bg-gradient-to-br from-[#51431c] via-[#967631] to-[#82662a]">

            {/* Top Divider */}
            <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

            {/* Main Footer */}
            <div className="mx-auto max-w-7xl px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                {/* Brand Info */}
                <div>
                    <h3 className="text-2xl font-bold text-[#D4AF37]">
                        VSD International
                    </h3>

                    <p className="mt-4 text-sm text-[#DADADA] leading-relaxed">
                        ISO 9001:2008 certified company delivering innovative and reliable
                        commercial kitchen solutions for the hospitality and food service
                        industry across India.
                    </p>

                    <div className="mt-4 flex items-center gap-2 text-sm text-[#D4AF37]">
                        <ShieldCheck size={18} />
                        ISO 9001:2008 Certified
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-lg font-semibold text-[#F9F6F1]">
                        Quick Links
                    </h4>
                    <ul className="mt-4 space-y-3 text-sm text-[#DADADA]">
                        <li><a href="/" className="hover:text-[#D4AF37] transition">Home</a></li>
                        <li><a href="/about" className="hover:text-[#D4AF37] transition">About Us</a></li>
                        <li><a href="/products" className="hover:text-[#D4AF37] transition">Our Products</a></li>
                        <li><a href="/blogs" className="hover:text-[#D4AF37] transition">Blogs</a></li>
                        <li><a href="/contact" className="hover:text-[#D4AF37] transition">Contact Us</a></li>
                    </ul>
                </div>

                {/* Solutions */}
                <div>
                    <h4 className="text-lg font-semibold text-[#F9F6F1]">
                        Our Solutions
                    </h4>
                    <ul className="mt-4 space-y-3 text-sm text-[#DADADA]">
                        <li>Commercial Kitchen Equipment</li>
                        <li>Turnkey Kitchen Projects</li>
                        <li>Custom Fabrication</li>
                        <li>Exhaust & Ventilation Systems</li>
                        <li>Refrigeration Solutions</li>
                        <li>After-Sales Service & Maintenance</li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="text-lg font-semibold text-[#F9F6F1]">
                        Contact Us
                    </h4>

                    <div className="mt-4 space-y-4 text-sm text-[#DADADA]">
                        <div className="flex items-start gap-3">
                            <MapPin size={18} className="text-[#D4AF37] mt-1" />
                            <span>
                                VSD International,<br />
                                India
                            </span>
                        </div>

                        <div className="flex items-center gap-3">
                            <Phone size={18} className="text-[#D4AF37]" />
                            <a href="tel:+91XXXXXXXXXX" className="hover:text-[#D4AF37] transition">
                                +91 XXXXX XXXXX
                            </a>
                        </div>

                        <div className="flex items-center gap-3">
                            <Mail size={18} className="text-[#D4AF37]" />
                            <a href="mailto:info@vsdinternational.com" className="hover:text-[#D4AF37] transition">
                                info@vsdinternational.com
                            </a>
                        </div>
                    </div>
                </div>

            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#CFCFCF]">
                    <span>
                        © {new Date().getFullYear()} VSD International. All rights reserved.
                    </span>

                    <span className="text-center">
                        Designed & Developed with Excellence
                    </span>
                </div>
            </div>
        </footer>
    );
}


export default Footer