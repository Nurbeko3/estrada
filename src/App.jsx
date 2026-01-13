import React from 'react';
import Header from './components/Header';
import AnnouncementBar from './components/AnnouncementBar';
import Hero from './sections/Hero';
import News from './sections/News';
import Leadership from './sections/Leadership';
import Gallery from './sections/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <AnnouncementBar />
      <Header />
      <main>
        <Hero />
        <News />
        <Leadership />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}

export default App;
