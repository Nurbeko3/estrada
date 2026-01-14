import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Card, Breadcrumb } from 'antd';
import { CalendarOutlined, HomeOutlined } from '@ant-design/icons';
import { useNewsData } from '../hooks/useNewsData';

const NewsCategoryPage = () => {
    const { category } = useParams();
    const { t } = useTranslation();
    const { getNewsData } = useNewsData();

    // Mapping URL params to internal data keys
    const categoryMap = {
        'student-life': 'student_life_items',
        'official': 'official_items',
        'creative': 'creative_items'
    };

    const dataKey = categoryMap[category] || 'official_items';
    const newsItems = getNewsData(dataKey);

    const titleMap = {
        'student-life': 'news.categories.student_life',
        'official': 'news.categories.official',
        'creative': 'news.categories.creative'
    };

    const pageTitle = t(titleMap[category] || 'news.title');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [category]);

    return (
        <div className="pt-24 pb-20 bg-gray-50 dark:bg-black min-h-screen transition-colors duration-300">
            <div className="container mx-auto px-4 md:px-8">
                {/* Breadcrumb */}
                <div className="mb-8">
                    <Breadcrumb
                        items={[
                            {
                                title: <Link to="/"><HomeOutlined /> {t('header.menu.home')}</Link>,
                            },
                            {
                                title: t('news.title'),
                            },
                            {
                                title: pageTitle,
                            },
                        ]}
                    />
                </div>

                <div className="text-center mb-16" data-aos="fade-up">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                        {pageTitle}
                    </h1>
                    <div className="w-24 h-1.5 bg-accent mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {newsItems.map((news, index) => (
                        <div key={news.id} data-aos="fade-up" data-aos-delay={index * 100}>
                            <Card
                                hoverable
                                cover={
                                    <div className="overflow-hidden h-64 rounded-t-2xl">
                                        <img
                                            alt={news.title}
                                            src={news.image}
                                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                                        />
                                    </div>
                                }
                                className="shadow-lg hover:shadow-2xl transition-all duration-500 border-none h-full flex flex-col dark:bg-gray-900 dark:border-gray-800 rounded-2xl group overflow-hidden"
                                styles={{ body: { flex: 1, display: 'flex', flexDirection: 'column', backgroundColor: 'transparent', padding: '1.5rem' } }}
                            >
                                <Card.Meta
                                    title={
                                        <span className="text-xl font-bold text-gray-900 dark:text-white whitespace-normal line-clamp-2 group-hover:text-accent transition-colors">
                                            {news.title}
                                        </span>
                                    }
                                    description={
                                        <div className="mt-auto">
                                            <div className="flex items-center gap-2 text-xs text-accent font-semibold mb-3 mt-4 uppercase tracking-wide">
                                                <CalendarOutlined /> {news.date}
                                            </div>
                                            <p className="line-clamp-3 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                                {news.excerpt}
                                            </p>
                                        </div>
                                    }
                                    className="flex-1 flex flex-col"
                                />
                            </Card>
                        </div>
                    ))}

                    {/* Placeholder for more items (since we only have 3 real ones per category) */}
                    {[1, 2, 3].map((_, i) => (
                        <div key={`placeholder-${i}`} data-aos="fade-up" data-aos-delay={(i + 3) * 100} className="hidden lg:block opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                            <div className="h-full bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 flex items-center justify-center text-center">
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-400 mb-2">Tez kunda</h3>
                                    <p className="text-sm text-gray-400">Yangi {pageTitle.toLowerCase()} kiritiladi...</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NewsCategoryPage;
