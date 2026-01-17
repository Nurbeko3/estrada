import React from 'react';
import { Card, Typography, Row, Col, Badge, Divider } from 'antd';
import {
    UserOutlined,
    TeamOutlined,
    HistoryOutlined,
    ReadOutlined,
    GlobalOutlined,
    TrophyOutlined,
    BookOutlined,
    BankOutlined,
    CheckCircleOutlined
} from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

const EstradaDepartment = () => {
    const staff = [
        {
            name: "Abdullayev O‘tkir Sadullayevich",
            role: "Kafedra mudiri, dotsent",
            subjects: "“Estrada cholg‘ularida ijrochilik”, “Jo‘rnavozlik mahorati”, “Malakaviy amaliyot”, “Ansambl sinfi”, “Improvizatsiya mahorati”, “Bitiruv Malaka ishi va Magistrlik desertatsiyasiga rahbarlik”"
        },
        {
            name: "Ganiyeva Lola Muxsinjanovna",
            role: "v.b. professori, San’atshunoslik fanlari nomzodi, “Oliy ta’lim a’lochisi”",
            subjects: "“Estrada cholg‘ularida ijrochilik”, “Jo‘rnavozlik mahorati”, “Malakaviy amaliyot”, “Ansambl sinfi”, “Estrada cholg‘ularida o‘qitish uslubiyoti”, “Improvizatsiya mahorati”, “Bitiruv Malaka ishi va Magistrlik desertatsiyasiga rahbarlik”"
        },
        {
            name: "Nazaryan Arsen Ashotovich",
            role: "Dotsent, “Do‘stlik” ordeni sohibi",
            subjects: "“Estrada cholg‘ularida ijrochilik”, “Ansambl sinfi”, “Bitiruv Malaka ishi Magistrlik desertatsiyasiyaga rahbarlik”"
        },
        {
            name: "Korotkov Valentin Viktorovich",
            role: "v.b.dotsent",
            subjects: "“Estrada cholg‘ularida ijrochilik”, “Ansambl sinfi”, “Improvizatsiya mahorati”, “Bitiruv Malaka ishi rahbarlik”"
        },
        {
            name: "Muxammadiyev Sobirjon Gulomovich",
            role: "v.b.dotsent",
            subjects: "“Estrada cholg‘ularida ijrochilik”, “Ansambl sinfi”, “Bitiruv Malaka ishi rahbarlik”"
        },
        {
            name: "Asminkina Olga Pavlovna",
            role: "Katta o‘qituvchi",
            subjects: "“Estrada cholg‘ularida ijrochilik”, “Ansambl sinfi”, “Bitiruv Malaka ishi rahbarlik”, “Improvizatsiya mahorati”, “Jo‘rnavozlik mahorati”, “Estrada cholg‘ularida o‘qitish uslubiyoti”"
        },
        {
            name: "Bagamanova Adelya Talxayevna",
            role: "Katta o‘qituvchi",
            subjects: "“Estrada cholg‘ularida ijrochilik”, “Jo‘rnavozlik mahorati”, “Bitiruv Malaka ishi rahbarlik”"
        },
        {
            name: "Yankin Sergey Aleksandrovich",
            role: "Katta o‘qituvchi",
            subjects: "“Estrada cholg‘ularida ijrochilik”, “Malakaviy amaliyot”, “Ansambl sinfi”, “Jo‘rnavozlik mahorati”, “Bitiruv Malaka ishi rahbarlik”"
        },
        {
            name: "Ilyasova Dono Daniyevna",
            role: "Katta o‘qituvchi",
            subjects: "“Estrada cholg‘ularida ijrochilik”, “Malakaviy amaliyot”, “Ansambl sinfi”, “Jo‘rnavozlik mahorati”, “Bitiruv Malaka ishi rahbarlik”"
        },
        {
            name: "Israilov Greg Ruslanovich",
            role: "Katta o‘qituvchi",
            subjects: "“Estrada cholg‘ularida ijrochilik”, “Malakaviy amaliyot”, “Ansambl sinfi”, “Jo‘rnavozlik mahorati”, “Bitiruv Malaka ishi rahbarlik”"
        },
        {
            name: "Fayziyev Baxodir Abduraxmonovich",
            role: "O‘qituvchi",
            subjects: "“Estrada cholg‘ularida ijrochilik”, “Ansambl sinfi”, “Improvizatsiya mahorati”"
        },
        {
            name: "Sadullayev Doniyor Sayfullayevich",
            role: "O‘qituvchi",
            subjects: "“Estrada cholg‘ularida ijrochilik”, “Malakaviy amaliyot”, “Ansambl sinfi”, “Improvizatsiya mahorati”"
        },
        {
            name: "Nuriddinov Shaxzod Ravshan o‘g‘li",
            role: "O‘qituvchi",
            subjects: "“Estrada cholg‘ularida ijrochilik”, “Malakaviy amaliyot”, “Ansambl sinfi”, “Jo‘rnavozlik mahorati”, “Bitiruv Malaka ishi rahbarlik”"
        },
        {
            name: "O‘rishov Umidjon Shovkatjon o‘g‘li",
            role: "O‘qituvchi",
            subjects: "“Estrada cholg‘ularida ijrochilik”, “Malakaviy amaliyot”, “Ansambl sinfi”, “Jo‘rnavozlik mahorati”, “Bitiruv Malaka ishi rahbarlik”"
        },
        {
            name: "Teshabayev Azizjon Axmad o‘g‘li",
            role: "O‘qituvchi",
            subjects: "“Estrada cholg‘ularida ijrochilik”, “Malakaviy amaliyot”, “Ansambl sinfi”, “Jo‘rnavozlik mahorati”, “Bitiruv Malaka ishi rahbarlik”"
        },
        {
            name: "Olimov Mo‘minjon Ne’matjon o‘g‘li",
            role: "O‘qituvchi, Respublika ko‘rik tanlovi g'olibi",
            subjects: "“Estrada cholg‘ularida ijrochilik”, “Ansambl sinfi”, “Jo‘rnavozlik mahorati”, “Bitiruv Malaka ishi rahbarlik”"
        },
        {
            name: "Bobomurodov Baxrom Toshpo‘latovich",
            role: "O‘qituvchi",
            subjects: "“Estrada cholg‘ularida ijrochilik”"
        },
        {
            name: "Daliyev Doston Boxodir og‘li",
            role: "O‘qituvchi",
            subjects: "“Estrada cholg‘ularida ijrochilik”, “Ansambl sinfi”, “Jo‘rnavozlik mahorati”, “Bitiruv Malaka ishi rahbarlik”"
        }
    ];

    return (
        <div className="space-y-8 text-gray-800 dark:text-gray-200">
            {/* Intro Section */}
            <Card className="shadow-lg border-none overflow-hidden rounded-2xl dark:bg-gray-800">
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-4 border-b border-gray-100 dark:border-gray-700 pb-4">
                        <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent text-2xl">
                            <BankOutlined />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white m-0">Kafedra haqida ma’lumot</h2>
                            <p className="text-gray-500 m-0">Estrada cholg‘ularida ijrochilik kafedrasi tarixi va faoliyati</p>
                        </div>
                    </div>

                    <div className="prose dark:prose-invert max-w-none text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                        <p>
                            Estrada musiqasi – bu kichik janrdagi kuchli mafkuraviy quroldir. U ommaning ongiga tez singadigan, istalgan g‘oyani targ‘ib etish qudratiga ega bo‘lgan ma’naviy kuchdir. Bunday kuchdan milliy qadriyatlarimizni keng miqiyosda targ‘ib qilishda, jahon shou-biznes maydonida milliy estradamizning o‘z qiyofasini saqlab qolishida, kelajak avlodning ma’naviy, tarbiyaviy va estetik qarashlarini ezgulikka yo‘naltirishda unumli foydalanish zarur.
                        </p>
                        <p>
                            Shu bois, estrada musiqasining tarixiy taraqqiyot bosqichlari va nazariy asoslarini o‘rganish, yangi ko‘rinishlarini, tamoyillarini yaratish, istiqbolini belgilashda ixtisoslashgan musiqashunoslik faoliyati – ilmiy qalqon kabi ulkan ahamiyatga egadir.
                        </p>
                    </div>
                </div>
            </Card>

            {/* History and Leadership */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="shadow-lg border-none rounded-2xl dark:bg-gray-800 h-full">
                    <div className="flex items-center gap-3 mb-4">
                        <HistoryOutlined className="text-xl text-accent" />
                        <h3 className="text-xl font-bold m-0">Tarixiy ma'lumot</h3>
                    </div>
                    <div className="space-y-4 text-gray-600 dark:text-gray-300">
                        <p>
                            1996-2002 –yillarda Toshkent davlat konservatoriyasining “Orkestr cholg‘ulari” fakulteti qoshida “Estrada ijrochiligi bo‘limi”da faoliyat ko‘rsatgan.
                        </p>
                        <p>
                            2002-yilda O‘zbekiston Respublikasi birinchi Prezidenti I.Karimov qaroriga binoan yangi konservatoriyada “Estrada san’ati” fakulteti tashkil etildi va unda “Estrada xonandaligi”, “Estrada cholg‘u ijrochiligi” hamda “Ovoz rejissyorligi” yo‘nalishlari ochildi.
                        </p>
                        <p>
                            Kafedra 1996-yil O‘zbekiston davlat konservatoriyasida kichik bir bo‘lim sifatida o‘z ish faoliyatini boshlagan. O‘sha davrda B.M.Murtozoyev, N.Q.Norxo‘jayev, E.Sh.Salixov, N.Soliyev, V.I.Saparov, X.I.Nazarov, O‘.S.Abdullayev kabi mohir sozanda va kompozitorlar faoliyat yuritishgan.
                        </p>
                    </div>
                </Card>

                <Card className="shadow-lg border-none rounded-2xl dark:bg-gray-800 h-full">
                    <div className="flex items-center gap-3 mb-4">
                        <UserOutlined className="text-xl text-accent" />
                        <h3 className="text-xl font-bold m-0">Rahbariyat</h3>
                    </div>
                    <div className="space-y-4 text-gray-600 dark:text-gray-300">
                        <div className="border-l-2 border-accent pl-4">
                            <span className="text-xs font-bold text-gray-400 uppercase">1996-1998 yy.</span>
                            <p className="font-semibold m-0">Enmark Salixov</p>
                            <p className="text-sm m-0">O‘zbekiston san’at arbobi, kompozitor</p>
                        </div>
                        <div className="border-l-2 border-accent pl-4">
                            <span className="text-xs font-bold text-gray-400 uppercase">1999-2002 yy.</span>
                            <p className="font-semibold m-0">Nadim Norxo‘jayev</p>
                            <p className="text-sm m-0">Professor</p>
                        </div>
                        <div className="border-l-2 border-accent pl-4">
                            <span className="text-xs font-bold text-gray-400 uppercase">2002-2016 yy.</span>
                            <p className="font-semibold m-0">Dilorom Amanullayeva</p>
                            <p className="text-sm m-0">Professor, O‘zbekiston Respublikasi san’at arbobi</p>
                        </div>
                        <div className="border-l-2 border-accent pl-4">
                            <span className="text-xs font-bold text-gray-400 uppercase">2015-2021 yy.</span>
                            <p className="font-semibold m-0">X.I.Nazarov</p>
                            <p className="text-sm m-0">Dotsent, kompozitor</p>
                        </div>
                        <div className="bg-accent/5 p-3 rounded-lg border border-accent/20">
                            <span className="text-xs font-bold text-accent uppercase">2022-yildan hozirgi kunga qadar</span>
                            <p className="font-bold text-lg m-0 text-accent">O‘.S.Abdullayev</p>
                            <p className="text-sm m-0">O‘zbekiston davlat konservatoriyasi dotsenti</p>
                        </div>
                    </div>
                </Card>
            </div>

            {/* Maqsad va Vazifalar */}
            <Card className="shadow-lg border-none rounded-2xl dark:bg-gray-800 bg-gradient-to-r from-[#002140] to-[#0f2a4a] text-white">
                <div className="flex items-start gap-4">

                    <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                            <CheckCircleOutlined className="text-2xl text-[#c0a062]" />
                            <h3 className="text-2xl font-bold text-white m-0">Maqsad va Vazifalar</h3>
                        </div>
                        <p className="text-gray-200 text-lg leading-relaxed m-0">
                            Kafedraning asosiy maqsad va vazifalari – musiqiy ta’lim-tarbiya nazariyasi va amaliyotini chuqur o‘rganish, metodologik masalalarni tadqiq etish, yosh iqtidor egalarini aniqlab ularning iqtidorini rivojlantirish, mohir sozanda, ansambl va orkestr solisti, turli badiiy jamoalar rahbari, o‘qituvchi, ilyustrator va musiqiy jamoalar artisti qilib tarbiyalashdan iboratdir.
                        </p>
                    </div>
                </div>
            </Card>

            {/* Academic Stats & Process */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card title={<span className="font-bold text-lg"><ReadOutlined className="mr-2 text-accent" />O'quv jarayoni</span>} className="shadow-md rounded-2xl dark:bg-gray-800 border-none">
                    <p className="mb-4">Kafedra quyidagi fanlar bo'yicha tayanch hisoblanadi:</p>
                    <div className="flex flex-wrap gap-2">
                        {[
                            "Estrada cholg‘u ijrochiligi",
                            "Ansambl sinfi",
                            "Estrada cholg‘ularida o‘qitish uslubiyoti",
                            "Improvizatsiya",
                            "Jo‘rnavozlik mahorati",
                            "Milliy cholg‘ularni o‘rganish",
                            "Turdosh cholg‘ular"
                        ].map((subject, idx) => (
                            <Badge key={idx} count={subject} style={{ backgroundColor: '#c0a062', color: '#fff', fontSize: '12px', padding: '0 8px' }} />
                        ))}
                    </div>
                    <Divider />
                    <p className="font-bold mb-2">Pedagogik tarkib:</p>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                        <li>1 nafar professor v.b.</li>
                        <li>2 nafar dotsent</li>
                        <li>2 nafar dotsent vazifasini bajaruvchi</li>
                        <li>5 nafar katta o‘qituvchi</li>
                        <li>8 nafar o‘qituvchi</li>
                        <li>7 nafar joʻrnavoz</li>
                    </ul>
                </Card>

                <Card title={<span className="font-bold text-lg"><GlobalOutlined className="mr-2 text-accent" />Xalqaro va ilmiy faoliyat</span>} className="shadow-md rounded-2xl dark:bg-gray-800 border-none">
                    <div className="space-y-4">
                        <div>
                            <h4 className="font-bold text-gray-800 dark:text-white">Bitiruvchilar geografiyasi</h4>
                            <p className="text-sm text-gray-500">Kafedra bitiruvchilari dunyoning turli nuqtalarida faoliyat yuritmoqda:</p>
                            <div className="flex flex-wrap gap-2 mt-2">
                                <span className="px-2 py-1 bg-blue-50 text-blue-600 rounded text-xs font-bold">AQSH</span>
                                <span className="px-2 py-1 bg-blue-50 text-blue-600 rounded text-xs font-bold">BAA</span>
                                <span className="px-2 py-1 bg-blue-50 text-blue-600 rounded text-xs font-bold">Koreya</span>
                                <span className="px-2 py-1 bg-blue-50 text-blue-600 rounded text-xs font-bold">Belgiya</span>
                                <span className="px-2 py-1 bg-blue-50 text-blue-600 rounded text-xs font-bold">Rossiya</span>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-800 dark:text-white">Hamkorlik</h4>
                            <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400">
                                <li>Uspenskiy nomidagi RIMM</li>
                                <li>Glier nomidagi RIMM</li>
                                <li>Karim Zaripov nomidagi Respublika Estrada sirk kolleji</li>
                                <li>Milliy gvardiya tasarrufidagi musiqa akademik litseyi</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-800 dark:text-white">Ilmiy ishlar</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Pedagoglar tomonidan ko'plab o‘quv qo‘llanmalar va darsliklar chop etilgan (B.M.Murtozoyev, N.Soliyev, V.I.Saparov va boshqalar).
                            </p>
                        </div>
                    </div>
                </Card>
            </div>

            {/* Staff List */}
            <div className="space-y-6">
                <div className="flex items-center gap-4">
                    <div className="w-1.5 h-8 bg-accent rounded-full"></div>
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white m-0">Kafedra xodimlari</h2>
                </div>

                <div className="grid grid-cols-1 gap-4">
                    {staff.map((person, index) => (
                        <Card key={index} className="border-l-4 border-l-accent border-y-0 border-r-0 shadow-sm hover:shadow-md transition-shadow dark:bg-gray-800">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white m-0">{person.name}</h3>
                                    <p className="text-accent font-medium m-0">{person.role}</p>
                                </div>
                                <div className="md:w-1/2 text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-white/5 p-3 rounded-lg">
                                    <span className="font-semibold block mb-1">Olib boradigan fanlari:</span>
                                    {person.subjects}
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default EstradaDepartment;
