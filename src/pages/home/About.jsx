import React from 'react';
import IMG from '../../assets/images/macbook.png';
const About = () => {
    return (
        <div className="about md:container md:mx-auto ">
            <div className="header">
                <div className="icon">
                    <i className="pe-7s-medal"></i>
                </div>
                <div className="title">Clean and Ultra Modern Design</div>
            </div>
            <div className="content grid grid-cols-2 gap-4">
                <div className="left">
                    <div className="text1 text-slate-400">
                        Praesent et viverra massa non varius magna eget nibh vitae velit posuere efficitur.
                    </div>
                    <div className="text2 text-slate-400">
                        The clean and well commented code allows easy customization of the theme.It's designed for
                        describing your app, agency or business.We put a lot of effort in design, as it’s the most
                        important ingredient of successful website.Sed ut perspiciatis unde omnis iste natus error
                        sit.We put a lot of effort in design, as it’s the most important ingredient of successful
                        website.
                    </div>
                    <button className="btn theme-btn">Learn More</button>
                </div>
                <div className="right">
                    <div className="img">
                        <img src={IMG} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
