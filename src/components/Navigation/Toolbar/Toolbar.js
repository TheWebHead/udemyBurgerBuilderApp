import React from 'react';
import classes from '../Toolbar/Toolbar.module.css';

const Toolbar = ( props ) => {
    return (
        <div>
            <header className={classes.Toolbar}>
                <div>MENU</div>
                <div>LOGO</div>
                <nav>
                    ...
                </nav>
            </header>
        </div>
    )
}

export default Toolbar;
