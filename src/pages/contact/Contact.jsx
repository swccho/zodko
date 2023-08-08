import React from 'react';
import Header from "../includes/Header.jsx";
import TEAM1 from "../../assets/images/team-1.jpg";
import TEAM2 from "../../assets/images/team-2.jpg";
import TEAM3 from "../../assets/images/team-3.jpg";
import Footer from "../includes/Footer.jsx";
import IMG1 from "../../assets/images/microsoft.png";
import IMG2 from "../../assets/images/google.png";
import IMG3 from "../../assets/images/instagram.png";
import IMG4 from "../../assets/images/converse.png";

const Contact = () => {
    return (
        <>
            <Header/>
            <div className="page contact">
                <div className="banner">
                    <div className="title">Get In Touch</div>
                </div>
                <div className="contact-form md:container md:mx-auto">
                    <div className="header" data-aos="fade-right">
                        <div className="title">Send us a Message</div>
                        <div className="desc text-slate-400">The clean and well commented code allows easy customization of the theme.It's
                            <br/> designed for describing your app, agency or business.
                        </div>
                    </div>
                    <div className="body grid grid-cols-2 gap-32">
                        <div className="left" data-aos="fade-right">
                            <form>
                                <div className="form-group">
                                    <input type="text" name="name" className="form-control" placeholder="Your Name" />
                                </div>
                                <div className="form-group">
                                    <input type="email" name="email" className="form-control" placeholder="Your Email" />
                                </div>
                                <div className="form-group">
                                    <textarea name="message" cols="30" rows="10" className="form-control" placeholder="Message"></textarea>
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn  theme-btn">Submit</button>
                                </div>
                            </form>
                        </div>
                        <div className="right" data-aos="fade-left">
                            <div className="address">
                                <div className="icon">
                                    <i className="pe-7s-map-marker"></i>
                                </div>
                                <div className="text">
                                    795 Folsom Ave, Suite 600
                                    <br/> San Francisco, CA 94107
                                </div>
                            </div>
                            <div className="phone">
                                <div className="icon">
                                    <i className="pe-7s-phone"></i>
                                </div>
                                <div className="text">(120) 456-789-123</div>
                            </div>
                            <div className="email">
                                <div className="icon">
                                    <i className="pe-7s-mail-open-file"></i>
                                </div>
                                <div className="text">support@yourmail.com</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="company">
                    <div className="header" data-aos="fade-up">
                        <div className="title">Trusted by Thousands</div>
                        <div className="desc text-slate-400">The clean and well commented code allows easy customization of
                            the theme.It's
                            <br/>
                            designed for describing your app, agency or business.
                        </div>
                    </div>
                    <div className="content" data-aos="fade-right">
                        <div className="logos grid grid-cols-2 md:grid-cols-4 gap-8">
                            <div className="logo">
                                <img src={IMG1} alt=""/>
                            </div>
                            <div className="logo">
                                <img src={IMG2} alt=""/>
                            </div>
                            <div className="logo">
                                <img src={IMG3} alt=""/>
                            </div>
                            <div className="logo">
                                <img src={IMG4} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Contact;
