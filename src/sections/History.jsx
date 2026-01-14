import React from 'react';
import { Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import { useTranslation, Trans } from 'react-i18next';
import tashkilEtishImg from '../assets/images/tashkil_etish.jpg';
import prezidentQaroriImg from '../assets/images/Prezident_qarori.jpg';

const History = () => {
    const { t } = useTranslation();

    const timelineData = [
        {
            year: t('history.timeline.0.year'),
            title: t('history.timeline.0.title'),
            description: t('history.timeline.0.description')
        },
        {
            year: t('history.timeline.1.year'),
            title: t('history.timeline.1.title'),
            description: t('history.timeline.1.description')
        },
        {
            year: t('history.timeline.2.year'),
            title: t('history.timeline.2.title'),
            description: t('history.timeline.2.description')
        },
        {
            year: t('history.timeline.3.year'),
            title: t('history.timeline.3.title'),
            description: t('history.timeline.3.description'),
            image: prezidentQaroriImg
        },
        {
            year: t('history.timeline.4.year'),
            title: t('history.timeline.4.title'),
            description: t('history.timeline.4.description')
        }
    ];

    return (
        <section id="history" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">

                    {/* Text Content */}
                    <div className="lg:w-1/2 space-y-8" data-aos="fade-right">
                        <div className="space-y-6 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                            <p>
                                <Trans i18nKey="history.intro1">
                                    O‘zbekiston Respublikasi Prezidentining 2021-yil 16-oktabrdagi <span className="font-semibold text-accent">PQ-5261-son qarori</span> bilan O‘zbekiston davlat konservatoriyasi huzuridagi Botir Zokirov nomidagi Milliy estrada san’ati instituti tashkil etildi.
                                </Trans>
                            </p>
                            <p>
                                {t('history.intro2')}
                            </p>
                        </div>

                        {/* Quote Block */}
                        <div className="relative p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl border-l-4 border-accent shadow-sm">
                            <div className="absolute top-4 left-4 text-accent/20 text-6xl font-serif">“</div>
                            <blockquote className="relative z-10 italic text-xl text-gray-800 dark:text-gray-100 font-medium leading-loose">
                                <Trans i18nKey="history.quote">
                                    "Taqdir Botir Zokirovning zimmasiga o‘zbek estrada san’atining asoschisi bo‘lishdek ulug‘vor bir vazifani yukladi va bu vazifani u sharaf bilan ado etdi.
                                    <br className="my-4 block" />
                                    Alloh taoloning o‘zi Botir Zokirovga ato etgan benazir iste’dod va insoniy fazilatlar tufayli u san’at olamida chinakam mo‘jizalar yaratdi."
                                </Trans>
                            </blockquote>
                            <div className="mt-6 font-bold text-gray-900 dark:text-white flex items-center gap-3">
                                <div className="h-0.5 w-8 bg-accent"></div>
                                {t('history.president_signature')}
                            </div>
                        </div>

                        {/* Action Button */}
                        <div className="pt-2">
                            <Button
                                type="primary"
                                size="large"
                                className="bg-[#002B49] hover:bg-[#002B49]/90 border-none h-12 px-8 text-base font-semibold rounded-lg shadow-lg flex items-center gap-2"
                                href="https://yuz.uz/uz/news/ozbekiston-respublikasi-prezidenti-shavkat-mirziyoevning-ozbekiston-xalq-artisti-botir-zokirov-haykalining-ochilishiga-bagishlangan-tantanali-marosimdagi-nutqi"
                                target="_blank"
                            >
                                <ArrowRightOutlined /> {t('history.btn_speech')}
                            </Button>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="lg:w-1/2" data-aos="fade-left">
                        <div className="relative group rounded-2xl overflow-hidden shadow-2xl">
                            <div className="absolute inset-0 bg-accent/10 group-hover:bg-transparent transition-all duration-500 z-10"></div>
                            <img
                                src={tashkilEtishImg}
                                alt="Botir Zokirov haykali ochilish marosimi"
                                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        <p className="mt-3 text-center text-sm text-gray-500 italic">
                            {t('history.image_caption')}
                        </p>
                    </div>
                </div>

                {/* Timeline Section */}
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-16 text-gray-900 dark:text-white" data-aos="fade-up">{t('history.title')}</h2>
                    <div className="relative border-l-2 border-accent/30 ml-3 md:ml-6 space-y-12">
                        {timelineData.map((item, index) => (
                            <div key={index} className="relative pl-8 md:pl-12" data-aos="fade-up" data-aos-delay={index * 100}>
                                {/* Timeline Dot */}
                                <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent border-4 border-white dark:border-gray-900 shadow-sm animate-pulse"></span>

                                {/* Year */}
                                <span className="inline-block px-3 py-1 mb-3 text-sm font-bold text-white bg-accent rounded-full shadow-md">
                                    {item.year}
                                </span>

                                {/* Title */}
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3">
                                    {item.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base md:text-lg">
                                    {item.description}
                                </p>

                                {/* Optional Image */}
                                {item.image && (
                                    <div className="mt-6 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800 max-w-md">
                                        <img src={item.image} alt={item.title} className="w-full h-auto" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default History;
