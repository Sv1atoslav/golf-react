import React from 'react';

function SliderContainer() {
    return (
        <div className="slider-container">
            <div className="info">
                <h1 className="info-title">A Golf membership with a difference</h1>
                <p className="info-text">
                    Becoming a golf member opens a wide range of options for the
                    amatuer golfer. It may be that you just want to obtain a credible
                    handi-cap that updates your playing level wherever you play or that
                    you want to play in professionaly run tournaments that do not exclude
                    you because you do not belong to a Club or both.
                </p>
                <div className="register-button-box">
                    <a href="#" className="register">Register NOW!</a>
                </div>
            </div>
            <div className="line">
                <img src={require('E:\\Programming\\Projects\\JS\\golf-react2\\src\\content\\divisionLine.png')}/>
            </div>
            <div className="image-col-1">
                <img className="image1" src={require('E:\\Programming\\Projects\\JS\\golf-react2\\src\\content\\sliderpictures\\pict1.svg')} width="341" height="200"/>
                <img className="image2" src={require('E:\\Programming\\Projects\\JS\\golf-react2\\src\\content\\sliderpictures\\pict2.svg')} width="341" height="200"/>
                <img className="image3" src={require('E:\\Programming\\Projects\\JS\\golf-react2\\src\\content\\sliderpictures\\pict3.svg')} width="341" height="200"/>
                    <div className="shapes-box">
                        <button className="circleButton1" onClick="ImageChanger.cir cleButton1()"></button>
                        <button className="circleButton2" onClick="ImageChanger.circleButton2()"></button>
                        <button className="circleButton3" onClick="ImageChanger.circleButton3()"></button>
                    </div>
            </div>
        </div>
    );
}

export default SliderContainer;