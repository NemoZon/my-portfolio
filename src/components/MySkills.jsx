import React, {useEffect, useState} from 'react';
import classes from './MySkills.module.css';
import MySkillLi from './UI/lists/li/MySkillLi';

function MySkills({...props}) {

    const [item1, setItem1] = useState({
        id: 0, 
        title: "Hard Skills", 
        active: false
    })
    const [item2, setItem2] = useState({
        id: 1, 
        title: "Soft Skills", 
        active: false
    })
    const [item3, setItem3] = useState({
        id: 2, 
        title: "Languages", 
        active: false
    })


    const [HardSkills, setHardSkills] = useState([
        {
            id: Date.now()*2 + 1,
            active: false,
            name: "Figma",
            level: "80%",
            icon: "./img/icons/HardSkills/white/akar-icons_figma-fill.png",
            icon_blue: "./img/icons/HardSkills/blue/akar-icons_figma-fill.png",
            alt: "icon"
        },
        {
            id: Date.now()*2 + 2,
            active: false,
            name: "JS/React",
            level: "65%",
            icon: "./img/icons/HardSkills/white/vscode-icons_file-type-reactts.png",
            icon_blue: "./img/icons/HardSkills/blue/vscode-icons_file-type-reactts.png",
            alt: "icon"
        },
        {
            id: Date.now()*2 + 3,
            active: false,
            name: "PHP",
            level: "50%",
            icon: "./img/icons/HardSkills/white/akar-icons_php-fill.png",
            icon_blue: "./img/icons/HardSkills/blue/akar-icons_php-fill.png",
            alt: "icon"
        },
        {
            id: Date.now()*2 + 4,
            active: false,
            name: "Python",
            level: "60%",
            icon: "./img/icons/HardSkills/white/akar-icons_python-fill.png",
            icon_blue: "./img/icons/HardSkills/blue/akar-icons_python-fill.png",
            alt: "icon"
        },
        {
            id: Date.now()*2 + 5,
            active: false,
            name: "HTML/CSS",
            level: "80%",
            icon: "./img/icons/HardSkills/white/cryptocurrency_html.png",
            icon_blue: "./img/icons/HardSkills/blue/cryptocurrency_html.png",
            alt: "icon"
        },
        {
            id: Date.now()*2 + 6,
            active: false,
            name: "Adobe Illustrator",
            level: "40%",
            icon: "./img/icons/HardSkills/white/file-icons_adobe-illustrator.png",
            icon_blue: "./img/icons/HardSkills/blue/file-icons_adobe-illustrator.png",
            alt: "icon"
        },
        {
            id: Date.now()*2 + 7,
            active: false,
            name: "Adobe Photoshop",
            level: "20%",
            icon: "./img/icons/HardSkills/white/simple-icons_adobephotoshop.png",
            icon_blue: "./img/icons/HardSkills/blue/simple-icons_adobephotoshop.png",
            alt: "icon"
        },
        {
            id: Date.now()*2 + 8,
            active: false,
            name: "SQL Oracle",
            level: "60%",
            icon: "./img/icons/HardSkills/white/vscode-icons_file-type-sql.png",
            icon_blue: "./img/icons/HardSkills/blue/vscode-icons_file-type-sql.png",
            alt: "icon"
        }
        
    ])

    const [SoftSkills, setSoftSkills] = useState([
        {
            id: Date.now()*3 + 1,
            active: false,
            name: "Responsibility",
            level: "70%",
            icon: "./img/icons/SoftSkills/white/fa6-solid_hands-holding-child.png",
            icon_blue: "./img/icons/SoftSkills/blue/fa6-solid_hands-holding-child.png",
            alt: "icon"
        },
        {
            id: Date.now()*3 + 1,
            active: false,
            name: "Teamwork",
            level: "65%",
            icon: "./img/icons/SoftSkills/white/fluent_people-team-20-filled.png",
            icon_blue: "./img/icons/SoftSkills/blue/fluent_people-team-20-filled.png",
            alt: "icon"
        },
        {
            id: Date.now()*3 + 1,
            active: false,
            name: "Self-motivation",
            level: "90%",
            icon: "./img/icons/SoftSkills/white/game-icons_stairs-goal.png",
            icon_blue: "./img/icons/SoftSkills/blue/game-icons_stairs-goal.png",
            alt: "icon"
        },
        {
            id: Date.now()*3 + 1,
            active: false,
            name: "Communication",
            level: "70%",
            icon: "./img/icons/SoftSkills/white/icon-park-solid_communication.png",
            icon_blue: "./img/icons/SoftSkills/blue/icon-park-solid_communication.png",
            alt: "icon"
        },
        {
            id: Date.now()*3 + 1,
            active: false,
            name: "Leadership",
            level: "50%",
            icon: "./img/icons/SoftSkills/white/iconoir_leaderboard-star.png",
            icon_blue: "./img/icons/SoftSkills/blue/iconoir_leaderboard-star.png",
            alt: "icon"
        },
        {
            id: Date.now()*3 + 1,
            active: false,
            name: "Problem solving",
            level: "90%",
            icon: "./img/icons/SoftSkills/white/mdi_head-cog.png",
            icon_blue: "./img/icons/SoftSkills/blue/mdi_head-cog.png",
            alt: "icon"
        },
        {
            id: Date.now()*3 + 1,
            active: false,
            name: "Creativity",
            level: "80%",
            icon: "./img/icons/SoftSkills/white/mdi_head-lightbulb.png",
            icon_blue: "./img/icons/SoftSkills/blue/mdi_head-lightbulb.png",
            alt: "icon"
        }
    ])

    const [Languages, setLanguages] = useState([
        {
            id: Date.now()*3 + 2,
            active: false,
            name: "French",
            level: "70%",
            icon: "./img/icons/Languages/twemoji_flag-for-flag-france.png",
            icon_blue: "./img/icons/Languages/twemoji_flag-for-flag-france.png",
            alt: "icon"
        },
        {
            id: Date.now()*3 + 3,
            active: false,
            name: "Russian",
            level: "90%",
            icon: "./img/icons/Languages/twemoji_flag-russia.png",
            icon_blue: "./img/icons/Languages/twemoji_flag-russia.png",
            alt: "icon"
        },
        {
            id: Date.now()*3 + 4,
            active: false,
            name: "English",
            level: "55%",
            icon: "./img/icons/Languages/twemoji_flag-united-states.png",
            icon_blue: "./img/icons/Languages/twemoji_flag-united-states.png",
            alt: "icon"
        }
    ])
    
    const changeItems = (item) =>{
        switch (item.id) {
            case 0:
                if (SoftSkills[0].active) {
                    setSoftSkills(
                        SoftSkills.map((elem)=>{
                            return {
                                ...elem,
                                active: false
                            }
                        })
                    )
                }

                if (Languages[0].active) {
                    setLanguages(
                        Languages.map((elem)=>{
                            return {
                                ...elem,
                                active: false
                            }
                        })
                    )
                }

                setHardSkills(
                    HardSkills.map((elem)=>{
                        return {
                            ...elem,
                            active: item.active
                        }
                    })
                )
                setItem1({...item})
                setItem2({
                    id: 1, 
                    title: "Soft Skills", 
                    active: false
                })
                setItem3({
                    id: 2, 
                    title: "Languages", 
                    active: false
                })
                break;
            case 1:
                
                if (Languages[0].active) {
                    setLanguages(
                    Languages.map((elem)=>{
                        return {
                            ...elem,
                            active: false
                        }
                    }))
                }
                if (HardSkills[0].active) {
                    setHardSkills(
                        HardSkills.map((elem)=>{
                            return {
                                ...elem,
                                active: false
                            }
                        })
                    )
                }
                setSoftSkills(
                    SoftSkills.map((elem)=>{
                        return {
                            ...elem,
                            active: item.active
                        }
                    })
                )
                
                setItem1({
                    id: 0, 
                    title: "Hard Skills", 
                    active: false
                })
                setItem2({...item})
                setItem3({
                    id: 2, 
                    title: "Languages", 
                    active: false
                })
                break;
            case 2:
                if (SoftSkills[0].active) {
                    setSoftSkills(
                        SoftSkills.map((elem)=>{
                            return {
                                ...elem,
                                active: false
                            }
                        })
                    )
                    }
                if (HardSkills[0].active) {
                    setHardSkills(
                        HardSkills.map((elem)=>{
                            return {
                                ...elem,
                                active: false
                            }
                        })
                    )
                }

                setLanguages(
                    Languages.map((elem)=>{
                        return {
                            ...elem,
                            active: item.active
                        }
                    })
                )
                
                setItem1({
                    id: 0, 
                    title: "Hard Skills", 
                    active: false
                })
                setItem2({
                    id: 1, 
                    title: "Soft Skills", 
                    active: false
                })
                setItem3({...item})
                break;
            default:
                console.log("Error: item.id is undefiend ");
                break;
        }
    }
    return (
        <ul className={classes.skillList}>
            <MySkillLi key={item1.id} item={item1} list={HardSkills} {...props}change={changeItems}></MySkillLi>
            <MySkillLi key={item2.id} item={item2} list={SoftSkills} {...props}change={changeItems}></MySkillLi>
            <MySkillLi key={item3.id} item={item3} list={Languages} {...props}change={changeItems}></MySkillLi>
        </ul>
    );
}

export default MySkills;