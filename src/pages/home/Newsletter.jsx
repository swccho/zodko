import React from 'react';

const Newsletter = () => {
    return (
        <div className="newsletter" data-aos="fade-right">
            <div className="md:container md:mx-auto">
                <div className="header">
                    <div className="title">Be engaged Newsletter</div>
                    <div className="desc">The clean and well commented code allows easy customization of the theme.It's
                        <br/>
                        designed for describing your app, agency or business.
                    </div>
                </div>
                <div className="content">
                    <div className="form-group">
                        <input type="text" placeholder="Enter e-mail address" />
                    </div>
                    <div className="subscribe">
                        <button className="btn theme-btn subscribe-btn">subscribe</button>
                        <div className="text">You can un-subscribe at any time.</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
