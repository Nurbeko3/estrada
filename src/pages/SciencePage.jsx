import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, Typography } from 'antd';
import { ExperimentOutlined, TeamOutlined, BookOutlined, ProjectOutlined } from '@ant-design/icons';
import { motion, AnimatePresence } from 'framer-motion';

import ilmiyFaoliyat1 from '../assets/images/Ilmiy_faoliyat1.png';
import ilmiyFaoliyat2 from '../assets/images/Ilmiy_faoliyat2.png';

const { Title, Paragraph } = Typography;

const SciencePage = () => {
    const { t } = useTranslation();
    const [selectedKey, setSelectedKey] = useState('research');
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [ilmiyFaoliyat1, ilmiyFaoliyat2];

    useEffect(() => {
        if (selectedKey === 'research') {
            const interval = setInterval(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
            }, 5000);
            return () => clearInterval(interval);
        }
    }, [selectedKey]);

    const menuItems = [
        { key: 'research', icon: <ExperimentOutlined />, label: t('header.menu.sub.research') || "Ilmiy-tadqiqot" },
        { key: 'councils', icon: <TeamOutlined />, label: t('header.menu.sub.councils') || "Ilmiy Kengashlar" },
        { key: 'journals', icon: <BookOutlined />, label: t('header.menu.sub.journals') || "Ilmiy Jurnallar" },
        { key: 'projects', icon: <ProjectOutlined />, label: t('header.menu.sub.projects') || "Ilmiy Loyihalar" },
    ];

    const renderContent = () => {
        if (selectedKey === 'research') {
            return (
                <motion.div
                    key="research"
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

                    <Card className="shadow-2xl border-none rounded-2xl overflow-hidden glass-card relative bg-[#002140]">
                        <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden">
                            <AnimatePresence mode='wait'>
                                <motion.img
                                    key={currentImageIndex}
                                    src={images[currentImageIndex]}
                                    alt="Ilmiy faoliyat"
                                    className="absolute inset-0 w-full h-full object-cover"
                                    initial={{ opacity: 0, scale: 1.1 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 1 }}
                                />
                            </AnimatePresence>
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-8">
                                <motion.div
                                    initial={{ y: 30, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                                    className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-xl max-w-2xl text-center"
                                >
                                    <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
                                        Ilmiy tadqiqotlar olib borilmoqda
                                    </h2>
                                    <p className="text-lg md:text-xl text-gray-200">
                                        Tez orada barcha ma'lumotlar joylanadi
                                    </p>
                                </motion.div>
                            </div>
                        </div>
                    </Card>
                </motion.div>
            );
        }

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
                                {selectedKey === 'councils' && "Ilmiy kengashlar tarkibi va faoliyati..."}
                                {selectedKey === 'journals' && "Institutda chop etiladigan ilmiy jurnallar..."}
                                {selectedKey === 'projects' && "Amalga oshirilayotgan ilmiy loyihalar..."}
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
                                    {t('header.menu.science')}
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

export default SciencePage;
