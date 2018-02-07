import React, { Component } from 'react';
import axios from 'axios';


export default class Contact extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      message: '',
      email: '',
      subject: ''
    }


    this.sendData = this.sendData.bind(this);
  }

  sendData(event){
    event.preventDefault();
    
    const { name, email, subject, message } = this.state;
    //console.log('axios call');
    
    axios.post('/contact', {name, email, subject, message}).then( resp => {
      console.log('post response: ', resp);
    }).catch( err => {
      console.log('post err response: ', err);
    });
  }

  render(){
    return(
        <section id='contact'>
        <div className="container">
        <h4 className='white-color'>Contact Me</h4>
            <hr className='white-color sub'/>
            <p className='text-faded contact'>The world becomes a better place when people truly express themselves.</p>
            <div className="row">
            
        <form className="col s12" onSubmit={this.sendData}>
          <div className="row">
              <div className="input-field col s12 m6">
                <i className="material-icons prefix">account_circle</i>
                <input id="icon_prefix" type="text" className="validate" placeholder="Name" name="name" onChange={e => this.setState({name: e.target.value})}/>
              </div>
              <div className="input-field col s12 m6">
                <i className="material-icons prefix">email</i>
                <input id="icon_email" type="email" className="validate" placeholder="Email" name="email" onChange={e => this.setState({email: e.target.value})}/>
                <label data-error="Please enter a valid email"></label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <i className="material-icons prefix">mode_edit</i>
                <input id="icon_prefix2" className="validate" type="text" placeholder="Subject" name="subject" onChange={e => this.setState({subject: e.target.value})}/>
              </div>
            </div>
            <div className="row">
            <div className="input-field col s12">
              <input id="textArea1" className="materialize-textarea validate" type="text" placeholder="Message" name="message" onChange={e => this.setState({message: e.target.value})}/>
            </div>
          </div>
        <button className="btn waves-effect waves-light" type="submit" name="action">Submit<i className="material-icons right">send</i>
        </button>
          </form>
            </div>       
        </div>

        </section>
    );
  }
}
 

