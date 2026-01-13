import React from 'react';
import { CalendarOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import { useTranslation } from 'react-i18next';

const News = () => {
    const { t } = useTranslation();

    const newsData = [
        {
            id: 1,
            date: '12 Yanvar, 2026',
            title: t('news.items.1.title'),
            image: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2070&auto=format&fit=crop',
            excerpt: t('news.items.1.excerpt')
        },
        {
            id: 2,
            date: '10 Yanvar, 2026',
            title: t('news.items.2.title'),
            image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop',
            excerpt: t('news.items.2.excerpt')
        },
        {
            id: 3,
            date: '05 Yanvar, 2026',
            title: t('news.items.3.title'),
            image: 'https://images.unsplash.com/photo-1514525253440-b393452e2729?q=80&w=2069&auto=format&fit=crop',
            excerpt: t('news.items.3.excerpt')
        }
    ];

    return (
        <section id="news" className="py-12 md:py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-4">
                    <div>
                        <span className="text-accent font-bold uppercase tracking-wider block mb-2 text-sm md:text-base">{t('news.tag')}</span>
                        <h2 className="text-2xl md:text-4xl font-bold text-primary dark:text-white">{t('news.title')}</h2>
                    </div>
                    <a href="#" className="flex items-center gap-2 text-primary dark:text-gray-300 hover:text-accent font-medium transition-colors text-sm md:text-base border-b border-gray-300 md:border-none pb-1 md:pb-0">
                        {t('news.all_news')} &rarr;
                    </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {newsData.map((news, index) => (
                        <div key={news.id} data-aos="fade-up" data-aos-delay={index * 100} className="h-full">
                            <Card
                                hoverable
                                cover={<div className="overflow-hidden h-52 md:h-64 rounded-t-2xl"><img alt={news.title} src={news.image} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" /></div>}
                                className="shadow-lg hover:shadow-2xl transition-all duration-500 border-none h-full flex flex-col dark:bg-gray-800 dark:border-gray-700 rounded-2xl group overflow-hidden"
                                styles={{ body: { flex: 1, display: 'flex', flexDirection: 'column', backgroundColor: 'transparent', padding: '1.5rem' } }}
                            >
                                <Card.Meta
                                    title={<span className="text-lg md:text-xl font-bold text-primary dark:text-white whitespace-normal line-clamp-2 group-hover:text-accent transition-colors">{news.title}</span>}
                                    description={
                                        <div className="mt-auto">
                                            <div className="flex items-center gap-2 text-xs text-accent font-semibold mb-3 mt-4 uppercase tracking-wide">
                                                <CalendarOutlined /> {news.date}
                                            </div>
                                            <p className="line-clamp-3 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{news.excerpt}</p>
                                        </div>
                                    }
                                    className="flex-1 flex flex-col"
                                />
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default News;
