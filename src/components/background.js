import React from 'react';

export default props => {
    
    return(
        <div className="col s12 m4">
            <img src={props.img} alt={props.img_alt} className='bgImg responsive-img'/>
            <div className="background-text text-faded" dangerouslySetInnerHTML={{ __html:props.text}}></div>
        </div>
    );
}
