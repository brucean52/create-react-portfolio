import React, { Component } from 'react';

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
      
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }
      
    handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
    }
    openNav(){
        this.setState({
            open: true
        });
    }
      closeNav(){
        this.setState({
            open: false
        });
    }

    render(){
        const { width } = this.state;
        const isMobile = width <= 991;
        let navbar = {};

        if(isMobile){
            navbar = (
                <nav>
                    <div className="nav-wrapper container">
                    <a className='nav-text-name center brand-logo'href="#">Bruce</a>
                    <a className="button-collapse" onClick={this.openNav}><i className="material-icons">menu</i></a>
                    <ul className={`side-nav ${this.state.open ? 'visible': 'hidden' }`} tabIndex="0" onBlur={ this.closeNav }>
                        <li><a className='nav-text'><i onClick={this.closeNav} className="material-icons left sideNavClose">close</i></a></li>
                        <li><a className='nav-text' href="#work">Work</a></li>
                        <li><a className='nav-text' onClick={this.closeNav} href="#about">About</a></li>
                        <li><a className='nav-text' onClick={this.closeNav} href="#skills">Skills</a></li>
                        <li><a className='nav-text' onClick={this.closeNav} href="#contact">Contact</a></li>
                    </ul>
                    </div>  
                </nav>
            );
        } else {
            navbar = (
                <nav>
                    <div className="nav-wrapper container">
                    <a className='nav-text-name' href="#">Bruce</a>
                    <ul className="right hide-on-sm-and-down">
                        <li><a className='nav-text' href="#work">Work</a></li>
                        <li><a className='nav-text' href="#about">About</a></li>
                        <li><a className='nav-text' href="#skills">Skills</a></li>
                        <li><a className='nav-text' href="#contact">Contact</a></li>
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