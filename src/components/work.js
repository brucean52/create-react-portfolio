import React from 'react';

import Card from './card';
import workDataArray from '../assets/data/work_data';


export default props=>{
    
    const cardList = workDataArray.map((item, index) =>{
        console.log(item);
        return(
            <Card title={item.name} info={item.info} src={item.img} key={index} />
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