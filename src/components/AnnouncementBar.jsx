import React from 'react';
import { Alert } from 'antd';
import Marquee from 'react-fast-marquee';

const AnnouncementBar = () => {
    return (
        <div className="w-full">
            <Alert
                banner
                type="warning"
                message={
                    <Marquee pauseOnHover gradient={false}>
                        Diqqat! 2026-o‘quv yili uchun qabul jarayonlari 20-iyundan boshlanadi. Barcha abituriyentlarni kutib qolamiz! &nbsp; &nbsp; &nbsp; &nbsp;
                        E'lon: 14-yanvar — Vatan himoyachilari kuni munosabati bilan institutda katta bayram tadbiri o'tkaziladi.
                    </Marquee>
                }
            />
        </div>
    );
};

export default AnnouncementBar;
