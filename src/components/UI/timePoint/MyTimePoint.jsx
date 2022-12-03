import React from 'react'
import classes from './MyTimePoint.module.css'
// import {Redirect} from "react-router-dom"

export default function MyTimePoint({list, before, after, link, ...props}) {
    return (
        <div className={classes.container} {...props}>
            <div className={classes.container_point}>
                <div className={classes.container_before}>
                    <div className={classes.before}>{before}</div>
                    <a className={classes.point} href={link} target="_blank"></a>
                </div>
                <div className={classes.line}></div>

                <div className={classes.after}>
                    {after}
                    <div className={classes.container_list}>
                        {list.title?<div className={classes.title_list}>{list.title}</div>:""}
                        <ul className={classes.list}>
                            {list.li.map((elem)=>
                                <li key={elem}>{elem}</li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
