import React from 'react';
import { Card, Typography, Row, Col, Badge, Timeline, Tag, Statistic } from 'antd';
import {
    UserOutlined,
    TeamOutlined,
    HistoryOutlined,
    ReadOutlined,
    TrophyOutlined,
    BookOutlined,
    PlayCircleOutlined,
    StarOutlined,
    SoundOutlined
} from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

const VocalDepartment = () => {
    const staff = [
        {
            name: "Amanullayeva Dilorom Darvinovna",
            role: "Kafedra mudiri, professor, O‘zbekiston san’at arbobi",
            subjects: "“Estrada yakka xonandaligi”, “Pedagogik repertuarni о‘rganish”, “Malakaviy amaliyot”, “Estrada xonandalik mahorati”, “Improvizatsiya mahorati”, “Mutaxassislik fanlarni о‘qitish metodikasi”",
            awards: ["O‘zbekiston san’at arbobi (2006)", "Xizmat ko‘rsatgan madaniyat xodimi (1996)", "“Do‘stlik” ordeni (1998)"]
        },
        {
            name: "Turayev Yunus Sharipovich",
            role: "Professor, O‘zbekistonda xizmat ko‘rsatgan artist",
            subjects: "“Estrada yakka xonandaligi”, “Estrada xonandalik mahorati”",
            awards: ["O‘zbekistonda xizmat ko‘rsatgan artist (1964)", "“Do‘stlik” ordeni (2022)"]
        },
        {
            name: "Islamova Ruslana Ruslanovna",
            role: "Professor",
            subjects: "“Estrada yakka xonandaligi”, “Shou-biznes asoslari”, “Xonandalik ansambli san’ati”"
        },
        {
            name: "Boybabayev Dilmurod Mamirjonovich",
            role: "Katta o‘qituvchi",
            subjects: "“Estrada yakka xonandaligi”, “Malakaviy amaliyot”, BMI ilmiy rahbari"
        },
        {
            name: "Djalilova Kamilla Islamovna",
            role: "Katta o‘qituvchi",
            subjects: "“Estrada yakka xonandaligi”, “Malakaviy amaliyot”, BMI ilmiy rahbari"
        },
        {
            name: "Meldebekov Akjol Meldebekovich",
            role: "Katta o‘qituvchi",
            subjects: "“Estrada yakka xonandaligi”, BMI ilmiy rahbari",
            awards: ["“Kelajak bunyodkori” medali (2021)", "“Do‘stlik” ordeni (2023)"]
        },
        {
            name: "Matveyeva Olga Mixaylovna",
            role: "Katta o‘qituvchi",
            subjects: "“Estrada yakka xonandaligi”, BMI ilmiy rahbari"
        },
        {
            name: "Tadjiyev Elmurod Bekchanovich",
            role: "O‘qituvchi",
            subjects: "“Estrada xonandaligi ansambli”, “Malakaviy amaliyot”"
        },
        {
            name: "Jumayev Shavkat Normuratovich",
            role: "O‘qituvchi",
            subjects: "“Estrada xonandaligi ansambli”"
        },
        {
            name: "Xamdamova Sabina Utkurovna",
            role: "O‘qituvchi",
            subjects: "“Estrada yakka xonandaligi”",
            awards: ["“Kelajak bunyodkori” medali (2022)"]
        },
        {
            name: "Tadjiyev Tulqin Berdiyarovich",
            role: "O‘qituvchi",
            subjects: "“Estrada yakka xonandaligi”"
        }
    ];

    const books = [
        "Amanullaeva “Estrada xonandaligi” (O‘quv qo‘llanma, 2007, 2015; Darslik, 2016)",
        "Amanullaeva “Estrada va jaz vokalizlari” (2014)",
        "Islamova “Osnovy shou-biznesa” (2012, 2016)",
        "Turaev “XX asr o‘zbek estrada qo‘shiqlari” (2015)",
        "Islamova “Estradny vokalny ansambl” (2018)",
        "Dosmetova, Abraykulova “Raqs” (2018)",
        "Amanova “Jaz va estrada musiqasi tarixi” (2021)"
    ];

    return (
        <div className="space-y-8 text-gray-800 dark:text-gray-200">
            {/* Intro Section */}
            <Card className="shadow-lg border-none overflow-hidden rounded-2xl dark:bg-gray-800 bg-gradient-to-br from-[#002140] via-[#0f2a4a] to-[#1a3d5e] text-white">
                <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6 border-b border-white/20 pb-4">
                        <div className="w-14 h-14 rounded-full bg-[#c0a062] flex items-center justify-center text-white text-3xl shadow-lg">
                            <SoundOutlined />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-white m-0">Estrada xonandaligi kafedrasi</h2>
                            <p className="text-gray-200 m-0 text-lg opacity-90">Milliy estrada maktabining yuragi</p>
                        </div>
                    </div>

                    <div className="prose prose-invert max-w-none text-lg leading-relaxed opacity-90">
                        <p>
                            Bugungi kunda milliy estrada san’ati taraqqiyoti yo‘lida, professional kadrlar tayyorlash davlatimiz siyosatining ustuvor yo‘nalishiga aylangan. Kafedra 2002-yildan buyon faoliyat yuritib, O‘zbekiston xalq artistlari va taniqli san’at arboblari yetakchiligida professional xonandalarni tarbiyalab kelmoqda.
                        </p>
                    </div>
                </div>
            </Card>

            {/* History Timeline */}
            <Card title={<span className="font-bold text-xl"><HistoryOutlined className="mr-2 text-accent" />Kafedra tarixi</span>} className="shadow-lg border-none rounded-2xl dark:bg-gray-800">
                <Timeline mode="left" className="mt-4">
                    <Timeline.Item color="#c0a062" label="1996-2002">
                        <span className="font-bold">Estrada ijrochiligi bo'limi</span> (Eski konservatoriya)<br />
                        Rahbarlar: E.Salixov, N.Norxo‘jayev
                    </Timeline.Item>
                    <Timeline.Item color="#002140" label="2002-2016">
                        <span className="font-bold">Estrada xonandaligi kafedrasi tashkil etilishi</span><br />
                        Mudir: Prof. Dilorom Amanullayeva
                    </Timeline.Item>
                    <Timeline.Item color="#c0a062" label="2016-2022">
                        Mudir: Dotsent Ruslana Islamova
                    </Timeline.Item>
                    <Timeline.Item color="#002140" label="2022-hozir">
                        Mudir: Prof. Dilorom Amanullayeva
                    </Timeline.Item>
                </Timeline>
            </Card>

            {/* Achievements & Books */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="shadow-lg border-none rounded-2xl dark:bg-gray-800 h-full">
                    <div className="flex items-center gap-3 mb-4">
                        <BookOutlined className="text-xl text-accent" />
                        <h3 className="text-xl font-bold m-0">Nashr etilgan adabiyotlar</h3>
                    </div>
                    <ul className="space-y-3">
                        {books.map((book, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                                <ReadOutlined className="mt-1 text-accent shrink-0" />
                                <span>{book}</span>
                            </li>
                        ))}
                    </ul>
                </Card>

                <Card className="shadow-lg border-none rounded-2xl dark:bg-gray-800 h-full">
                    <div className="flex items-center gap-3 mb-4">
                        <TrophyOutlined className="text-xl text-accent" />
                        <h3 className="text-xl font-bold m-0">Ijodiy faoliyat va tanlovlar</h3>
                    </div>
                    <div className="space-y-4 text-gray-700 dark:text-gray-300">
                        <p>Kafedrada muntazam ravishda quyidagi tanlovlar o'tkaziladi:</p>
                        <div className="flex flex-wrap gap-2">
                            <Tag color="gold">O‘zbek estrada qo‘shiqlari</Tag>
                            <Tag color="cyan">Jaz vokalizlari</Tag>
                            <Tag color="blue">G‘arbiy Yevropa va AQSh estradasi</Tag>
                            <Tag color="purple">Vokal ansambllar</Tag>
                        </div>
                        <p className="mt-4 text-sm bg-gray-50 dark:bg-white/5 p-3 rounded-lg border border-gray-100 dark:border-gray-700">
                            Bitiruvchilar davlat attestatsiyalarida Milliy estrada simfonik orkestri jo'rligida jonli ijroda imtihon topshiradilar.
                        </p>
                    </div>
                </Card>
            </div>

            {/* Staff List */}
            <div className="space-y-6">
                <div className="flex items-center gap-4">
                    <div className="w-1.5 h-8 bg-accent rounded-full"></div>
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white m-0">“Yulduzlar” jamlangan kafedra</h2>
                </div>
                <p className="text-gray-600 dark:text-gray-400 italic">
                    Kafedrani “Yulduzlar” chamaniga qiyoslash mumkin, chunki aksariyat ustozlar va shogirdlar el-yurt nazariga tushgan taniqli san'atkorlardir.
                </p>

                <div className="grid grid-cols-1 gap-4">
                    {staff.map((person, index) => (
                        <Card key={index} className="border-l-4 border-l-accent border-y-0 border-r-0 shadow-sm hover:shadow-md transition-shadow dark:bg-gray-800">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="flex-1">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-lg font-bold text-gray-900 dark:text-white m-0 flex items-center gap-2">
                                            {person.name}
                                            {person.role.includes("mudiri") && <Tag color="gold" className="ml-2 m-0 text-xs">Mudir</Tag>}
                                        </h3>
                                    </div>
                                    <p className="text-accent font-medium mt-1 mb-2">{person.role}</p>

                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                                        <span className="font-semibold text-gray-800 dark:text-gray-200">Fanlar: </span>
                                        {person.subjects}
                                    </p>

                                    {person.awards && (
                                        <div className="flex flex-wrap gap-2 mt-3">
                                            {person.awards.map((award, i) => (
                                                <div key={i} className="flex items-center gap-1 text-xs bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400 px-2 py-1 rounded border border-yellow-100 dark:border-yellow-900/30">
                                                    <StarOutlined /> {award}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default VocalDepartment;
