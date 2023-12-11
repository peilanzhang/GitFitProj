import React, { createContext, useContext, useState} from "react";

const ThemeContext = createContext();

export const useTheme = () => {
    return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return( 
        <ThemeContext.Provider value = {{ isDarkMode, toggleDarkMode}}>
            {children}
        </ThemeContext.Provider>
    );
};