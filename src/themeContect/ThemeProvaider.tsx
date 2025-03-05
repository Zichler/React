import {ReactNode, useState } from "react";
import ThemeContext from "./ThemeContext";

interface ThemeProviderProps {
   children: ReactNode;
}
export function ThemeProvider({children}:ThemeProviderProps){
const [theme, setTheme] = useState<string>("light");

function toggleTheme() {

setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light" ));
}

return(
    <ThemeContext.Provider value={{theme, toggleTheme}}>
        {children}
    </ThemeContext.Provider>
)
}