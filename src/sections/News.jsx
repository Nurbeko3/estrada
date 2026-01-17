import React, { useEffect, useState } from 'react';
import { Card, Spin, Tabs, Tag, Empty, Typography } from 'antd';
import { CalendarOutlined, EyeOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { supabase } from '../supabaseClient';

const { Title, Paragraph } = Typography;

const News = () => {
    const { t } = useTranslation();
    // Default active tab: 'news' (Yangiliklar)
    const [activeTab, setActiveTab] = useState('news');

    // State for data
    const [newsData, setNewsData] = useState([]);
    const [loading, setLoading] = useState(false);

    // Fetch data whenever activeTab changes
    useEffect(() => {
        const fetchNews = async () => {
            setLoading(true);
            try {
                // Map local tab key to Supabase category
                // 'news' -> 'news'
                // 'events' -> 'event'
                // 'announcements' -> 'announcement'
                let categoryFilter = 'news';
                if (activeTab === 'events') categoryFilter = 'event';
                if (activeTab === 'announcements') categoryFilter = 'announcement';

                const { data, error } = await supabase
                    .from('news')
                    .select('*')
                    .eq('category', categoryFilter)
                    .order('created_at', { ascending: false })
                    .limit(3); // Only show latest 3 items for Home page

                if (error) {
                    console.error('Error loading news:', error);
                } else {
                    setNewsData(data || []);
                }
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, [activeTab]);

    const renderGrid = () => {
        if (loading) {
            return (
                <div className="flex justify-center py-20">
                    <Spin size="large" />
                </div>
            );
        }

        if (newsData.length === 0) {
            return (
                <Empty description="Ma'lumot topilmadi" className="py-10" />
            )
        }

        return (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-6">
                {newsData.map((item, index) => (
                    <div key={item.id} data-aos="fade-up" data-aos-delay={index * 100} className="h-full">
                        <Card
                            hoverable
                            cover={
                                <div className="overflow-hidden h-52 md:h-64 rounded-t-2xl relative group">
                                    <img
                                        alt={item.title}
                                        src={item.image_url || 'https://via.placeholder.com/400x250'}
                                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                                    />
                                    <div className="absolute top-3 right-3">
                                        <Tag color="blue" className="uppercase font-bold text-xs m-0 border-none shadow-sm backdrop-blur-sm bg-white/80 text-blue-800">
                                            {item.category === 'news' ? 'Yangilik' :
                                                item.category === 'event' ? 'Tadbir' :
                                                    item.category === 'announcement' ? "E'lon" : item.category}
                                        </Tag>
                                    </div>
                                </div>
                            }
                            className="shadow-lg hover:shadow-2xl transition-all duration-500 border-none h-full flex flex-col dark:bg-gray-800 dark:border-gray-700 rounded-2xl group overflow-hidden"
                            bodyStyle={{ flex: 1, display: 'flex', flexDirection: 'column', backgroundColor: 'transparent', padding: '1.5rem' }}
                        >
                            <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wide">
                                <span className="flex items-center gap-1">
                                    <CalendarOutlined className="text-accent" />
                                    {new Date(item.created_at).toLocaleDateString('uz-UZ')}
                                </span>
                                <span className="flex items-center gap-1">
                                    <EyeOutlined />
                                    {item.views || 0}
                                </span>
                            </div>

                            <Card.Meta
                                title={
                                    <span className="text-lg md:text-xl font-bold text-primary dark:text-white whitespace-normal line-clamp-2 group-hover:text-accent transition-colors">
                                        {item.title}
                                    </span>
                                }
                                description={
                                    <div className="mt-auto pt-2">
                                        <p className="line-clamp-3 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                                            {item.content}
                                        </p>
                                    </div>
                                }
                                className="flex-1 flex flex-col"
                            />
                        </Card>
                    </div>
                ))}
            </div>
        );
    };

    const items = [
        {
            key: 'news',
            label: t('header.menu.sub.news') || "Yangiliklar",
            children: renderGrid(), // Render same grid structure, data changes via state
        },
        {
            key: 'events',
            label: t('header.menu.sub.events') || "Tadbirlar",
            children: renderGrid(),
        },
        {
            key: 'announcements',
            label: "E'lonlar",
            children: renderGrid(),
        },
    ];

    const handleTabChange = (key) => {
        setActiveTab(key);
    };

    return (
        <section id="news" className="py-12 md:py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-4">
                    <div>
                        <span className="text-accent font-bold uppercase tracking-wider block mb-2 text-sm md:text-base">
                            Axborot xizmati
                        </span>
                        <h2 className="text-2xl md:text-4xl font-bold text-primary dark:text-white">
                            So'nggi yangiliklar va e'lonlar
                        </h2>
                    </div>
                    <Link
                        to={`/info-service?tab=${activeTab}`}
                        className="flex items-center gap-2 text-primary dark:text-gray-300 hover:text-accent font-medium transition-colors text-sm md:text-base border-b border-gray-300 md:border-none pb-1 md:pb-0"
                    >
                        {activeTab === 'news' ? "Barcha yangiliklar" :
                            activeTab === 'events' ? "Barcha tadbirlar" :
                                "Barcha e'lonlar"} &rarr;
                    </Link>
                </div>

                <Tabs
                    activeKey={activeTab}
                    items={items}
                    type="card"
                    size="large"
                    className="custom-tabs"
                    onChange={handleTabChange}
                />
            </div>
        </section>
    );
};

export default News;
