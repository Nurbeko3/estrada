import React from 'react';
import { Card, Typography, Row, Col, Badge, Timeline, Tag, Statistic, List } from 'antd';
import {
    AudioOutlined,
    SoundOutlined,
    HistoryOutlined,
    BankOutlined,
    ToolOutlined,
    DesktopOutlined,
    TeamOutlined
} from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

const SoundEngineeringDepartment = () => {
    const tasks = [
        "Talabalarni zamonaviy audio uskunalar va dasturiy ta’minot bilan ishlashga o‘rgatish",
        "Studiya ovoz yozuvlari, konsertlarni ovozlashtirish, kino va TV uchun mutaxassislarni tayyorlash",
        "Ovoz va akustika sohasida ilmiy tadqiqotlar olib borish"
    ];

    const subjects = [
        "Ovoz rejissorligi san’ati",
        "Ovoz rejissorligi akustikasi asoslari",
        "Tinglab tahlil qilish",
        "Elektron va kompyuter musiqasi (Pro Tools, Logic Pro, Cubase)",
        "Radio va TV ovozlashtirish texnikasi",
        "Musiqiy informatika va kompyuter grafikasi",
        "Fizika va elektronika asoslari"
    ];

    return (
        <div className="space-y-8 text-gray-800 dark:text-gray-200">
            {/* Intro Section */}
            <Card className="shadow-lg border-none overflow-hidden rounded-2xl dark:bg-gray-800 bg-gradient-to-br from-[#002140] via-[#0f2a4a] to-[#2c3e50] text-white">
                <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6 border-b border-white/20 pb-4">
                        <div className="w-14 h-14 rounded-full bg-[#c0a062] flex items-center justify-center text-white text-3xl shadow-lg">
                            <AudioOutlined />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-white m-0">Musiqiy ovoz rejissorligi kafedrasi</h2>
                            <p className="text-gray-200 m-0 text-lg opacity-90">Mamlakatimizning audio texnologiyalar bo'yicha yetakchi ta’lim platformasi</p>
                        </div>
                    </div>

                    <div className="prose prose-invert max-w-none text-lg leading-relaxed opacity-90">
                        <p>
                            Musiqiy ovoz rejissorligi kafedrasi 2022-yildan beri “Estrada xonandaligi” fakulteti tarkibida faoliyat ko‘rsatib kelmoqda. U konsert va ovoz yozuv studiyalarida, radio, televideniye va kino sohasida ishlashga qodir yuqori malakali mutaxassislarni tayyorlaydi.
                        </p>
                    </div>
                </div>
            </Card>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Card className="shadow-md border-none rounded-xl dark:bg-gray-800 text-center">
                    <Statistic title="Professor-o'qituvchilar" value={16} prefix={<TeamOutlined />} />
                </Card>
                <Card className="shadow-md border-none rounded-xl dark:bg-gray-800 text-center">
                    <Statistic title="O'quv studiyalari" value={3} prefix={<SoundOutlined />} />
                </Card>
                <Card className="shadow-md border-none rounded-xl dark:bg-gray-800 text-center">
                    <Statistic title="O'quv qo'llanmalar" value={10} suffix="+" prefix={<BookOutlined />} />
                </Card>
                <Card className="shadow-md border-none rounded-xl dark:bg-gray-800 text-center">
                    <Statistic title="Audio CDlar" value={10} suffix="+" prefix={<DesktopOutlined />} />
                </Card>
            </div>

            {/* History & Facilities */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card title={<span className="font-bold text-xl"><HistoryOutlined className="mr-2 text-accent" />Tarixiy nazar</span>} className="shadow-lg border-none rounded-2xl dark:bg-gray-800 h-full">
                    <div className="space-y-4 text-gray-600 dark:text-gray-300">
                        <p>
                            <span className="font-bold text-accent">1991-1992</span> — R.S. Umarxo‘jayev tashabbusi bilan konservatoriyada ilk bor “Musiqiy ovoz rejissorligi” yo‘nalishi ochildi.
                        </p>
                        <p>
                            <span className="font-bold text-accent">2002</span> — “Estrada san’ati” fakulteti negizida “Musiqiy ovoz rejissorligi va informatika” kafedrasi tashkil etildi.
                        </p>
                        <p>
                            <span className="font-bold text-accent">2005</span> — Yaponiya hukumatining beg‘araz granti asosida zamonaviy studiya jihozlandi.
                        </p>
                        <div className="bg-gray-50 dark:bg-white/5 p-3 rounded-lg border border-gray-100 dark:border-gray-700 italic text-sm">
                            Ustozlar R.S. Umarxo‘jayev, A. Tojiyev va V.N. Gushinlar yozib olgan minglab asarlar bugungi kunda O‘zMTRKning “oltin fondi”da saqlanadi.
                        </div>
                    </div>
                </Card>

                <Card title={<span className="font-bold text-xl"><ToolOutlined className="mr-2 text-accent" />Moddiy-texnik baza</span>} className="shadow-lg border-none rounded-2xl dark:bg-gray-800 h-full">
                    <div className="space-y-4 text-gray-600 dark:text-gray-300">
                        <p>
                            Kafedrada zamonaviy kompyuter texnologiyalari bilan jihozlangan <strong>3 ta ovoz yozish o‘quv studiyasi</strong> mavjud.
                        </p>
                        <p>
                            Talabalar quyidagi professional dasturlarda ishlashni o'rganadilar:
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <Tag color="cyan">Pro Tools</Tag>
                            <Tag color="blue">Logic Pro</Tag>
                            <Tag color="purple">Cubase</Tag>
                        </div>
                        <p className="text-sm">
                            Shuningdek, talabalar O‘zMTRKning studiyalari va telekanallarida amaliyot o'tash imkoniyatiga ega.
                        </p>
                    </div>
                </Card>
            </div>

            {/* Curriculum */}
            <Card title={<span className="font-bold text-xl"><BookOutlined className="mr-2 text-accent" />O'qitiladigan fanlar</span>} className="shadow-lg border-none rounded-2xl dark:bg-gray-800">
                <List
                    grid={{ gutter: 16, xs: 1, sm: 2, md: 3 }}
                    dataSource={subjects}
                    renderItem={item => (
                        <List.Item>
                            <div className="flex items-start gap-2">
                                <div className="mt-1.5 w-2 h-2 rounded-full bg-accent shrink-0"></div>
                                <span className="text-gray-700 dark:text-gray-300">{item}</span>
                            </div>
                        </List.Item>
                    )}
                />
            </Card>

        </div>
    );
};

export default SoundEngineeringDepartment;
