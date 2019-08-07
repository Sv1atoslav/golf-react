import React from 'react';

function HeaderContent() {
    return (
        <div className="bg-header">
            <ul className="log-regist">
                <li>
                    <a href="#">Login</a>
                </li>
                <li className="between">
                    |
                </li>
                <li>
                    <a href="#">Partner Countries</a>
                </li>
            </ul>
        </div>
    );
}

export default HeaderContent;