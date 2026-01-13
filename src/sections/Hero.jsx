import React from 'react';
import { Carousel, Button } from 'antd';
import { ArrowRightOutlined, PlayCircleOutlined } from '@ant-design/icons';

const Hero = () => {
    const slides = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2070&auto=format&fit=crop",
            title: "San'at va madaniyatni rivojlantirish yo'lida",
            subtitle: "Botir Zokirov nomidagi Milliy estrada san'ati instituti"
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=2070&auto=format&fit=crop",
            title: "Professional ta'lim va ijodiy muhit",
            subtitle: "Kelajak san'atkorlari uchun zamonaviy imkoniyatlar"
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop",
            title: "Milliy estrada san'atini dunyoga tanitamiz",
            subtitle: "Xalqaro hamkorlik va festivallar"
        }
    ];

    return (
        <section className="relative w-full h-[600px] md:h-screen overflow-hidden">
            <Carousel autoplay effect="fade" autoplaySpeed={5000} className="h-full">
                {slides.map((slide) => (
                    <div key={slide.id} className="h-[600px] md:h-screen w-full relative">
                        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent z-10 md:bg-gradient-to-r"></div>
                        <img
                            src={slide.image}
                            alt={slide.title}
                            className="w-full h-full object-cover animate-pan-zoom"
                        />

                        <div className="absolute inset-0 z-20 flex flex-col justify-center h-full">
                            <div className="container mx-auto px-4 md:px-8">
                                <div className="max-w-full md:max-w-4xl space-y-4 md:space-y-6 text-center md:text-left">
                                    <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-white/90 text-xs md:text-sm uppercase tracking-wider backdrop-blur-sm shadow-sm">
                                        Respublika oliy ta'lim muassasasi
                                    </span>
                                    <h2 className="text-3xl md:text-6xl lg:text-7xl font-bold leading-tight text-white drop-shadow-lg">
                                        {slide.title}
                                    </h2>
                                    <p className="text-base md:text-2xl text-white/95 font-light border-l-0 md:border-l-4 border-accent pl-0 md:pl-4">
                                        {slide.subtitle}
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4 md:pt-8 justify-center md:justify-start">
                                        <Button type="primary" size="large" className="bg-accent border-none hover:bg-[#a08550] h-10 md:h-12 px-6 md:px-8 text-base md:text-lg w-full sm:w-auto rounded-md shadow-lg" icon={<ArrowRightOutlined />}>
                                            Batafsil ma'lumot
                                        </Button>
                                        <Button ghost size="large" className="text-white border-white hover:text-accent hover:border-accent h-10 md:h-12 px-6 md:px-8 text-base md:text-lg w-full sm:w-auto rounded-md" icon={<PlayCircleOutlined />}>
                                            Video lavha
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>

            {/* Scroll indicator - hidden on small screens too low */}
            <div className="hidden md:block absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white animate-bounce">
                <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-white rounded-full animate-scroll-down"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
