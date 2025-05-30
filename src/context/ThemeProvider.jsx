import React, { createContext, useEffect, useState } from 'react';

// Create a context for theme management
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    // Check if user has a theme preference in localStorage
    const [theme, setTheme] = useState(() => {
        // Check if we're in the browser environment
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme) {
                return savedTheme;
            }
        }
        return 'light';
    });

    // Apply theme class to the document
    useEffect(() => {
        // Save the current theme preference in localStorage
        localStorage.setItem('theme', theme);

        // Apply or remove the dark class based on the current theme
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.removeAttribute('data-theme', 'light');
        }
    }, [theme]);

    // Toggle between light and dark themes
    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };

    // Set a specific theme
    const setThemeMode = (mode) => {
        if (mode === 'light' || mode === 'dark') {
            setTheme(mode);
        }
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, setThemeMode }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
