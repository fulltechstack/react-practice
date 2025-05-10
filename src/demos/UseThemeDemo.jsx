import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const UseThemeDemo = () => {

    let themeContext = useContext(ThemeContext);

    const toggleTheme = () => {
        themeContext.setTheme(prev => {
            return prev === 'dark' ? 'light' : 'dark';
        });
    }
    return (<>
        {themeContext.theme}
        <button onClick={toggleTheme}>Toggle theme</button>
    </>
    );
}

export default UseThemeDemo;