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
                <a href='https://mail.google.com/mail/u/0/#inbox?compose=CllgCHrjDvXnHdjdLPwTQnBKpfmxRNhnFjtgNFlLFXtVpjnNwrWJfWKzXTRfJdNMWjcvmnlTKPL' target='_blanc'><img className={classes.socialMediaLogo} src='./img/social_media/g+.svg' alt='g+'></img></a>
                <a href='https://github.com/NemoZon' target='_blanc'><img className={classes.socialMediaLogo} src='./img/social_media/github.svg' alt='github'></img></a>
                <a href='https://www.instagram.com/_gleb_bush_/' target='_blanc'><img className={classes.socialMediaLogo} src='./img/social_media/instagram.svg' alt='instagram'></img></a>
                <a href='https://www.linkedin.com/in/gleb-bushukin-b3a35024b' target='_blanc'><img className={classes.socialMediaLogo} src='./img/social_media/linkedin.svg' alt='linkedin'></img></a>
                <a href='https://vk.com/lllllllllllllllllillli' target='_blanc'><img className={classes.socialMediaLogo} src='./img/social_media/vk.svg' alt='vk'></img></a>
                <a href='https://api.whatsapp.com/send/?phone=79373644330&text&type=phone_number&app_absent=0' target='_blanc'><img className={classes.socialMediaLogo} src='./img/social_media/whatsapp.svg' alt='whatsapp'></img></a>
            </div>
        </nav>
    );
}

export default MyNav;