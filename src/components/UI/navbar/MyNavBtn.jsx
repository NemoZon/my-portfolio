import React, {useState} from 'react'
import MyBtn from '../button/MyBtn'
import classes from './MyNavBtn.module.css'

export default function MyNavBtn({list, changePage, ...props}) {
    const [activeList, setActiveList] = useState(list);
    const change = (id, children)=>{
        changePage(children)
        setActiveList(activeList.map((elem)=>{
            if (elem.id == id) {
                return {...elem, active: true}
            } else {
                return {...elem, active: false}
            }
        }))
    }

    return (
        <nav className={classes.nav} {...props}>
            {activeList.map((elem)=>
                <MyBtn key={elem.id} active={elem.active} f={change} id={elem.id}>{elem.children}</MyBtn>
            )}
        </nav>
    )
}
