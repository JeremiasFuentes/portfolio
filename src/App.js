import { BrowserRouter, Navigate, Route, Routes, Outlet } from 'react-router-dom';
import Home from './components/home';
import Header from './components/header';
import LanguageContext from './util/languagecontext';
import React, { useState, useContext, useEffect} from 'react';
import ModeContext from './util/modecontext';
import Themes from './util/themes';
import { ThemeProvider } from 'styled-components';

function App() {

  const [language, setLanguage] = useState('es'); // Estado del idioma actual
  const [mode, setMode] = useState('light');// Modo del sitio

  // Función para cambiar el idioma al presionar el botón
  const handleLanguageChange = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  // Función para cambiar el tema al presionar el botón
  const handleModeChange = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
    document.body.classList.toggle('dark-mode', mode === 'light');
  };

  const modeClass = mode === "light" ? "" : "dark-mode";

  useEffect(() => {
    document.body.classList.toggle('dark', mode === 'dark');
  }, [mode]);

  return (
    <LanguageContext.Provider value={language}>
    <ModeContext.Provider value={mode}>
    <div className={`${modeClass} bodyBackground`}>
    <BrowserRouter>
      <Header onLanguageChange={handleLanguageChange} onModeChange={handleModeChange}></Header>
      <Routes>
          <Route path="/home" element={<Home />} />
      </Routes> 
    </BrowserRouter>
    </div>
    </ModeContext.Provider>
    </LanguageContext.Provider>
  );
}

export default App;