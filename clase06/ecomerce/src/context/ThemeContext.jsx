import { createContext, useContext, useState } from "react";

const ThemeContext = createContext(null)

const STORAGE_KEY = "coderstore-theme"

const getInitialTheme = () => {
    if(typeof window === "undefined") {
        return "light"
    }

    const saved = window.localStorage.getItem(STORAGE_KEY)
    return saved === "dark" ? "dark" : "light"
}

export const ThemeProvider = ({ children}) => {
    const [theme, setTheme] = useState(getInitialTheme)


    const toggleTheme = () => {
        setTheme( (current ) => (current === 'light' ? 'dark' : 'light'))
    }

    const value = {
        theme, 
        setTheme, 
        toggleTheme
    }

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>

}


// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
    const context = useContext(ThemeContext)
    if(!context) {
        throw new Error("useTheme debe ser usado dentro de un ThemeProvider")
    }
    return context
}
