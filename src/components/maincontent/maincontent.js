import React from 'react';

function MainContent() {
    return (
        <div className="maincontent">
            <div className="imges-container">
                <img src={require("../../content/blocksimg/individual.png")} className="im"/>
                <img src={require("../../content/blocksimg/golfclub.png")} className="im"/>
                <img src={require("../../content/blocksimg/teetime.png")}/>
            </div>
            <div className="leftcontainer">
                <img src={require("../../content/nearby.png")}/>
                <div className="text">
                    2012 Tournament Programme
                </div>
            </div>
            <div className="row-content">
                <div className="block">
                    <div className="heading">Online Tea Time System</div>
                    <div className="content">
                        <img src={require("../../content/contant/cont1.png")} style={{height: 108 +"px"}}/>
                            <div className="text">
                                Book golf online with our new tee time system.
                                Select a course from around the world and book
                                your discounted rates now<br></br>
                                <a href="#">read more</a>
                                <img src={require("../../content/contant/arrow.png")} alt={'not loaded'}/>
                            </div>
                    </div>
                </div>
                <div className="other-blocks">
                    <div className="heading">International Pairs Club Event</div>
                    <div className="content">
                        <img src={require("../../content/contant/cont2.png")} style={{height: 108 +"px"}}/>
                            <div className="text">
                                Win your club event to qualify to a regional final,
                                then you are just 2 steps away from having the chance
                                to compete in the 2011<br></br>
                                <a href="#">read more</a>
                                <img src={require("../../content/contant/arrow.png")}/>
                            </div>
                    </div>
                </div>
            </div>
            <div className="row-content">
                <div className="block">
                    <div className="heading">Daily Express Jamaica Doubles</div>
                    <div className="content">
                        <img src={require("../../content/contant/cont3.png")} style={{height: 108 +"px"}}/>
                            <div className="text">
                                Win your eay through to a week in the
                                Carribean at the fabulous Breezes Runaway Bay
                                Resort & Golf Club<br></br>
                                <a href="#">read more</a>
                                <img src={require("../../content/contant/arrow.png")}/>
                            </div>
                    </div>
                </div>

                <div className="other-blocks">
                    <div className="heading">IP World Final 2011 VIP Event</div>
                    <div className="content">
                        <img src={require("../../content/contant/cont2.png")} style={{height: 108 +"px"}}/>
                            <div className="text">
                                We are delighted to announce a new feature
                                to our World Final event. We have organised a VIP
                                event for guests and VIP's<br></br>
                                <a href="#">read more</a>
                                <img src={require("../../content/contant/arrow.png")}/>
                            </div>
                    </div>
                </div>
            </div>
            <img src={require("../../content/horizontline.png")} className="horizont-line"/>
                <div className="bottom-icons">
                    <div className="content">
                        <i className="large material-icons icon" style={{fontSize: 40 +'px'}}>live_tv</i>
                        <div className="heading">Videos</div>
                        <div className="text">Small description</div>
                    </div>
                    <div className="content">
                        <i className="large material-icons icon" style={{fontSize: 40 +'px'}}>filter_none</i>
                        <div className="heading">Photos</div>
                        <div className="text">Small description</div>
                    </div>
                    <div className="content">
                        <i className="large material-icons icon"style={{fontSize: 40 +'px'}}>rss_feed</i>
                        <div className="heading">News</div>
                        <div className="text">Small description</div>
                    </div>
                    <div className="content">
                        <i className="large material-icons icon" style={{fontSize: 40 +'px'}}>account_box</i>
                        <div className="heading">Schools golf day</div>
                        <div className="text" style={{left: -108 +'px'}}>Small description</div>
                    </div>
                </div>
        </div>
    );
}

export default MainContent;
