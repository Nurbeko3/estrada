import { ConfigProvider, theme } from 'antd';
import { useTheme } from './context/ThemeContext';
import Header from './components/Header';
import AnnouncementBar from './components/AnnouncementBar'; // Ensure this is not used if we moved it to Header
// We removed AnnouncementBar from JSX previously, so we don't need to import it if it's unused.
// But let's check imports.

import Hero from './sections/Hero';
import News from './sections/News';
import Leadership from './sections/Leadership';
import Gallery from './sections/Gallery';
import Footer from './components/Footer';

function App() {
  const { theme: currentTheme } = useTheme();

  return (
    <ConfigProvider
      theme={{
        algorithm: currentTheme === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm,
        token: {
          colorPrimary: '#c0a062', // Accent color
        },
      }}
    >
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <News />
          <Leadership />
          <Gallery />
        </main>
        <Footer />
      </div>
    </ConfigProvider>
  );
}

export default App;
