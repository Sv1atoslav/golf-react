import React from 'react';

function MenuContainer1() {
    return (
        <div className="menu-cpntainer">
            <p className="headers">Membership</p>
            <ul>
                <li>
                    <img src={require('../../../content/footer/footerline.png')} style={{width: 200 + "px"}}/>
                </li>
                <li>
                    <a href="#">Individual</a>
                </li>
                <li>
                    <a href="#">Society</a>
                </li>
                <li>
                    <a href="#">Golf Clubs</a>
                </li>
            </ul>
        </div>
    );
}

export default MenuContainer1;