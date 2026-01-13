import React from 'react';
import { Table, Tag } from 'antd';

const columns = [
    {
        title: 'Vaqt',
        dataIndex: 'time',
        key: 'time',
        render: (text) => <span className="font-medium text-gray-700">{text}</span>,
    },
    {
        title: 'Fan nomi',
        dataIndex: 'subject',
        key: 'subject',
        render: (text) => <span className="font-bold text-primary">{text}</span>,
    },
    {
        title: "O'qituvchi",
        dataIndex: 'teacher',
        key: 'teacher',
    },
    {
        title: 'Xona',
        dataIndex: 'room',
        key: 'room',
        render: (text) => <Tag color="gold">{text}</Tag>,
    },
    {
        title: 'Kurs',
        dataIndex: 'course',
        key: 'course',
        filters: [
            { text: '1-kurs', value: '1' },
            { text: '2-kurs', value: '2' },
            { text: '3-kurs', value: '3' },
            { text: '4-kurs', value: '4' },
        ],
        onFilter: (value, record) => record.course.includes(value),
        render: (text) => <Tag color="blue">{text}-kurs</Tag>,
    },
];

const data = [
    {
        key: '1',
        time: '08:30 - 09:50',
        subject: 'Vokal asoslari',
        teacher: 'Prof. O. Nazarov',
        room: 'A-204',
        course: '1',
    },
    {
        key: '2',
        time: '10:00 - 11:20',
        subject: 'Sahna nutqi',
        teacher: 'Dots. M. Karimova',
        room: 'B-105',
        course: '1',
    },
    {
        key: '3',
        time: '08:30 - 09:50',
        subject: 'Estrada aranjirovkasi',
        teacher: 'O‘q. S. Rahimov',
        room: 'Lab-3',
        course: '3',
    },
    {
        key: '4',
        time: '11:30 - 12:50',
        subject: 'Jazz tarixi',
        teacher: 'Prof. A. Smirnov',
        room: 'C-Lecture',
        course: '2',
    },
    {
        key: '5',
        time: '14:00 - 15:20',
        subject: 'Xoreografiya',
        teacher: 'O‘q. L. Yusupova',
        room: 'Dance Hall',
        course: '1',
    },
];

const ScheduleTable = () => {
    return (
        <section id="schedule" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <span className="text-accent font-bold uppercase tracking-wider block mb-2">Ta'lim jarayoni</span>
                    <h2 className="text-3xl font-bold text-primary mb-4">Dars jadvali</h2>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md overflow-x-auto">
                    <Table columns={columns} dataSource={data} pagination={false} />
                </div>
            </div>
        </section>
    );
};

export default ScheduleTable;
