import React from 'react'
import MyProject from './project/MyProject'
import classes from './MyProjects.module.css'

export default function MyProjects({list, ...props}) {

    return (
        <div className={classes.page} {...props}>
            {
                list.map((elem)=>
                    <MyProject 
                        key={elem.id}
                        name={elem.name} 
                        img={elem.img} 
                        description={elem.description} 
                        date={elem.date} 
                        authors={elem.authors} 
                        link={elem.link}
                        languages={elem.languages}
                        tools={elem.tools}>
                    </MyProject>
                )
            }
            <img style={{width: "20%"}}src='./img/preloader/giphy.gif'></img>
        </div>
    )
}
