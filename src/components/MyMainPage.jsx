import React, {useState} from 'react'
import classes from './MyMainPage.module.css'
import PageAboutMe from './Page/AboutMe/PageAboutMe'
import MyProjects from './Page/MyProjects/MyProjects'
import MyNavBtn from './UI/navbar/MyNavBtn'


export default function MyMainPage({age, ...props}) {

    const sectionList = [
        {
            id: 1,
            children: "About Myself",
            active: true
        },
        {
            id: 2,
            children: "My Projects",
            active: false
        }
    ]
    const projectList = [
        {
            id: 0,
            name: "Uber",
            img: "./img/projects/uber.jpg", 
            description: `This is my first site layout, it is the most primitive, but for me the most expensive. In 2019, I wondered if it was possible to create a website myself without the help of some kind of constructors.
                        From the beginning, I watched videos on YouTube "How to create a site with Django", only then I realized that these videos were about the back-end parts :)
                        I didn't know where to start so I bought courses on Udemy`, 
            date: "22/05/2020", 
            authors: "BUSHUKIN Gleb", 
            tools: "HTML, CSS/SASS",
            languages: "Russian",
            link: "https://nemozon.github.io/projects/uber/"
        },
        {
            id: 1,
            name: "Puls",
            img: "./img/projects/puls.jpg", 
            description: `My second web project, I practiced page layout when I was learning html/css on Udemy courses.
                        I remember how much I was glad that I managed to make an animation using JavaScript, as well as a pop-up menu in the mobile version.`, 
            date: "01/06/2020", 
            authors: "BUSHUKIN Gleb", 
            tools: "HTML, CSS/SASS, JavaScript",
            languages: "Russian",
            link: "https://nemozon.github.io/projects/puls/"
        }
    ]

    const[page, setPage] = useState("About Myself")

    const changePage = (val)=>{
        setPage(val)
    }
    let text;
    let image;
    switch (page) {
        case "About Myself":
            text = `Hello, my name is Gleb, I am ${age} years old and I am a student at the Champagne Ardennes University in Reims (France).
                    I was born in Russia in the city of Ufa and lived there for 16 years.
                    In 2017 I graduated from school and I moved to France where I did not know the language at all.
                    Thus began my path of self-development and the discovery of a new culture and another world.`
            image = true
            break;
        case "My Projects":
            text = `On this page you can see different web projects that were created throughout my learning process.
                    On this page, you can see the different web projects that were created throughout my learning progress, as well as the tools that were used in the process of creating them.
                    It is expected that this page, like this site, will be developed and optimized, if you did not find anything interesting for yourself, try to visit again after a while.`
            image = false
            break;
    
        default:
            break;
    }

    return (
        <section className={classes.main} {...props}>
            <div className={classes.scrollWrap}>
                <MyNavBtn list={sectionList} changePage={changePage}/>           
                <div className={classes.description}>
                    <img src='./img/avatars/Avatar.png' style={{display: !image?"block":"none"}}></img>
                    <img src='./img/avatars/Avatar2.png' style={{display: image?"block":"none"}}></img>
                    <div className={classes.text}>
                        Welcome to the page <b>{page}</b><br/>
                        {text}
                    </div>
                </div>
                {
                    page === "About Myself"? <PageAboutMe></PageAboutMe>: ""
                }
                {
                    page === "My Projects"? <MyProjects list={projectList}></MyProjects>: ""
                }
                
            </div>
        </section>
    )
}
