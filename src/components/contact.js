import React from 'react';

export default props =>{
    return(
        <section id='contact'>
        <div className="container">
        <h4 className='white-color'>Contact Me</h4>
            <hr className='white-color sub'/>
            <p className='text-faded contact'>The world becomes a better place when people truly express themselves.</p>
            <div className="row">
            
    <form className="col s12">
    <div className="row">
        <div className="input-field col s12 m6">
          <i className="material-icons prefix">account_circle</i>
          <input id="icon_prefix" type="text" className="validate" placeholder="Name"/>
        </div>
        <div className="input-field col s12 m6">
          <i className="material-icons prefix">email</i>
          <input id="icon_email" type="email" className="validate" placeholder="Email"/>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <i className="material-icons prefix">mode_edit</i>
          <input id="icon_prefix2" className="validate" type="text" placeholder="Subject"/>
        </div>
      </div>
      <div className="row">
      <div className="input-field col s12">
        <textarea id="textarea1" className="materialize-textarea validate" type="text" placeholder="Message"></textarea>
      </div>
    </div>
    <button className="btn waves-effect waves-light" type="submit" name="action">Submit
    <i className="material-icons right">send</i>
  </button>
    </form>
            </div>       
        </div>

        </section>
    );
}