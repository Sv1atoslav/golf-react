import React from 'react';

function BannerImage() {
    return (
        <div className="banner">
            <img src={require('../../content/banner/banner.png')}/>;
        </div>
    );
}

export default BannerImage;