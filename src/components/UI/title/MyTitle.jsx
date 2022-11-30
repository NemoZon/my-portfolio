import React from 'react'
import classes from './MyTitle.module.css'

export default function MyTitle({children, ...props}) {
    return (
        <div className={classes.container}>
            <div {...props} className={classes.title}>
                {children}
            </div>
        </div>
    )
}
