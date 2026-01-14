import { ConfigProvider, theme } from 'antd';
import { useTheme } from './context/ThemeContext';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LeadershipPage from './pages/LeadershipPage';
import HistoryPage from './pages/HistoryPage';
import NewsCategoryPage from './pages/NewsCategoryPage';

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
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans transition-colors duration-300 flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/leadership" element={<LeadershipPage />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/news/:category" element={<NewsCategoryPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ConfigProvider>
  );
}

export default App;
