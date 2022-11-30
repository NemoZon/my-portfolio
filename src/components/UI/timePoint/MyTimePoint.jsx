import React from 'react'
import classes from './MyTimePoint.module.css'

export default function MyTimePoint({list, before, after, ...props}) {
    return (
        <div {...props}>
            <div className={classes.container_point}>
                <div className={classes.before}>{before}</div>
                <div className={classes.point}></div>
                <div className={classes.after}>{after}</div>
            </div>
            {list.title?<div className={classes.title_list}>{list.title}</div>:""}
            <ul>
                {list.li.forEach((elem)=>{
                    <li>
                        {elem}
                    </li>
                })}
            </ul>
        </div>
    )
}
