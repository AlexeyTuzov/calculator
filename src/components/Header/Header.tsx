import React, {FC} from "react";
import {Link} from "react-router-dom";

const Header: FC = () => {
    return (
        <header title='Header'>
            <h1>Currencies Calculator</h1>
            <Link to='/'>
                <button className='material-icons'>home</button>
            </Link>
        </header>
    );
}

export default Header;
