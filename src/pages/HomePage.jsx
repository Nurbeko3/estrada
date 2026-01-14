import React from 'react';
import Hero from '../sections/Hero';
import News from '../sections/News';
import Gallery from '../sections/Gallery';
import MapSection from '../sections/MapSection';

const HomePage = () => {
    return (
        <>
            <Hero />
            <News />
            <Gallery />
            <MapSection />
        </>
    );
};

export default HomePage;
