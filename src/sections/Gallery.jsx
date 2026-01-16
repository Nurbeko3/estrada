import React from 'react';
import { Image } from 'antd';
import { CameraOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Gallery = () => {
    const { t } = useTranslation();

    const images = [
        {
            src: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2070&auto=format&fit=crop",
            className: "col-span-1 md:col-span-2 md:row-span-2 h-64 md:h-full" // Big Image (Left)
        },
        {
            src: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=2064&auto=format&fit=crop",
            className: "col-span-1 h-48 md:h-64"
        },
        {
            src: "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?q=80&w=2070&auto=format&fit=crop",
            className: "col-span-1 h-48 md:h-64"
        },
        {
            src: "https://images.unsplash.com/photo-1501612780327-45045538702b?q=80&w=2070&auto=format&fit=crop",
            className: "col-span-1 h-48 md:h-64"
        },
        {
            src: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=2070&auto=format&fit=crop",
            className: "col-span-1 h-48 md:h-64"
        },
    ];

    return (
        <section id="gallery" className="py-20 bg-black text-white relative">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-10 border-b border-gray-800 pb-6">
                    <div>
                        <span className="text-[#c0a062] font-semibold tracking-widest text-xs uppercase mb-2 block">
                            FOTOGALEREYA
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white m-0 tracking-tight">
                            Institutning yorqin lahzalari
                        </h2>
                    </div>

                    <Link to="/gallery" className="flex items-center gap-2 text-white/80 hover:text-[#c0a062] transition-colors mt-4 md:mt-0 group">
                        <CameraOutlined className="text-xl group-hover:scale-110 transition-transform" />
                        <span className="font-medium text-sm border-b border-transparent group-hover:border-[#c0a062] pb-0.5">Barcha rasmlarni ko'rish</span>
                    </Link>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 h-auto md:h-[600px]">
                    {images.map((img, idx) => (
                        <div key={idx} className={`relative rounded-3xl overflow-hidden group cursor-pointer border border-white/5 ${img.className}`}>
                            <Image
                                src={img.src}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                preview={true}
                                wrapperClassName="w-full h-full"
                            />
                            {/* Gradient Overlay */}
                            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
