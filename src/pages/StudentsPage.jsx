import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, Typography } from 'antd';
import { EnvironmentOutlined, GlobalOutlined, FormOutlined, TrophyOutlined, EditOutlined, MessageOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';

const { Title, Paragraph } = Typography;

const StudentsPage = () => {
    const { t } = useTranslation();
    const [selectedKey, setSelectedKey] = useState('eco_students');

    const menuItems = [
        { key: 'eco_students', icon: <EnvironmentOutlined />, label: t('header.menu.sub.eco_students') || "Ekofaol talabalar" },
        { key: 'foreign_students', icon: <GlobalOutlined />, label: t('header.menu.sub.foreign_students') || "Xorijiy talabalar" },
        { key: 'grant_app', icon: <FormOutlined />, label: t('header.menu.sub.grant_app') || "Grant uchun ariza" },
        { key: 'achievements', icon: <TrophyOutlined />, label: t('header.menu.sub.achievements') || "Yutuqlar" },
        { key: 'grant_test', icon: <EditOutlined />, label: t('header.menu.sub.grant_test') || "Grant testi" },
        { key: 'appeal', icon: <MessageOutlined />, label: t('header.menu.sub.appeal') || "Apellyatsiya" },
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
                                {selectedKey === 'eco_students' && "Institutning ekologik faol talabalari..."}
                                {selectedKey === 'foreign_students' && "Xorijiy talabalar uchun ma'lumotlar..."}
                                {selectedKey === 'grant_app' && "Grantga ariza topshirish tartibi..."}
                                {selectedKey === 'achievements' && "Talabalarimizning yutuqlari..."}
                                {selectedKey === 'grant_test' && "Grant olish uchun test sinovlari..."}
                                {selectedKey === 'appeal' && "Apellyatsiya berish tartibi..."}
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
                                    {t('header.menu.students')}
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

export default StudentsPage;
