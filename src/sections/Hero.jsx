import React from 'react';
import { Carousel, Button } from 'antd';
import { ArrowRightOutlined, PlayCircleOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const Hero = () => {
    const { t } = useTranslation();

    const slides = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2070&auto=format&fit=crop",
            title: t('hero.slide1.title'),
            subtitle: t('hero.slide1.subtitle'),
            tag: t('hero.slide1.tag')
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=2070&auto=format&fit=crop",
            title: t('hero.slide2.title'),
            subtitle: t('hero.slide2.subtitle'),
            tag: t('hero.slide2.tag')
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop",
            title: t('hero.slide3.title'),
            subtitle: t('hero.slide3.subtitle'),
            tag: t('hero.slide3.tag')
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
                                    <span data-aos="fade-down" className="inline-block py-1 px-3 border border-white/30 rounded-full text-white/90 text-xs md:text-sm uppercase tracking-wider backdrop-blur-sm shadow-sm glass">
                                        {slide.tag || "Respublika oliy ta'lim muassasasi"}
                                    </span>
                                    <h2 data-aos="fade-up" data-aos-delay="100" className="text-4xl md:text-6xl lg:text-8xl font-bold leading-tight text-white drop-shadow-2xl tracking-tight">
                                        {slide.title}
                                    </h2>
                                    <p data-aos="fade-up" data-aos-delay="200" className="text-lg md:text-2xl text-white/90 font-light border-l-0 md:border-l-4 border-accent pl-0 md:pl-4 max-w-2xl">
                                        {slide.subtitle}
                                    </p>
                                    <div data-aos="fade-up" data-aos-delay="300" className="flex flex-col sm:flex-row gap-3 md:gap-6 pt-4 md:pt-8 justify-center md:justify-start">
                                        <Button type="primary" size="large" className="bg-accent border-none hover:bg-white hover:text-accent h-12 md:h-14 px-8 md:px-10 text-base md:text-lg w-full sm:w-auto rounded-full shadow-lg transition-all duration-300 transform hover:scale-105" icon={<ArrowRightOutlined />}>
                                            {t('hero.btn_more')}
                                        </Button>
                                        <Button ghost size="large" className="text-white border-white hover:bg-white/20 hover:border-white h-12 md:h-14 px-8 md:px-10 text-base md:text-lg w-full sm:w-auto rounded-full backdrop-blur-md" icon={<PlayCircleOutlined />}>
                                            {t('hero.btn_video')}
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
