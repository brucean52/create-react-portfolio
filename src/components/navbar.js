import React from 'react';

import navbarData from '../assets/data/navbar_data';

export default props =>{

    return(
        <div className="navbar-fixed">
        <nav>
            <div className="nav-wrapper container">
                <a className='nav-text-name'href="#">{navbarData[0]}</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a className='nav-text' href="#work">{navbarData[1]}</a></li>
                    <li><a className='nav-text' href="#about">{navbarData[2]}</a></li>
                    <li><a className='nav-text' href="#skills">{navbarData[3]}</a></li>
                    <li><a className='nav-text' href="#contact">{navbarData[4]}</a></li>
                </ul>
            </div>

        </nav>        
        </div>

    );
}