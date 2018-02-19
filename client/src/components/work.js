import React from 'react';

import Card from './card';
import workDataArray from '../assets/data/work_data';


export default props=>{
    
    const cardList = workDataArray.map((item, index) =>{
        return(
            <Card title={item.name} info={item.info} src={item.img} key={index} alt={item.alt} code={item.codeLink} demo={item.demoLink}/>
        );
    });
    return(
        <section id='work'>
            <h3>My Work</h3>
            <hr/>
            <div className="row">
            {cardList}
            </div>
        </section>
    );
}