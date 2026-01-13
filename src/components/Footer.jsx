import React from 'react';
import { FacebookOutlined, InstagramOutlined, YoutubeOutlined, PhoneOutlined, MailOutlined, EnvironmentOutlined } from '@ant-design/icons';

const Footer = () => {
    return (
        <footer id="contact" className="bg-[#111] text-gray-400 pt-16 pb-8 border-t border-gray-800">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
                    {/* Column 1: Logo & Desc */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white font-bold text-lg">BZ</div>
                            <h3 className="text-white font-bold uppercase leading-none">Milliy estrada<br />san'ati instituti</h3>
                        </div>
                        <p className="text-sm leading-relaxed mb-6">
                            O'zbekiston milliy estrada san'atini rivojlantirish, yosh iste'dodlarni kashf etish va ularni professional darajaga ko'tarish bizning asosiy maqsadimizdir.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-accent transition-colors"><FacebookOutlined /></a>
                            <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-accent transition-colors"><InstagramOutlined /></a>
                            <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-accent transition-colors"><YoutubeOutlined /></a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="text-white font-bold uppercase mb-6">Tezkor havolalar</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-accent transition-colors">Institut haqida</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Qabul jarayonlari</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Talabalar hayoti</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Elektron kutubxona</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Bo'sh ish o'rinlari</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Contact Info */}
                    <div>
                        <h4 className="text-white font-bold uppercase mb-6">Bog'lanish</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <EnvironmentOutlined className="text-accent mt-1" />
                                <span>Toshkent sh., Yunusobod tumani,<br />Amir Temur ko'chasi, 123-uy</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <PhoneOutlined className="text-accent" />
                                <span>+998 71 234-56-78</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <MailOutlined className="text-accent" />
                                <span>info@estrada.uz</span>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Map (Placeholder) */}
                    <div>
                        <h4 className="text-white font-bold uppercase mb-6">Xarita</h4>
                        <div className="w-full h-40 bg-gray-800 rounded-lg flex items-center justify-center">
                            <span className="text-gray-500 text-xs">Google Maps Integration</span>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
                    <p>© 2026 Barcha huquqlar himoyalangan.</p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white">Maxfiylik siyosati</a>
                        <a href="#" className="hover:text-white">Foydalanish shartlari</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
