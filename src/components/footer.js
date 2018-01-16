import React from 'react';

import footerData from '../assets/data/footer_data';

export default props =>{
    return(
        <section className="footer">
          <div className="container">
            <div className="row">
              <div className="col s12">
                <h4>{footerData.title}</h4>
                <hr className="sub"/>
                <p className="text-faded contact dark">{footerData.sub}</p>
                
                <div className="row footerRow">
                  <div className="footer-links">
                    <a className="" href="#!"><img id="github-logo" src={footerData.img_git} alt={footerData.git_text}/><br/>{footerData.git_text}</a>
                  </div>
                <div className="footer-links">
                    <a className="" href="#!"><i className="medium material-icons">{footerData.icon_resume}</i><br/>{footerData.icon_resume_text}</a>
                </div>
                <div className="footer-links">
                    <a href="#!"><img id="linkedin-logo" src={footerData.img_linkedin} alt={footerData.linkedin_text}/><br/>{footerData.linkedin_text}</a>
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