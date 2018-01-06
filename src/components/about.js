import React from 'react';

import aboutData from '../assets/data/about_data';
import about from '../assets/images/about/creative.png';
import calpolyLogo from '../assets/images/about/cp-logo.png';
import lfzLogo from '../assets/images/about/lfz-logo.png';
import kingstonLogo from '../assets/images/about/kingston-logo.png';

export default props =>{
    return(
        <section id='about'>
        <div className="container">
            <h3 className='white-color'>Who Am I?</h3>
            <hr className='white-color'/>
            <p className='text-faded'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque sint animi ex recusandae hic repellendus, ad corrupti magnam voluptate expedita laudantium, esse odit aperiam architecto, minima numquam cumque dolor? Dolorem tenetur incidunt fuga cumque velit, ab autem vel, libero provident dignissimos nostrum architecto obcaecati, eligendi deserunt porro. Voluptatum, nobis odit!</p>
            <div className='row'>
            <img id="aboutImg" className='col s10 m6 l4 offset-s1 offset-m3 offset-l4 responsive-img' src={about} alt="About Me"/>
            </div>
            <p className='text-faded'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aperiam sunt quisquam sit reiciendis? Soluta excepturi odit facilis atque ipsa deleniti hic, numquam quo ex ipsum natus, impedit eligendi? Iusto aut, doloribus, placeat quisquam sequi eum ad nesciunt, ducimus in et quidem hic voluptas est minus tempore fugit quo? Hic!</p>
            
            <h4 className='white-color'>Background</h4>
            <hr className='white-color sub'/>
            <div className="row">
                <div className="col s12 m4">
                    <img src={lfzLogo} alt="LearningFuze" className='bgImg responsive-img'/>
                    <div className="background-text text-faded">
                        Completing LearningFuze's <em>Full Immersion Web Development Program </em>has laid the foundation for my <strong>software development</strong> career.
                    </div>
                </div>
                <div className="col s12 m4">
                    <img src={kingstonLogo} alt="Kingston" className='bgImg responsive-img'/>
                    <div className='background-text text-faded'>
                        5+ years experience as a <strong>Flash Design Engineer </strong>at <em>Kingston Technoloy</em> has molded me into an engineer that can take a concept and develop it into a high volume product.
                    </div>
                </div>
                <div className="col s12 m4">
                    <img src={calpolyLogo} alt="Cal Poly San Luis Obispo" className='bgImg responsive-img'/>
                    <div className="background-text text-faded">
                    Obtaining my bachelor's degree in <strong>Electrical Engineering</strong> while applying Cal Poly's <em>Learn by Doing</em> approach is how I acquired my logical and analytical skills.
                    </div>
                </div>
                </div>       
        </div>


        </section>
    );
}