import React from 'react';
import IMG1 from '../../assets/images/microsoft.png';
import IMG2 from '../../assets/images/google.png';
import IMG3 from '../../assets/images/instagram.png';
import IMG4 from '../../assets/images/converse.png';
import USER1 from '../../assets/images/user.jpg';

const Company = () => {
    return (
        <div className="company" id="clients" data-aos="fade-left">
            <div className="md:container md:mx-auto">
                <div className="header">
                    <div className="title">Trusted by Thousands</div>
                    <div className="desc text-slate-400">The clean and well commented code allows easy customization of
                        the theme.It's
                        <br/>
                        designed for describing your app, agency or business.
                    </div>
                </div>
                <div className="content">
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
                    <div className="team grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
                        <div className="member">
                            <div className="quote text-slate-400">“ There are many variations of passages of Lorem Ipsum available, but
                                the majority have suffered alteration in some form, by injected humour, or randomised
                                words which don't look even slightly believable.”
                            </div>
                            <div className="info">
                                <div className="img">
                                    <img src={USER1} alt=""/>
                                </div>
                                <div className="text">
                                    <div className="name">Calebogden</div>
                                    <div className="desc text-slate-400">Another company , City</div>
                                </div>
                            </div>
                        </div>
                        <div className="member">
                            <div className="quote text-slate-400">“ There are many variations of passages of Lorem Ipsum available, but
                                the majority have suffered alteration in some form, by injected humour, or randomised
                                words which don't look even slightly believable.”
                            </div>
                            <div className="info">
                                <div className="img">
                                    <img src={USER1} alt=""/>
                                </div>
                                <div className="text">
                                    <div className="name">Calebogden</div>
                                    <div className="desc text-slate-400">Another company , City</div>
                                </div>
                            </div>
                        </div>
                        <div className="member">
                            <div className="quote text-slate-400">“ There are many variations of passages of Lorem Ipsum available, but
                                the majority have suffered alteration in some form, by injected humour, or randomised
                                words which don't look even slightly believable.”
                            </div>
                            <div className="info">
                                <div className="img">
                                    <img src={USER1} alt=""/>
                                </div>
                                <div className="text">
                                    <div className="name">Calebogden</div>
                                    <div className="desc text-slate-400">Another company , City</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Company;
