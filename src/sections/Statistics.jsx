import React from 'react';
import { CheckOutlined } from '@ant-design/icons';
import VinylBg from '../assets/images/vinyl_bg.png';

const Statistics = () => {
    const stats = [
        { number: "200", label: "Professor-o'qituvchilar" },
        { number: "20", label: "Xorijiy o'qituvchilar" },
        { number: "250", label: "Talabalar" },
        { number: "20", label: "Xorijiy talabalar" },
        { number: "35", label: "Ilmiy tadqiqotchilar" }
    ];

    return (
        <section className="relative py-20 overflow-hidden bg-[#1a1a1a]">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img src={VinylBg} alt="Background" className="w-full h-full object-cover opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/90"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Title */}
                <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 mb-16 text-center md:text-left">
                    <div className="w-16 h-16 rounded-full border-2 border-[#f0a500] flex items-center justify-center text-[#f0a500] bg-white/5 backdrop-blur-sm">
                        <CheckOutlined className="text-3xl font-bold" />
                    </div>
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                            <span className="text-[#f0a500]">Institut</span> <br className="hidden md:block" />
                            <span className="md:ml-2">raqamlarda</span>
                        </h2>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center group">
                            <span className="text-4xl md:text-6xl font-bold text-white mb-3 group-hover:text-[#f0a500] transition-colors duration-300">{stat.number}</span>
                            <span className="text-gray-400 font-medium text-xs md:text-sm uppercase tracking-widest border-t border-gray-700 pt-3 w-full group-hover:border-[#f0a500] transition-colors duration-300">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Statistics;
