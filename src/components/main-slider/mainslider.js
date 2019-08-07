import React from 'react';
import SliderContainer from "../slider-container/slidercontainer";
import MainContent from "../maincontent/maincontent";

function MainSlider() {
    return (
        <div className="main-slider">
            <SliderContainer/>
            <MainContent/>
        </div>
    );
}

export default MainSlider;