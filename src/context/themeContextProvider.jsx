import React, {useState} from "react";
import ThemeContext from "./themeContext";


const ThemeContextProvider = ({children}) =>{
    const [color, setColor] = useState("#d3d3d3")
    const [bgColor, setBgColor] = useState("#0c0c0c")
    return(
        <ThemeContext.Provider value={{color, setColor, bgColor, setBgColor}}>
            {children}
        </ThemeContext.Provider>
    )

}

export default ThemeContextProvider;