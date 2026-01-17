import React, { useState, useMemo } from 'react';
import { Tabs, Image, Typography, Empty } from 'antd';
import { SoundOutlined, PlayCircleOutlined, PictureOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

// Dynamically import images from src/assets/images/MediaGallery
const photoFiles = import.meta.glob('../../assets/images/MediaGallery/*.{png,jpg,jpeg,svg,webp}', { eager: true, as: 'url' });

const MediaGalleryComponent = () => {
    const [activeTab, setActiveTab] = useState('photos');

    // --- DATA ---

    // 1. Photos
    const photos = useMemo(() => {
        if (!photoFiles) return [];
        return Object.keys(photoFiles).map((path, index) => {
            return {
                src: photoFiles[path],
                id: index,
                alt: `Media Gallery Photo ${index + 1}`
            };
        });
    }, []);

    // 2. Audio - Spotify Albums
    const spotifyAlbums = [
        {
            id: "6oU3gNuQlKJ1Htacd3ajn3",
            title: "Botir Zokirov - Oltin Fond",
            description: "O'zbek estrada san'ati klassikasi"
        },
        {
            id: "70WT8KnN65fk0VQVmMxEXY",
            title: "Estrada Yulduzlari",
            description: "Mashhur qo'shiqlar to'plami"
        },
        {
            id: "0t3nWJqTzCjIxURlLejph8",
            title: "Milliy Estrada",
            description: "Ko'ngilga yaqin navolar"
        },
        {
            id: "2ePDZBsx6eRPV9HEhOBlus",
            title: "Zamonaviy Ijrolar",
            description: "Yosh iste'dodlar ijrosida"
        }
    ];

    const [currentAlbumId, setCurrentAlbumId] = useState(spotifyAlbums[0].id);

    // 3. Videos - YouTube
    const videos = [
        { id: "_wWHlilXDRE", title: "Video Lavha 1" },
        { id: "SBCD2f1elfY", title: "Video Lavha 2" },
        { id: "hGUOwVYSWxE", title: "Video Lavha 3" },
        { id: "mzfoThtXSQ0", title: "Video Lavha 4" },
        { id: "-z2NR07jO8A", title: "Video Lavha 5" },
        { id: "wWqHqaWkDL0", title: "Video Lavha 6" }
    ];

    // --- RENDERERS ---

    const renderPhotos = () => {
        if (!photos || photos.length === 0) return <Empty description="Rasmlar topilmadi" />;

        return (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <Image.PreviewGroup>
                    {photos.map((photo) => (
                        <div key={photo.id} className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 h-48 md:h-64 relative group">
                            <Image
                                src={photo.src}
                                alt={photo.alt}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                width="100%"
                                height="100%"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                                <PictureOutlined className="text-white text-3xl opacity-80" />
                            </div>
                        </div>
                    ))}
                </Image.PreviewGroup>
            </div>
        );
    };

    const renderAudio = () => {
        return (
            <div className="space-y-8">
                {/* Active Player */}
                <div className="bg-black rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
                    <iframe
                        style={{ borderRadius: '12px' }}
                        src={`https://open.spotify.com/embed/album/${currentAlbumId}?utm_source=generator&theme=0`}
                        width="100%"
                        height="352"
                        frameBorder="0"
                        allowFullScreen=""
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                        title="Spotify Player"
                    ></iframe>
                </div>

                {/* Album Selection List */}
                <div>
                    <h3 className="text-xl font-bold dark:text-white mb-4 flex items-center gap-2">
                        <SoundOutlined className="text-accent" /> Boshqa to'plamlar
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {spotifyAlbums.map((album) => (
                            <div
                                key={album.id}
                                onClick={() => setCurrentAlbumId(album.id)}
                                className={`
                                    cursor-pointer p-4 rounded-xl transition-all duration-300 border
                                    flex flex-col gap-2 relative overflow-hidden group
                                    ${currentAlbumId === album.id
                                        ? 'bg-accent text-white border-accent shadow-lg scale-105'
                                        : 'bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700 hover:shadow-md hover:border-accent/50'
                                    }
                                `}
                            >
                                <div className="flex items-center justify-between">
                                    <span className={`font-bold text-lg ${currentAlbumId === album.id ? 'text-white' : 'text-gray-800 dark:text-white'}`}>
                                        {album.title}
                                    </span>
                                    {currentAlbumId === album.id && <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>}
                                </div>
                                <span className={`text-sm ${currentAlbumId === album.id ? 'text-white/80' : 'text-gray-500'}`}>
                                    {album.description}
                                </span>

                                {currentAlbumId !== album.id && (
                                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <PlayCircleOutlined className="text-3xl text-accent opacity-80" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    };

    const renderVideos = () => {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {videos.map((video) => (
                    <div key={video.id} className="bg-black rounded-xl overflow-hidden shadow-lg border border-gray-800 aspect-video">
                        <iframe
                            className="w-full h-full"
                            src={`https://www.youtube.com/embed/${video.id}`}
                            title={video.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                ))}
            </div>
        );
    };

    // --- TABS ITEMS ---
    const tabItems = [
        {
            key: 'photos',
            label: (
                <span className="flex items-center gap-2">
                    <PictureOutlined /> Fotolar
                </span>
            ),
            children: renderPhotos(),
        },
        {
            key: 'audios',
            label: (
                <span className="flex items-center gap-2">
                    <SoundOutlined /> Musiqalar
                </span>
            ),
            children: renderAudio(),
        },
        {
            key: 'videos',
            label: (
                <span className="flex items-center gap-2">
                    <PlayCircleOutlined /> Videolar
                </span>
            ),
            children: renderVideos(),
        },
    ];

    return (
        <div className="space-y-6">
            <div>
                <Title level={2} className="dark:text-white mb-2">Media Galereya</Title>
                <Text className="text-gray-500 dark:text-gray-400">
                    Institut hayotidan yorqin lavhalar, musiqiy ijrolar va video reportajlar.
                </Text>
            </div>

            <Tabs
                defaultActiveKey="photos"
                activeKey={activeTab}
                onChange={setActiveTab}
                items={tabItems}
                type="card"
                size="large"
                className="custom-tabs"
            />
        </div>
    );
};

export default MediaGalleryComponent;
