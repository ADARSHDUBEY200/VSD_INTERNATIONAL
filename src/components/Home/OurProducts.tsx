"use client";

import { useRef } from "react";
import Image from "next/image";
import clsx from "clsx";

const features = [
    {
        title: "Clips",
        image: "/images/Home/ourproducts/Image 1.jpg",
    },
    {
        title: "Contact Center",
        image: "/images/Home/ourproducts/Image 2.jpg",
    },
    {
        title: "Meetings",
        image: "/images/Home/ourproducts/Image 6.jpg",
    },
    {
        title: "AI Companion",
        image: "/images/Home/ourproducts/Image 4.jpg",
    },
    {
        title: "Team Chat",
        image: "/images/Home/ourproducts/Image 7.webp",
    },
];

export default function OurProducts() {

    const sliderRef = useRef<HTMLDivElement>(null);

    const scroll = (dir: "left" | "right") => {
        sliderRef.current?.scrollBy({
            left: dir === "left" ? -350 : 350,
            behavior: "smooth",
        });
    };

    return (
        <section className="relative w-full py-20 bg-transparent overflow-hidden">

            {/* Carousel */}
            <div
                ref={sliderRef}
                className="flex gap-8 px-20 p-10 overflow-x-auto scrollbar-hide scroll-smooth"
            >
                {features.map((item, index) => (
                    <div
                        key={index}
                        className={clsx(
                            "min-w-[280px] md:min-w-[320px] lg:min-w-[360px] shadow-lg",
                            "rounded-3xl bg-white/10 backdrop-blur-xl",
                            "border border-white/20",
                            "transition-all duration-300 ease-out",
                            "hover:-translate-y-6 hover:shadow-2xl hover:shadow-indigo-900/40 cursor-pointer"
                        )}
                    >
                        <div className="relative h-[420px] rounded-3xl overflow-hidden">
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* Left Arrow */}
            <button
                onClick={() => scroll("left")}
                className="absolute left-6 top-1/2 -translate-y-1/2 
        w-12 h-12 rounded-full bg-white/80 hover:bg-white 
        flex items-center justify-center shadow-lg cursor-pointer font-bold"
            >
                ←
            </button>

            {/* Right Arrow */}
            <button
                onClick={() => scroll("right")}
                className="absolute right-6 top-1/2 -translate-y-1/2 
        w-12 h-12 rounded-full bg-white/80 hover:bg-white 
        flex items-center justify-center shadow-lg cursor-pointer font-bold"
            >
                →
            </button>
        </section>
    );
}
