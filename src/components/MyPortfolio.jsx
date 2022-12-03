import React, {useState} from 'react';
import classes from './MyPortfolio.module.css';
import MySkills from './MySkills'


const MyPortfolio = ({age, ...props}) => {
    const [active, setActive] = useState(true)
    let portfolioClass = classes.portfolio;
    let closeClass = " "
    let closeClose = " "
    let openClass = classes.arrow 
    if (!active) {
        portfolioClass += " "+classes.portfolio_close
        closeClass += classes.display_close
        closeClose += classes.close_close
        openClass += " "+classes.arrow_active
        console.log(closeClass);
    } else {
        portfolioClass += " "+classes.portfolio_open
        closeClass += classes.display_open
        // closeClose += classes.close_open
    }

    const closePortfolio = ()=>{
        active?setActive(false):setActive(true)
        console.log("click");
    }

    return (
        <section className={portfolioClass} {...props}>
            <div className={openClass} onClick={closePortfolio}>
                <span className={classes.arrow__stick_1}></span>
                <span className={classes.arrow__stick_2}></span>
            </div>

            <div className={classes.close + closeClose} onClick={closePortfolio}>
                <div className={classes.circle}>
                    <span className={classes.circle__stick_1}></span>
                    <span className={classes.circle__stick_2}></span>
                </div>
            </div>

            <div className={classes.portfolio__content + closeClass}>
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
                
                <MySkills></MySkills>

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