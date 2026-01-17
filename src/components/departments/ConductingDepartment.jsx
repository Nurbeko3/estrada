import React from 'react';
import { Card, Typography, Tag, Badge } from 'antd';
import {
    UserOutlined,
    TeamOutlined,
    HistoryOutlined,
    ReadOutlined,
    TrophyOutlined,
    BankOutlined,
    BookOutlined,
    SoundOutlined
} from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

const ConductingDepartment = () => {
    const staff = [
        {
            name: "Umarov Sherzod Akbarovich",
            role: "Kafedra mudiri, dotsent",
            subjects: "“Dirijyorlik san’ati”, “Dirijyorlik”, “Orkestr bilan ishlash uslubiyoti”, “Orkestr bilan ishlash. Musiqiy sahna asarlari ustida ishlash”, “Orkestr repertuari”, “Orkestr cholg‘ularini o‘rganish”",
            achievements: "2 ta darslik, 3 ta o‘quv qo‘llanma, BMSM uchun 1 ta elektron qo‘llanma, 20 ga yaqin ilmiy maqolalar"
        },
        {
            name: "Medyulyanov Viktor Leonidovich",
            role: "Dotsent",
            subjects: "“Dirijyorlik”",
            achievements: "1 ta o‘quv qo‘llanma, 10 ga yaqin ilmiy-uslubiy maqolalar"
        },
        {
            name: "Budyukov Igor Olegovich",
            role: "O‘qituvchi",
            subjects: "“Orkestr sinfi”, “Estrada orkestri dirijyorligi san’ati”, “Dirijyorlik san’ati”, “Dirijyorlik”, “Amaliyot”, “Ansambl sinfi”",
            achievements: "Xalqaro jurnallarda 2 ta maqola"
        },
        {
            name: "Abduraxmanova Farangiz Naimjon qizi",
            role: "O‘qituvchi",
            subjects: "“Dirijyorlik”, “Amaliyot”, “Ansambl sinfi”"
        },
        {
            name: "Olimov Mo‘minjon Ne’matjon o‘g‘li",
            role: "O‘qituvchi",
            subjects: "“Orkestr sinfi”, “Amaliyot”, “Ansambl sinfi”"
        }
    ];

    return (
        <div className="space-y-8 text-gray-800 dark:text-gray-200">
            {/* Intro Section */}
            <Card className="shadow-lg border-none overflow-hidden rounded-2xl dark:bg-gray-800">
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-4 border-b border-gray-100 dark:border-gray-700 pb-4">
                        <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent text-2xl">
                            <BankOutlined />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white m-0">Kafedra haqida ma’lumot</h2>
                            <p className="text-gray-500 m-0">Orkestr dirijyorligi kafedrasi tarixi va yutuqlari</p>
                        </div>
                    </div>

                    <div className="prose dark:prose-invert max-w-none text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                        <p>
                            1996–yilda O‘zbekiston davlat konservatoriyasida “Estrada ijrochiligi” fakulteti tashkil etilgan bo‘lsa, Dirijyorlik (estrada orkestri dirijyorligi) yo‘nalishi “Cholg‘u ijrochiligi” kafedrasi tarkibida bo‘lgan. 2020 yilga qadar ikkinchi mutaxassis (estrada orkestri dirijyori) sifatida 40 nafardan oshiq talabalar bitirgan.
                        </p>
                        <p>
                            B.Zokirov nomidagi MESIda 2023-2024 o‘quv yilidan “Estrada orkestri dirijyorligi” kafedrasi tashkil etildi va bugungi kunda ushbu mutaxassislikda 6 nafar talaba ta’lim olmoqda.
                        </p>
                    </div>
                </div>
            </Card>

            {/* Highlights & Achievements */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="shadow-lg border-none rounded-2xl dark:bg-gray-800 h-full bg-gradient-to-br from-[#002140] to-[#0f2a4a] text-white">
                    <div className="flex items-center gap-3 mb-6">
                        <TrophyOutlined className="text-2xl text-[#c0a062]" />
                        <h3 className="text-2xl font-bold text-white m-0">Yutuqlarimiz</h3>
                    </div>

                    <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/10">
                        <div className="flex items-start gap-4">
                            <div className="bg-[#c0a062] text-white font-bold px-3 py-1 rounded text-sm shrink-0 mt-1">
                                2024
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-white m-0 mb-2">Xalqaro g'oliblik</h4>
                                <p className="text-gray-200 m-0">
                                    3-kurs talabasi <strong>Jo‘raeva Malika</strong> Rossiyada o‘tkazilgan Xalqaro yosh dirijyorlar tanlovida ishtirok etib <span className="text-[#c0a062] font-bold">1-o‘rinni</span> qo‘lga kiritdi.
                                </p>
                            </div>
                        </div>
                    </div>
                </Card>

                <Card className="shadow-lg border-none rounded-2xl dark:bg-gray-800 h-full">
                    <div className="flex items-center gap-3 mb-4">
                        <ReadOutlined className="text-xl text-accent" />
                        <h3 className="text-xl font-bold m-0">O'quv jarayoni</h3>
                    </div>
                    <div className="space-y-4 text-gray-600 dark:text-gray-300">
                        <p>
                            Dirijyor talabalar klassik, romantizm yo‘nalishlaridagi asarlarga dirijyorlik qilishlari bilan birga, jaz ijrochiligining turli uslublariga mansub asarlarning dirijyorlik sirlari bilan tanishmoqdalar.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <Tag icon={<SoundOutlined />} color="blue">Klassik</Tag>
                            <Tag icon={<SoundOutlined />} color="purple">Romantizm</Tag>
                            <Tag icon={<SoundOutlined />} color="orange">Jaz</Tag>
                            <Tag icon={<TeamOutlined />} color="green">Orkestr amaliyoti</Tag>
                        </div>
                        <p className="text-sm italic border-t pt-3 mt-2 border-gray-100 dark:border-gray-700">
                            Shuningdek, kafedrada “Cholg‘u ijrochiligi” va “Bastakorlik” yo‘nalishidagi talabalar uchun ham “Dirijyorlik” fani o‘qitiladi.
                        </p>
                    </div>
                </Card>
            </div>

            {/* Staff List */}
            <div className="space-y-6">
                <div className="flex items-center gap-4">
                    <div className="w-1.5 h-8 bg-accent rounded-full"></div>
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white m-0">Kafedra xodimlari</h2>
                    <Badge count={5} style={{ backgroundColor: '#c0a062' }} />
                </div>

                <div className="grid grid-cols-1 gap-4">
                    {staff.map((person, index) => (
                        <Card key={index} className="border-l-4 border-l-accent border-y-0 border-r-0 shadow-sm hover:shadow-md transition-shadow dark:bg-gray-800">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white m-0 flex items-center gap-2">
                                        {person.name}
                                        {person.role.includes("mudiri") && <Tag color="gold" className="ml-2 m-0 text-xs">Mudir</Tag>}
                                    </h3>
                                    <p className="text-accent font-medium mt-1 mb-3">{person.role}</p>

                                    <div className="mb-2">
                                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">Fanlar:</span>
                                        <p className="text-sm text-gray-700 dark:text-gray-300 m-0">{person.subjects}</p>
                                    </div>
                                </div>

                                {person.achievements && (
                                    <div className="md:w-1/3 bg-gray-50 dark:bg-white/5 p-4 rounded-xl">
                                        <div className="flex items-center gap-2 mb-2 text-accent">
                                            <BookOutlined />
                                            <span className="font-bold text-sm">Ilmiy faoliyat</span>
                                        </div>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 m-0 leading-snug">
                                            {person.achievements}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </Card>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default ConductingDepartment;
