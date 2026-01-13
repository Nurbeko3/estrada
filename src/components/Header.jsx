import React, { useState, useEffect } from 'react';
import { GlobalOutlined, MenuOutlined, CloseOutlined, SunOutlined, MoonOutlined } from '@ant-design/icons';
import { Button, Dropdown, Drawer } from 'antd';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';
import AnnouncementBar from './AnnouncementBar';

const Header = () => {
    const { t, i18n } = useTranslation();
    const { theme, toggleTheme } = useTheme();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Handle scroll effect for header
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const changeLanguage = ({ key }) => {
        i18n.changeLanguage(key);
    };

    const langItems = [
        { key: 'uz', label: "O'zbek", onClick: changeLanguage },
        { key: 'ru', label: 'Русский', onClick: changeLanguage },
        { key: 'en', label: 'English', onClick: changeLanguage },
    ];

    const menuLinks = [
        { label: t('header.menu.home'), href: "#" },
        { label: t('header.menu.news'), href: "#news" },
        { label: t('header.menu.leadership'), href: "#leadership" },
        { label: t('header.menu.gallery'), href: "#gallery" },
        { label: t('header.menu.contact'), href: "#contact" },
    ];

    return (
        <div className="fixed top-0 w-full z-50 transition-all duration-500">
            <div className={`transition-all duration-500 transform ${scrolled ? '-translate-y-full opacity-0 absolute w-full' : 'translate-y-0 opacity-100 relative'}`}>
                <AnnouncementBar />
            </div>

            <div
                className={`w-full transition-all duration-500 border-b backdrop-blur-md ${scrolled
                    ? 'bg-white/80 dark:bg-gray-900/80 shadow-lg py-3 border-gray-200/50 dark:border-gray-700/50 sticky top-0'
                    : 'bg-gradient-to-b from-black/50 to-transparent py-5 border-transparent'
                    }`}
            >
                <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">

                    {/* Logo Section */}
                    <div className="flex items-center gap-4">
                        <div className={`relative flex items-center justify-center rounded-full font-extrabold text-xl transition-all duration-500 ${scrolled ? 'w-10 h-10 bg-accent text-white shadow-md' : 'w-12 h-12 bg-white/20 backdrop-blur-md text-white border border-white/30 shadow-lg'
                            }`}>
                            BZ
                            <div className="absolute inset-0 rounded-full border border-white/20 animate-ping opacity-20"></div>
                        </div>
                        <div className={`leading-tight uppercase font-bold transition-colors duration-500 flex flex-col ${scrolled ? 'text-primary dark:text-white' : 'text-white'
                            }`}>
                            <span className="text-[10px] md:text-xs tracking-[0.2em] font-medium opacity-90">{t('header.title')}</span>
                            <span className="text-sm md:text-base tracking-wide">{t('header.subtitle')}</span>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {menuLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                className={`text-sm font-semibold uppercase tracking-widest transition-all duration-300 relative group py-2 ${scrolled ? 'text-gray-700 dark:text-gray-200 hover:text-accent' : 'text-white/90 hover:text-white'
                                    }`}
                            >
                                {link.label}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full ease-out"></span>
                            </a>
                        ))}
                    </nav>

                    {/* Language & Actions */}
                    <div className="hidden md:flex items-center gap-4">
                        <Button
                            type="text"
                            shape="circle"
                            icon={theme === 'dark' ? <SunOutlined className="text-lg" /> : <MoonOutlined className="text-lg" />}
                            onClick={toggleTheme}
                            className={`transition-colors duration-300 flex items-center justify-center ${scrolled ? 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800' : 'text-white hover:bg-white/20'}`}
                        />

                        <Dropdown menu={{ items: langItems }} placement="bottomRight" trigger={['click']}>
                            <Button
                                type="text"
                                className={`flex items-center gap-2 font-semibold transition-all duration-300 uppercase tracking-wide rounded-full px-4 ${scrolled ? 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800' : 'text-white hover:bg-white/20'
                                    }`}
                            >
                                <GlobalOutlined />
                                <span>{i18n.language}</span>
                            </Button>
                        </Dropdown>

                        <Button type="primary" size="large" className="bg-accent hover:bg-[#a08550] border-none shadow-lg shadow-accent/20 rounded-full px-8 font-semibold tracking-wide transform hover:-translate-y-0.5 transition-all duration-300">
                            {t('header.admission')}
                        </Button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden flex items-center gap-4">
                        <Button
                            type="text"
                            shape="circle"
                            icon={theme === 'dark' ? <SunOutlined /> : <MoonOutlined />}
                            onClick={toggleTheme}
                            className={scrolled ? 'text-gray-700 dark:text-gray-200' : 'text-white'}
                        />
                        <Button
                            type="text"
                            icon={<MenuOutlined className={`text-xl ${scrolled ? 'text-primary dark:text-white' : 'text-white'}`} />}
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
                            <a
                                key={index}
                                href={link.href}
                                className="text-lg font-medium text-gray-800 dark:text-gray-200 hover:text-accent hover:bg-gray-50 dark:hover:bg-gray-800 px-4 py-3 rounded-xl transition-all"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.label}
                            </a>
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
