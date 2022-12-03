import React from 'react'
import classes from './MyTimePointList.module.css'
import MyTimePoint from './UI/timePoint/MyTimePoint'

export default function MyTimePointList({list, ...props}) {
    return (
        <div className={classes.timePoints} {...props}>
            <img className={classes.img} src="./img/3D/button.png"></img>
            {list.map((elem)=>
                <MyTimePoint 
                    key={elem.id}
                    list={elem.list}
                    before={elem.before}
                    after={elem.after}
                    link={elem.link}
                />
            )}
        </div>
    )
}
