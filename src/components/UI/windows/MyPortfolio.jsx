import React from 'react';
import classes from './MyPortfolio.module.css';
import MyList from '../lists/MyList'


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
                            <a href="tel: +33628344621" className={classes.more__reply}>+33 6 28 34 46 21</a>
                            <div className={classes.more__title}>Age:</div>
                            <div className={classes.more__reply}>{age}</div>
                        </div>
                    </div>

                </div>
                <hr />
                
                <MyList></MyList>

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