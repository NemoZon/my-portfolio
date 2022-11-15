import React from 'react';
import classes from './MyNav.module.css';

function MyNav(props) {
    return ( 
        <nav className={classes.navbar}>
            <div className={classes.navbar__item}>
                <img src={props.logo} alt="logo" className={classes.logo} />
                <span className={classes.text}>{props.text}</span>
            </div>
            <div className={classes.navbar__item}>
                <a href='#'><img src='#' alt='instagram'></img></a>
            </div>
        </nav>
    );
}

export default MyNav;