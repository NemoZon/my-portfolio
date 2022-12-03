import React from 'react'
import classes from './PageAboutMe.module.css'
import MyTitle from '../../UI/title/MyTitle'
import MyTimePointList from '../../MyTimePointList'

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
        after: "Bachelor's degree in computer science option C++ at IUT Reims-Chalons-Charleville",
        link: "https://www.univ-reims.fr"
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
        after: "Online courses on Udemy",
        link: "http://udemy.com"
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
        after: "Online courses on Udemy",
        link: "http://udemy.com"
    }
]

export default function PageAboutMe({...props}) {
    return (
        <div className={classes.page} {...props}>
            <section className={classes.education}>
                <MyTitle id="Education">Education</MyTitle>
                <MyTimePointList list={timePoints}></MyTimePointList>
            </section>
            <section className={classes.languages}>
                <MyTitle id="Languages">Languages</MyTitle>
                <img style={{width: "20%"}}src='./img/preloader/giphy.gif'></img>
            </section>
            <section className={classes.achievements}>
                <MyTitle id="Achievements">Achievements</MyTitle>
                <img style={{width: "20%"}}src='./img/preloader/giphy.gif'></img>
            </section>
        </div>

    )
}
