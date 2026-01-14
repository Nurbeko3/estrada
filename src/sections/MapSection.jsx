import React from 'react';
import { EnvironmentOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const MapSection = () => {
    const { t } = useTranslation();

    return (
        <section id="location" className="py-20 bg-gray-50 dark:bg-black/50 transition-colors duration-300">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col items-center mb-12 text-center" data-aos="fade-up">
                    <span className="text-accent uppercase tracking-widest font-bold text-sm mb-2">{t('footer.contact_title')}</span>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">{t('footer.map_title')}</h2>
                    <div className="w-24 h-1 bg-accent rounded-full"></div>
                </div>

                <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800 relative group" data-aos="zoom-in">
                    {/* Yandex Map Iframe */}
                    <iframe
                        src="https://yandex.com/map-widget/v1/?ll=69.257712%2C41.314954&z=17&mode=search&oid=82838667723&ol=biz&scroll=true"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        allowFullScreen={true}
                        className="w-full h-full grayscale-0 transition-all duration-700 hover:grayscale-0"
                        title="Institute Location"
                    ></iframe>

                    {/* Overlay Card */}
                    <div className="absolute top-4 left-4 md:top-8 md:left-8 bg-white dark:bg-gray-900/90 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 max-w-sm transform transition-transform duration-300 hover:scale-105 hidden md:block">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-accent/10 rounded-full text-accent">
                                <EnvironmentOutlined className="text-2xl" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-1">{t('header.title')}</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{t('footer.address')}</p>
                                <a
                                    href="https://yandex.uz/maps/org/82838667723/?ll=69.257712%2C41.314954&z=18.27"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-accent hover:underline text-sm font-semibold"
                                >
                                    Yandex Maps orqali ochish &rarr;
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MapSection;
