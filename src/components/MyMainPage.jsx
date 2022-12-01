import React from 'react'
import classes from './MyMainPage.module.css'
import MyNavBtn from './UI/navbar/MyNavBtn'
import MyTitle from './UI/title/MyTitle'
import MyTimePoint from './UI/timePoint/MyTimePoint'

export default function MyMainPage(props) {

    const timePoints = [
        {
            id: 1,
            list: {
                title: "Languages studied:",
                li: [
                    "PHP",
                    "Python",
                    "SQL",
                    "HTML/CSS",
                    "JS/React",
                    "C++"
                ]
            },
            before: "From 2021",
            after: "Bachelor's degree in computer science option C++ at l'IUT Reims-Chalons-Charleville"
        },
        {
            id: 2,
            list: {
                title: "Master:",
                li: [
                    "JS/ React"
                ]
            },
            before: "From 2021",
            after: "Online courses on Udemy"
        },
        {
            id: 3,
            list: {
                title: "Master:",
                li: [
                    "HTML/CSS",
                    "Gulp",
                    "Git",
                    "Sass/Scss" ,
                    "BEM methodology"
                ]
            },
            before: "2018 2019",
            after: "Online courses on Udemy"
        }
    ]
    return (
        <section className={classes.main} {...props}>
            <div className={classes.scrollWrap}>
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
                    <MyTitle>Education</MyTitle>
                    <div className={classes.timePoints}>
                        {timePoints.map((elem)=>
                            <MyTimePoint 
                                key={elem.id}
                                list={elem.list}
                                before={elem.before}
                                after={elem.after}
                            />
                        )}
                    </div>
                </section>
            </div>
        </section>
    )
}
