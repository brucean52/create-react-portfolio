import React from 'react';

import contactData from '../assets/data/contact_data';


export default props =>{
    return(
        <section id='contact'>
        <div className="container">
        <h4 className='white-color'>{contactData.title}</h4>
            <hr className='white-color sub'/>
            <p className='text-faded contact'>{contactData.sub}</p>
            <div className="row">
            
    <form className="col s12">
    <div className="row">
        <div className="input-field col s12 m6">
          <i className="material-icons prefix">{contactData.name_icon}</i>
          <input id="icon_prefix" type="text" className="validate" placeholder="Name"/>
        </div>
        <div className="input-field col s12 m6">
          <i className="material-icons prefix">{contactData.email_icon}</i>
          <input id="icon_email" type="email" className="validate" placeholder="Email"/>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <i className="material-icons prefix">{contactData.message_icon}</i>
          <input id="icon_prefix2" className="validate" type="text" placeholder="Subject"/>
        </div>
      </div>
      <div className="row">
      <div className="input-field col s12">
        <textarea id="textarea1" className="materialize-textarea validate" type="text" placeholder="Message"></textarea>
      </div>
    </div>
    <button className="btn waves-effect waves-light" type="submit" name="action">{contactData.button_text}<i className="material-icons right">{contactData.button_icon}</i>
  </button>
    </form>
            </div>       
        </div>

        </section>
    );
}