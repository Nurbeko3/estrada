import React, { useState, useRef } from 'react';
import { Carousel, Button } from 'antd';
import { ArrowRightOutlined, PlayCircleOutlined, PauseCircleOutlined, SoundOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import jazzImg from '../assets/images/jazz_bg.jpg';
import statueImg from '../assets/images/Statue.jpg';
import openingStatueImg from '../assets/images/opening_statue.jpg';
import openedStatueImg from '../assets/images/opened_statue.jpg';
import bgMusic from '../assets/music/botir-zokirov-maftun-boldim_(uzhits.net).mp3';

const Hero = () => {
    const { t } = useTranslation();
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const slides = [
        {
            id: 1,
            image: statueImg,
            title: t('hero.slide1.title'),
            subtitle: t('hero.slide1.subtitle'),
            tag: t('hero.slide1.tag')
        },
        {
            id: 2,
            image: jazzImg,
            title: t('hero.slide3.title'),
            subtitle: t('hero.slide3.subtitle'),
            tag: t('hero.slide3.tag')
        },
        {
            id: 3,
            image: openingStatueImg,
            title: t('hero.slide2.title'),
            subtitle: t('hero.slide2.subtitle'),
            tag: t('hero.slide2.tag')
        },
        {
            id: 4,
            image: openedStatueImg,
            title: t('hero.slide1.title'),
            subtitle: t('hero.slide1.subtitle'),
            tag: t('hero.slide1.tag')
        }
    ];

    return (
        <section className="relative w-full h-[600px] md:h-screen overflow-hidden bg-black">
            {/* Audio Player (Hidden Element) */}
            <audio ref={audioRef} loop>
                <source src={bgMusic} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>

            <Carousel autoplay effect="fade" autoplaySpeed={5000} className="h-full">
                {slides.map((slide) => (
                    <div key={slide.id} className="h-[600px] md:h-screen w-full relative">
                        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-transparent z-10 md:bg-gradient-to-r md:from-black/90 md:via-black/40"></div>
                        <img
                            src={slide.image}
                            alt={slide.title}
                            className="w-full h-full object-cover animate-pan-zoom opacity-90"
                        />

                        <div className="absolute inset-0 z-20 flex flex-col justify-center h-full">
                            <div className="container mx-auto px-4 md:px-8">
                                <div className="max-w-full md:max-w-4xl space-y-4 md:space-y-6 text-center md:text-left">
                                    <span data-aos="fade-down" className="inline-block py-1 px-3 border border-accent/50 rounded-full text-accent font-semibold text-xs md:text-sm uppercase tracking-wider backdrop-blur-md shadow-lg glass-card">
                                        {slide.tag}
                                    </span>
                                    <h2 data-aos="fade-up" data-aos-delay="100" className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white drop-shadow-2xl tracking-tight">
                                        {slide.title}
                                    </h2>
                                    <p data-aos="fade-up" data-aos-delay="200" className="text-lg md:text-2xl text-white/80 font-light border-l-0 md:border-l-4 border-accent pl-0 md:pl-6 max-w-2xl">
                                        {slide.subtitle}
                                    </p>
                                    <div data-aos="fade-up" data-aos-delay="300" className="flex flex-col sm:flex-row gap-3 md:gap-6 pt-4 md:pt-8 justify-center md:justify-start">
                                        <Button type="primary" size="large" className="bg-accent border-none hover:bg-white hover:text-accent h-12 md:h-14 px-8 md:px-10 text-base md:text-lg w-full sm:w-auto rounded-full shadow-lg transition-all duration-300 transform hover:scale-105" icon={<ArrowRightOutlined />}>
                                            {t('hero.btn_more')}
                                        </Button>
                                        <Button
                                            ghost
                                            size="large"
                                            className="text-white border-white hover:bg-white/20 hover:border-white h-12 md:h-14 px-8 md:px-10 text-base md:text-lg w-full sm:w-auto rounded-full backdrop-blur-md"
                                            onClick={togglePlay}
                                            icon={isPlaying ? <PauseCircleOutlined /> : <PlayCircleOutlined />}
                                        >
                                            {isPlaying ? t('hero.btn_music_stop') : t('hero.btn_music_play')}
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>

            {/* Floating Music Widget */}
            <div className="absolute bottom-10 right-10 z-30 hidden md:flex items-center gap-3 bg-black/40 backdrop-blur-md p-2 pl-4 rounded-full border border-white/10 animate-pulse">
                <div className="flex flex-col">
                    <span className="text-xs text-accent font-bold uppercase tracking-wider">{t('hero.music_now_playing')}</span>
                    <span className="text-sm text-white font-medium">{t('hero.music_title')}</span>
                </div>
                <Button
                    type="primary"
                    shape="circle"
                    size="large"
                    className="bg-accent border-none shadow-lg flex items-center justify-center"
                    onClick={togglePlay}
                    icon={isPlaying ? <PauseCircleOutlined className="text-xl" /> : <SoundOutlined className="text-xl" />}
                />
            </div>

            {/* Scroll indicator */}
            <div className="hidden md:block absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white animate-bounce">
                <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-white rounded-full animate-scroll-down"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
