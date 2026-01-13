import React from 'react';
import { Image } from 'antd';
import { CameraOutlined } from '@ant-design/icons';

const Gallery = () => {
    // Images with "span" logic for mosaic layout
    const images = [
        {
            src: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2070&auto=format&fit=crop",
            className: "col-span-1 md:col-span-2 row-span-1 md:row-span-2 h-64 md:h-96"
        },
        {
            src: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=2064&auto=format&fit=crop",
            className: "h-48 md:h-48 col-span-1"
        },
        {
            src: "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?q=80&w=2070&auto=format&fit=crop",
            className: "h-48 md:h-48 col-span-1"
        },
        {
            src: "https://images.unsplash.com/photo-1501612780327-45045538702b?q=80&w=2070&auto=format&fit=crop",
            className: "h-48 md:h-48 col-span-1"
        },
        {
            src: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=2070&auto=format&fit=crop",
            className: "col-span-1 md:col-span-1 md:row-span-1 h-48 md:h-48"
        },
    ];

    return (
        <section id="gallery" className="py-12 md:py-20 bg-[#121212] text-white overflow-hidden relative">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 border-b border-gray-800 pb-6 gap-4">
                    <div>
                        <span className="text-accent font-bold uppercase tracking-wider block mb-2 text-sm md:text-base">Fotogalereya</span>
                        <h2 className="text-2xl md:text-4xl font-bold text-white">Institutning yorqin lahzalari</h2>
                    </div>
                    <div className="mt-4 md:mt-0 w-full md:w-auto">
                        <button className="text-white hover:text-accent transition-colors flex items-center gap-2 group w-full md:w-auto justify-center md:justify-start py-2 border border-gray-700 md:border-none rounded md:rounded-none">
                            <CameraOutlined className="text-xl" />
                            <span className="font-medium">Barcha rasmlarni ko'rish</span>
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-min">
                    {images.map((img, idx) => (
                        <div key={idx} className={`relative overflow-hidden rounded-xl group/item ${img.className}`}>
                            <Image
                                src={img.src}
                                height="100%"
                                width="100%"
                                className="object-cover w-full h-full transition-transform duration-700 group-hover/item:scale-110"
                                preview={{ mask: <div className="text-white text-sm font-medium"><CameraOutlined className="text-xl mb-1 block mx-auto" />Ko'rish</div> }}
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover/item:bg-black/0 transition-colors duration-300 pointer-events-none"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
