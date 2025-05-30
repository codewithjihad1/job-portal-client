import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeProvider';
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
            {theme === 'dark' ? (
                <FiSun className="text-yellow-400 w-5 h-5" />
            ) : (
                <FiMoon className="text-gray-700 w-5 h-5" />
            )}
        </button>
    );
};

export default ThemeToggle;
