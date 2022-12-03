import React from 'react'
import classes from './MyBtn.module.css'

export default function MyBtn({id, children, active, f, ...props}) {
    return (
        <div className={classes.container} style={{overflow: "hidden"}}>
            <button className={classes.btn} onClick={()=>f(id, children)} {...props}>{children}</button>
            <span className={active?classes.span_active:classes.span_disabled} ></span>
        </div>
    )
}
