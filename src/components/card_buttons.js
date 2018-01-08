import React from 'react';
import buttonData from '../assets/data/card_button_data';

export default props =>{
    return(
        <div>
            <a className="waves-effect waves-light btn"><i className="material-icons right">{buttonData.btn1_icon}</i> {buttonData.btn1_text}</a>
            <a className="waves-effect waves-light btn"><i className="material-icons right">{buttonData.btn2_icon}</i> {buttonData.btn2_text}</a>   
        </div>
    );
}