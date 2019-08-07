import React from 'react';

function NavText() {
    return (
        <ul className="menu">
            <li>
                <a href="#">Home</a>
            </li>
            <li>
                <a href="#" className="drop-heading"> About GM</a>
                <ul>
                    <li><a href="#">Team</a></li>
                    <li><a href="#">Events</a></li>
                    <li><a href="#">Testimotionals</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </li>
            <li>
                <a href="#">Tournaments</a>
            </li>
            <li>
                <a href="#">Membership</a>
            </li>
        </ul>
    );
}

export default NavText;