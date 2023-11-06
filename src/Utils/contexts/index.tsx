import { createContext, useContext, useState } from 'react';

interface ThemeContextType {
    theme: string;
    toggleTheme: () => void;
}

interface ThemeProviderProps {
    children: React.ReactNode;
}

export const ThemeContext = createContext({} as ThemeContextType);

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a contextProvider');
    }
    return context;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState('dark');
    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};
