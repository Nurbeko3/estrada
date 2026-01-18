import React, { useMemo } from 'react';
import { Collapse, List, Button, Empty } from 'antd';
import {
    FilePdfOutlined,
    DownloadOutlined,
    FolderOpenOutlined
} from '@ant-design/icons';

const { Panel } = Collapse;

// Dynamically import all PDFs from the bakalavr directory
const pdfFiles = import.meta.glob('../../assets/pdf/bakalavr/**/*.pdf', { eager: true, query: '?url', import: 'default' });

const BachelorCurriculum = () => {

    const curriculumData = useMemo(() => {
        const departments = {};

        Object.keys(pdfFiles).forEach((path) => {
            // Path format: ../../assets/pdf/bakalavr/Department Name/File Name.pdf
            const parts = path.split('/');
            const fileName = parts.pop();
            const departmentName = parts.pop(); // The folder name immediately preceding the file

            if (!departments[departmentName]) {
                departments[departmentName] = [];
            }

            // Clean up filename (remove extension and URI encoding)
            // Also remove leading numbers like '1.' if present for cleaner display
            let cleanTitle = decodeURIComponent(fileName.replace('.pdf', ''));

            departments[departmentName].push({
                title: cleanTitle,
                link: pdfFiles[path],
                fileName: fileName
            });
        });

        // Sort departments alphabetically
        return Object.keys(departments).sort().map((deptName, index) => ({
            id: index,
            name: decodeURIComponent(deptName),
            documents: departments[deptName].sort((a, b) => a.title.localeCompare(b.title))
        }));
    }, []);

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold text-[#002140] dark:text-white mb-2">
                    Bakalavriat ta’lim yo‘nalishlari uchun o‘quv dasturlari
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                    Quyidagi ro'yxatdan tegishli kafedrani tanlab, fanlar bo'yicha o'quv dasturlarini (PDF) yuklab olishingiz mumkin.
                </p>
            </div>

            <Collapse
                accordion
                className="bg-white dark:bg-gray-800 border-none shadow-md rounded-xl overflow-hidden"
                expandIconPosition="end"
            >
                {curriculumData.length > 0 ? (
                    curriculumData.map((dept) => (
                        <Panel
                            header={
                                <div className="flex items-center gap-3 py-1">
                                    <FolderOpenOutlined className="text-xl text-accent" />
                                    <span className="font-semibold text-lg text-gray-800 dark:text-gray-200">{dept.name}</span>
                                    <span className="ml-auto text-xs text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
                                        {dept.documents.length} fayl
                                    </span>
                                </div>
                            }
                            key={dept.id}
                            className="border-b border-gray-100 dark:border-gray-700 last:border-none"
                        >
                            <List
                                itemLayout="horizontal"
                                dataSource={dept.documents}
                                renderItem={(item) => (
                                    <List.Item
                                        actions={[
                                            <Button
                                                type="primary"
                                                shape="circle"
                                                icon={<DownloadOutlined />}
                                                href={item.link}
                                                target="_blank"
                                                download={item.fileName}
                                                className="bg-accent border-accent hover:bg-accent/80"
                                            />
                                        ]}
                                        className="hover:bg-gray-50 dark:hover:bg-gray-700/50 px-4 rounded-lg transition-colors border-b-0"
                                    >
                                        <List.Item.Meta
                                            avatar={<FilePdfOutlined className="text-2xl text-red-500 mt-2" />}
                                            title={<a href={item.link} target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-gray-200 hover:text-accent font-medium">{item.title}</a>}
                                            description={<span className="text-xs text-gray-500">PDF Document</span>}
                                        />
                                    </List.Item>
                                )}
                            />
                        </Panel>
                    ))
                ) : (
                    <Empty description="Fayllar topilmadi" />
                )}
            </Collapse>
        </div>
    );
};

export default BachelorCurriculum;
