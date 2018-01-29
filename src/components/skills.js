import React from 'react';
import SkillsRow from './skills_row';

import skillsData from '../assets/data/skills_data';

export default props =>{
    const skillsList = skillsData.map((item, index)=>{
        return(
            <SkillsRow key={index} data={item}/>
        );
    });

    return(
        <section id='skills'>
            <h3>Technical Skills</h3>
            <hr/>
            <div className="container">
                {skillsList}
            </div>
        </section>
    );
}