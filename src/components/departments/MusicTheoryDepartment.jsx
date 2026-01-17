import React from 'react';
import { Card, Typography, Row, Col, Badge, List, Tag, Image } from 'antd';
import {
    BookOutlined,
    ReadOutlined,
    HistoryOutlined,
    ExperimentOutlined,
    TeamOutlined,
    UserOutlined
} from '@ant-design/icons';

// Import images
import amanovaImg from '../../assets/images/Amanova-Nodira.jpg';
import artikbayevaImg from '../../assets/images/Artikbayeva-Durdona.jpg';
import bekmuratovaImg from '../../assets/images/Bekmuratova-Gulzoda.jpg';
import mamaziyayevImg from '../../assets/images/Mamaziyayev-Xurshidjon.jpg';
import xamdamovaImg from '../../assets/images/Xamdamova-Nargiza.jpg';
import zokirovImg from '../../assets/images/Zokirov-Azizjon.jpg';

const { Title, Paragraph, Text } = Typography;

const MusicTheoryDepartment = () => {
    const staff = [
        {
            name: "Xamdamova Nargiza Tursunbayevna",
            role: "Kafedra mudiri, PhD",
            image: xamdamovaImg,
            subjects: "Musiqiy nazariy fanlar"
        },
        {
            name: "Amanova Nodira Allaberganovna",
            role: "v.b. Professor, PhD, Dotsent",
            image: amanovaImg,
            subjects: "Musiqiy nazariy va tarixiy fanlar"
        },
        {
            name: "Zokirov Azizjon",
            role: "O‘qituvchi, PhD izlanuvchi",
            image: zokirovImg,
            subjects: "Musiqashunoslik"
        },
        {
            name: "Bekmuratova Gulzada Tlemuratovna",
            role: "Katta o‘qituvchi, Doktorant",
            image: bekmuratovaImg,
            subjects: "Musiqiy nazariy fanlar"
        },
        {
            name: "Artikbayeva Durdona Alisherovna",
            role: "Katta o‘qituvchi",
            image: artikbayevaImg,
            subjects: "Musiqiy nazariy fanlar"
        },
        {
            name: "Mamaziyayev Xurshid A’zamjonovich",
            role: "O‘qituvchi",
            image: mamaziyayevImg,
            subjects: "Musiqiy nazariy fanlar"
        }
    ];

    const subjects = [
        "Jaz musiqasi tarixi",
        "Jaz garmoniya",
        "Jaz solfedjio",
        "Jahon musiqa tarixi",
        "O‘zbek musiqa tarixi",
        "Musiqashunoslik asoslari",
        "Polifoniya",
        "Musiqiy asarlar tahlili",
        "Musiqiy tanqid metodologiyasi"
    ];

    return (
        <div className="space-y-8 text-gray-800 dark:text-gray-200">
            {/* Intro Section */}
            <Card className="shadow-lg border-none overflow-hidden rounded-2xl dark:bg-gray-800 bg-gradient-to-br from-[#2c3e50] to-[#4ca1af] text-white">
                <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6 border-b border-white/20 pb-4">
                        <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center text-white text-3xl shadow-lg">
                            <BookOutlined />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-white m-0">Musiqiy-nazariy va tarixiy fanlar kafedrasi</h2>
                            <p className="text-gray-100 m-0 text-lg opacity-90">Estrada san'atining ilmiy va nazariy asosi</p>
                        </div>
                    </div>

                    <div className="prose prose-invert max-w-none text-lg leading-relaxed opacity-95">
                        <p>
                            2022-2023 o‘quv yilidan faoliyat boshlagan kafedra, estrada musiqa san'atining o‘ziga xos xususiyatlarini ilmiy-nazariy jihatdan o‘rganishga ixtisoslashgan. Bizning maqsadimiz – milliy estrada san'atini ilmiy qalqon sifatida himoya qilish va rivojlantirishdir.
                        </p>
                    </div>
                </div>
            </Card>

            {/* Philosophy & Mission */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card title={<span className="font-bold text-xl"><ExperimentOutlined className="mr-2 text-accent" />Kafedra maqsadi va vazifalari</span>} className="shadow-lg border-none rounded-2xl dark:bg-gray-800 h-full">
                    <div className="space-y-4 text-gray-600 dark:text-gray-300 text-lg">
                        <p className="italic border-l-4 border-accent pl-4">
                            "Estrada musiqasi – bu kichik shakldagi kuchli mafkuraviy quroldir."
                        </p>
                        <p>
                            Musiqashunoslik faoliyati orqali estrada musiqasining tarixiy va nazariy asoslarini o‘rganish, yangi tamoyillarni yaratish va kelajak avlodning estetik qarashlarini shakllantirish kafedraning asosiy vazifasidir.
                        </p>
                    </div>
                </Card>

                <Card title={<span className="font-bold text-xl"><ReadOutlined className="mr-2 text-accent" />O'qitiladigan fanlar</span>} className="shadow-lg border-none rounded-2xl dark:bg-gray-800 h-full">
                    <div className="flex flex-wrap gap-2">
                        {subjects.map((subj, i) => (
                            <Tag key={i} color="geekblue" className="text-sm py-1 px-3 mb-2 rounded-full">
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
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity"></div>
                                <img
                                    src={person.image}
                                    alt={person.name}
                                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute bottom-0 left-0 p-4 z-20 w-full">
                                    <h3 className="text-white font-bold text-lg leading-tight mb-1">{person.name}</h3>
                                    <p className="text-gray-200 text-sm m-0 opacity-90">{person.role}</p>
                                </div>
                            </div>
                            <div className="p-4 bg-white dark:bg-gray-800">
                                <div className="flex items-start gap-2 text-gray-500 text-sm">
                                    <BookOutlined className="mt-1 text-accent" />
                                    <span>Fanlar: {person.subjects}</span>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default MusicTheoryDepartment;
