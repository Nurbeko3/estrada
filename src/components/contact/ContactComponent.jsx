import React from 'react';
import { Typography, Card } from 'antd';
import { PhoneOutlined, MailOutlined, EnvironmentOutlined, PrinterOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const { Title, Text, Paragraph } = Typography;

const ContactComponent = () => {
    const { t } = useTranslation();

    const contactInfo = [
        {
            icon: <PhoneOutlined />,
            label: t('header.contact_page.labels.tel'),
            value: "+998 71 200 00 00",
            color: "#c0a062"
        },
        {
            icon: <PrinterOutlined />,
            label: t('header.contact_page.labels.fax'),
            value: "+998 71 200 00 00",
            color: "#2e7d32"
        },
        {
            icon: <MailOutlined />,
            label: t('header.contact_page.labels.email'),
            value: "info@estrada-art.uz",
            href: "mailto:info@estrada-art.uz",
            color: "#1976d2"
        },
        {
            icon: <EnvironmentOutlined />,
            label: t('header.contact_page.labels.address'),
            value: t('header.contact_page.values.address'),
            color: "#c0a062"
        }
    ];

    return (
        <div className="space-y-8">
            {/* Header */}
            <div>
                <Title level={2} className="dark:text-white mb-2">{t('header.contact_page.title')}</Title>
                <div className="w-16 h-1 bg-accent rounded-full mb-4"></div>
                <Paragraph className="text-gray-600 dark:text-gray-400 text-lg">
                    {t('header.contact_page.subtitle')}
                </Paragraph>
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {contactInfo.map((item, index) => (
                    <Card
                        key={index}
                        className="border-none shadow-lg hover:shadow-xl transition-shadow rounded-2xl dark:bg-gray-800 text-center py-4"
                    >
                        <div
                            className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl border-2"
                            style={{ borderColor: item.color, color: item.color }}
                        >
                            {item.icon}
                        </div>
                        <Text className="text-gray-500 dark:text-gray-400 block mb-1">{item.label}</Text>
                        {item.href ? (
                            <a href={item.href} className="text-lg font-semibold text-primary dark:text-white hover:text-accent transition-colors">
                                {item.value}
                            </a>
                        ) : (
                            <Text className="text-lg font-semibold text-primary dark:text-white block">{item.value}</Text>
                        )}
                    </Card>
                ))}
            </div>

            {/* Google Map */}
            <Card className="border-none shadow-lg rounded-2xl overflow-hidden dark:bg-gray-800">
                <div className="flex items-center gap-3 mb-4">
                    <EnvironmentOutlined className="text-2xl text-accent" />
                    <Title level={4} className="m-0 dark:text-white">{t('header.contact_page.map.title')}</Title>
                </div>
                <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d749.2!2d69.256975!3d41.3147026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b005fff30f9%3A0xeb16f4502d27ef61!2sBotir%20Zokirov%20Institute%20for%20the%20National%20Performing%20Arts!5e0!3m2!1suz!2s!4v1705500000000!5m2!1suz!2s"
                        width="100%"
                        height="400"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Institut joylashuvi"
                        className="w-full"
                    ></iframe>
                </div>
                <div className="mt-4 flex items-start gap-3 text-gray-600 dark:text-gray-400">
                    <EnvironmentOutlined className="text-xl mt-1 text-accent" />
                    <div>
                        <Text strong className="dark:text-white block">{t('header.contact_page.map.city')}</Text>
                        <Text className="dark:text-gray-400">{t('header.contact_page.map.street')}</Text>
                    </div>
                </div>
            </Card>

            {/* Working Hours */}
            <Card className="border-none shadow-lg rounded-2xl dark:bg-gray-800">
                <Title level={4} className="dark:text-white mb-4">{t('header.contact_page.hours.title')}</Title>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700">
                        <Text className="text-gray-600 dark:text-gray-400">{t('header.contact_page.hours.weekdays')}</Text>
                        <Text strong className="dark:text-white">09:00 - 18:00</Text>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700">
                        <Text className="text-gray-600 dark:text-gray-400">{t('header.contact_page.hours.saturday')}</Text>
                        <Text strong className="dark:text-white">09:00 - 14:00</Text>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700">
                        <Text className="text-gray-600 dark:text-gray-400">{t('header.contact_page.hours.sunday')}</Text>
                        <Text strong className="text-red-500">{t('header.contact_page.hours.closed')}</Text>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700">
                        <Text className="text-gray-600 dark:text-gray-400">{t('header.contact_page.hours.lunch')}</Text>
                        <Text strong className="dark:text-white">13:00 - 14:00</Text>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default ContactComponent;
