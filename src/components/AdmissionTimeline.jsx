import React from 'react';
import { Timeline } from 'antd';
import { FileTextOutlined, SolutionOutlined, TrophyOutlined, CheckCircleOutlined } from '@ant-design/icons';

const AdmissionTimeline = () => {
    return (
        <section id="admission" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <span className="text-accent font-bold uppercase tracking-wider block mb-2">Qabul 2026</span>
                    <h2 className="text-3xl font-bold text-primary mb-4">Qabul jarayoni bosqichlari</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">Talaba bo'lish yo'lidagi muhim qadamlaringizni rejalashtiring.</p>
                </div>

                <div className="max-w-4xl mx-auto bg-gray-50 p-8 rounded-lg shadow-sm">
                    <Timeline
                        mode="alternate"
                        items={[
                            {
                                color: 'blue',
                                dot: <FileTextOutlined style={{ fontSize: '20px' }} />,
                                children: (
                                    <div className="pb-8">
                                        <h3 className="font-bold text-lg text-primary">Hujjat topshirish</h3>
                                        <p className="text-gray-500 text-sm">20 Iyun - 20 Iyul</p>
                                        <p className="text-gray-600 mt-2">Online ariza to'ldirish va kerakli hujjatlarni yuklash.</p>
                                    </div>
                                ),
                            },
                            {
                                color: 'orange',
                                dot: <SolutionOutlined style={{ fontSize: '20px' }} />,
                                children: (
                                    <div className="pb-8">
                                        <h3 className="font-bold text-lg text-primary">Ijodiy imtihonlar</h3>
                                        <p className="text-gray-500 text-sm">25 Iyul - 5 Avgust</p>
                                        <p className="text-gray-600 mt-2">Mutaxassislik bo'yicha amaliy va nazariy sinovlar.</p>
                                    </div>
                                ),
                            },
                            {
                                color: 'red',
                                dot: <CheckCircleOutlined style={{ fontSize: '20px' }} />,
                                children: (
                                    <div className="pb-8">
                                        <h3 className="font-bold text-lg text-primary">Test sinovlari</h3>
                                        <p className="text-gray-500 text-sm">10 Avgust - 15 Avgust</p>
                                        <p className="text-gray-600 mt-2">Davlat test markazi tomonidan o'tkaziladigan testlar.</p>
                                    </div>
                                ),
                            },
                            {
                                color: 'green',
                                dot: <TrophyOutlined style={{ fontSize: '20px' }} />,
                                children: (
                                    <div>
                                        <h3 className="font-bold text-lg text-primary">Natijalar va Qabul</h3>
                                        <p className="text-gray-500 text-sm">25 Avgust</p>
                                        <p className="text-gray-600 mt-2">Mandat natijalari e'lon qilinishi va shartnomalar rasmiylashtirish.</p>
                                    </div>
                                ),
                            },
                        ]}
                    />
                </div>
            </div>
        </section>
    );
};

export default AdmissionTimeline;
