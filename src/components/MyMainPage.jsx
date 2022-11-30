import React from 'react'
import classes from './MyMainPage.module.css'
import MyNavBtn from './UI/navbar/MyNavBtn'
import MyTitle from './UI/title/MyTitle'
import MyTimePoint from './UI/timePoint/MyTimePoint'

export default function MyMainPage(props) {
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
                    <MyTimePoint list={
                        {
                            title: "Languages studied:",
                            li: [
                                "PHP",
                                "Python",
                                "SQL",
                                "HTML/CSS",
                                "JS/React",
                                "C++"
                            ]
                        }
                    }
                    before={"From 2021"}
                    after={"Bachelor's degree in computer science option C++ at l'IUT Reims-Chalons-Charleville"}
                    />
                </section>
            </div>
        </section>
    )
}
