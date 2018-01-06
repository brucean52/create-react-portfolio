import React from 'react';

import navbarData from '../assets/data/navbar_data';

export default props =>{
    return(
        <div className="navbar-fixed">
        <nav>
            <div className="nav-wrapper container">
                <a className='nav-text-name'href="#">Bruce</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a className='nav-text' href="#work">Work</a></li>
                    <li><a className='nav-text' href="#about">About</a></li>
                    <li><a className='nav-text' href="#skills">Skills</a></li>
                    <li><a className='nav-text' href="#contact">Contact</a></li>
                </ul>
            </div>

        </nav>        
        </div>

    );
}