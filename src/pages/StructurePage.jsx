import React, { useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { Card, Typography, Button } from 'antd';
import { AppstoreOutlined, TeamOutlined, BankOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import structureImg from '../assets/images/Institut tuzilmasi.jpg';
import mansurovImg from '../assets/images/mansurov.jpg';
import qurbonovaImg from '../assets/images/qurbonova.jpg';
import mirzayevImg from '../assets/images/mirzayev.jpg';
import muxamedovaImg from '../assets/images/muxamedova.jpg';
import tursunbayevImg from '../assets/images/tursunbayev.jpg';
import tashkilEtishImg from '../assets/images/tashkil_etish.jpg';
import prezidentQaroriImg from '../assets/images/Prezident_qarori.jpg';

// PDF Files (Moved to public for better serving and renamed to avoid encoding issues)
const guvohnomaPdf = '/assets/pdf/zakirov_certificate_2022.pdf';
const buyruqPdf = '/assets/pdf/order_428_2021.pdf';
const buyruq498Pdf = '/assets/pdf/order_498.pdf';
const ustavPdf = '/assets/pdf/charter_2022.pdf';
const shartnomaPdf = '/assets/pdf/agreement_2023_2025.pdf';
const tuzilmaPdf = '/assets/pdf/structure_2022.pdf';

import gerbLogo from '../assets/images/gerb-logo.jpg';
import oliyLogo from '../assets/images/oliy-logo.jpg';
import madaniyatLogo from '../assets/images/madaniyat-logo.jpg';
import uzbeknavoLogo from '../assets/images/uzbeknamo-logo.jpg';
import konsLogo from '../assets/images/kons-logo.jpg';
import botirZokirovIjodiImg from '../assets/images/Botir_zokirov_ijodi.jpg';
import {
    UserOutlined,
    HistoryOutlined,
    FileTextOutlined,
    GlobalOutlined,
    LinkOutlined,
    CustomerServiceOutlined,
    PhoneOutlined,
    MailOutlined,
    ClockCircleOutlined,
    ArrowLeftOutlined,
    RightOutlined,
    ArrowRightOutlined,
    ExportOutlined
} from '@ant-design/icons';
import EstradaDepartment from '../components/departments/EstradaDepartment';
import PedagogyDepartment from '../components/departments/PedagogyDepartment';
import ConductingDepartment from '../components/departments/ConductingDepartment';
import CompositionDepartment from '../components/departments/CompositionDepartment';
import PianoDepartment from '../components/departments/PianoDepartment';
import VocalDepartment from '../components/departments/VocalDepartment';
import SoundEngineeringDepartment from '../components/departments/SoundEngineeringDepartment';
import MusicTheoryDepartment from '../components/departments/MusicTheoryDepartment';
import SocialSciencesDepartment from '../components/departments/SocialSciencesDepartment';

const { Title, Paragraph } = Typography;

const StructurePage = () => {
    const { t } = useTranslation();
    const [selectedKey, setSelectedKey] = useState('main');
    const [selectedDepartment, setSelectedDepartment] = useState(null);
    const [selectedFacultyItem, setSelectedFacultyItem] = useState(null);

    const menuItems = [
        { key: 'main', icon: <AppstoreOutlined />, label: t('structure.menu.main') },
        { key: 'composition', icon: <TeamOutlined />, label: t('structure.menu.composition') },
        { key: 'faculties', icon: <BankOutlined />, label: t('structure.menu.faculties') },
        { key: 'leadership', icon: <UserOutlined />, label: t('header.menu.sub.leadership') },
        { key: 'history', icon: <HistoryOutlined />, label: t('header.menu.sub.history') },
        { key: 'docs', icon: <FileTextOutlined />, label: t('header.menu.sub.docs') },
        { key: 'coop', icon: <GlobalOutlined />, label: t('header.menu.sub.coop') },
        { key: 'links', icon: <LinkOutlined />, label: t('header.menu.sub.links') },
        { key: 'zakirov', icon: <CustomerServiceOutlined />, label: t('header.menu.sub.zakirov') },
    ];

    const renderContent = () => {
        switch (selectedKey) {
            case 'main':
                return (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-1.5 h-10 bg-accent rounded-full"></div>
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white m-0">
                                {t('structure.menu.main')}
                            </h1>
                        </div>

                        <Card className="shadow-2xl border-none rounded-2xl overflow-hidden glass-card hover:shadow-3xl transition-shadow duration-300">
                            <div className="p-4 bg-white dark:bg-gray-800">
                                <img
                                    src={structureImg}
                                    alt="Institut Tuzilmasi"
                                    className="w-full h-auto rounded-xl shadow-inner"
                                />
                            </div>
                        </Card>
                    </motion.div>
                );
            case 'composition':
                const compositionData = [
                    {
                        title: t('structure.composition.sections.1.title'),
                        items: [
                            { id: 'council', title: t('structure.composition.sections.1.items.1') },
                            { id: 'trustee_council', title: t('structure.composition.sections.1.items.2') },
                            { id: 'advisory_council', title: t('structure.composition.sections.1.items.3') }
                        ]
                    },
                    {
                        title: t('structure.composition.sections.2.title'),
                        items: [
                            { id: 'youth_dept', title: t('structure.composition.sections.2.items.1') },
                            { id: 'tutors', title: t('structure.composition.sections.2.items.2') },
                            { id: 'museum', title: t('structure.composition.sections.2.items.3') },
                            { id: 'concert_dept', title: t('structure.composition.sections.2.items.4') },
                            { id: 'public_orgs', title: t('structure.composition.sections.2.items.5') }
                        ]
                    },
                    {
                        title: t('structure.composition.sections.3.title'),
                        items: [
                            { id: 'faculties_depts', title: t('structure.composition.sections.3.items.1') },
                            { id: 'edu_admin', title: t('structure.composition.sections.3.items.2') },
                            { id: 'registrar', title: t('structure.composition.sections.3.items.3') },
                            { id: 'edu_support', title: t('structure.composition.sections.3.items.4') },
                            { id: 'library', title: t('structure.composition.sections.3.items.5') },
                            { id: 'marketing', title: t('structure.composition.sections.3.items.6') },
                            { id: 'video_phonetics', title: t('structure.composition.sections.3.items.7') },
                            { id: 'recording_studio', title: t('structure.composition.sections.3.items.8') },
                            { id: 'correspondence_dept', title: t('structure.composition.sections.3.items.9') }
                        ]
                    },
                    {
                        title: t('structure.composition.sections.4.title'),
                        items: [
                            { id: 'science_sector', title: t('structure.composition.sections.4.items.1') },
                            { id: 'gifted_students', title: t('structure.composition.sections.4.items.2') },
                            { id: 'masters', title: t('structure.composition.sections.4.items.3') },
                            { id: 'publishing', title: t('structure.composition.sections.4.items.4') },
                            { id: 'commercialization', title: t('structure.composition.sections.4.items.5') }
                        ]
                    },
                    {
                        title: t('structure.composition.sections.5.title'),
                        items: [
                            { id: 'finance', title: t('structure.composition.sections.5.items.1') },
                            { id: 'accounting', title: t('structure.composition.sections.5.items.2') },
                            { id: 'engineer', title: t('structure.composition.sections.5.items.3') },
                            { id: 'digital_center', title: t('structure.composition.sections.5.items.4') },
                            { id: 'tech_dept', title: t('structure.composition.sections.5.items.5') },
                            { id: 'tech_aids', title: t('structure.composition.sections.5.items.6') },
                            { id: 'civil_defense', title: t('structure.composition.sections.5.items.7') },
                            { id: 'medical', title: t('structure.composition.sections.5.items.8') }
                        ]
                    },
                    {
                        title: t('structure.composition.sections.6.title'),
                        items: [
                            { id: 'quality_control', title: t('structure.composition.sections.6.items.1') },
                            { id: 'appeals', title: t('structure.composition.sections.6.items.2') },
                            { id: 'chancellery', title: t('structure.composition.sections.6.items.3') },
                            { id: 'int_coop', title: t('structure.composition.sections.6.items.4') },
                            { id: 'hr', title: t('structure.composition.sections.6.items.5') },
                            { id: 'lawyer', title: t('structure.composition.sections.6.items.6') },
                            { id: 'secretary', title: t('structure.composition.sections.6.items.7') },
                            { id: 'advisor', title: t('structure.composition.sections.6.items.8') },
                            { id: 'press_secretary', title: t('structure.composition.sections.6.items.9') },
                            { id: 'psychologist', title: t('structure.composition.sections.6.items.10') },
                            { id: 'anti_corruption', title: t('structure.composition.sections.6.items.11') }
                        ]
                    }
                ];

                if (selectedDepartment) {
                    return (
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <button
                                onClick={() => setSelectedDepartment(null)}
                                className="flex items-center gap-2 text-accent hover:text-accent/80 font-bold mb-6 transition-colors group"
                            >
                                <ArrowLeftOutlined className="group-hover:-translate-x-1 transition-transform" />
                                {t('structure.composition.static.back')}
                            </button>

                            <Card className="shadow-2xl border-none rounded-2xl overflow-hidden glass-card">
                                <div className="p-8">
                                    <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 border-b border-gray-100 dark:border-gray-700 pb-4">
                                        {selectedDepartment.title}
                                    </h1>
                                    <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
                                        <p>{t('structure.composition.static.details_coming_soon')}</p>
                                        <p>{t('structure.composition.static.info_preparing')}</p>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    );
                }

                return (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex items-center gap-4 mb-10">
                            <div className="w-2 h-12 bg-gradient-to-b from-[#c0a062] to-[#8a6e36] rounded-full shadow-lg"></div>
                            <h1 className="text-4xl md:text-5xl font-extrabold text-[#002140] dark:text-white m-0 tracking-tight">
                                {t('structure.menu.composition')}
                            </h1>
                        </div>

                        <div className="space-y-12">
                            {compositionData.map((section, idx) => (
                                <div key={idx} className="relative">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="h-px bg-gray-200 dark:bg-gray-700 flex-grow"></div>
                                        <h2 className="text-xl md:text-2xl font-bold text-[#c0a062] dark:text-[#d4b983] whitespace-nowrap px-6 py-2 bg-[#002140]/5 dark:bg-white/5 rounded-full uppercase tracking-wider border border-[#c0a062]/20 shadow-sm">
                                            {section.title}
                                        </h2>
                                        <div className="h-px bg-gray-200 dark:bg-gray-700 flex-grow"></div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                                        {section.items.map((item, itemIdx) => (
                                            <motion.div
                                                key={itemIdx}
                                                whileHover={{ y: -5, scale: 1.02 }}
                                                onClick={() => setSelectedDepartment(item)}
                                                className={`
                                                    group relative overflow-hidden rounded-2xl p-6 cursor-pointer transition-all duration-300
                                                    shadow-md hover:shadow-xl border flex items-center justify-between
                                                    ${(item.id === 'museum' || item.id === 'medical')
                                                        ? 'bg-gradient-to-br from-[#c0a062] to-[#b08d4b] border-transparent'
                                                        : 'bg-white dark:bg-[#0f2a4a] border-gray-100 dark:border-gray-700 hover:border-[#c0a062]/50'
                                                    }
                                                `}
                                            >
                                                {/* Background decoration */}
                                                <div className="absolute top-0 right-0 -mr-8 -mt-8 w-24 h-24 rounded-full bg-white/5 blur-2xl group-hover:bg-white/10 transition-colors"></div>

                                                <div className="relative z-10 flex-1 pr-4">
                                                    <span className={`
                                                        font-bold text-lg leading-snug transition-colors block
                                                        ${(item.id === 'museum' || item.id === 'medical')
                                                            ? 'text-white'
                                                            : 'text-[#002140] dark:text-gray-100 group-hover:text-[#c0a062] dark:group-hover:text-[#d4b983]'
                                                        }
                                                    `}>
                                                        {item.title}
                                                    </span>
                                                </div>

                                                <div className={`
                                                    w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 shadow-sm
                                                    ${(item.id === 'museum' || item.id === 'medical')
                                                        ? 'bg-white/20 text-white group-hover:bg-white group-hover:text-[#c0a062]'
                                                        : 'bg-[#002140]/5 dark:bg-white/5 text-[#002140] dark:text-white group-hover:bg-[#c0a062] group-hover:text-white'
                                                    }
                                                `}>
                                                    <RightOutlined className="text-sm" />
                                                </div>

                                                {/* Bottom accent line */}
                                                {item.id !== 'museum' && item.id !== 'medical' && (
                                                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#c0a062] transition-all duration-300 group-hover:w-full"></div>
                                                )}
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                );
            case 'faculties':
                const facultiesData = [
                    {
                        title: t('structure.faculties.list.1.title'),
                        departments: [
                            { id: 'dev_instrument', title: t('structure.faculties.list.1.departments.1') },
                            { id: 'pedagogy', title: t('structure.faculties.list.1.departments.2') },
                            { id: 'composition', title: t('structure.faculties.list.1.departments.3') },
                            { id: 'conducting', title: t('structure.faculties.list.1.departments.4') },
                            { id: 'piano', title: t('structure.faculties.list.1.departments.5') }
                        ]
                    },
                    {
                        title: t('structure.faculties.list.2.title'),
                        departments: [
                            { id: 'vocal', title: t('structure.faculties.list.2.departments.1') },
                            { id: 'sound_engineering', title: t('structure.faculties.list.2.departments.2') },
                            { id: 'music_theory', title: t('structure.faculties.list.2.departments.3') },
                            { id: 'social_sciences', title: t('structure.faculties.list.2.departments.4') }
                        ]
                    }
                ];

                if (selectedFacultyItem) {
                    return (
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <button
                                onClick={() => setSelectedFacultyItem(null)}
                                className="flex items-center gap-2 text-accent hover:text-accent/80 font-bold mb-6 transition-colors group"
                            >
                                <ArrowLeftOutlined className="group-hover:-translate-x-1 transition-transform" />
                                {t('structure.faculties.static.back')}
                            </button>

                            <Card className="shadow-2xl border-none rounded-2xl overflow-hidden glass-card">
                                <div className="p-8">
                                    <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 border-b border-gray-100 dark:border-gray-700 pb-4">
                                        {selectedFacultyItem.title || selectedFacultyItem}
                                    </h1>
                                    {selectedFacultyItem.id === 'dev_instrument' ? (
                                        <EstradaDepartment />
                                    ) : selectedFacultyItem.id === 'pedagogy' ? (
                                        <PedagogyDepartment />
                                    ) : selectedFacultyItem.id === 'conducting' ? (
                                        <ConductingDepartment />
                                    ) : selectedFacultyItem.id === 'composition' ? (
                                        <CompositionDepartment />
                                    ) : selectedFacultyItem.id === 'piano' ? (
                                        <PianoDepartment />
                                    ) : selectedFacultyItem.id === 'vocal' ? (
                                        <VocalDepartment />
                                    ) : selectedFacultyItem.id === 'sound_engineering' ? (
                                        <SoundEngineeringDepartment />
                                    ) : selectedFacultyItem.id === 'music_theory' ? (
                                        <MusicTheoryDepartment />
                                    ) : selectedFacultyItem.id === 'social_sciences' ? (
                                        <SocialSciencesDepartment />
                                    ) : (
                                        <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
                                            <p>{t('structure.faculties.static.details_coming_soon')}</p>
                                            <p>{t('structure.faculties.static.info_preparing')}</p>
                                        </div>
                                    )}
                                </div>
                            </Card>
                        </motion.div>
                    );
                }

                return (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex items-center gap-4 mb-10">
                            <div className="w-2 h-12 bg-gradient-to-b from-[#c0a062] to-[#8a6e36] rounded-full shadow-lg"></div>
                            <h1 className="text-4xl md:text-5xl font-extrabold text-[#002140] dark:text-white m-0 tracking-tight">
                                {t('structure.menu.faculties')}
                            </h1>
                        </div>

                        <div className="space-y-12">
                            {facultiesData.map((faculty, idx) => (
                                <div key={idx} className="relative">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#c0a062] to-[#8a6e36] flex items-center justify-center shadow-lg text-white text-2xl">
                                            <BankOutlined />
                                        </div>
                                        <div>
                                            <h2 className="text-2xl md:text-3xl font-bold text-[#002140] dark:text-white">
                                                {faculty.title}
                                            </h2>
                                            <p className="text-gray-500 dark:text-gray-400 font-medium">{t('structure.faculties.static.fac_departments')}</p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                                        {/* Faculty itself as a clickable item? Maybe not, usually clicking faculty goes to faculty page. Let's make the header clickable optionally or just list departments. User asked for "like this", implying listing departments. */}
                                        <motion.div
                                            whileHover={{ y: -5, scale: 1.02 }}
                                            onClick={() => setSelectedFacultyItem(faculty.title)}
                                            className="col-span-1 md:col-span-2 lg:col-span-3 bg-gradient-to-r from-[#002140] to-[#0f2a4a] rounded-2xl p-6 cursor-pointer shadow-xl group relative overflow-hidden"
                                        >
                                            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-64 h-64 rounded-full bg-[#c0a062]/10 blur-3xl group-hover:bg-[#c0a062]/20 transition-colors"></div>
                                            <div className="relative z-10 flex justify-between items-center">
                                                <div>
                                                    <h3 className="text-xl font-bold text-white mb-2">{t('structure.faculties.static.general_info')}</h3>
                                                    <p className="text-gray-300">{t('structure.faculties.static.deanery')}</p>
                                                </div>
                                                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-[#c0a062] transition-colors">
                                                    <RightOutlined />
                                                </div>
                                            </div>
                                        </motion.div>

                                        {faculty.departments.map((dept, deptIdx) => (
                                            <motion.div
                                                key={deptIdx}
                                                whileHover={{ y: -5, scale: 1.02 }}
                                                onClick={() => setSelectedFacultyItem(dept)}
                                                className="group relative overflow-hidden rounded-2xl p-6 cursor-pointer transition-all duration-300 shadow-md hover:shadow-xl border bg-white dark:bg-[#0f2a4a] border-gray-100 dark:border-gray-700 hover:border-[#c0a062]/50 flex flex-col justify-between min-h-[140px]"
                                            >
                                                <div className="absolute top-0 right-0 w-20 h-20 bg-[#c0a062]/5 rounded-bl-full -mr-4 -mt-4 transition-all group-hover:bg-[#c0a062]/10"></div>

                                                <h3 className="font-bold text-lg leading-snug text-[#002140] dark:text-gray-100 group-hover:text-[#c0a062] dark:group-hover:text-[#d4b983] transition-colors relative z-10 pr-2">
                                                    {dept.title}
                                                </h3>

                                                <div className="flex justify-between items-end mt-4">
                                                    <span className="text-xs font-bold uppercase tracking-wider text-gray-400 group-hover:text-[#c0a062]">{t('structure.faculties.static.department')}</span>
                                                    <div className="w-8 h-8 rounded-full bg-[#002140]/5 dark:bg-white/5 flex items-center justify-center text-[#002140] dark:text-white group-hover:bg-[#c0a062] group-hover:text-white transition-all">
                                                        <RightOutlined className="text-xs" />
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Divider between faculties if not last */}
                                    {idx < facultiesData.length - 1 && <div className="h-px bg-gray-200 dark:bg-gray-800 my-12"></div>}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                );
            case 'leadership':
                const leaders = [
                    {
                        id: 1,
                        name: t('leadership.items.1.name'),
                        role: t('leadership.items.1.role'),
                        title: t('leadership.items.1.title'),
                        time: t('leadership.items.1.time'),
                        phone: "+998 71 200 00 00",
                        email: "info@estrada-art.uz",
                        image: mansurovImg
                    },
                    {
                        id: 2,
                        name: t('leadership.items.2.name'),
                        role: t('leadership.items.2.role'),
                        title: t('leadership.items.2.title'),
                        time: t('leadership.items.2.time'),
                        phone: "+998 71 200 00 00",
                        email: "qurbonovaf@mail.ru",
                        image: qurbonovaImg
                    },
                    {
                        id: 3,
                        name: t('leadership.items.3.name'),
                        role: t('leadership.items.3.role'),
                        title: t('leadership.items.3.title'),
                        time: t('leadership.items.3.time'),
                        phone: "+998 71 200 00 00",
                        email: "mesiakbarjon@gmail.com",
                        image: mirzayevImg
                    },
                    {
                        id: 4,
                        name: t('leadership.items.4.name'),
                        role: t('leadership.items.4.role'),
                        title: t('leadership.items.4.title'),
                        time: t('leadership.items.4.time'),
                        phone: "+998 71 200 00 00",
                        email: "feruzamuhamedova1986@gmail.com",
                        image: muxamedovaImg
                    },
                    {
                        id: 5,
                        name: t('leadership.items.5.name'),
                        role: t('leadership.items.5.role'),
                        title: t('leadership.items.5.title'),
                        time: t('leadership.items.5.time'),
                        phone: "+998 71 200 00 00",
                        email: "info@estrada-art.uz",
                        image: tursunbayevImg
                    }
                ];

                return (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-8"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-1.5 h-10 bg-accent rounded-full"></div>
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white m-0">
                                {t('leadership.title')}
                            </h1>
                        </div>

                        <div className="space-y-8">
                            {leaders.map((leader, index) => (
                                <Card
                                    key={leader.id}
                                    className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 dark:bg-gray-800"
                                >
                                    <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                                        <div className="w-full md:w-1/3 lg:w-1/4 flex-shrink-0">
                                            <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-lg relative bg-gray-200 dark:bg-gray-700">
                                                <img
                                                    src={leader.image}
                                                    alt={leader.name}
                                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                                />
                                            </div>
                                        </div>

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
                                </Card>
                            ))}
                        </div>
                    </motion.div>
                );
            case 'history':
                const timelineData = [
                    {
                        year: t('history.timeline.0.year'),
                        title: t('history.timeline.0.title'),
                        description: t('history.timeline.0.description')
                    },
                    {
                        year: t('history.timeline.1.year'),
                        title: t('history.timeline.1.title'),
                        description: t('history.timeline.1.description')
                    },
                    {
                        year: t('history.timeline.2.year'),
                        title: t('history.timeline.2.title'),
                        description: t('history.timeline.2.description')
                    },
                    {
                        year: t('history.timeline.3.year'),
                        title: t('history.timeline.3.title'),
                        description: t('history.timeline.3.description'),
                        image: prezidentQaroriImg
                    },
                    {
                        year: t('history.timeline.4.year'),
                        title: t('history.timeline.4.title'),
                        description: t('history.timeline.4.description')
                    }
                ];

                return (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex items-center gap-4 mb-10">
                            <div className="w-2 h-12 bg-gradient-to-b from-[#c0a062] to-[#8a6e36] rounded-full shadow-lg"></div>
                            <h1 className="text-4xl md:text-5xl font-extrabold text-[#002140] dark:text-white m-0 tracking-tight">
                                {t('header.menu.sub.history')}
                            </h1>
                        </div>

                        <div className="space-y-12">
                            {/* Intro Section */}
                            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-700">
                                <div className="flex flex-col xl:flex-row gap-10 items-center">
                                    <div className="xl:w-1/2 space-y-6">
                                        <div className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed space-y-4">
                                            <p>
                                                <Trans i18nKey="history.intro1">
                                                    O‘zbekiston Respublikasi Prezidentining 2021-yil 16-oktabrdagi <span className="font-semibold text-[#c0a062]">PQ-5261-son qarori</span> bilan O‘zbekiston davlat konservatoriyasi huzuridagi Botir Zokirov nomidagi Milliy estrada san’ati instituti tashkil etildi.
                                                </Trans>
                                            </p>
                                            <p>{t('history.intro2')}</p>
                                        </div>

                                        <div className="relative p-6 bg-[#002140]/5 dark:bg-white/5 rounded-2xl border-l-4 border-[#c0a062]">
                                            <div className="absolute top-2 left-2 text-[#c0a062]/20 text-4xl font-serif">“</div>
                                            <blockquote className="relative z-10 italic text-gray-800 dark:text-gray-100 font-medium leading-loose pl-4">
                                                <Trans i18nKey="history.quote">
                                                    "Taqdir Botir Zokirovning zimmasiga o‘zbek estrada san’atining asoschisi bo‘lishdek ulug‘vor bir vazifani yukladi va bu vazifani u sharaf bilan ado etdi..."
                                                </Trans>
                                            </blockquote>
                                        </div>

                                        <Button
                                            type="primary"
                                            size="large"
                                            className="bg-[#002140] hover:bg-[#002140]/90 h-12 px-6 rounded-xl shadow-lg flex items-center gap-2 border-none"
                                            href="https://yuz.uz/uz/news/ozbekiston-respublikasi-prezidenti-shavkat-mirziyoevning-ozbekiston-xalq-artisti-botir-zokirov-haykalining-ochilishiga-bagishlangan-tantanali-marosimdagi-nutqi"
                                            target="_blank"
                                        >
                                            <ArrowRightOutlined /> {t('history.btn_speech')}
                                        </Button>
                                    </div>

                                    <div className="xl:w-1/2 w-full">
                                        <div className="relative group rounded-2xl overflow-hidden shadow-2xl">
                                            <div className="absolute inset-0 bg-[#002140]/20 group-hover:bg-transparent transition-all duration-500 z-10"></div>
                                            <img
                                                src={tashkilEtishImg}
                                                alt="Botir Zokirov haykali"
                                                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Timeline */}
                            <div className="relative pl-4 md:pl-8 space-y-12 before:absolute before:inset-y-0 before:left-0 before:w-0.5 before:bg-gradient-to-b before:from-[#c0a062] before:to-transparent">
                                {timelineData.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="relative pl-8 md:pl-12"
                                    >
                                        <span className="absolute -left-[5px] top-2 w-3 h-3 rounded-full bg-[#c0a062] ring-4 ring-white dark:ring-gray-900 shadow-lg"></span>

                                        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow">
                                            <span className="inline-block px-3 py-1 mb-3 text-sm font-bold text-white bg-[#c0a062] rounded-full shadow-md">
                                                {item.year}
                                            </span>
                                            <h3 className="text-xl md:text-2xl font-bold text-[#002140] dark:text-white mb-3">
                                                {item.title}
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                                {item.description}
                                            </p>
                                            {item.image && (
                                                <div className="mt-6 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800 max-w-md mx-auto xl:mx-0">
                                                    <img src={item.image} alt={item.title} className="w-full h-auto" />
                                                </div>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                );
            case 'docs':
            case 'docs':
                const docLinks = {
                    1: "https://lex.uz/docs/-5013007",
                    2: "https://www.lex.uz/docs/-5230682",
                    3: "https://lex.uz/uz/docs/-5680302",
                    4: "https://lex.uz/uz/docs/-6764159",
                    5: guvohnomaPdf,
                    6: buyruqPdf,
                    7: buyruq498Pdf,
                    8: ustavPdf,
                    9: shartnomaPdf,
                    10: tuzilmaPdf
                };

                const docsData = Array.from({ length: 10 }, (_, i) => {
                    const id = i + 1;
                    return {
                        title: t(`structure.docs.items.${id}.title`),
                        code: t(`structure.docs.items.${id}.code`),
                        link: docLinks[id],
                        isPdf: id >= 5
                    };
                });

                return (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex items-center gap-4 mb-10">
                            <div className="w-2 h-12 bg-gradient-to-b from-[#c0a062] to-[#8a6e36] rounded-full shadow-lg"></div>
                            <h1 className="text-4xl md:text-5xl font-extrabold text-[#002140] dark:text-white m-0 tracking-tight">
                                {t('header.menu.sub.docs')}
                            </h1>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700">
                            <p className="text-gray-500 dark:text-gray-400 mb-8 font-medium uppercase tracking-wider text-sm">
                                {t('structure.docs.list_title')}
                            </p>

                            <div className="space-y-6">
                                {docsData.map((doc, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col md:flex-row md:items-center justify-between gap-6 p-6 rounded-xl bg-gray-50 dark:bg-[#002140]/30 hover:bg-white dark:hover:bg-[#002140]/50 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 group"
                                    >
                                        <div className="space-y-2">
                                            <h3 className="text-lg md:text-xl font-bold text-[#002140] dark:text-gray-100 group-hover:text-[#c0a062] transition-colors leading-snug">
                                                {doc.title}
                                            </h3>
                                            <div className="inline-block px-3 py-1 bg-white dark:bg-white/5 rounded-md text-sm font-semibold text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700 shadow-sm">
                                                {doc.code}
                                            </div>
                                        </div>

                                        <Button
                                            type="primary"
                                            size="large"
                                            href={doc.link}
                                            target="_blank"
                                            className="bg-[#1b4332] hover:bg-[#1b4332]/90 border-none shadow-md flex items-center gap-2 min-w-[120px] justify-center h-12 text-base font-medium rounded-lg"
                                        >
                                            {t('structure.docs.read')} <ExportOutlined />
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                );
            case 'coop':
                return (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex items-center gap-4 mb-10">
                            <div className="w-2 h-12 bg-gradient-to-b from-[#c0a062] to-[#8a6e36] rounded-full shadow-lg"></div>
                            <h1 className="text-4xl md:text-5xl font-extrabold text-[#002140] dark:text-white m-0 tracking-tight">
                                {t('header.menu.sub.coop')}
                            </h1>
                        </div>

                        <div className="space-y-8">
                            {/* Contact Card */}
                            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden relative">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#c0a062]/10 rounded-bl-full -mr-10 -mt-10"></div>

                                <h2 className="text-2xl font-bold text-[#002140] dark:text-white mb-6 relative z-10">Bo‘lim boshlig‘i</h2>

                                <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
                                    <div className="flex-1 space-y-4">
                                        <h2 className="text-xl font-bold text-[#002140] dark:text-white mb-2">{t('structure.coop.head_title')}</h2>
                                        <h3 className="text-3xl font-bold text-[#c0a062] tracking-wide">Abdullaeva Suraya Abdulaxadovna</h3>

                                        <div className="space-y-3 pt-2">
                                            <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300 group">
                                                <div className="w-10 h-10 rounded-full bg-[#002140]/5 dark:bg-white/5 flex items-center justify-center text-[#002140] dark:text-white group-hover:bg-[#c0a062] group-hover:text-white transition-all">
                                                    <PhoneOutlined />
                                                </div>
                                                <span className="text-lg font-medium">+998 97 741 16 32</span>
                                            </div>
                                            <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300 group">
                                                <div className="w-10 h-10 rounded-full bg-[#002140]/5 dark:bg-white/5 flex items-center justify-center text-[#002140] dark:text-white group-hover:bg-[#c0a062] group-hover:text-white transition-all">
                                                    <MailOutlined />
                                                </div>
                                                <a href="mailto:abdullaeva1954@mail.ru" className="text-lg font-medium hover:text-[#c0a062] transition-colors">abdullaeva1954@mail.ru</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Main Content */}
                            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-700">
                                <div className="prose dark:prose-invert max-w-none">
                                    <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-8 border-l-4 border-[#c0a062] pl-6 italic bg-gray-50 dark:bg-white/5 py-4 rounded-r-xl">
                                        {t('structure.coop.description')}
                                    </p>

                                    <h3 className="text-2xl font-bold text-[#002140] dark:text-white mb-6 flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-[#c0a062]"></div>
                                        {t('structure.coop.tasks_title')}
                                    </h3>

                                    <ul className="space-y-4 list-none pl-0">
                                        {[1, 2, 3, 4, 5, 6, 7].map((id) => (
                                            <li key={id} className="flex gap-4 items-start text-gray-700 dark:text-gray-300 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-colors border border-transparent hover:border-gray-100 dark:hover:border-gray-700 cursor-default">
                                                <div className="w-6 h-6 rounded-full bg-[#c0a062]/20 flex items-center justify-center flex-shrink-0 mt-0.5 text-[#c0a062]">
                                                    <div className="w-2 h-2 bg-[#c0a062] rounded-full"></div>
                                                </div>
                                                <span className="text-lg leading-snug">{t(`structure.coop.tasks.${id}`)}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                );
            case 'links':
                const linksConfig = [
                    {
                        id: 1,
                        url: "https://constitution.uz/oz",
                        logo: gerbLogo
                    },
                    {
                        id: 2,
                        url: "https://edu.uz/uz",
                        logo: oliyLogo
                    },
                    {
                        id: 3,
                        url: "https://gov.uz/oz/madaniyat",
                        logo: madaniyatLogo
                    },
                    {
                        id: 4,
                        url: "https://ihamkor.uz/ru/subject/718e6bb3ab38c8283279aaf2eaae2f2f?section=gi&n=O%27ZBEKNAVO+ESTRADA+BIRLASHMASI&u=1177499750",
                        logo: uzbeknavoLogo
                    },
                    {
                        id: 5,
                        url: "https://konservatoriya.uz/",
                        logo: konsLogo
                    }
                ];

                const linksData = linksConfig.map(config => ({
                    ...config,
                    title: t(`structure.links.items.${config.id}.title`),
                    desc: t(`structure.links.items.${config.id}.desc`),
                    source: config.id === 1 ? t(`structure.links.items.1.source`) : null,
                    footer: config.id === 5 ? t(`structure.links.items.5.footer`) : null
                }));

                return (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex items-center gap-4 mb-10">
                            <div className="w-2 h-12 bg-gradient-to-b from-[#c0a062] to-[#8a6e36] rounded-full shadow-lg"></div>
                            <h1 className="text-4xl md:text-5xl font-extrabold text-[#002140] dark:text-white m-0 tracking-tight">
                                {t('header.menu.sub.links')}
                            </h1>
                        </div>

                        <div className="space-y-6">
                            {linksData.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 flex flex-col md:flex-row gap-8 items-center md:items-start group hover:shadow-xl transition-all duration-300"
                                >
                                    <div className="w-full md:w-1/4 xl:w-1/5 flex-shrink-0">
                                        <div className="aspect-[4/3] bg-white rounded-xl border border-gray-200 p-4 flex items-center justify-center">
                                            <img
                                                src={item.logo}
                                                alt={item.title}
                                                className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-500"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex-1 space-y-3 text-center md:text-left">
                                        <h3 className="text-xl md:text-2xl font-bold text-[#002140] dark:text-white group-hover:text-[#c0a062] transition-colors">
                                            <a href={item.url} target="_blank" rel="noopener noreferrer">
                                                {item.title}
                                            </a>
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                                            {item.desc}
                                        </p>

                                        {item.source && (
                                            <p className="text-gray-500 text-sm">Manba: {item.source}</p>
                                        )}
                                        {item.footer && (
                                            <div className="pt-3 mt-3 border-t border-gray-100 dark:border-gray-700">
                                                <p className="text-gray-500 text-sm italic">{item.footer}</p>
                                            </div>
                                        )}
                                    </div>

                                    <div className="flex-shrink-0 self-center md:self-start pt-2">
                                        <Button
                                            href={item.url}
                                            target="_blank"
                                            className="bg-[#002140]/5 dark:bg-white/5 text-[#002140] dark:text-white border-none hover:bg-[#c0a062] hover:text-white w-12 h-12 rounded-full flex items-center justify-center transition-all shadow-sm"
                                        >
                                            <ExportOutlined />
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                );
            case 'zakirov':
                return (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex items-center gap-4 mb-10">
                            <div className="w-2 h-12 bg-gradient-to-b from-[#c0a062] to-[#8a6e36] rounded-full shadow-lg"></div>
                            <h1 className="text-4xl md:text-5xl font-extrabold text-[#002140] dark:text-white m-0 tracking-tight">
                                {t('header.menu.sub.zakirov')}
                            </h1>
                        </div>

                        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                            {/* Text Content */}
                            <div className="xl:col-span-2 space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                                {[1, 2, 3, 4, 5, 6, 7, 8].map((id) => (
                                    <p key={id}>
                                        {t(`structure.zakirov.bio.p${id}`)}
                                    </p>
                                ))}
                            </div>

                            {/* Right Column: Image and Quote */}
                            <div className="xl:col-span-1 space-y-8">
                                <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-700">
                                    <img
                                        src={botirZokirovIjodiImg}
                                        alt="Botir Zokirov"
                                        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                                    />
                                </div>

                                <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border-l-4 border-[#c0a062]">
                                    <p className="italic text-gray-600 dark:text-gray-300 font-medium leading-relaxed mb-6">
                                        <span dangerouslySetInnerHTML={{ __html: t('structure.zakirov.quote.text') }} />
                                    </p>
                                    <div>
                                        <h4 className="font-bold text-[#002140] dark:text-white text-lg">{t('structure.zakirov.quote.author')}</h4>
                                        <p className="text-[#c0a062] font-medium text-sm">{t('structure.zakirov.quote.title')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                );
            default: return null;
        }
    }

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
                                    {t('header.menu.institute')}
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

export default StructurePage;
