import React, {FC} from "react";
import {Link} from "react-router-dom";

const Header: FC = () => {
    return (
        <header title='Header'>
            <h3>Currencies Calculator</h3>
            <Link to='/'>
                <button className='material-icons'>home</button>
            </Link>
        </header>
    );
}

export default Header;
