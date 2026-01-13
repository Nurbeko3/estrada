import React from 'react';
import { CalendarOutlined } from '@ant-design/icons';
import { Card } from 'antd';

const newsData = [
    {
        id: 1,
        date: '12 Yanvar, 2026',
        title: "Institutda \"Yangi O'zbekiston - yangicha dunyoqarash\" mavzusida tadbir bo'lib o'tdi",
        image: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2070&auto=format&fit=crop',
        excerpt: "Bugun institutimizda ma'naviy-ma'rifiy ishlar samaradorligini oshirish maqsadida..."
    },
    {
        id: 2,
        date: '10 Yanvar, 2026',
        title: "Xalqaro hamkorlik doirasida yangi memorandum imzolandi",
        image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop',
        excerpt: "Rossiya musiqa akademiyasi bilan hamkorlikda yangi o'quv dasturlari yo'lga qo'yilmoqda..."
    },
    {
        id: 3,
        date: '05 Yanvar, 2026',
        title: "Talabalarimiz xalqaro tanlovda g'olib bo'lishdi",
        image: 'https://images.unsplash.com/photo-1514525253440-b393452e2729?q=80&w=2069&auto=format&fit=crop',
        excerpt: "Fransiyada o'tkazilgan estrada xonandaligi tanlovida 3-kurs talabasi..."
    }
];

const News = () => {
    return (
        <section id="news" className="py-12 md:py-20 bg-gray-50">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-4">
                    <div>
                        <span className="text-accent font-bold uppercase tracking-wider block mb-2 text-sm md:text-base">So'nggi yangiliklar</span>
                        <h2 className="text-2xl md:text-4xl font-bold text-primary">Institut hayoti</h2>
                    </div>
                    <a href="#" className="flex items-center gap-2 text-primary hover:text-accent font-medium transition-colors text-sm md:text-base border-b border-gray-300 md:border-none pb-1 md:pb-0">
                        Barcha yangiliklar &rarr;
                    </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {newsData.map(news => (
                        <Card
                            key={news.id}
                            hoverable
                            cover={<img alt={news.title} src={news.image} className="h-48 md:h-56 object-cover" />}
                            className="shadow-md hover:shadow-2xl transition-all duration-300 border-none h-full flex flex-col"
                            styles={{ body: { flex: 1, display: 'flex', flexDirection: 'column' } }}
                        >
                            <Card.Meta
                                title={<span className="text-base md:text-lg font-bold text-primary whitespace-normal line-clamp-2">{news.title}</span>}
                                description={
                                    <div className="mt-auto">
                                        <div className="flex items-center gap-2 text-xs text-accent font-medium mb-3 mt-2 uppercase tracking-wide">
                                            <CalendarOutlined /> {news.date}
                                        </div>
                                        <p className="line-clamp-3 text-gray-500 text-sm">{news.excerpt}</p>
                                    </div>
                                }
                                className="flex-1 flex flex-col"
                            />
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default News;
