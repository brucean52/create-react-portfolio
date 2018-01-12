import React from 'react';
import Background from './background';

import aboutData from '../assets/data/about_data';
import backgroundData from '../assets/data/background_data';

export default props =>{

    const backgroundList = backgroundData.map((item, index)=>{
        return(
            <Background data={item} key={index}/>
        );
    });

    return(
        <section id='about'>
        <div className="container">
            <h3 className='white-color'>{aboutData.title}</h3>
            <hr className='white-color'/>
            <p className='text-faded'>{aboutData.top_text}</p>
            <div className='row'>
            <img id="aboutImg" className='col s10 m6 l4 offset-s1 offset-m3 offset-l4 responsive-img' src={aboutData.about_img} alt={aboutData.about_img_alt}/>
            </div>
            <p className='text-faded'>{aboutData.bot_text}</p>
            
            <h4 className='white-color'>{aboutData.background_title}</h4>
            <hr className='white-color sub'/>
            <div className="row">
                {backgroundList}
            </div>
            
        </div>
        </section>
    );
}