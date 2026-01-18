import React from 'react';
import { Card, Typography, Button } from 'antd';
import { FilePdfOutlined, DownloadOutlined, EyeOutlined } from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;

// Dynamically import PDFs from mandat folder
const pdfFiles = import.meta.glob('../../assets/pdf/mandat/*.pdf', { eager: true, query: '?url', import: 'default' });

const MandateComponent = () => {
    // Convert the imported files to an array
    const mandatFiles = Object.keys(pdfFiles).map((path, index) => {
        const fileName = path.split('/').pop().replace('.pdf', '');
        const isUzbek = fileName.toLowerCase().includes('zbek') || fileName.toLowerCase().includes('uzbek');

        return {
            id: index + 1,
            title: isUzbek ? "Mandat 2025 (O'zbekcha)" : "Мандат 2025 (Русский)",
            description: isUzbek
                ? "2025-yil uchun mandat hujjati - O'zbek tilida"
                : "Мандатный документ на 2025 год - На русском языке",
            file: pdfFiles[path],
            language: isUzbek ? "O'zbek" : "Rus"
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
                <Title level={2} className="dark:text-white mb-2">Mandat</Title>
                <div className="w-16 h-1 bg-accent rounded-full mb-4"></div>
                <Paragraph className="text-gray-600 dark:text-gray-400 text-lg">
                    Institut mandat hujjatlari. Hujjatlarni ko'rish yoki yuklab olish mumkin.
                </Paragraph>
            </div>

            {/* PDF Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {mandatFiles.map((item) => (
                    <Card
                        key={item.id}
                        className="border-none shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl dark:bg-gray-800 overflow-hidden"
                    >
                        {/* Header with PDF icon */}
                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                                <FilePdfOutlined className="text-3xl text-red-600 dark:text-red-400" />
                            </div>
                            <div className="flex-1">
                                <Title level={4} className="m-0 dark:text-white mb-1">
                                    {item.title}
                                </Title>
                                <Text className="text-gray-500 dark:text-gray-400 text-sm">
                                    {item.description}
                                </Text>
                            </div>
                        </div>

                        {/* Language Badge */}
                        <div className="mb-4">
                            <span className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                                {item.language} tilida
                            </span>
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
            <Card className="border-none shadow-lg rounded-2xl dark:bg-gray-800 bg-blue-50 dark:bg-blue-900/20">
                <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                        <FilePdfOutlined className="text-xl text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                        <Title level={5} className="m-0 dark:text-white mb-2">Eslatma</Title>
                        <Text className="text-gray-600 dark:text-gray-400">
                            Mandat hujjatlarini ko'rish uchun brauzeringizda PDF ko'rish imkoniyati yoqilgan bo'lishi kerak.
                            Agar hujjat avtomatik ochilmasa, "Yuklab olish" tugmasini bosing.
                        </Text>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default MandateComponent;
