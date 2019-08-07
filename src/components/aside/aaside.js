import React from 'react';

function Aside() {
    return (
        <aside>
            <a href="#"> <img src={require("../../content/aside/twitter.svg")}/></a>
            <a href="#"><img src={require("../../content/aside/facebook.svg")}/></a>
            <a href="#"><img src={require("../../content/aside/linked.svg")}/></a>
            <a href="#"> <img src={require("../../content/aside/youtube.svg")}/></a>
        </aside>
    );
}

export default Aside;
