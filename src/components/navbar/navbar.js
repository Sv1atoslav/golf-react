import React from 'react';
import NavText from "./navtext/navtext";

function NavBar() {
    return (
        <nav>
            <div className="banner">
                <img src={require('E:\\Programming\\Projects\\JS\\golf-react2\\src\\content\\nav\\bg.png')}/>;
            </div>
            <NavText/>
        </nav>
    );
}

export default NavBar;