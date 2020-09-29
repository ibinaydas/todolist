import React, { createContext } from 'react';
import useInputState from './useInputState';
import useLocalStorageState from './useLocalStorageState';

const LanguageContext = createContext();

function LanguageContextProvider(props) {
    const [todoLang, setTodoLang] = useLocalStorageState('todo-lang', 'english');
    const [lang, setLang] = useInputState(todoLang);
    const changeLang = (evt) => {
        setTodoLang(evt.target.value);
        setLang(evt);
    };
    return (
        <LanguageContext.Provider value={{ lang, changeLang }}>
            {props.children}
        </LanguageContext.Provider>
    );
}

export { LanguageContextProvider, LanguageContext };