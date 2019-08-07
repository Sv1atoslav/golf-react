import React from 'react';
import BannerImage from "./banner-image";
import NavBar from "../navbar/navbar";
import MainSlider from "../main-slider/mainslider";
import Aside from "../aside/aaside";

function ClassOne() {
    return (
        <div className="one">
            <BannerImage/>
            <NavBar/>
            <MainSlider/>
            <Aside/>
        </div>
    );
}

export default ClassOne;
