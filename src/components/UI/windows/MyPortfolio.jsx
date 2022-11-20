import React from 'react';
import classes from './MyPortfolio.module.css'
import classNames from 'classnames';

const MyPortfolio = () => {
    const date = new Date();
    let age;

    if (date.getMonth() > 9 || (date.getMonth() == 9 && date.getDay() >= 22) ) {
        age = date.getFullYear() - 2001;
    } else {
        age = date.getFullYear() - 2001 - 1;
    }

    const toggleSkillBtn = (e)=>{
        e.target.parentElement.firstChild.classList.toggle(classes.skillTitle_active);
        if (e.target.parentElement.lastChild.style.display === "none") {
            e.target.parentElement.lastChild.style.display = "block"
            setTimeout(function(){
                e.target.parentElement.lastChild.style.setProperty('--widthSkillBar', '100%');
                e.target.parentElement.lastChild.style.setProperty('--level', '50%');
                setTimeout(function(){
                    e.target.parentElement.lastChild.style.setProperty('--opacitySkillText', '1');
                }, 200);
                // 100 * (100 / var(--level))
                const multiplier = 10000 / Number(getComputedStyle(e.target.parentElement.lastChild).getPropertyValue('--level').slice(0, -1))
                e.target.parentElement.lastChild.style.setProperty('--widthWhiteSkillText', String(multiplier) + "%");
            }, 100);
            
        } else {
            e.target.parentElement.lastChild.style.setProperty('--widthSkillBar', '5%');
            e.target.parentElement.lastChild.style.setProperty('--level', '100%');
            e.target.parentElement.lastChild.style.setProperty('--opacitySkillText', '0');
            setTimeout(function(){
                e.target.parentElement.lastChild.style.display = "none"
            }, 500)
            
        }

        console.log(e.target.parentElement);
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
                <ul className={classes.skillList}>

                    <li >
                        <div className={classes.skill}>
                            <div className={classes.skillTitle} onClick={toggleSkillBtn}>
                                Hard Skills
                            </div>
                            <div style={{display: "none"}} className={classes.skills}>
                                <div className={classes.skillBar}>
                                    <div className={classNames(classes.skillName, classes.skillName_blue)}>
                                        JS/React
                                    </div>
                                    <div className={classes.skillLevel}>
                                        <div className={classNames(classes.skillName, classes.skillName_white)}>
                                            JS/React
                                        </div>
                                    </div>
                                </div>
                                <div className={classes.skillBar}>
                                    <div className={classNames(classes.skillName, classes.skillName_blue)}>
                                        JS/React
                                    </div>
                                    <div className={classes.skillLevel}>
                                        <div className={classNames(classes.skillName, classes.skillName_white)}>
                                            JS/React
                                        </div>
                                    </div>
                                </div>
                                <div className={classes.skillBar}>
                                    <div className={classNames(classes.skillName, classes.skillName_blue)}>
                                        JS/React
                                    </div>
                                    <div className={classes.skillLevel}>
                                        <div className={classNames(classes.skillName, classes.skillName_white)}>
                                            JS/React
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    {/* <li>
                    <div className={classes.skill} onClick={toggleSkillBtn}>
                            <div className={classes.skillTitle}>
                                Soft Skills
                            </div>
                            <div style={{display: "none"}} className={classes.skills}>
                                <span className={classes.skillBar}>
                                    <span className={classes.skillLevel}>
                                        <span className={classes.skillName}>JS/React</span>
                                    </span>
                                </span>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className={classes.skill} onClick={toggleSkillBtn}>
                            <div className={classes.skillTitle}>
                                Languages
                            </div>
                            <div style={{display: "none"}} className={classes.skills}>
                                <span className={classes.skillBar}>
                                    <span className={classes.skillLevel}>
                                        <span className={classes.skillName}>JS/React</span>
                                    </span>
                                </span>
                            </div>
                        </div>
                    </li> */}

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