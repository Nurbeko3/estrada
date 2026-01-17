import React from 'react';
import { Card, Typography, Row, Col, Badge, List, Tag } from 'antd';
import {
    UserOutlined,
    ReadOutlined,
    GlobalOutlined,
    BookOutlined,
    BankOutlined,
    SoundOutlined,
    PlayCircleOutlined
} from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

const PianoDepartment = () => {
    const staff = [
        {
            name: "Sadikova Zuxra Sotvoldiyevna",
            role: "Kafedra mudiri, dotsent",
            subjects: "“Fortepiano”",
            achievements: "“Ansambl sinfi (Estrada cholg‘ulari)” o‘quv qo‘llanmasi muallifi"
        },
        {
            name: "Ilyasova Dilorom Daniyevna",
            role: "Katta o‘qituvchi, Magistr (2004-2006 yy)",
            subjects: "“Fortepiano”"
        },
        {
            name: "Karimova Dilnur Shuxratdjon qizi",
            role: "O‘qituvchi, Magistr (2020-2022 yy)",
            subjects: "“Fortepiano”"
        },
        {
            name: "Abdurazzoqova Zilola Abdufattoh qizi",
            role: "O‘qituvchi, Magistr (2012-2014 yy)",
            subjects: "“Fortepiano”",
            achievements: "“Fortepiano” o‘quv qo‘llanmasi nashrga tayyorlanmoqda"
        },
        {
            name: "Zikriyayev Mardon Mahamatjon o‘g‘li",
            role: "O‘qituvchi, Magistr (2021-2023 yy)",
            subjects: "“Fortepiano”"
        },
        {
            name: "Xidoyatullayeva Gulsora Zoirovna",
            role: "O‘qituvchi, Magistr (2020-2022 yy)",
            subjects: "“Fortepiano”"
        },
        {
            name: "Saydaxmedova Umida Muxammadamin qizi",
            role: "O‘qituvchi, Magistrant",
            subjects: "“Fortepiano”"
        },
        {
            name: "Fattoxov Qaxxor G‘ofur o‘g‘li",
            role: "O‘qituvchi, Magistr (2021-2023 yy)",
            subjects: "“Fortepiano”"
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
                            <p className="text-gray-500 m-0">Fakultetlararo fortepiano ijrochiligi kafedrasi</p>
                        </div>
                    </div>

                    <div className="prose dark:prose-invert max-w-none text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                        <p>
                            O‘zbekiston Respublikasi Prezidentining 2021-yil 16-oktabrdagi PQ-5261-son qarori bilan tashkil etilgan Botir Zokirov nomidagi Milliy estrada san’ati institutida “Fakultetlararo fortepiano ijrochiligi” kafedrasi faoliyat yuritmoqda.
                        </p>
                        <p>
                            Kafedrada talabalar ixtisoslik fanlari bilan bir qatorda musiqiy ta'limning asosi bo'lgan fortepiano sozini chalish sirlarini chuqur o'rganadilar.
                        </p>
                    </div>
                </div>
            </Card>

            {/* Activities */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="shadow-lg border-none rounded-2xl dark:bg-gray-800 h-full">
                    <div className="flex items-center gap-3 mb-4">
                        <GlobalOutlined className="text-xl text-accent" />
                        <h3 className="text-xl font-bold m-0">Ma'naviy-ma'rifiy faoliyat</h3>
                    </div>
                    <div className="space-y-4 text-gray-600 dark:text-gray-300">
                        <p>
                            Kafedra a’zolari Respublika miqyosida ixtisoslashtirilgan san’at maktablari va BMSMlarda mahorat darslari va konsert dasturlarini muntazam o‘tkazib kelmoqdalar.
                        </p>
                        <div className="bg-gray-50 dark:bg-white/5 p-4 rounded-xl">
                            <span className="font-bold text-gray-800 dark:text-white block mb-2">Tashrif buyurilgan hududlar:</span>
                            <div className="flex flex-wrap gap-2">
                                <Tag color="volcano">Qashqadaryo</Tag>
                                <Tag color="gold">Buxoro</Tag>
                                <Tag color="cyan">Toshkent viloyati</Tag>
                                <Tag color="blue">Toshkent shahri</Tag>
                            </div>
                        </div>
                    </div>
                </Card>

                <Card className="shadow-lg border-none rounded-2xl dark:bg-gray-800 h-full">
                    <div className="flex items-center gap-3 mb-4">
                        <BookOutlined className="text-xl text-accent" />
                        <h3 className="text-xl font-bold m-0">Ilmiy va ijodiy ishlar</h3>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <PlayCircleOutlined className="mt-1 text-accent" />
                            <p className="m-0 text-sm">
                                <strong>Sadikova Z.S.</strong> – “Ansambl sinfi (estrada ijrochiligi)” o‘quv qo‘llanmasi muallifi.
                            </p>
                        </div>
                        <div className="flex items-start gap-3">
                            <PlayCircleOutlined className="mt-1 text-accent" />
                            <p className="m-0 text-sm">
                                <strong>Abdurazzoqova Z.A.</strong> – “Fortepiano” o‘quv qo‘llanmasi nashrga tayyorlanmoqda.
                            </p>
                        </div>
                        <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                            <p className="text-sm italic text-gray-500 m-0">
                                Kafedrada muntazam ravishda “Eng yaxshi asar ijrochisi” ko‘rik-tanlovlari va hisobot konsertlari o‘tkazib kelinmoqda.
                            </p>
                        </div>
                    </div>
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
                            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white m-0 flex items-center gap-2">
                                        {person.name}
                                        {person.role.includes("mudiri") && <Tag color="gold" className="ml-2 m-0 text-xs">Mudir</Tag>}
                                    </h3>
                                    <p className="text-accent font-medium mt-1 mb-2">{person.role}</p>
                                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                                        <SoundOutlined /> {person.subjects}
                                    </div>
                                </div>

                                {person.achievements && (
                                    <div className="md:w-1/3 bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg border border-blue-100 dark:border-blue-900/30">
                                        <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase">Yutuqlar</span>
                                        <p className="text-sm text-gray-700 dark:text-gray-300 m-0 mt-1">
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

export default PianoDepartment;
