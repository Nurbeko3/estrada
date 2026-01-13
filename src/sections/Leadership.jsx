import React from 'react';
import { LinkedinOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import { Button } from 'antd';

const leaders = [
    {
        id: 1,
        name: "O'zbekov Avazjon",
        role: "Rektor",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop",
        desc: "San'atshunoslik fanlari doktori, professor. 20 yillik ilmiy va pedagogik tajribaga ega.",
        email: "rektor@estrada.uz"
    },
    {
        id: 2,
        name: "Karimov Sherzod",
        role: "O'quv ishlari bo'yicha prorektor",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop",
        desc: "Falsafa fanlari nomzodi. Ta'lim tizimini raqamlashtirish bo'yicha ekspert.",
        email: "prorektor@estrada.uz"
    },
    {
        id: 3,
        name: "Rahimova Gulnora",
        role: "Ilmiy ishlar bo'yicha prorektor",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
        desc: "Professor. Xalqaro musiqa konferensiyalari tashkilotchisi.",
        email: "ilmiy@estrada.uz"
    }
];

const Leadership = () => {
    return (
        <section id="leadership" className="py-12 md:py-20 bg-white">
            <div className="container mx-auto px-4 text-center">
                <span className="text-accent font-bold uppercase tracking-wider block mb-2 text-sm md:text-base">Rahbariyat</span>
                <h2 className="text-2xl md:text-4xl font-bold text-primary mb-10 md:mb-16">Institut rahbariyati</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 px-0 md:px-4">
                    {leaders.map((leader) => (
                        <div key={leader.id} className="relative group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                            {/* Header Background */}
                            <div className="h-24 md:h-32 bg-gradient-to-r from-primary to-gray-800 relative">
                                <div className="absolute inset-0 bg-black/10"></div>
                            </div>

                            {/* Content */}
                            <div className="px-4 md:px-6 pb-6 md:pb-8 pt-0 flex flex-col items-center relative">
                                {/* Avatar */}
                                <div className="-mt-12 md:-mt-16 mb-4 relative p-1 bg-white rounded-full">
                                    <img
                                        src={leader.image}
                                        alt={leader.name}
                                        className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-white shadow-md group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>

                                <h3 className="text-lg md:text-xl font-bold text-primary mb-1">{leader.name}</h3>
                                <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-[10px] md:text-xs font-bold uppercase tracking-wide rounded-full mb-3 md:mb-4">
                                    {leader.role}
                                </span>

                                <p className="text-gray-500 text-sm mb-4 md:mb-6 px-2 md:px-4 line-clamp-3">
                                    {leader.desc}
                                </p>

                                {/* Contact / Action */}
                                <div className="flex gap-3 w-full justify-center pt-4 border-t border-gray-100">
                                    <Button shape="circle" icon={<MailOutlined />} className="text-gray-500 hover:text-accent border-gray-200 hover:border-accent" />
                                    <Button shape="circle" icon={<PhoneOutlined />} className="text-gray-500 hover:text-accent border-gray-200 hover:border-accent" />
                                    <Button shape="circle" icon={<LinkedinOutlined />} className="text-gray-500 hover:text-accent border-gray-200 hover:border-accent" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Leadership;
