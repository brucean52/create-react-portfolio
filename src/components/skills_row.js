import React from 'react';

export default props => {
    const {data} = props;
    return(
        <div className="row">
            <div className="col s12 l6 skills">

                <img className={`col s3 ${data.img_11_css_class}`} src={data.img_11} alt={data.img_11_alt}/>
                <img className={`col s3 ${data.img_12_css_class}`}  src={data.img_12} alt={data.img_12_alt}/>
                <div className="col s6">{data.text_1}</div>

            </div>
            
            <div className="col s12 l6 skills">

            <div className="col s6 push-l6">{data.text_2}</div>  
                <img className={`col s3 pull-l6 ${data.img_21_css_class}`} src={data.img_21} alt={data.img_21_alt}/>

                <img id="" className={`col s3 pull-l6 ${data.img_22_css_class}`}  src={data.img_22} alt={data.img_22_alt}/>
            </div>

        </div>
    );
}