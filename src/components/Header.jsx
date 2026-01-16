import React, { useState, useEffect } from 'react';
import { GlobalOutlined, MenuOutlined, CloseOutlined, SunOutlined, MoonOutlined, DownOutlined } from '@ant-design/icons';
import { Button, Dropdown, Drawer } from 'antd';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import AnnouncementBar from './AnnouncementBar';
import Logo from '../assets/images/Logo.jpg';

const Header = () => {
    const { t, i18n } = useTranslation();
    const { theme, toggleTheme } = useTheme();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    // Handle scroll effect for header
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isHeaderSolid = scrolled || !isHomePage;

    const changeLanguage = ({ key }) => {
        i18n.changeLanguage(key);
    };

    const langItems = [
        { key: 'uz', label: "O'zbek", onClick: changeLanguage },
        { key: 'ru', label: 'Русский', onClick: changeLanguage },
        { key: 'en', label: 'English', onClick: changeLanguage },
    ];

    const currentYear = new Date().getFullYear();

    const admissionItems = [
        { key: '5-1', label: <a href="/#call_center">{t('header.menu.sub.call_center')}</a> },
        { key: '5-2', label: <a href="/#quotas">{t('header.menu.sub.quotas')}</a> },
        { key: '5-3', label: <a href="/#foreign_admission">{t('header.menu.sub.foreign_admission')}</a> },
        { key: '5-4', label: <a href="/#programs">{t('header.menu.sub.programs')}</a> },
        { key: '5-5', label: <a href="/#exam_broadcast">{t('header.menu.sub.exam_broadcast')}</a> },
        { key: '5-6', label: <a href="/#competitions">{t('header.menu.sub.competitions')}</a> },
    ];

    const menuLinks = [
        { label: <Link to="/">{t('header.menu.home')}</Link>, key: 'home' },
        {
            label: <Link to="/structure">{t('header.menu.institute')}</Link>,
            key: 'institute',
        },
        {
            label: <Link to="/education">{t('header.menu.education')}</Link>,
            key: 'education',
        },
        {
            label: <Link to="/science">{t('header.menu.science')}</Link>,
            key: 'science',
        },
        {
            label: <Link to="/info-service">{t('header.menu.info_service')}</Link>,
            key: 'info_service',
        },
        {
            label: <Link to="/students">{t('header.menu.students')}</Link>,
            key: 'students',
        },
    ];

    return (
        <div className="fixed top-0 w-full z-50 transition-all duration-500">
            <div className={`transition-all duration-500 transform ${isHeaderSolid ? '-translate-y-full opacity-0 absolute w-full' : 'translate-y-0 opacity-100 relative'}`}>
                <AnnouncementBar />
            </div>

            <div
                className={`w-full transition-all duration-500 border-b backdrop-blur-md ${isHeaderSolid
                    ? 'bg-white/80 dark:bg-gray-900/80 shadow-lg py-3 border-gray-200/50 dark:border-gray-700/50 sticky top-0'
                    : 'bg-gradient-to-b from-black/50 to-transparent py-5 border-transparent'
                    }`}
            >
                <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">

                    {/* Logo Section */}
                    <div className="flex items-center gap-3 md:gap-4 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <div className={`relative flex-shrink-0 flex items-center justify-center rounded-full overflow-hidden border-2 border-white/20 transition-all duration-500 bg-white ${isHeaderSolid
                            ? 'w-12 h-12 shadow-md'
                            : 'w-16 h-16 shadow-2xl'
                            }`}>
                            <img
                                src={Logo}
                                alt="Batyr Zakirov Institute"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                        <div className={`leading-tight uppercase font-bold transition-all duration-500 flex flex-col ${isHeaderSolid
                            ? 'text-primary dark:text-white'
                            : 'text-white'
                            }`}>
                            <span className="text-[10px] md:text-xs tracking-[0.2em] font-semibold opacity-80 mb-0.5 text-accent/90">
                                {t('header.title')}
                            </span>
                            <span className={`font-sans tracking-wider uppercase transition-all duration-500 ${isHeaderSolid
                                ? 'text-xs md:text-sm font-bold'
                                : 'text-sm md:text-base font-extrabold text-shadow-lg'
                                }`}>
                                {t('header.subtitle')}
                            </span>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-6 xl:gap-8">
                        {menuLinks.map((link, index) => {
                            if (link.children) {
                                return (
                                    <Dropdown key={link.key || index} menu={{ items: link.children }} placement="bottom" arrow={{ pointAtCenter: true }}>
                                        <a
                                            className={`text-sm font-semibold uppercase tracking-widest transition-all duration-300 relative group py-2 flex items-center gap-1 cursor-pointer ${isHeaderSolid ? 'text-gray-700 dark:text-gray-200 hover:text-accent' : 'text-white/90 hover:text-white'
                                                }`}
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            {link.label}
                                            <DownOutlined className="text-xs opacity-70 group-hover:opacity-100 transition-opacity" />
                                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full ease-out"></span>
                                        </a>
                                    </Dropdown>
                                );
                            }
                            return (
                                <span
                                    key={index}
                                    className={`text-sm font-semibold uppercase tracking-widest transition-all duration-300 relative group py-2 ${isHeaderSolid ? 'text-gray-700 dark:text-gray-200 hover:text-accent' : 'text-white/90 hover:text-white'
                                        }`}
                                >
                                    {link.label}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full ease-out"></span>
                                </span>
                            );
                        })}
                    </nav>

                    {/* Language & Actions */}
                    <div className="hidden md:flex items-center gap-4 ml-8">
                        <Dropdown menu={{ items: admissionItems }} placement="bottomRight" arrow={{ pointAtCenter: true }}>
                            <Button type="primary" size="large" className="bg-accent hover:bg-[#a08550] border-none shadow-lg shadow-accent/20 rounded-full px-8 font-semibold tracking-wide transform hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2">
                                {t('header.menu.admission')} {currentYear} <DownOutlined className="text-xs" />
                            </Button>
                        </Dropdown>

                        <Button
                            type="text"
                            shape="circle"
                            icon={theme === 'dark' ? <SunOutlined className="text-lg" /> : <MoonOutlined className="text-lg" />}
                            onClick={toggleTheme}
                            className={`transition-colors duration-300 flex items-center justify-center ${isHeaderSolid ? 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800' : 'text-white hover:bg-white/20'}`}
                        />

                        <Dropdown menu={{ items: langItems }} placement="bottomRight" trigger={['click']}>
                            <Button
                                type="text"
                                className={`flex items-center gap-2 font-semibold transition-all duration-300 uppercase tracking-wide rounded-full px-4 ${isHeaderSolid ? 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800' : 'text-white hover:bg-white/20'
                                    }`}
                            >
                                <GlobalOutlined />
                                <span>{i18n.language}</span>
                            </Button>
                        </Dropdown>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden flex items-center gap-4">
                        <Button
                            type="text"
                            shape="circle"
                            icon={theme === 'dark' ? <SunOutlined /> : <MoonOutlined />}
                            onClick={toggleTheme}
                            className={isHeaderSolid ? 'text-gray-700 dark:text-gray-200' : 'text-white'}
                        />
                        <Button
                            type="text"
                            icon={<MenuOutlined className={`text-xl ${isHeaderSolid ? 'text-primary dark:text-white' : 'text-white'}`} />}
                            onClick={() => setMobileMenuOpen(true)}
                            size="large"
                            className="hover:bg-transparent"
                        />
                    </div>
                </div>
            </div>

            {/* Mobile Drawer */}
            <Drawer
                title={<span className="font-bold text-lg">{t('header.mobile_menu_title')}</span>}
                placement="right"
                onClose={() => setMobileMenuOpen(false)}
                open={mobileMenuOpen}
                closeIcon={<CloseOutlined className="text-lg text-primary dark:text-white" />}
                width={320}
                className="dark:bg-gray-900"
                classNames={{
                    body: 'dark:bg-gray-900 dark:text-white p-0',
                    header: 'dark:bg-gray-900 dark:text-white dark:border-gray-800'
                }}
            >
                <div className="flex flex-col h-full bg-white dark:bg-gray-900">
                    <nav className="flex flex-col p-6 space-y-2">
                        {menuLinks.map((link, index) => (
                            <div
                                key={index}
                                className="text-lg font-medium text-gray-800 dark:text-gray-200 hover:text-accent hover:bg-gray-50 dark:hover:bg-gray-800 px-4 py-3 rounded-xl transition-all"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.label}
                            </div>
                        ))}
                    </nav>

                    <div className="mt-auto p-6 border-t border-gray-100 dark:border-gray-800 space-y-4">
                        <div className="flex justify-between items-center bg-gray-50 dark:bg-gray-800 p-2 rounded-lg">
                            <span className="text-gray-500 dark:text-gray-400 text-sm px-2">Language:</span>
                            <Dropdown menu={{ items: langItems }} placement="topRight">
                                <Button type="text" icon={<GlobalOutlined />} className="uppercase font-bold text-gray-700 dark:text-white">{i18n.language}</Button>
                            </Dropdown>
                        </div>
                        <Button type="primary" block size="large" className="bg-accent h-12 text-lg font-bold shadow-lg shadow-accent/20 rounded-xl">{t('header.admission')}</Button>
                    </div>
                </div>
            </Drawer>
        </div>
    );
};

export default Header;
