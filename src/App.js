import React from 'react';
import NavBar from './nav-bar';
import MainContent from './main-content';
import { ThemeContextProvider } from './hooks/themeContext';
import { LanguageContextProvider } from './hooks/languageContext';
import './App.css';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <LanguageContextProvider>
          <NavBar />
          <MainContent />
        </LanguageContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
