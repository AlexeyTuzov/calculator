import React, {FC} from "react";
import {Link} from "react-router-dom";
import s from './Header.module.css';

const BUTTON_CSS = `material-icons ${s.button}`;

const Header: FC = () => {
    return (
        <header title='Header' className={s.header}>
            <h3 className={s.h3}>Currencies Calculator</h3>
            <span className={s.span}>
            <Link to='/'>
                <button className={BUTTON_CSS}>home</button>
            </Link>
            </span>
            
        </header>
    );
}

export default Header;
