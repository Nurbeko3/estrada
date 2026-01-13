import React, { useState, useEffect } from 'react';
import { GlobalOutlined, MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { Button, Dropdown, Drawer } from 'antd';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Handle scroll effect for header
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const langItems = [
        { key: 'uz', label: "O'zbek" },
        { key: 'ru', label: 'Русский' },
        { key: 'en', label: 'English' },
    ];

    const menuLinks = [
        { label: "Asosiy", href: "#" },
        { label: "Yangiliklar", href: "#news" },
        { label: "Rahbariyat", href: "#leadership" },
        { label: "Fotogalereya", href: "#gallery" },
        { label: "Bog'lanish", href: "#contact" },
    ];

    return (
        <>
            <header
                className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'
                    }`}
            >
                <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">

                    {/* Logo Section */}
                    <div className="flex items-center gap-3">
                        <div className={`flex items-center justify-center rounded-full font-bold text-xl transition-all duration-300 ${scrolled ? 'w-10 h-10 bg-accent text-white' : 'w-12 h-12 bg-white/10 backdrop-blur-md text-white border border-white/20'
                            }`}>
                            {/* LOGO PLACEHOLDER - Replace BZ text with <img /> when logo is ready */}
                            BZ
                        </div>
                        <div className={`leading-tight uppercase font-bold transition-colors duration-300 ${scrolled ? 'text-primary' : 'text-white'
                            }`}>
                            <span className="block text-xs tracking-widest opacity-80">Botir Zokirov nomidagi</span>
                            <span className="text-sm md:text-base">Milliy estrada san'ati instituti</span>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {menuLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                className={`text-sm font-medium uppercase tracking-wide hover:text-accent transition-colors relative group ${scrolled ? 'text-gray-800' : 'text-white/90 shadow-black drop-shadow-md'
                                    }`}
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ))}
                    </nav>

                    {/* Language & Actions */}
                    <div className="hidden md:flex items-center gap-4">
                        <Dropdown menu={{ items: langItems }} placement="bottomRight">
                            <Button
                                type="text"
                                className={`flex items-center gap-2 font-medium transition-colors ${scrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-white/10'
                                    }`}
                            >
                                <GlobalOutlined />
                                <span>UZ</span>
                            </Button>
                        </Dropdown>
                        <Button type="primary" className="bg-accent hover:bg-[#a08550] border-none shadow-lg shadow-accent/30 rounded-none px-6">
                            Qabul 2026
                        </Button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden flex items-center gap-4">
                        <Button
                            type="text"
                            icon={<MenuOutlined className={scrolled ? 'text-primary' : 'text-white'} />}
                            onClick={() => setMobileMenuOpen(true)}
                            size="large"
                        />
                    </div>
                </div>
            </header>

            {/* Mobile Drawer */}
            <Drawer
                title="Menu"
                placement="right"
                onClose={() => setMobileMenuOpen(false)}
                open={mobileMenuOpen}
                closeIcon={<CloseOutlined className="text-primary" />}
                styles={{ header: { borderBottom: '1px solid #f0f0f0' } }}
            >
                <div className="flex flex-col gap-6">
                    <nav className="flex flex-col gap-4">
                        {menuLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                className="text-lg font-medium text-primary hover:text-accent border-b border-gray-100 pb-2"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>
                    <div className="flex justify-between items-center pt-4">
                        <Dropdown menu={{ items: langItems }}>
                            <Button icon={<GlobalOutlined />}>O'zbekcha</Button>
                        </Dropdown>
                        <Button type="primary" className="bg-accent">Qabul 2026</Button>
                    </div>
                </div>
            </Drawer>
        </>
    );
};

export default Header;
