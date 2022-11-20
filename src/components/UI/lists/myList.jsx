import React from 'react';
import classes from './MyList.module.css';
import classNames from 'classnames';

// items = [{id: 0, title: "Hard Skills", skills: [{name: "JS/React", icon: "./", level: "50%"}]}]
function MyList({items, id, ...props}) {
    items = [
        {id: 0, title: "Hard Skills", skills: [
            {id: 1, name: "Figma", icon: "./img/icons/akar-icons_figma-fill.svg", level: "50%"},
        ]}
    ]
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

    const listItems = [];
    for (const item of items) {
        // {id: 0, title: "Hard Skills", skills: [{id: 0, name: "JS/React", icon: "./", level: "50%"}]}
        const skillList = [];
        for (const skill of item.skills) {
            skillList.push(
                <div key={skill.id} className={classes.skillBar}>
                    <div className={classNames(classes.skillName, classes.skillName_blue)}>
                        {skill.name}
                    </div>
                    <div className={classes.skillLevel}>
                        <div className={classes.skillIcon}>
                            <img src={skill.icon}></img>
                        </div>
                        <div className={classNames(classes.skillName, classes.skillName_white)}>
                            {skill.name}
                        </div>
                    </div>
                </div>
            )
        }

        listItems.push(
            <li key={item.id}>
                <div className={classes.skill}>
                    <div className={classes.skillTitle} onClick={toggleSkillBtn}>
                        {item.title}
                    </div>
                    <div style={{display: "none"}} className={classes.skills}>
                        {skillList}
                    </div>
                </div>
            </li>
        )
    }
    return (
        <ul className={classes.skillList}>
            {listItems}
        </ul>
    );
}

export default MyList;