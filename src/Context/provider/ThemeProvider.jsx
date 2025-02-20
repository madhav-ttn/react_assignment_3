import { useState } from "react"
import { theme } from "../themeContext"
export default function ThemeProvider({children}){
    const [isDarkTheme,setIsDarkTheme]=useState(false);
    const handleThemeChange=()=>{
        setIsDarkTheme(!isDarkTheme);
    }
    return(
    <theme.Provider value={{isDarkTheme,handleThemeChange}} children={children}>
       {children}
    </theme.Provider>
   )
}