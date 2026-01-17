import React from 'react';
import { Card, Typography, Result, Button } from 'antd';
import {
    BankOutlined,
    ExperimentOutlined,
    CustomerServiceOutlined
} from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const CompositionDepartment = () => {
    return (
        <div className="space-y-8 text-gray-800 dark:text-gray-200">
            {/* Intro Section */}
            <Card className="shadow-lg border-none overflow-hidden rounded-2xl dark:bg-gray-800">
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-4 border-b border-gray-100 dark:border-gray-700 pb-4">
                        <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent text-2xl">
                            <ExperimentOutlined />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white m-0">Kafedra haqida ma’lumot</h2>
                            <p className="text-gray-500 m-0">Kompozitorlik va aranjirovka kafedrasi</p>
                        </div>
                    </div>

                    <div className="prose dark:prose-invert max-w-none text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                        <p>
                            Kompozitorlik va aranjirovka kafedrasi estrada san'ati sohasida yetuk kompozitorlar va aranjirovkachilarni tayyorlashga ixtisoslashgan. Kafedrada zamonaviy musiqa texnologiyalari, aranjirovka san'ati va kompozitorlik mahorati bo'yicha chuqur bilimlar beriladi.
                        </p>
                    </div>
                </div>
            </Card>

            <Card className="shadow-lg border-none rounded-2xl dark:bg-gray-800 text-center py-10">
                <Result
                    icon={<CustomerServiceOutlined className="text-accent" />}
                    title="Ma'lumotlar yangilanmoqda"
                    subTitle="Ushbu kafedra bo'yicha batafsil ma'lumotlar, jumladan professor-o'qituvchilar tarkibi va o'quv dasturlari tez orada saytga joylashtiriladi."
                />
            </Card>

        </div>
    );
};

export default CompositionDepartment;
