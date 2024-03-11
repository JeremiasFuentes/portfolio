import React, { useState,useContext, useRef, useEffect } from 'react';
import strings from "../util/language.jsx";
import LanguageContext from '../util/languagecontext.jsx';
import ModeContext from '../util/modecontext.jsx';
import reacticon from '../images/reacticon.png'
import bootstrapicon from '../images/bootstrapicon.png'
import giticon from '../images/github.png'
import webicon from '../images/webicon.webp'
import jsicon from '../images/JavaScript-logo.png'
import javaicon from '../images/Java-Logo.png'
import javabrandicon from '../images/javabrand.png'
import csharpicon from '../images/logoc.png'
import springicon from '../images/springbootlogo.png'
import neticon from '../images/NET_Core_Logo.svg.png'
import godoticon from '../images/godotlogo.png'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'

import emailjs from '@emailjs/browser';


const Home = () => {

  

  const language = useContext(LanguageContext)
  const mode = useContext(ModeContext);

  const modeClass = mode === "light" ? "" : "dark-mode";

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kqe7qfz', 'template_20bj86e', form.current, 'SLt9O7RWWddAJygg6')
      .then((result) => {
          console.log(result.text);
          form.current.reset();
      }, (error) => {
          console.log(error.text);
      });
  };


    return (
      <>
      
      <section id="aboutme">
        <div className={`${modeClass} container`}>
          
          <h1 className='normalText mt-4 textFont'>{strings[language].name}</h1>
          <h2 className='normalText fw-bold textFont'>{strings[language].description}</h2>
          <div className='aboutMeContainer'>
          <p className='normalText textFont mt-2'>{strings[language].aboutme1}</p>
          <p className='normalText textFont mt-2 mb-3'>{strings[language].aboutme2}</p>
          </div>
        </div>
      </section>

      <div class="container">
        <h2 class='normalText mt-4 brandFont'>{strings[language].skills}:</h2>
        <div class="row div-slider">
          <div class="col-2">
            <div class="img-container">
              <img src={javabrandicon} alt="Java"/>
              <div class="img-overlay">Java</div>
            </div>
          </div>
          <div class="col-2">
            <div class="img-container">
              <img src={csharpicon} alt="CSharp"/>
              <div class="img-overlay">C#</div>
            </div>
          </div>
          <div class="col-2">
            <div class="img-container">
              <img src={neticon} alt=".NET"/>
              <div class="img-overlay">.NET</div>
            </div>
          </div>
          <div class="col-2">
            <div class="img-container">
              <img src={springicon} alt="Spring"/>
              <div class="img-overlay">Spring/SpringBoot</div>
            </div>
          </div>
          <div class="col-2">
            <div class="img-container">
              <img src={jsicon} alt="JavaScript"/>
              <div class="img-overlay">JavaScript</div>
            </div>
          </div>
          <div class="col-2">
            <div class="img-container">
              <img src={reacticon} alt="React"/>
              <div class="img-overlay">React</div>
            </div>
          </div>
        </div>
      </div>

      <section id="experience">
        <div className={`${modeClass} container`}>
        <h2 class='normalText mt-4 brandFont'>{strings[language].experience}:</h2>
          <section class="py-5">

            <ul class="timeline">
              <li class="timeline-item mb-5">
                <h5 className={`fw-bold normalText`}>{strings[language].job1}</h5>
                <p class="text-muted mb-2 fw-bold">Enta Consulting</p>
                <p class="text-muted mb-2 fw-bold">{strings[language].time1}
                </p>
                <p class="text-muted">
                  <ul>
                    <li>{strings[language].job1point1}</li>
                    <li>{strings[language].job1point2}</li>
                    <li>{strings[language].job1point3}</li>
                  </ul>
                </p>
              </li>

              <li class="timeline-item mb-5">
                <h5 className={`fw-bold normalText`}>{strings[language].job2}</h5>
                <p class="text-muted mb-2 fw-bold">Enta Consulting</p>
                <p class="text-muted mb-2 fw-bold">{strings[language].time2}
                </p>
                <p class="text-muted">
                  <ul>
                    <li>{strings[language].job2point1}</li>
                    <li>{strings[language].job2point2}</li>
                    <li>{strings[language].job2point3}</li>
                  </ul>
                </p>
              </li>

          
            </ul>
          </section>
        </div>
      </section>

      <section id="proyects">
      
        <div className={`${modeClass} container`}>
        <h2 class='normalText mb-5 brandFont'>{strings[language].projects}:</h2>
        <div class="row  div-slider">
          
              <div className="navBgCard card col-sm-10 col-lg-5 mb-3 custom-margin">
                  
              <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
                  <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  </div>
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img src={`${process.env.PUBLIC_URL}/images/homeportfolio.jpg`} class="d-block w-100 slideCarousel" alt="..." style={{width: '500px', height: '300px'}}/>
                    </div>
                    <div class="carousel-item">
                      <img src={`${process.env.PUBLIC_URL}/images/contact.jpg`} class="d-block w-100 slideCarousel" alt="..." style={{width: '500px', height: '300px'}}/>
                    </div>
                    <div class="carousel-item">
                      <img src={`${process.env.PUBLIC_URL}/images/proyects.jpg`} class="d-block w-100 slideCarousel" alt="..." style={{width: '500px', height: '300px'}}/>
                    </div>
                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
                    <div class="card-body">
                    
                      <h4 class="card-title normalText textFont fw-bold">Portfolio Page</h4>
                      <p class="card-text normalText textFont">{strings[language].project1}</p>
                      <p class="card-text normalText textFont">{strings[language].technology}:</p>
                      <div class="container">
                        <a href="#">
                          <img src={reacticon} alt="React" title="React" style={{width: '30px', height: '30px', marginRight: '5px'}}/>
                        </a>
                        <a href="#">
                          <img src={bootstrapicon} alt="Bootstrap" title="Bootstrap" style={{width: '30px', height: '30px', marginRight: '5px'}}/>
                        </a>
                        <a href="#">
                          <img src={jsicon} alt="JavaScript" title="JavaScript" style={{width: '30px', height: '30px'}}/>
                        </a>
                      </div>
                      <p class="card-text normalText mt-2 textFont">Links:</p>
                      <div class="container">
                        <a href="#" className="btn btn-info marginButtons">
                          <i class="bi bi-link"></i>
                          <img src={webicon} alt="Web" style={{width: '20px', height: '20px'}}/>
                        </a>
                        <a href="#" class="btn btn-warning">
                          <i class="bi bi-github"></i>
                          <img src={giticon} alt="Github" style={{width: '20px', height: '20px'}}/>
                        </a>
                      </div>
                    
                  </div>
              </div>
              <div class="card col-sm-10 col-lg-5 mb-3 navBgCard">
              <div id="carouselExampleIndicators2" class="carousel slide" data-bs-ride="true">
                  <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  </div>
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img src={`${process.env.PUBLIC_URL}/images/turnos.jpg`} class="d-block w-100 slideCarousel" alt="..." style={{width: '500px', height: '300px'}}/>
                    </div>
                    <div class="carousel-item">
                      <img src={`${process.env.PUBLIC_URL}/images/odontograma.jpg`} class="d-block w-100 slideCarousel" alt="..." style={{width: '800px', height: '300px'}}/>
                    </div>
                    <div class="carousel-item">
                      <img src={`${process.env.PUBLIC_URL}/images/listapacientes.jpg`} class="d-block w-100 slideCarousel" alt="..." style={{width: '800px', height: '300px'}}/>
                    </div>
                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
                  
                    <div class="card-body">
                      <h4 class="card-title normalText textFont fw-bold">OdontoTIP</h4>
                      <p class="card-text normalText textFont">{strings[language].project2}</p>
                      <p class="card-text normalText textFont">{strings[language].technology}:</p>
                      <div class="container">
                        <a href="#">
                          <img src={reacticon} alt="React" title='React' style={{width: '30px', height: '30px', marginRight: '5px'}}/>
                        </a>
                        <a href="#">
                          <img src={bootstrapicon} alt="Bootstrap" title='Bootstrap' style={{width: '30px', height: '30px', marginRight: '5px'}}/>
                        </a>
                        <a href="#">
                          <img src={jsicon} alt="JavaScript" title='JavaScript' style={{width: '30px', height: '30px', marginRight: '5px'}}/>
                        </a>
                        
                        <a href="#">
                          <img src={springicon} alt="Spring" title='Spring' style={{width: '30px', height: '30px', marginRight: '0px'}}/>
                        </a>
                        <a href="#">
                          <img src={javaicon} alt="Java" title='Java' style={{width: '60px', height: '30px', marginLeft: '-10px'}}/>
                        </a>
                      </div>
                      <p class="card-text normalText mt-2 textFont">Links:</p>
                      <div class="container">
                        <a href="#" class="btn btn-info marginButtons">
                          <i class="bi bi-link"></i>
                          <img src={webicon} alt="Web" style={{width: '20px', height: '20px'}}/>
                        </a>
                        <a href="#" class="btn btn-warning">
                          <i class="bi bi-github"></i>
                          <img src={giticon} alt="Github" style={{width: '20px', height: '20px'}}/>
                        </a>
                      </div>
                    
                  </div>
              </div>
              <div class="card col-sm-10 col-lg-5 custom-margin navBgCard">
              <div id="carouselExampleIndicators3" class="carousel slide" data-bs-ride="true">
                  <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  </div>
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img src={`${process.env.PUBLIC_URL}/images/cursos.jpg`} class="d-block w-100 slideCarousel" alt="..." style={{width: '500px', height: '300px'}}/>
                    </div>
                    <div class="carousel-item">
                      <img src={`${process.env.PUBLIC_URL}/images/blogregister.jpg`} class="d-block w-100 slideCarousel" alt="..." style={{width: '500px', height: '300px'}}/>
                    </div>
                    <div class="carousel-item">
                      <img src={`${process.env.PUBLIC_URL}/images/listaarticulos.jpg`} class="d-block w-100 slideCarousel" alt="..." style={{width: '500px', height: '300px'}}/>
                    </div>
                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
                  
                    <div class="card-body">
                      <h4 class="card-title normalText textFont fw-bold">Blog of courses</h4>
                      <p class="card-text normalText textFont">{strings[language].project3}</p>
                      <p class="card-text normalText textFont">{strings[language].technology}:</p>
                      <div class="container">
                        <a href="#">
                          <img src={csharpicon} alt="C#" title='C#' style={{width: '30px', height: '30px', marginRight: '5px'}}/>
                        </a>
                        <a href="#">
                          <img src={neticon} alt=".NET" title='.NET' style={{width: '30px', height: '30px', marginRight: '5px'}}/>
                        </a>
                      </div>
                      <p class="card-text normalText mt-2 textFont">Links:</p>
                      <div class="container">
                        <a href="#" class="btn btn-info marginButtons">
                          <i class="bi bi-link"></i>
                          <img src={webicon} alt="Web" style={{width: '20px', height: '20px'}}/>
                        </a>
                        <a href="#" class="btn btn-warning">
                          <i class="bi bi-github"></i>
                          <img src={giticon} alt="Github" style={{width: '20px', height: '20px'}}/>
                        </a>
                      </div>
                    
                  </div>
              </div>
              <div class="card col-sm-10 col-lg-5 navBgCard">
              <div id="carouselExampleIndicators4" class="carousel slide" data-bs-ride="true">
                  <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators4" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators4" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators4" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  </div>
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img src={`${process.env.PUBLIC_URL}/images/boss.jpg`} class="d-block w-100 slideCarousel" alt="..." style={{width: '500px', height: '300px'}}/>
                    </div>
                    <div class="carousel-item">
                      <img src={`${process.env.PUBLIC_URL}/images/skull.jpg`} class="d-block w-100 slideCarousel" alt="..." style={{width: '500px', height: '300px'}}/>
                    </div>
                    <div class="carousel-item">
                      <img src={`${process.env.PUBLIC_URL}/images/menudefiance.jpg`} class="d-block w-100 slideCarousel" alt="..." style={{width: '500px', height: '300px'}}/>
                    </div>
                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators4" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators4" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
                
                    <div class="card-body">
                      <h4 class="card-title normalText textFont fw-bold">Defiance</h4>
                      <p class="card-text normalText textFont">{strings[language].project4}</p>
                      <p class="card-text normalText textFont">{strings[language].technology}:</p>
                      <div class="container">
                        <a href="#">
                          <img src={godoticon} alt="Godot" title='Godot' style={{width: '30px', height: '30px', marginRight: '5px'}}/>
                        </a>
                      </div>
                      <p class="card-text normalText mt-2 textFont">Links:</p>
                      <div class="container">
                        <a href="#" class="btn btn-info marginButtons">
                          <i class="bi bi-link"></i>
                          <img src={webicon} alt="Web" style={{width: '20px', height: '20px'}}/>
                        </a>
                        <a href="#" class="btn btn-warning">
                          <i class="bi bi-github"></i>
                          <img src={giticon} alt="Github" style={{width: '20px', height: '20px'}}/>
                        </a>
                      </div>
                    
                  </div>
              </div>
        
      </div>
		    </div>		
      </section>

      <section id="contact" className="contact-section">
          <div className="container">
          <h2 className="contact-heading normalText brandFont">{strings[language].contactme}</h2>
          <form className="contact-form" ref={form} onSubmit={sendEmail}>
            <input type="text" placeholder={strings[language].nombre} name="user_name"/>
            <input type="email" placeholder={strings[language].email} name="user_email"/>
            <textarea placeholder={strings[language].message} name="message"></textarea>
            <input type="submit" value={strings[language].sendmessagge}/>
          </form>
        </div>
        <div className={`${modeClass} container social-links`}>
          <img src={`${process.env.PUBLIC_URL}/images/mailicon.png`} alt="Web" style={{width: '20px', height: '20px'}}/>
          <a href="mailto:jeremiasfuentes77@gmail.com" target="_blank">{strings[language].mail}</a>
          <img src={`${process.env.PUBLIC_URL}/images/lklogo.webp`} alt="Web" style={{width: '20px', height: '20px'}}/>
          <a href="https://www.linkedin.com/in/jeremias-fuentes-morales-15b9b51b2/" target="_blank">{strings[language].linkedin}</a>
          <img src={giticon} alt="Web" style={{width: '20px', height: '20px'}}/>
          <a href="https://github.com/JeremiasFuentes" target="_blank">{strings[language].github}</a>
        </div>
      </section>

      

      </>
      
    );
  };
  
  export default Home;