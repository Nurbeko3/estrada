import React from 'react';
import Hero from '../sections/Hero';
import News from '../sections/News';
import Gallery from '../sections/Gallery';
import Statistics from '../sections/Statistics';
import MapSection from '../sections/MapSection';

const HomePage = () => {
    return (
        <>
            <Hero />
            <News />
            <Statistics />
            <Gallery />
            <MapSection />
        </>
    );
};

export default HomePage;
