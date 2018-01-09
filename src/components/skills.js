import React from 'react';

import skillsData from '../assets/data/skills_data';

import htmlLogo from '../assets/images/skills/html_logo.png';
import cssLogo from '../assets/images/skills/css_logo.png';

import jsLogo from '../assets/images/skills/javascript_logo.png';
import oopLogo from '../assets/images/skills/oop.png';

import reactLogo from '../assets/images/skills/react-logo.png';
import reduxLogo from '../assets/images/skills/redux.png';

//import nodephpLogo from '../assets/images/skills/node_php.png';
//import databaseLogo from '../assets/images/skills/database.png';

import agileLogo from '../assets/images/skills/agile.png';
import vscodeLogo from '../assets/images/skills/vs_code.jpg';

import jqueryajaxLogo from '../assets/images/skills/jquery_ajax2.png';
import apiLogo from '../assets/images/skills/api.png';

import responsiveDesign from '../assets/images/skills/responsive-design.png';
import bootstrap_ps from '../assets/images/skills/bootstrap_ps.png';

export default props =>{
    return(
        <section id='skills'>
            <h3>Technical Skills</h3>
            <hr/>
            <div className="container">

                <div className="row">
                    <div className="col s12 l6 skills">
                        <img className="col s3" src={htmlLogo} alt=""/>

                        <img id="cssLogo" className="col s3 l3" src={cssLogo} alt=""/>
                        <div className="col s6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, deserunt!
                        </div>
                    </div>
                    
                    <div className="col s12 l6 skills">
                        <img className="col s3" src={jsLogo} alt=""/>

                        <img id="reactLogo" className="col s3 l3" src={oopLogo} alt=""/>
                        <div className="col s6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, eius!
                        </div>  
                    </div>

                </div>

                <div className="row">
                    <div className="col s12 l6 skills">
                        <img className="col s3" src={jqueryajaxLogo} alt=""/>

                        <img className="col s3" src={apiLogo} alt=""/>
                        <div className="col s6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, nesciunt.
                        </div>
                    </div>
                    
                    <div className="col s12 l6 skills">
                        <img id="jqueryLogo" className="col s6 l3" src={reactLogo} alt=""/>
                        <img id="apiLogo" className="col s6 l3" src={reduxLogo} alt=""/>
                        <div className="col s12 l6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, explicabo!
                        </div>
                    </div>

                </div>  
                                
                <div className="row">
                    <div className="col s12 l6 skills">
                        <img className="col s3" src={agileLogo} alt=""/>

                        <img className="col s3" src={vscodeLogo} alt=""/>
                        <div className="col s6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, nesciunt.
                        </div>
                    </div>
                    
                    <div className="col s12 l6 skills">
                        <img className="col s6 l3" src={responsiveDesign} alt=""/>
                        <img id="" className="col s6 l3" src={bootstrap_ps} alt=""/>
                        <div className="col s12 l6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, explicabo!
                        </div>
                    </div>
                    
                </div>   
            </div>
        </section>
    );
}