import React, { useMemo } from 'react';
import { Collapse, List, Button, Empty } from 'antd';
import {
    FilePdfOutlined,
    DownloadOutlined,
    FolderOpenOutlined
} from '@ant-design/icons';

const { Panel } = Collapse;

// Dynamically import all PDFs from the magistr directory
const pdfFiles = import.meta.glob('../../assets/pdf/magistr/**/*.pdf', { eager: true, as: 'url' });

const MasterCurriculum = () => {

    const curriculumData = useMemo(() => {
        const departments = {};

        Object.keys(pdfFiles).forEach((path) => {
            // Path format: ../../assets/pdf/magistr/Department Name/File Name.pdf
            const parts = path.split('/');
            const fileName = parts.pop();
            const departmentName = parts.pop();

            // Some folder names might have numbering like "1. Kompozitorlik...", clean it up if desired, 
            // but keeping it matches the folder structure. 
            // If we want to sort strictly by name, we can strip numbers.
            let cleanDeptName = decodeURIComponent(departmentName);
            // Optional: Remove leading numbers from dept name if they exist (e.g. "1. Department")
            cleanDeptName = cleanDeptName.replace(/^\d+\.\s*/, '');

            if (!departments[cleanDeptName]) {
                departments[cleanDeptName] = [];
            }

            let cleanTitle = decodeURIComponent(fileName.replace('.pdf', ''));

            departments[cleanDeptName].push({
                title: cleanTitle,
                link: pdfFiles[path],
                fileName: fileName
            });
        });

        return Object.keys(departments).sort().map((deptName, index) => ({
            id: index,
            name: deptName,
            documents: departments[deptName].sort((a, b) => a.title.localeCompare(b.title))
        }));
    }, []);

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold text-[#002140] dark:text-white mb-2">
                    Magistratura mutaxassisliklari uchun o‘quv dasturlari
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                    Magistratura bosqichi talabalari uchun fan dasturlari va o'quv-uslubiy majmualar.
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

export default MasterCurriculum;
