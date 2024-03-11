import React, { useState, useContext} from 'react';
import strings from "../util/language.jsx";
import { Navbar, Nav, Container } from "react-bootstrap"
import { Outlet, Link } from "react-router-dom"
import '../App.css';
import LanguageContext from '../util/languagecontext';
import ModeContext from '../util/modecontext.jsx';
const Header = ( {onLanguageChange , onModeChange }) => {

  // Define el estado del idioma actual
  const language = useContext(LanguageContext); // Obtener el idioma actual del contexto
  const mode = useContext(ModeContext);

  const modeClass = mode === "light" ? "" : "dark-mode";

  const scrollToSection = (sectionName) => {
    const section = document.getElementById(sectionName);
    console.log(section)
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};

  return (
    <>
    <Navbar className={`navBg sticky-top ${modeClass}`} variant="dark" expand="lg">
    <Container>
        <Navbar.Brand as={Link} to="/home"><h1 className='normalText brandFont mt-2'>{strings[language].title}</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            
            <button className='altText personalButton me-2' onClick={() => scrollToSection('aboutme')}> 
            <Nav.Link as={Link} to="/home#aboutme">   
            <t className='altText brandFont'>{strings[language].about}</t>
            </Nav.Link>
            </button>

            <button className='altText personalButton me-2' onClick={() => scrollToSection('experience')}> 
            <Nav.Link as={Link} to="/home#experience">   
            <t className='altText brandFont'>{strings[language].experience}</t>
            </Nav.Link>
            </button>

            <button className='altText personalButton me-2' onClick={() => scrollToSection('proyects')}> 
            <Nav.Link as={Link} to="/home#projects">   
            <t className='altText brandFont'>{strings[language].projects}</t>
            </Nav.Link>
            </button>

            <button className='altText personalButton me-2' onClick={() => scrollToSection('contact')}>
            <Nav.Link as={Link} to="/home#contact">
            <t className='altText brandFont'>{strings[language].contact}</t>
            </Nav.Link>  
            </button>   

              <label className="ui-switch me-2">
              <input type="checkbox" onClick={onLanguageChange}/>
              <div class="slider">
                <div class="circle2">{strings[language].language}</div>
              </div>
            </label>
              <label className="ui-switch me-2">
              <input type="checkbox" onClick={onModeChange}/>
              <div class="slider">
                <div class="circle"></div>
              </div>
            </label>
            
            
        </Nav>
        </Navbar.Collapse>
    </Container>  
    </Navbar>


    </> 
  );
};

export default Header;