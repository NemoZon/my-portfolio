import React from 'react'
import MyTitle from '../../../UI/title/MyTitle'
import classes from './MyProject.module.css'

export default function MyProject({name, img, description, date, authors, languages, tools, link, ...props}) {
    return (
        <div className={classes.project} {...props}>
            <MyTitle>{name}</MyTitle>
            <div className={classes.container}>
                <a className={classes.container_img} href={link} target='_blanc'>
                    
                    <img className={classes.img} src={img} alt="Project"></img>
                    <div className={classes.fade}><img src="./img/link/link.svg"></img></div>
                </a>
                <div className={classes.info}>
                    <div className={classes.description}>
                        {description}
                    </div>
                    <div className={classes.container_data}>
                        <div className={classes.data}>
                            <div className={classes.title}>Date</div>
                            <div className={classes.info}>{date}</div>
                        </div>
                        <div className={classes.data}>
                            <div className={classes.title}>Author(s)</div>
                            <div className={classes.info}>{authors}</div>
                        </div>
                        <div className={classes.data}>
                            <div className={classes.title}>Languages</div>
                            <div className={classes.info}>{languages}</div>
                        </div>
                        <div className={classes.data}>
                            <div className={classes.title}>Tools</div>
                            <div className={classes.info}>{tools}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
