"use client"
import React, { useState,createContext } from 'react'
interface ThemeContextType {
    isDark: boolean;
    setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
}
const ThemeContext = createContext<ThemeContextType>({
    isDark: false, // default theme value
    setIsDark: () => {} // a placeholder function for setTheme
});
export default function ThemeContextProvider({children}:any) {
    let [isDark,setIsDark] = useState(false);
    return (
        <ThemeContext.Provider value={{ isDark,setIsDark }}>
            {children}
        </ThemeContext.Provider>
    )
}
export {ThemeContext}