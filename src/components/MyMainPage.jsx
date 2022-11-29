import React from 'react'
import classes from './MyMainPage.module.css'
import MyNavBtn from './UI/navbar/MyNavBtn'

export default function MyMainPage(props) {
    return (
        <section className={classes.main} {...props}>
            <MyNavBtn list={[
                    {
                        id: 1,
                        children: "My Projects",
                        active: true
                    },
                    {
                        id: 2,
                        children: "About Me",
                        active: false
                    }
                ]}/>           
            <div className={classes.description}>
                <img src='./img/avatars/Avatar.png'></img>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis rem aperiam in officiis mollitia saepe pariatur fugit aspernatur perspiciatis eaque, sapiente qui blanditiis quae commodi quasi repellat vitae eos sit.
                </div>
            </div>
            <section>
                <div className={classes.title}>Education</div>
                <div className={classes.point}></div>
            </section>
        </section>
    )
}
