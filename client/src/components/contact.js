import React, { Component } from 'react';
import axios from 'axios';


export default class Contact extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      message: '',
      email: '',
      subject: '',
      response: '',
      submit: false
    }


    this.sendData = this.sendData.bind(this);
  }

  sendData(event){
    event.preventDefault();
    this.setState({
      submit: true
    });
    
    const { name, email, subject, message } = this.state;
    let response = '';    
    axios.post('/contact', {name, email, subject, message}).then( resp => {
      //console.log('post response: ', resp);
      
      this.updateState(resp);
    }).catch( err => {
      //console.log('post err response: ', err);
      this.updateState(err);
    });

  }

  updateState(response){
    if(response.data.success){
      this.setState({
        name: '',
        message: '',
        email: '',
        subject: '',
        response: response.data.message,
        submit: false
      });
    } else {
      this.setState({
        response: response.data.message,
        submit: false
      });
    }

  }

  render(){
    const { name, subject, email, message, response, submit } = this.state;
    //console.log('contact state', this.state);
    let submitResult = {};

    if(submit){
      submitResult = (
        <div class="preloader-wrapper contact-response small active">
        <div class="spinner-layer spinner-blue-only">
          <div class="circle-clipper left">
            <div class="circle"></div>
          </div><div class="gap-patch">
            <div class="circle"></div>
          </div><div class="circle-clipper right">
            <div class="circle"></div>
          </div>
        </div>
      </div>
      );
    } else {
      submitResult = <div className="white-color contact-response">{response}</div>;
    }

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
                <input id="icon_prefix" type="text" className="validate" placeholder="Name" name="name" value={name} onChange={e => this.setState({name: e.target.value})}/>
              </div>
              <div className="input-field col s12 m6">
                <i className="material-icons prefix">email</i>
                <input id="icon_email" type="email" className="validate" placeholder="Email" name="email" value={email} onChange={e => this.setState({email: e.target.value})}/>
                <label data-error="Please enter a valid email"></label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <i className="material-icons prefix">mode_edit</i>
                <input id="icon_prefix2" className="validate" type="text" placeholder="Subject" name="subject" value={subject} onChange={e => this.setState({subject: e.target.value})}/>
              </div>
            </div>
            <div className="row">
            <div className="input-field col s12">
              <input id="textArea1" className="materialize-textarea validate" type="text" placeholder="Message" value={message} name="message" onChange={e => this.setState({message: e.target.value})}/>
            </div>
          </div>
        <button className="btn waves-effect waves-light" type="submit" name="action">Submit<i className="material-icons right">send</i>
        </button>
        {submitResult}
          </form>
            </div>       
        </div>
        </section>
    );
  }
}
 

