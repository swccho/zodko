import React from 'react';
import bg from '../../assets/images/bg1.jpg'


const Banner = () => {
    const background = {
        backgroundImage: `url(${bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }
    return (
        <div className="banner" id="banner" style={background}>
            <div className="content">
                <div className="title">Zodkoo is a fully responsive landing page template</div>
                <div className="desc">
                    Zodkoo is a fully responsive landing page built using the latest Bootstrap framework. It's designed for
                    describing your app, agency or business. The clean and well commented code allows easy customization of
                    the theme.
                </div>
                <button className="btn theme-btn">Get Started</button>
            </div>
        </div>
    );
};

export default Banner;
