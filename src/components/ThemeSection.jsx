import { useContext } from "react"
import { theme } from "../Context/themeContext";

export default function ThemeSection(){
    const {isDarkTheme,handleThemeChange}=useContext(theme);
    return(
        <button onClick={handleThemeChange} className={isDarkTheme?"theme-btn dark":"theme-btn"}>
            {isDarkTheme?("This is dark theme"):("This is light theme")}
        </button>
    )
}