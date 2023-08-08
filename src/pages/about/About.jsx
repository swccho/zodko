import React from 'react';
import Header from "../includes/Header.jsx";
import Footer from "../includes/Footer.jsx";
import IMG1 from '../../assets/images/showcase-1.jpg';
import IMG2 from '../../assets/images/showcase-2.jpg';
import TEAM1 from '../../assets/images/team-1.jpg';
import TEAM2 from '../../assets/images/team-2.jpg';
import TEAM3 from '../../assets/images/team-3.jpg';

const About = () => {
    const backgroundOne = {
        backgroundImage: `url(${IMG1})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }
    const backgroundTwo = {
        backgroundImage: `url(${IMG2})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }
    return (
        <>
            <Header/>
            <div className="page about">
                <div className="banner">
                    <div className="title">About us and our mission</div>
                </div>
                <div className="mission">
                    <div className="header" data-aos="fade-up">
                        <div className="icon">
                            <i className="pe-7s-medal"></i>
                        </div>
                        <div className="title">Our Story</div>
                        <div className="text1 text-slate-400">Praesent et viverra massa non varius magna eget nibh vitae
                            velit posuere
                            efficitur.
                        </div>
                        <div className="text2 text-slate-400">The clean and well commented code allows easy
                            customization of the
                            theme.It's designed for describing your app, agency or business.We put a lot of effort in
                            design, as it’s the most important ingredient of successful website.Sed ut perspiciatis unde
                            omnis iste natus error sit.We put a lot of effort in design, as it’s the most important
                            ingredient of successful website.
                        </div>
                    </div>
                    <div className="body">
                        <div className="grid grid-cols-2">
                            <div className="img" style={backgroundOne} data-aos="fade-right"></div>
                            <div className="content" data-aos="fade-left">
                                <div className="icon">
                                    <i className="pe-7s-rocket"></i>
                                </div>
                                <div className="title">Our Mission</div>
                                <div className="text1 text-slate-400">Praesent et viverra massa non varius magna eget nibh vitae velit
                                    posuere efficitur.
                                </div>
                                <div className="text2 text-slate-400">The clean and well commented code allows easy customization of
                                    the theme.It's designed for describing your app, agency or business.We put a lot of
                                    effort in design, as it’s the most important ingredient of successful website.Sed ut
                                    perspiciatis unde omnis iste natus error sit.We put a lot of effort in design, as
                                    it’s the most important ingredient of successful website.
                                </div>
                            </div>
                            <div className="content" data-aos="fade-right">
                                <div className="icon">
                                    <i className="pe-7s-safe"></i>
                                </div>
                                <div className="title">Our Values</div>
                                <div className="text1 text-slate-400">Praesent et viverra massa non varius magna eget nibh vitae velit
                                    posuere efficitur.
                                </div>
                                <div className="text2 text-slate-400">The clean and well commented code allows easy customization of
                                    the theme.It's designed for describing your app, agency or business.We put a lot of
                                    effort in design, as it’s the most important ingredient of successful website.Sed ut
                                    perspiciatis unde omnis iste natus error sit.We put a lot of effort in design, as
                                    it’s the most important ingredient of successful website.
                                </div>
                            </div>
                            <div className="img" style={backgroundTwo} data-aos="fade-left"></div>
                        </div>
                    </div>
                </div>
                <div className="team md:container md:mx-auto">
                    <div className="header" data-aos="fade-up">
                        <div className="title">Our Team </div>
                        <div className="desc text-slate-400">The clean and well commented code allows easy customization of the theme.It's
                            <br/> designed for describing your app, agency or business.
                        </div>
                    </div>
                    <div className="body" data-aos="fade-right">
                        <div className="grid grid-cols-3 gap-8">
                            <div className="member">
                                <div className="img">
                                    <img src={TEAM1} alt=""/>
                                </div>
                                <div className="name">Holden McGroin</div>
                                <div className="role text-slate-400">Product Designer & Founder</div>
                            </div>
                            <div className="member">
                                <div className="img">
                                    <img src={TEAM2} alt=""/>
                                </div>
                                <div className="name">Mike Oxbigg</div>
                                <div className="role text-slate-400">Developer & Co-founder</div>
                            </div>
                            <div className="member">
                                <div className="img">
                                    <img src={TEAM3} alt=""/>
                                </div>
                                <div className="name">Eilean Dover</div>
                                <div className="role text-slate-400">UI/UX Designer</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default About;
