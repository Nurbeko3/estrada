import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, Typography } from 'antd';
import { NotificationOutlined, CalendarOutlined, PictureOutlined, PhoneOutlined, FileProtectOutlined, FileDoneOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';

const { Title, Paragraph } = Typography;

const InfoServicePage = () => {
    const { t } = useTranslation();
    const [selectedKey, setSelectedKey] = useState('news');

    const menuItems = [
        { key: 'news', icon: <NotificationOutlined />, label: t('header.menu.sub.news') || "Yangiliklar" },
        { key: 'events', icon: <CalendarOutlined />, label: t('header.menu.sub.events') || "Tadbirlar" },
        { key: 'media', icon: <PictureOutlined />, label: t('header.menu.sub.media') || "Media Galereya" },
        { key: 'contact', icon: <PhoneOutlined />, label: t('header.menu.sub.contact') || "Bog'lanish" },
        { key: 'mandate', icon: <FileProtectOutlined />, label: t('header.menu.sub.mandate') || "Mandat" },
        { key: 'grant_results', icon: <FileDoneOutlined />, label: t('header.menu.sub.grant_results') || "Grant Natijalari" },
    ];

    const renderContent = () => {
        return (
            <motion.div
                key={selectedKey}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex items-center gap-4 mb-10">
                    <div className="w-2 h-12 bg-gradient-to-b from-[#c0a062] to-[#8a6e36] rounded-full shadow-lg"></div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-[#002140] dark:text-white m-0 tracking-tight">
                        {menuItems.find(item => item.key === selectedKey)?.label}
                    </h1>
                </div>

                <Card className="shadow-2xl border-none rounded-2xl overflow-hidden glass-card">
                    <div className="p-8">
                        <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                            <p>Ushbu bo'limdagi ma'lumotlar tez orada joylashtiriladi.</p>
                            <p className="opacity-70 italic">
                                {selectedKey === 'news' && "Eng so'nggi institut yangiliklari..."}
                                {selectedKey === 'events' && "Bo'lib o'tadigan va o'tkazilgan tadbirlar..."}
                                {selectedKey === 'media' && "Foto va video lavhalar..."}
                                {selectedKey === 'contact' && "Matbuot xizmati bilan bog'lanish..."}
                                {selectedKey === 'mandate' && "Mandat natijalari..."}
                                {selectedKey === 'grant_results' && "Grant tanlovlari natijalari..."}
                            </p>
                        </div>
                    </div>
                </Card>
            </motion.div>
        );
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-28 pb-16 transition-colors duration-300">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar */}
                    <div className="w-full lg:w-1/4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-[#002140] text-white rounded-2xl overflow-hidden shadow-2xl sticky top-28"
                        >
                            <div className="p-6 bg-[#001529]/50 backdrop-blur-sm border-b border-white/10">
                                <h3 className="font-bold text-lg text-center uppercase tracking-widest text-[#c0a062]">
                                    {t('header.menu.info_service')}
                                </h3>
                            </div>
                            <ul className="py-2">
                                {menuItems.map(item => (
                                    <li
                                        key={item.key}
                                        onClick={() => setSelectedKey(item.key)}
                                        className={`px-6 py-4 cursor-pointer transition-all duration-300 flex items-center gap-4 border-l-4 group ${selectedKey === item.key
                                            ? 'bg-white/10 border-[#c0a062] text-[#c0a062]'
                                            : 'border-transparent hover:bg-white/5 text-gray-300 hover:text-white'
                                            }`}
                                    >
                                        <span className={`text-xl transition-transform duration-300 ${selectedKey === item.key ? 'scale-110' : 'group-hover:scale-110'}`}>
                                            {item.icon}
                                        </span>
                                        <span className="font-medium tracking-wide">{item.label}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    {/* Content */}
                    <div className="w-full lg:w-3/4">
                        {renderContent()}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoServicePage;
