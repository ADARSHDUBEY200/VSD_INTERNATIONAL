"use client"

import React from "react";
import { NotepadText, Award, GraduationCap, IndianRupee } from "lucide-react";
import CountUp from 'react-countup';


const Banner = () => {

    const stats = [
        {
            icon: <NotepadText className=" text-[#d18800] w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" />,
            value: 40,
            prefix: "",
            suffix: "+",
            text: "Coategory",
        },
        {
            icon: <GraduationCap className="text-[#d18800] w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 " />,
            value: 1000,
            suffix: "+",
            prefix: "",
            text: "Equipments",
        },
        {
            icon: <Award className="text-[#d18800] w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />,
            value: 15,
            prefix: "",
            suffix: "+",
            text: "Experience",
        },
        {
            icon: <IndianRupee className="text-[#d18800] w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 " />,
            value: 200,
            prefix: "",
            text: "Project Delivered",
            suffix: "+"
        },
    ];


    return (

        < div className="absolute top-96 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-28  bg-white rounded-2xl shadow-xl">

            < div className="max-w-2xl md:max-w-3xl lg:max-w-5xl mx-auto bg-white rounded-xl md:flex grid grid-cols-2  px-6 md:px-0  lg:flex-row md:justify-around justify-center items-center text-black py-6 gap-5 sm: gap-6 divide-x md: divide-x-0 md: divide-y-0 divide-y divide-blue-300">


                {
                    stats.map((item, idx) => {

                        return (<React.Fragment key={idx}>
                            <div className="flex items-center gap-2  rounded-lg md:rounded-0 p-4 md:p-0 justify-center md:justify-normal  border-r-blue-300 shadow-sm md:shadow-[0px] ">
                                <div className="">{item.icon}</div>
                                <div>
                                    <p className="text-sm sm:text-lg md:text-xl lg:ext-2xl font-bold">
                                        <CountUp suffix={item.suffix} end={item.value} prefix={item.prefix} />
                                    </p>
                                    <p className="text-xs sm:text-sm text-gray-700">
                                        {item.text}
                                    </p>

                                </div>
                            </div>
                            {idx <= 2 && <div className="hidden md:block bg-linear-to-br from-yellow-100 via-yellow-400 to-amber-100 h-12 w-0.5" />}
                        </React.Fragment>
                        )

                    })
                }


            </div >
        </div >
    )
}

export default Banner