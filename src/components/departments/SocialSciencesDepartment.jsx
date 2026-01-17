import React from 'react';
import { Card, Typography, Row, Col, Badge, List, Tag, Image } from 'antd';
import {
    GlobalOutlined,
    ReadOutlined,
    TeamOutlined,
    HistoryOutlined,
    BookOutlined
} from '@ant-design/icons';

// Import images
import talipovaImg from '../../assets/images/Talipova-Nilufar.jpg';
import ibragimovImg from '../../assets/images/Ibragimov-Bobur.jpg';
import djangirovaImg from '../../assets/images/Djangirova-Gulzira-.jpg';
import qurbonovaImg from '../../assets/images/Qurbonova-Feruza-.jpg';
import suvonovaImg from '../../assets/images/Suvonova-Umida.jpg';
import jorayevImg from '../../assets/images/Jo‘rayev-Islom-.jpg';

const { Title, Paragraph, Text } = Typography;

const SocialSciencesDepartment = () => {
    const staff = [
        {
            name: "Talipova Nilufar Abduvasikovna",
            role: "Kafedra mudiri, dotsent",
            image: talipovaImg,
            subjects: "Xorijiy til, Amaliy xorijiy til",
            details: "Ma'lumoti: Oliy (Ingliz tili o'qituvchisi)"
        },
        {
            name: "Ibragimov Bobur M.",
            role: "Dotsent, PhD",
            image: ibragimovImg,
            subjects: "Musiqiy pedagogika va psixologiya",
            details: "Ma'lumoti: Oliy (San'atshunos)"
        },
        {
            name: "Djangirova Gulzira Taxirovna",
            role: "Katta o'qituvchi",
            image: djangirovaImg,
            subjects: "Xorijiy til (Ingliz tili)",
            details: "Ma'lumoti: Oliy (Tilshunos)"
        },
        {
            name: "Qurbonova Feruza X.",
            role: "Katta o'qituvchi",
            image: qurbonovaImg,
            subjects: "Turdosh san'atlar tarixi, Madaniyatshunoslik",
            details: "Ma'lumoti: Oliy (San'atshunos)"
        },
        {
            name: "Suvonova Umida A.",
            role: "O'qituvchi",
            image: suvonovaImg,
            subjects: "Dinshunoslik, O'zbekistonning eng yangi tarixi",
            details: "Ma'lumoti: Oliy (Tarixchi)"
        },
        {
            name: "Jo'rayev Islom I.",
            role: "O'qituvchi",
            image: jorayevImg,
            subjects: "Jismoniy madaniyat va sport",
            details: "Ma'lumoti: Oliy (Jismoniy madaniyat)"
        }
    ];

    const subjects = [
        "O‘zbek tili", "Rus tili", "Ingliz tili",
        "Dinshunoslik", "O‘zbekistoning eng yangi tarixi",
        "Estetika", "Falsafa", "Jismoniy tarbiya", "Nutq madaniyati"
    ];

    return (
        <div className="space-y-8 text-gray-800 dark:text-gray-200">
            {/* Intro Section */}
            <Card className="shadow-lg border-none overflow-hidden rounded-2xl dark:bg-gray-800 bg-gradient-to-br from-[#002140] to-[#5b3a29] text-white">
                <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6 border-b border-white/20 pb-4">
                        <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center text-white text-3xl shadow-lg">
                            <GlobalOutlined />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-white m-0">O‘zbek tili va ijtimoiy fanlar kafedrasi</h2>
                            <p className="text-gray-100 m-0 text-lg opacity-90">Til, madaniyat va jamiyat integratsiyasi</p>
                        </div>
                    </div>

                    <div className="prose prose-invert max-w-none text-lg leading-relaxed opacity-95">
                        <p>
                            2022-yildan faoliyat boshlagan kafedra talabalarni nafaqat mutaxassislik, balki ijtimoiy-gumanitar sohalarda ham yetuk kadr bo‘lib yetishishlariga xizmat qiladi. 2023-yil sentabridan boshlab kafedra nomi <strong>“O‘zbek tili, sport va ijtimoiy fanlar”</strong> deb o‘zgartirildi.
                        </p>
                    </div>
                </div>
            </Card>

            {/* Stats and Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card title={<span className="font-bold text-xl"><HistoryOutlined className="mr-2 text-accent" />Ilmiy salohiyat</span>} className="shadow-lg border-none rounded-2xl dark:bg-gray-800 h-full">
                    <div className="space-y-4 text-gray-600 dark:text-gray-300">
                        <p>
                            Kafedra a'zolari tomonidan yangi avlod o‘quv adabiyotlari yaratilmoqda:
                        </p>
                        <ul className="list-disc list-inside space-y-2">
                            <li>
                                <span className="font-semibold">N.A. Talipova:</span> “English for pop and jazz musicians” o‘quv qo‘llanmasi va monografiyalar.
                            </li>
                            <li>
                                <span className="font-semibold">M.O. Dexqonova:</span> O‘quv va uslubiy qo‘llanmalar.
                            </li>
                        </ul>
                    </div>
                </Card>

                <Card title={<span className="font-bold text-xl"><ReadOutlined className="mr-2 text-accent" />O'qitiladigan fanlar</span>} className="shadow-lg border-none rounded-2xl dark:bg-gray-800 h-full">
                    <div className="flex flex-wrap gap-2">
                        {subjects.map((subj, i) => (
                            <Tag key={i} color="purple" className="text-sm py-1 px-3 mb-2 rounded-full">
                                {subj}
                            </Tag>
                        ))}
                    </div>
                </Card>
            </div>

            {/* Staff Grid */}
            <div className="space-y-6">
                <div className="flex items-center gap-4">
                    <div className="w-1.5 h-8 bg-accent rounded-full"></div>
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white m-0">Professor-o'qituvchilar tarkibi</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {staff.map((person, index) => (
                        <Card
                            key={index}
                            className="border-none shadow-md hover:shadow-xl transition-shadow dark:bg-gray-800 overflow-hidden group"
                            bodyStyle={{ padding: 0 }}
                        >
                            <div className="aspect-[3/4] overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 opacity-70 group-hover:opacity-90 transition-opacity"></div>
                                <img
                                    src={person.image}
                                    alt={person.name}
                                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute bottom-0 left-0 p-4 z-20 w-full text-white">
                                    <h3 className="font-bold text-lg leading-tight mb-1 text-white">{person.name}</h3>
                                    <Tag color="gold" className="border-none text-black font-semibold mb-2">{person.role}</Tag>
                                </div>
                            </div>
                            <div className="p-4 bg-white dark:bg-gray-800 h-full flex flex-col justify-between">
                                <div className="space-y-2">
                                    <div className="flex items-start gap-2 text-gray-600 dark:text-gray-300 text-sm">
                                        <BookOutlined className="mt-1 text-accent" />
                                        <span>{person.subjects}</span>
                                    </div>
                                    {person.details && (
                                        <div className="flex items-start gap-2 text-gray-500 text-xs italic">
                                            <ReadOutlined className="mt-1" />
                                            <span>{person.details}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default SocialSciencesDepartment;
