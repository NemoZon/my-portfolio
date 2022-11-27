import React from 'react';
import classes from './MyLi.module.css';
import classNames from 'classnames';

export default function MyLi({skill, active, ...props}) {
    const widthWhiteSkillText = 10000 / Number(skill.level.slice(0, -1)) + "%"
    let activeClass = " ";
    if (active){
        activeClass += classes.skillBar_active
    } else {
        activeClass += classes.skillBar_disabled
    }
    
    return (
        <li className={classes.skillBar+activeClass} {...props}>
            <div className={classes.skillIcon}>
                    <img src={skill.icon_blue} alt={skill.alt} />
            </div>
            <div className={classNames(classes.skillName, classes.skillName_blue)}>
                {skill.name}
            </div>
            <div className={classes.skillLevel} style={{width: skill.level}}>
                <div className={classes.skillIcon}>
                    <img src={skill.icon} alt={skill.alt} />
                </div>
                <div className={classNames(classes.skillName, classes.skillName_white)} style={{width: widthWhiteSkillText}}>
                    {skill.name}
                </div>
            </div>
        </li>
    )
}
