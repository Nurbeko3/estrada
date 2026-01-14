import React from 'react';
import { useTranslation } from 'react-i18next';
import { PhoneOutlined, MailOutlined, ClockCircleOutlined } from '@ant-design/icons';
import mansurovImg from '../assets/images/mansurov.jpg';
import qurbonovaImg from '../assets/images/qurbonova.jpg';
import mirzayevImg from '../assets/images/mirzayev.jpg';
import muxamedovaImg from '../assets/images/muxamedova.jpg';
import tursunbayevImg from '../assets/images/tursunbayev.jpg';

const LeadershipPage = () => {
    const { t } = useTranslation();

    const leaders = [
        {
            id: 1,
            name: "Mansurov Avaz Maksudovich",
            role: "O'zbekiston davlat konservatoriyasi huzuridagi Botir Zokirov nomidagi Milliy estrada san'ati instituti rektori",
            title: "O'zbekiston Respublikasida xizmat ko'rsatgan madaniyat xodimi, professor",
            time: "Dushanba 9:00 dan 18:00 gacha",
            phone: "+998 71 200 00 00",
            email: "info@estrada-art.uz",
            image: mansurovImg
        },
        {
            id: 2,
            name: "Qurbonova Feruza Xayrullayevna",
            role: "Yoshlar masalalari va ma'naviy-ma'rifiy ishlar bo'yicha birinchi prorektor",
            title: "",
            time: "Dushanba 15:00 dan 17:00 gacha",
            phone: "+998 71 200 00 00",
            email: "qurbonovaf@mail.ru",
            image: qurbonovaImg
        },
        {
            id: 3,
            name: "Mirzayev Akbarjon Abduraximovich",
            role: "O'quv ishlari bo'yicha prorektor",
            title: "Dotsent",
            time: "Seshanba 15:00 dan 17:00 gacha",
            phone: "+998 71 200 00 00",
            email: "mesiakbarjon@gmail.com",
            image: mirzayevImg
        },
        {
            id: 4,
            name: "Muxamedova Feruza Nurmaxmatovna",
            role: "Ilmiy ishlar va innovatsiyalar bo'yicha prorektor",
            title: "San'atshunoslik fanlari nomzodi (PhD)",
            time: "Chorshanba 14:00 dan 16:00 gacha",
            phone: "+998 71 200 00 00",
            email: "feruzamuhamedova1986@gmail.com",
            image: muxamedovaImg
        },
        {
            id: 5,
            name: "Tursunbayev Ilxom Karimovich",
            role: "Ishlar boshqarmasi boshlig'i",
            title: "",
            time: "Har kuni soat 10:00 dan 15:00 gacha",
            phone: "+998 71 200 00 00",
            email: "info@estrada-art.uz",
            image: tursunbayevImg
        }
    ];

    return (
        <section className="pt-32 pb-20 bg-gray-50 dark:bg-black transition-colors duration-300 min-h-screen">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Rahbariyat</h1>
                    <div className="w-24 h-1.5 bg-accent mx-auto rounded-full"></div>
                </div>

                <div className="space-y-12">
                    {leaders.map((leader, index) => (
                        <div
                            key={leader.id}
                            className="bg-white dark:bg-gray-900 rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col md:flex-row gap-8 items-center md:items-start border border-gray-100 dark:border-gray-800"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            {/* Image Placeholder */}
                            <div className="w-full md:w-1/3 lg:w-1/4 flex-shrink-0">
                                <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-lg relative bg-gray-200 dark:bg-gray-800">
                                    <img
                                        src={leader.image.includes('placeholder') ? `https://ui-avatars.com/api/?name=${leader.name.replace(' ', '+')}&size=512&background=c0a062&color=fff` : leader.image}
                                        alt={leader.name}
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                        onError={(e) => { e.target.onerror = null; e.target.src = `https://ui-avatars.com/api/?name=${leader.name.replace(' ', '+')}&size=512&background=c0a062&color=fff` }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                            </div>

                            {/* Info */}
                            <div className="flex-1 w-full text-center md:text-left">
                                <h2 className="text-2xl md:text-3xl font-bold text-accent mb-2">{leader.name}</h2>
                                <p className="text-lg text-gray-700 dark:text-gray-300 font-medium mb-2 leading-relaxed">{leader.role}</p>
                                {leader.title && (
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 italic">{leader.title}</p>
                                )}

                                <div className="grid grid-cols-1 gap-4 text-gray-600 dark:text-gray-400">
                                    <div className="flex items-center gap-3 justify-center md:justify-start">
                                        <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                                            <ClockCircleOutlined />
                                        </div>
                                        <span className="font-medium">{leader.time}</span>
                                    </div>
                                    <div className="flex items-center gap-3 justify-center md:justify-start">
                                        <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                                            <PhoneOutlined />
                                        </div>
                                        <span className="font-semibold text-gray-900 dark:text-white tracking-wide">{leader.phone}</span>
                                    </div>
                                    <div className="flex items-center gap-3 justify-center md:justify-start">
                                        <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                                            <MailOutlined />
                                        </div>
                                        <a href={`mailto:${leader.email}`} className="hover:text-accent transition-colors underline-offset-4 hover:underline">{leader.email}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LeadershipPage;
