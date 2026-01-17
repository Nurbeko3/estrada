import React from 'react';
import { Card, Typography, Row, Col, Badge, Divider, List, Tag } from 'antd';
import {
    UserOutlined,
    TeamOutlined,
    ReadOutlined,
    GlobalOutlined,
    BookOutlined,
    BankOutlined,
    CheckCircleOutlined,
    ExperimentOutlined,
    SolutionOutlined
} from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

const PedagogyDepartment = () => {
    const staff = [
        {
            name: "Abdusattorova Sayyora Akmalovna",
            role: "Kafedra mudiri, katta oʻqituvchi",
            subjects: "“Cholgʻu ijochiligi”, “Jamoa ijrochiligi oʻqitish uslubiyoti”, “Cholgʻu ijochiligi oʻqitish uslubiyoti”"
        },
        {
            name: "Kayumov Kazim Abidovich",
            role: "Dotsent, О‘zbekistonda xizmat kо‘rsatgan artisti, “Dо‘stlik” Ordeni sohibi",
            subjects: "“Vokal ijrochiligi”, “Xonandalikdan dars berish uslubiyoti”"
        },
        {
            name: "Dilmurotov Mirzobek Oʻtkirovich",
            role: "Dotsent",
            subjects: "“Maktab repertuarini innovatsion tizimlash”"
        },
        {
            name: "Fazel Noxida Xisrov qizi",
            role: "Dotsent",
            subjects: "“Vokal ijrochiligi”"
        },
        {
            name: "Abduhalilov Jamshid Xurramovich",
            role: "Katta oʻqituvchi",
            subjects: "“Vokal ijrochiligi”"
        },
        {
            name: "Ishaliyev Javohir Erkin oʻgʻli",
            role: "Katta oʻqituvchi",
            subjects: "“Cholgʻu ijochiligi”, “Ansambl”"
        },
        {
            name: "Dashkinova Iroda Muradjon qizi",
            role: "Oʻqituvchi",
            subjects: "“Vokal ijrochiligi”"
        },
        {
            name: "Samatov Timur Alisher oʻgʻli",
            role: "Oʻqituvchi",
            subjects: "“Cholgʻu ijochiligi”, “Oiladosh cholgʻularni oʻrganish”"
        },
        {
            name: "Pak Anatoliy Vadimovich",
            role: "Oʻqituvchi",
            subjects: "“Cholgʻu ijochiligi”, “Oiladosh cholgʻularni oʻrganish” , “Ansambl”"
        },
        {
            name: "Jalilova Kamola Shuxratjon qizi",
            role: "Oʻqituvchi",
            subjects: "“Vokal ansambli”"
        },
        {
            name: "Roʻzmetova Sevinchoy Baxtiyarovna",
            role: "Oʻqituvchi",
            subjects: "“Vokal ijrochiligi”"
        }
    ];

    const publications = [
        "B.Ibragimov “Notalashtirish” (2023)",
        "M.Dilmurotov “Maktab repertuarini innovatsion tizimlash” (2023)",
        "J.Ishaliyev “Estrada cholgʻu ijrochiligi” (2024)",
        "S.Abdusattorova “Jamoa ijrochiligi oʻqitish uslubiyoti” (2024)",
        "N.Fazel “Вoкaлнoе испoлнителствo” (2024)"
    ];

    const research = [
        {
            name: "B.Ibragimov",
            topic: "“Kompyuter dasturlari vositasida bo‘lajak musiqa o‘qituvchilarining kasbiy malakalarini takomillashtirish metodikasi”"
        },
        {
            name: "G.Xidoyatullayeva",
            topic: "“Ixtisoslashtirilgan maktab oʻquvchilarining fortepiano cholgʻusida ijrochilik malakalarini takomillashtirish metodikasi”"
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
                            <p className="text-gray-500 m-0">Estrada ijrochiligi pedagoglari tayyorlash kafedrasi</p>
                        </div>
                    </div>

                    <div className="prose dark:prose-invert max-w-none text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                        <p>
                            Kafedraning asosiy maqsad va vazifalaridan biri – musiqiy ta’lim-tarbiya nazariyasi va amaliyotini chuqur o‘rganish va metodologik masalalarni tadqiq etish bo‘lib, bu Botir Zokirov nomidagi Milliy estrada san’ati instituti musiqa pedagogikasi sohadagi fundamental bazasining asosini tashkil etadi.
                        </p>
                        <p>
                            Kafedra faoliyatining asosiy unsurlaridan biri – institut bitiruvchilarini pedagogik faoliyatga tayyorlash, ularda pedagogik bilim va ko‘nikma hamda malakalarni shakllantirishdir.
                        </p>
                    </div>
                </div>
            </Card>

            {/* Stats and Subjects */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="shadow-lg border-none rounded-2xl dark:bg-gray-800 h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-6">
                        <ReadOutlined className="text-xl text-accent" />
                        <h3 className="text-xl font-bold m-0">O‘quv faoliyati</h3>
                    </div>

                    <div className="mb-6 flex-grow">
                        <h4 className="font-bold mb-3 text-gray-700 dark:text-gray-300">O'qitiladigan fanlar:</h4>
                        <div className="flex flex-wrap gap-2">
                            {[
                                "Musiqiy pedagogika va psixologiya", "Kasbiy pedagogika", "Tarbiyaviy ishlar metodikasi",
                                "Yosh davrlar psixologiyasi", "Vokal ijrochiligi", "Vokal ansambli",
                                "Maktab repertuarini o‘rganish", "Xonandalikdan dars berish uslubiyoti",
                                "Jamoa ijrochiligi uslubiyoti", "Maktab repertuarini innovatsion tizimlash",
                                "Cholg‘u ijrochiligi", "Ansambl", "Oiladosh cholg‘ularni o‘rganish"
                            ].map((subject, idx) => (
                                <Tag key={idx} color="gold" className="m-0 text-xs md:text-sm py-1 px-2 rounded-md border-0 bg-accent/10 text-gray-800 dark:text-white">
                                    {subject}
                                </Tag>
                            ))}
                        </div>
                    </div>

                    <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
                        <p className="text-sm text-gray-500 m-0 italic">
                            Dars mashg‘ulotlarida axborot-kommunikatsiya, innovatsion hamda zamonaviy pedagogik texnologiyalardan foydalaniladi.
                        </p>
                    </div>
                </Card>

                <Card className="shadow-lg border-none rounded-2xl dark:bg-gray-800 h-full">
                    <div className="flex items-center gap-3 mb-6">
                        <TeamOutlined className="text-xl text-accent" />
                        <h3 className="text-xl font-bold m-0">Jamoa tarkibi</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-50 dark:bg-white/5 p-4 rounded-xl text-center">
                            <span className="text-3xl font-bold text-accent block">2</span>
                            <span className="text-sm text-gray-600 dark:text-gray-400">Dotsent</span>
                        </div>
                        <div className="bg-gray-50 dark:bg-white/5 p-4 rounded-xl text-center">
                            <span className="text-3xl font-bold text-accent block">4</span>
                            <span className="text-sm text-gray-600 dark:text-gray-400">Katta o‘qituvchi</span>
                        </div>
                        <div className="bg-gray-50 dark:bg-white/5 p-4 rounded-xl text-center">
                            <span className="text-3xl font-bold text-accent block">6</span>
                            <span className="text-sm text-gray-600 dark:text-gray-400">O‘qituvchi</span>
                        </div>
                        <div className="bg-gray-50 dark:bg-white/5 p-4 rounded-xl text-center">
                            <span className="text-3xl font-bold text-accent block">3</span>
                            <span className="text-sm text-gray-600 dark:text-gray-400">Jo‘rnavoz</span>
                        </div>
                    </div>
                </Card>
            </div>

            {/* Scientific Activity */}
            <Card className="shadow-lg border-none rounded-2xl dark:bg-gray-800 bg-gradient-to-r from-[#002140] to-[#0f2a4a] text-white">
                <div className="flex items-center gap-3 mb-6">
                    <ExperimentOutlined className="text-2xl text-[#c0a062]" />
                    <h3 className="text-2xl font-bold text-white m-0">Ilmiy faoliyat va nashrlar</h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                        <h4 className="font-bold text-[#c0a062] mb-4 text-lg">Yaratilgan o‘quv qo‘llanmalar (2023-2024)</h4>
                        <ul className="space-y-2">
                            {publications.map((pub, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-gray-200">
                                    <CheckCircleOutlined className="mt-1 text-[#c0a062]" />
                                    <span>{pub}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-[#c0a062] mb-4 text-lg">Ilmiy tadqiqot ishlari (PhD)</h4>
                        <div className="space-y-4">
                            {research.map((item, idx) => (
                                <div key={idx} className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                                    <p className="font-bold text-white m-0 mb-1">{item.name}</p>
                                    <p className="text-sm text-gray-300 m-0 italic">{item.topic}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Card>

            {/* Qualificiation & Methodology */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="shadow-md rounded-2xl dark:bg-gray-800 border-none">
                    <div className="flex items-center gap-3 mb-4">
                        <SolutionOutlined className="text-xl text-accent" />
                        <h3 className="text-lg font-bold m-0">Malaka oshirish</h3>
                    </div>
                    <div className="space-y-4">
                        <div className="border-l-2 border-accent pl-4">
                            <span className="text-xs font-bold text-gray-400 uppercase">2023-yil</span>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                                S.Abdusattorova, N.Fazel, J.Abduxalilov — O‘zDSMI da malaka oshirib kelgan.
                            </p>
                        </div>
                        <div className="border-l-2 border-accent pl-4">
                            <span className="text-xs font-bold text-gray-400 uppercase">2024-yil</span>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                                J.Ishaliyev, G.Xidoyatullayeva, I.Dashkinova — O‘zDSMI da malaka oshirib kelgan.
                            </p>
                        </div>
                    </div>
                </Card>

                <Card className="shadow-md rounded-2xl dark:bg-gray-800 border-none">
                    <div className="flex items-center gap-3 mb-4">
                        <GlobalOutlined className="text-xl text-accent" />
                        <h3 className="text-lg font-bold m-0">Metodik hamkorlik</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Kafedra quyidagi muassasalar bilan faol hamkorlik qiladi:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                        <li>Uspenskiy nomidagi Respublika ixtisoslashtirilgan musiqa maktabi</li>
                        <li>R. Glier nomidagi Respublika ixtisoslashtirilgan musiqa maktabi</li>
                    </ul>
                </Card>
            </div>

            {/* Staff List */}
            <div className="space-y-6">
                <div className="flex items-center gap-4">
                    <div className="w-1.5 h-8 bg-accent rounded-full"></div>
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white m-0">Kafedra xodimlari</h2>
                </div>

                <div className="grid grid-cols-1 gap-4">
                    {staff.map((person, index) => (
                        <Card key={index} className="border-l-4 border-l-accent border-y-0 border-r-0 shadow-sm hover:shadow-md transition-shadow dark:bg-gray-800">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white m-0">{person.name}</h3>
                                    <p className="text-accent font-medium m-0">{person.role}</p>
                                </div>
                                <div className="md:w-1/2 text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-white/5 p-3 rounded-lg">
                                    <span className="font-semibold block mb-1">Olib boradigan fanlari:</span>
                                    {person.subjects}
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default PedagogyDepartment;
