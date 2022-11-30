import React from 'react';
import classes from './MyNav.module.css';

function MyNav({text, logo, ...props}) {
    return ( 
        <nav className={classes.navbar} {...props}>
            <div className={classes.navbar__logo}>
                <img src={logo} alt="logo" className={classes.logo} />
                <span className={classes.text}>{text}</span>
            </div>
            <div className={classes.navbar__sm}>
                <a className={classes.link} href='#'><span className={classes.bg}></span><img className={classes.socialMediaLogo} src='./img/social_media/g+.svg' alt='g+'></img></a>
                <a href='#'><img className={classes.socialMediaLogo} src='./img/social_media/github.svg' alt='github'></img></a>
                <a href='#'><img className={classes.socialMediaLogo} src='./img/social_media/instagram.svg' alt='instagram'></img></a>
                <a href='#'><img className={classes.socialMediaLogo} src='./img/social_media/linkedin.svg' alt='linkedin'></img></a>
                <a href='#'><img className={classes.socialMediaLogo} src='./img/social_media/vk.svg' alt='vk'></img></a>
                <a href='#'><img className={classes.socialMediaLogo} src='./img/social_media/whatsapp.svg' alt='whatsapp'></img></a>
            </div>
        </nav>
    );
}

export default MyNav;