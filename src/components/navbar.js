import React, { Component } from 'react';

import navbarData from '../assets/data/navbar_data';

export default class NavBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            width: window.innerWidth,
            open: false
        }

        this.openNav = this.openNav.bind(this);
        this.closeNav = this.closeNav.bind(this);
    }

    componentWillMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
      }
      
      // make sure to remove the listener
      // when the component is not mounted anymore
      componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
      }
      
      handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
      };

      componentDidUpdate(){
        //console.log("focus me?");
            if(this.state.open){
                //console.log("focus me");
            this.refs.sideNav.focus();
            //ReactDOM.findDOMNode(this.refs.theDiv).focus();
          }     
      }

    //   componentWillReceiveProps(nextProps){
    //       if(nextProps.open || this.props.open){
    //         this.refs.sideNav.focus();
    //       }
    //   }

      openNav(){
          console.log("openNav");
          //let flip = true;
          //ReactDOM.findDOMNode(this.refs.sideNav).focus();
          this.setState({
              open: true
          });
      }
      closeNav(){
        console.log("closeNav");
        //let flip = true;
        this.setState({
            open: false
        });
    }
      
    render(){
        console.log('nav state:', this.state);
        const { width } = this.state;
        const isMobile = width <= 600;
        let navbar = {};
        // the rest is the same...
        if(isMobile){
            navbar = (
                <nav>
                    <div className="nav-wrapper container">
                    <a className="button-collapse" onClick={this.openNav}><i className="material-icons">menu</i></a>
                    <a className='nav-text-name center brand-logo'href="#">{navbarData[0]}</a>
                    <ul ref="sideNav" onFocus={() => console.log('FOCUS ON SIDENAV')} className={`side-nav ${this.state.open ? 'visible': 'hidden' }`} tabIndex="0" onBlur={ this.closeNav }>
                        <li><a className='nav=text'><i onClick={this.closeNav} className="material-icons right">close</i></a></li>
                        <li><a className='nav-text' onClick={this.closeNav} href="#work">{navbarData[1]}</a></li>
                        <li><a className='nav-text'onClick={this.closeNav} href="#about">{navbarData[2]}</a></li>
                        <li><a className='nav-text'onClick={this.closeNav} href="#skills">{navbarData[3]}</a></li>
                        <li><a className='nav-text'onClick={this.closeNav} href="#contact">{navbarData[4]}</a></li>
                    </ul>
                    </div>  
                </nav>
            );
        } else {
            navbar = (
                <nav>
                    <div className="nav-wrapper container">
                    <a className='nav-text-name'href="#">{navbarData[0]}</a>
                    <ul className="right hide-on-sm-and-down">
                        <li><a className='nav-text' href="#work">{navbarData[1]}</a></li>
                        <li><a className='nav-text' href="#about">{navbarData[2]}</a></li>
                        <li><a className='nav-text' href="#skills">{navbarData[3]}</a></li>
                        <li><a className='nav-text' href="#contact">{navbarData[4]}</a></li>
                    </ul>
                </div>
                </nav>  
            );
        }

        return(
            <div className="navbar-fixed">
                {navbar}      
            </div>
        );
    }
}