import React from 'react';
import { FacebookOutlined, InstagramOutlined, YoutubeOutlined, EnvironmentOutlined, PhoneOutlined, MailOutlined, ClockCircleOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import Logo from '../assets/images/Logo.jpg';

const Footer = () => {
    const { t } = useTranslation();

    const now = new Date();
    const day = now.getDay(); // 0 is Sunday
    const hour = now.getHours();

    // Open if Mon-Sat (1-6) and 09:00 - 18:00
    const isOpen = (day >= 1 && day <= 6) && (hour >= 9 && hour < 18);

    return (
        <footer id="contact" className="bg-[#1a1a1a] dark:bg-black text-white pt-16 pb-8 border-t border-gray-800 dark:border-gray-900 transition-colors duration-300">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Column 1: Info */}
                    <div data-aos="fade-up">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center font-bold text-white text-lg shadow-lg shadow-accent/30 overflow-hidden">
                                <img src={Logo} alt="Logo" className="w-full h-full object-cover" />
                            </div>
                            <div className="font-bold leading-tight">
                                <span className="block text-xs uppercase tracking-widest text-gray-400 font-medium">{t('header.title')}</span>
                                <span className="text-sm">{t('header.subtitle')}</span>
                            </div>
                        </div>
                        <p className="text-gray-400 mb-6 text-sm leading-relaxed opacity-80">
                            {t('footer.desc')}
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-white transition-all transform hover:-translate-y-1 text-gray-400">
                                <FacebookOutlined />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-white transition-all transform hover:-translate-y-1 text-gray-400">
                                <InstagramOutlined />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-white transition-all transform hover:-translate-y-1 text-gray-400">
                                <YoutubeOutlined />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div data-aos="fade-up" data-aos-delay="100">
                        <h3 className="text-lg font-bold mb-6 text-white border-l-4 border-accent pl-3 uppercase tracking-wide">{t('footer.links_title')}</h3>
                        <ul className="space-y-3">
                            {['about', 'admission', 'life', 'library', 'vacancy'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-400 hover:text-white hover:translate-x-2 transition-all flex items-center gap-2 text-sm w-fit">
                                        <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                                        {t(`footer.links.${item}`)}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Contact */}
                    <div data-aos="fade-up" data-aos-delay="200">
                        <h3 className="text-lg font-bold mb-6 text-white border-l-4 border-accent pl-3 uppercase tracking-wide">{t('footer.contact_title')}</h3>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li className="flex items-start gap-4 group">
                                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-accent/20 transition-colors">
                                    <EnvironmentOutlined className="text-accent" />
                                </div>
                                <span className="flex-1">{t('footer.address')}</span>
                            </li>
                            <li className="flex items-center gap-4 group">
                                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-accent/20 transition-colors">
                                    <PhoneOutlined className="text-accent" />
                                </div>
                                <span>+998 71 234-56-78</span>
                            </li>
                            <li className="flex items-center gap-4 group">
                                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-accent/20 transition-colors">
                                    <MailOutlined className="text-accent" />
                                </div>
                                <span>info@estrada-art.uz</span>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Working Hours */}
                    <div data-aos="fade-up" data-aos-delay="300">
                        <h3 className="text-lg font-bold mb-6 text-white border-l-4 border-accent pl-3 uppercase tracking-wide">{t('footer.working_hours_title')}</h3>
                        <div className="bg-gray-800/50 rounded-xl p-5 border border-gray-700/50 backdrop-blur-sm">
                            <ul className="space-y-3 text-sm">
                                <li className="flex justify-between items-center pb-2 border-b border-gray-700/50">
                                    <span className="text-gray-400">{t('footer.working_days')}</span>
                                    <span className="text-white font-semibold">{t('footer.working_time')}</span>
                                </li>
                                <li className="flex justify-between items-center pb-2 border-b border-gray-700/50">
                                    <span className="text-gray-400">{t('footer.lunch')}</span>
                                    <span className="text-accent font-medium"><ClockCircleOutlined className="mr-1" /> 13:00 - 14:00</span>
                                </li>
                                <li className="flex justify-between items-center pt-1">
                                    <span className="text-gray-400 text-xs uppercase tracking-wide opacity-80">{t('footer.closed')}</span>
                                </li>
                            </ul>
                            <div className="mt-4 pt-3 border-t border-gray-700/50 flex justify-center">
                                {isOpen ? (
                                    <span className="text-xs text-green-500 flex items-center gap-1.5 bg-green-500/10 px-3 py-1 rounded-full font-medium border border-green-500/20">
                                        <span className="relative flex h-2 w-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                        </span>
                                        {t('footer.status_open')} ({t('footer.status_open', { lng: 'en' })})
                                    </span>
                                ) : (
                                    <span className="text-xs text-red-500 flex items-center gap-1.5 bg-red-500/10 px-3 py-1 rounded-full font-medium border border-red-500/20">
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                                        {t('footer.status_closed')} ({t('footer.status_closed', { lng: 'en' })})
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm text-center md:text-left">
                        {t('footer.rights', { year: new Date().getFullYear() })}
                    </p>
                    <div className="flex gap-6 text-sm text-gray-500">
                        <a href="#" className="hover:text-white transition-colors">{t('footer.privacy')}</a>
                        <a href="#" className="hover:text-white transition-colors">{t('footer.terms')}</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
