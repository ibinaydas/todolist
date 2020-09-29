import React, { createContext } from 'react';
import useToggleState from './useToggleState';
import useLocalStorageState from './useLocalStorageState';

const ThemeContext = createContext();

function ThemeContextProvider(props) {
    const [todoDarkMode, setTodoDarkMode] = useLocalStorageState('todo-theme', false);
    const [isDarkTheme, toggleIsDarkTheme] = useToggleState(todoDarkMode);
    const toggleTheme = () => {
        setTodoDarkMode(!isDarkTheme);
        toggleIsDarkTheme();
    };
    return (
        <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
            {props.children}
        </ThemeContext.Provider>
    );
}

export { ThemeContextProvider, ThemeContext };