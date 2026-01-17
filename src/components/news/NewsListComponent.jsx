import React, { useEffect, useState } from 'react';
import { Card, Spin, Empty, Typography, Tag, Space } from 'antd';
import { CalendarOutlined, EyeOutlined } from '@ant-design/icons';
import { supabase } from '../../supabaseClient';

const { Title, Paragraph } = Typography;

const NewsListComponent = ({ category }) => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNews = async () => {
            setLoading(true);
            try {
                // Fetch data from Supabase filtering by category
                // We order by created_at descending to show newest first
                const { data, error } = await supabase
                    .from('news')
                    .select('*')
                    .eq('category', category)
                    .order('created_at', { ascending: false });

                if (error) {
                    console.error('Error fetching news:', error);
                } else {
                    setNews(data || []);
                }
            } catch (error) {
                console.error('Unexpected error:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, [category]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <Spin size="large" />
            </div>
        );
    }

    if (news.length === 0) {
        return (
            <Empty
                description={<span className="text-gray-500">Hozircha ma'lumot yo'q</span>}
                className="py-10"
            />
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((item) => (
                <Card
                    key={item.id}
                    hoverable
                    className="overflow-hidden rounded-2xl border-none shadow-lg dark:bg-gray-800 h-full flex flex-col"
                    cover={
                        <div className="h-52 overflow-hidden relative group">
                            <img
                                alt={item.title}
                                src={item.image_url || 'https://via.placeholder.com/400x250'}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
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
                    bodyStyle={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '1.25rem' }}
                >
                    <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                        <span className="flex items-center gap-1">
                            <CalendarOutlined />
                            {new Date(item.created_at).toLocaleDateString('uz-UZ')}
                        </span>
                        <span className="flex items-center gap-1">
                            <EyeOutlined />
                            {item.views || 0}
                        </span>
                    </div>

                    <Title level={4} className="mb-3 line-clamp-2 dark:text-gray-100 group-hover:text-accent transition-colors">
                        {item.title}
                    </Title>

                    <Paragraph className="text-gray-600 dark:text-gray-400 line-clamp-3 mb-4 flex-1 text-sm">
                        {item.content}
                    </Paragraph>
                </Card>
            ))}
        </div>
    );
};

export default NewsListComponent;
