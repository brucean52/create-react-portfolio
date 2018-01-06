import React from 'react';
import linkedin from '../assets/images/footer/linkedin.jpg';
import github from '../assets/images/footer/github.png';

export default props =>{
    return(
        <section className="footer">
          <div className="container">
            <div className="row">
              <div className="col s12">
                <h4>Let's Connect!</h4>
                <hr className="sub"/>
                <p className="text-faded contact dark">Obey the principles without being bound by them.</p>
                
                <div className="row footerRow">
                  <div className="footer-links">
                    <a className="" href="#!"><img id="github-logo" src={github} alt=""/><br/>Github</a>
                  </div>
                <div className="footer-links">
                    <a className="" href="#!"><i className="medium material-icons">description</i><br/>Resume</a>
                </div>
                <div className="footer-links">
                    <a href="#!"><img id="linkedin-logo" src={linkedin} alt=""/><br/>LinkedIn</a>
                </div>

                </div>

              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2018
            <div className="right">Built with React and MaterializeCSS</div> 
            </div>
          </div>
        </section>
    );
}