"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";



const Navbar = () => {

    const [open, setOpen] = useState(false);

    return (

        <>


            <nav className="relative w-full md:h-20 sticky top-0 z-100 bg-white shadow-md">
                <div className="absolute bottom-0 left-0 w-full h-1
bg-linear-to-r from-transparent via-[#C9A24D] to-transparent
shadow-[0_0_10px_#C9A24D] animate-pulse">
                </div>
                <div className="flex items-center justify-between px-4 sm:px-8 py-4">

                    <div className="flex items-center justify-between  space-x-2   w-full   lg:w-[50%] xl:w-[48%] 2xl:w-[44%]">

                        <Link href={"/"}>

                            <Image
                                src="/images/Home/VSD_LOGO.png"
                                width={160}
                                height={20}
                                alt="logo"
                                className="cursor-pointer"
                            />
                        </Link>


                        <div className="hidden lg:flex items-center space-x-15 font-bold text-gray-700">
                            <div>

                                <Link href={"/"} className="cursor-pointer px-4 py-1 md:text-md hover:bg-[#f9f2da] transition rounded-2xl">
                                    Home
                                </Link>

                            </div>



                            <Link href={"/about"} className="cursor-pointer px-4 py-1 md:text-md hover:bg-[#f9f2da] transition rounded-2xl">
                                About Us
                            </Link>

                            <Link href={"/about"} className="cursor-pointer px-4 py-1 md:text-md hover:bg-[#f9f2da] transition rounded-2xl">
                                Our Products
                            </Link>

                            <Link href={"/about"} className="cursor-pointer px-4 py-1 md:text-md hover:bg-[#f9f2da] transition rounded-2xl">
                                Blogs
                            </Link>



                        </div>
                    </div>

                    {/* RIGHT: Buttons (Desktop) */}
                    <div className="hidden lg:flex items-center gap-4">
                        <button className="px-13 py-4 text-sm rounded-4xl border bg-[#C9A24D] font-bold text-white hover:bg-[#6c4204] transition cursor-pointer">
                            Contact Us
                        </button>
                        <button className="px-13 py-4 text-sm bg-black text-white rounded-3xl font-bold hover:bg-[#1C336E] transition cursor-pointer">
                            Enquire Now
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-gray-700 cursor-pointer transition"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {open && (
                    <div className="lg:hidden border-t bg-white px-6 py-6 space-y-5 shadow-lg">

                        <div className="flex flex-col gap-4 font-bold text-gray-700">
                            <Link href={"/"} className="hover:text-blue-600 cursor-pointer">Home</Link>
                            <Link href={"/course"} className="hover:text-blue-600 cursor-pointer">Courses</Link>
                            <Link href={"/about"} className="hover:text-blue-600 cursor-pointer">About Us</Link>
                            <Link href={"/blog"} className="hover:text-blue-600 cursor-pointer">Blogs</Link>
                        </div>

                        <div className="flex flex-col gap-3 pt-4">
                            <button className="w-full px-6 py-3 rounded-3xl bg-[#1C336E] text-white font-bold hover:bg-blue-600 transition cursor-pointer">
                                Login
                            </button>
                            <button className="w-full px-6 py-3 rounded-3xl bg-blue-600 text-white font-bold hover:bg-[#1C336E] transition cursor-pointer">
                                Register
                            </button>
                        </div>
                    </div>
                )}
            </nav>

        </>

    );
};

export default Navbar;
