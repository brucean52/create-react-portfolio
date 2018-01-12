import React from 'react';

export default props => {
    //console.log("background props: ", props);
    const {data} = props;
    return(
        <div className="col s12 m4">
            <img src={data.img} alt={data.img_alt} className='bgImg responsive-img'/>
            <div className="background-text text-faded" dangerouslySetInnerHTML={{ __html:data.text}}></div>
        </div>
    );
}
