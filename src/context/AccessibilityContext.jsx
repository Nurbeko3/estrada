import { createContext, useState, useContext, useEffect } from 'react';

const AccessibilityContext = createContext();

export const useAccessibility = () => useContext(AccessibilityContext);

export const AccessibilityProvider = ({ children }) => {
    const [fontSize, setFontSize] = useState(16); // Base font size in pixels
    const [mode, setMode] = useState('normal'); // 'normal', 'grayscale', 'high-contrast'

    const toggleGrayscale = () => {
        setMode(prev => prev === 'grayscale' ? 'normal' : 'grayscale');
    };

    const toggleHighContrast = () => {
        setMode(prev => prev === 'high-contrast' ? 'normal' : 'high-contrast');
    };

    const increaseFontSize = () => {
        setFontSize(prev => Math.min(prev + 2, 24));
    };

    const decreaseFontSize = () => {
        setFontSize(prev => Math.max(prev - 2, 14));
    };

    const resetSettings = () => {
        setFontSize(16);
        setMode('normal');
    };

    // Apply changes to body
    useEffect(() => {
        const html = document.documentElement;
        html.style.fontSize = `${fontSize}px`;

        // Remove existing classes
        document.body.classList.remove('grayscale-mode', 'high-contrast');

        if (mode === 'grayscale') {
            document.body.classList.add('grayscale-mode');
        } else if (mode === 'high-contrast') {
            document.body.classList.add('high-contrast');
        }
    }, [fontSize, mode]);

    return (
        <AccessibilityContext.Provider value={{
            fontSize,
            mode,
            toggleGrayscale,
            toggleHighContrast,
            increaseFontSize,
            decreaseFontSize,
            resetSettings
        }}>
            {children}
        </AccessibilityContext.Provider>
    );
};
