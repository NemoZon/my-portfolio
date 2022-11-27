import React, {useState} from 'react'
import classes from './MySkillLi.module.css'
import MyList from '../MyList'

export default function MySkillLi({item, list, change, ...props}) {
    let classNames = classes.skillTitle

    const toggleSkill = (e)=>{
        if (item.active) {
            change({...item, active: false})
        } else if (!item.active) {
            change({...item, active: true})
        }
    }
    return (
        <li>
            <div className={classes.skill} {...props}>
                <div id={item.id} onClick={toggleSkill} className={item.active?classNames+" "+classes.skillTitle_active:classNames}>
                    {item.title}
                </div>
                <div className={classes.skills}>
                    <MyList key={item.id} items={list}></MyList>
                </div>
            </div>
        </li>
    )
}
