import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import './i18n';
import './index.css'
import 'aos/dist/aos.css'; // Enable AOS styles
import AOS from 'aos';
import App from './App.jsx'

// Initialize AOS
AOS.init({
  duration: 800,
  once: true,
  easing: 'ease-out-cubic',
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
