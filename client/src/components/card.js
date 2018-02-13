import React from 'react';
import CardButtons from './card_buttons';

export default props =>{
    //console.log('card props:', props);
    return(
    <div className="card col m6 s12 l4">
        <div className="card-image waves-effect waves-block waves-light">
            <img className="activator work-img" src={props.src} alt={props.alt}/>
        </div>
        <div className="card-content">
            <span className="card-title activator">{props.title}<i className="material-icons right">add</i></span>
            <CardButtons/>          
        </div>

        <div className="card-reveal">
            <span className="card-title card-open">{props.title}<i className="material-icons right">close</i></span>
            <p>{props.info}</p>
            <CardButtons/>   
        </div>
    </div>
    );
}