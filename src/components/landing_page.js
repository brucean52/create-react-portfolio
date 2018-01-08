import React from 'react';
import landingData from '../assets/data/landing_data';

export default props =>{
    return(
        <div className='landing-img'>
        <img src={landingData.img} alt={landingData.alt}/>
        </div>
    );
}