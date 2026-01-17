import React from 'react';
import { Card, Typography, Button, Tag } from 'antd';
import { FilePdfOutlined, DownloadOutlined, EyeOutlined, CalendarOutlined } from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;

// Dynamically import PDFs from dars_jadvali folder
const pdfFiles = import.meta.glob('../../assets/pdf/dars_jadvali/*.pdf', { eager: true, as: 'url' });

const ScheduleComponent = () => {
    // Convert the imported files to an array with proper naming
    const scheduleFiles = Object.keys(pdfFiles).map((path, index) => {
        const fileName = path.split('/').pop().replace('.pdf', '');

        // Determine group type from filename
        let title = "Dars jadvali";
        let description = "2025-2026 o'quv yili";
        let groupType = "Umumiy";
        let color = "#1976d2";

        if (fileName.toLowerCase().includes("o'zbek") || fileName.toLowerCase().includes("uzbek")) {
            title = "O'zbek guruhlari uchun dars jadvali";
            groupType = "O'zbek";
            color = "#2e7d32";
        } else if (fileName.toLowerCase().includes("rus")) {
            title = "Rus guruhlari uchun dars jadvali";
            groupType = "Rus";
            color = "#c62828";
        } else if (fileName.toLowerCase().includes("ojiz") || fileName.toLowerCase().includes("nogir")) {
            title = "Ko'zi ojiz talabalar uchun dars jadvali";
            groupType = "Maxsus";
            color = "#7b1fa2";
        }

        return {
            id: index + 1,
            title,
            description,
            file: pdfFiles[path],
            groupType,
            color
        };
    });

    const handleView = (file) => {
        window.open(file, '_blank');
    };

    const handleDownload = (file, title) => {
        const link = document.createElement('a');
        link.href = file;
        link.download = `${title}.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="space-y-8">
            {/* Header */}
            <div>
                <Title level={2} className="dark:text-white mb-2 flex items-center gap-3">
                    <CalendarOutlined className="text-accent" />
                    Dars jadvali
                </Title>
                <div className="w-16 h-1 bg-accent rounded-full mb-4"></div>
                <Paragraph className="text-gray-600 dark:text-gray-400 text-lg">
                    2025-2026 o'quv yili uchun dars jadvallari. Jadvallarni ko'rish yoki yuklab olish mumkin.
                </Paragraph>
            </div>

            {/* PDF Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {scheduleFiles.map((item) => (
                    <Card
                        key={item.id}
                        className="border-none shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl dark:bg-gray-800 overflow-hidden"
                    >
                        {/* Header with PDF icon */}
                        <div className="flex items-start gap-4 mb-4">
                            <div
                                className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                                style={{ backgroundColor: `${item.color}20` }}
                            >
                                <FilePdfOutlined className="text-2xl" style={{ color: item.color }} />
                            </div>
                            <div className="flex-1">
                                <Title level={5} className="m-0 dark:text-white mb-1 line-clamp-2">
                                    {item.title}
                                </Title>
                                <Text className="text-gray-500 dark:text-gray-400 text-sm">
                                    {item.description}
                                </Text>
                            </div>
                        </div>

                        {/* Group Type Badge */}
                        <div className="mb-4">
                            <Tag color={item.color} className="text-sm font-medium">
                                {item.groupType} guruh
                            </Tag>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3">
                            <Button
                                type="primary"
                                icon={<EyeOutlined />}
                                onClick={() => handleView(item.file)}
                                className="flex-1 bg-accent border-accent hover:bg-accent/90"
                            >
                                Ko'rish
                            </Button>
                            <Button
                                icon={<DownloadOutlined />}
                                onClick={() => handleDownload(item.file, item.title)}
                                className="flex-1"
                            >
                                Yuklab olish
                            </Button>
                        </div>
                    </Card>
                ))}
            </div>

            {/* Info Note */}
            <Card className="border-none shadow-lg rounded-2xl dark:bg-gray-800 bg-amber-50 dark:bg-amber-900/20">
                <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                        <CalendarOutlined className="text-xl text-amber-600 dark:text-amber-400" />
                    </div>
                    <div>
                        <Title level={5} className="m-0 dark:text-white mb-2">Eslatma</Title>
                        <Text className="text-gray-600 dark:text-gray-400">
                            Dars jadvallari o'quv yili davomida o'zgarishi mumkin.
                            Eng so'nggi ma'lumotlar uchun vaqti-vaqti bilan tekshirib turing.
                        </Text>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default ScheduleComponent;
