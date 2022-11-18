import React from 'react';
import classes from './MyPortfolio.module.css'

const MyPortfolio = () => {
    const date = new Date();
    let age;

    if (date.getMonth() > 9 || (date.getMonth() == 9 && date.getDay() >= 22) ) {
        age = date.getFullYear() - 2001;
    } else {
        age = date.getFullYear() - 2001 - 1;
    }

    return (
        <section className={classes.portfolio}>
            <div className={classes.close}>
                <div className={classes.circle}>
                    <span className={classes.circle__stick_1}></span>
                    <span className={classes.circle__stick_2}></span>
                </div>
            </div>
            <div className={classes.portfolio__content}>
                <div className={classes.avatar}></div>
                <div className={classes.me}>
                    
                    <div className={classes.info}>
                        <div className={classes.info__name}>Gleb BUSHUKIN</div>
                        <div className={classes.more}>
                            <div className={classes.more__title}>Phone:</div>
                            <div className={classes.more__reply}>+33 6 28 34 46 21</div>
                            <div className={classes.more__title}>Age:</div>
                            <div className={classes.more__reply}>{age}</div>
                        </div>
                    </div>
                </div>
                <ul className={classes.skills}>
                    <li>
                        <div>Hard Skills</div>
                    </li>
                    <li>
                        <div>Soft Skills</div>
                    </li>
                    <li>
                        <div>Languages</div>
                    </li>
                </ul>
                <footer className={classes.address}>
                    <span className={classes.flag}><img src="./img/country/Country.png" alt="France"></img></span>
                    <div className={classes.content}>
                        <span>France</span>
                        <span>17 Rue du Colonel Fabien</span>
                        <span>51100 Reims</span>
                    </div>
                </footer>
            </div>
        </section>
    );
}

export default MyPortfolio;