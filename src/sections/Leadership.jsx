import React from 'react';
import { LinkedinOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useTranslation } from 'react-i18next';

const Leadership = () => {
    const { t } = useTranslation();

    const leaders = [
        {
            id: 1,
            name: "O'zbekov Avazjon",
            role: t('leadership.roles.rector'),
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop",
            desc: t('leadership.desc.1'),
            email: "rektor@estrada.uz"
        },
        {
            id: 2,
            name: "Karimov Sherzod",
            role: t('leadership.roles.vice_academic'),
            image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop",
            desc: t('leadership.desc.2'),
            email: "prorektor@estrada.uz"
        },
        {
            id: 3,
            name: "Rahimova Gulnora",
            role: t('leadership.roles.vice_science'),
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
            desc: t('leadership.desc.3'),
            email: "ilmiy@estrada.uz"
        }
    ];

    return (
        <section id="leadership" className="py-12 md:py-20 bg-white dark:bg-[#121212] transition-colors duration-300">
            <div className="container mx-auto px-4 text-center">
                <span className="text-accent font-bold uppercase tracking-wider block mb-2 text-sm md:text-base">{t('leadership.tag')}</span>
                <h2 className="text-2xl md:text-4xl font-bold text-primary dark:text-white mb-10 md:mb-16">{t('leadership.title')}</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 px-0 md:px-4">
                    {leaders.map((leader, index) => (
                        <div key={leader.id} data-aos="fade-up" data-aos-delay={index * 100} className="relative group bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
                            {/* Header Background */}
                            <div className="h-32 md:h-40 bg-gradient-to-br from-primary to-gray-900 relative overflow-hidden">
                                <div className="absolute inset-0 bg-accent/20 mix-blend-overlay"></div>
                                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                            </div>

                            {/* Content */}
                            <div className="px-6 md:px-8 pb-8 pt-0 flex flex-col items-center relative z-10">
                                {/* Avatar */}
                                <div className="-mt-16 md:-mt-20 mb-5 relative p-1.5 bg-white dark:bg-gray-800 rounded-full transition-colors duration-300 shadow-md">
                                    <img
                                        src={leader.image}
                                        alt={leader.name}
                                        className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white dark:border-gray-700 shadow-inner group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute bottom-2 right-2 w-5 h-5 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full"></div>
                                </div>

                                <h3 className="text-xl md:text-2xl font-bold text-primary dark:text-white mb-2 text-center">{leader.name}</h3>
                                <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest rounded-full mb-5">
                                    {leader.role}
                                </span>

                                <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 text-center leading-relaxed font-medium opacity-90">
                                    {leader.desc}
                                </p>

                                {/* Contact / Action */}
                                <div className="flex gap-3 w-full justify-center pt-4 border-t border-gray-100 dark:border-gray-700">
                                    <Button shape="circle" icon={<MailOutlined />} className="text-gray-500 dark:text-gray-400 hover:text-accent border-gray-200 dark:border-gray-600 hover:border-accent bg-transparent" />
                                    <Button shape="circle" icon={<PhoneOutlined />} className="text-gray-500 dark:text-gray-400 hover:text-accent border-gray-200 dark:border-gray-600 hover:border-accent bg-transparent" />
                                    <Button shape="circle" icon={<LinkedinOutlined />} className="text-gray-500 dark:text-gray-400 hover:text-accent border-gray-200 dark:border-gray-600 hover:border-accent bg-transparent" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Leadership;
