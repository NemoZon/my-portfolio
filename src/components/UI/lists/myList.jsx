import React from 'react'
import MyLi from './li/MyLi'
import classes from './MyList.module.css'

export default function myList({items, ...props}) {
    return (
        <ul style={{listStyleType: "none", padding: 0, overflow: "auto"}} className={items[0].active?classes.list_active:classes.list_disabled}>
                {items.map((elem, index)=>{
                    return <MyLi key={Date.now() + index} skill={elem} active={items[index].active} {...props}></MyLi>
                })}
        </ul>
    )
}
