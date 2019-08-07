import React from 'react';

function MenuContainer3() {
    return (
        <div className="menu-cpntainer">
            <p className="headers">E-magazine</p>
            <ul>
                <li>
                    <img src={require('../../../content/footer/footerline.png')} style={{width: 200 + "px"}}/>
                </li>
                <li>
                    <a href="#">Events</a>
                </li>
                <li>
                    <a href="#">Sign up</a>
                </li>
                <li>
                    <a href="#">Corporate days</a>
                </li>
            </ul>
        </div>
    );
}

export default MenuContainer3;