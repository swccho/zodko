import React from 'react';
import Header from "../includes/Header.jsx";
import Footer from "../includes/Footer.jsx";

const Jobs = () => {
    return (
        <>
            <Header/>
            <div className="page jobs">
                <div className="banner">
                    <div className="title">We're Hiring</div>
                </div>
                <div className="content">
                    <div className="header" data-aos="fade-up">
                        <div className="title">Current Job Openings</div>
                        <div className="desc text-slate-400">The clean and well commented code allows easy customization
                            of the theme.It's
                            <br/> designed for describing your app, agency or business.
                        </div>
                    </div>
                    <div className="body">
                        <div className="grid grid-cols-2 gap-8">
                            <div className="job"  data-aos="fade-right">
                                <div className="title">Back-end Developer</div>
                                <div className="desc text-slate-400">There are many variations of passages of Lorem Ipsum available,
                                    but the majority have suffered alteration in some form, by injected humour, or
                                    randomised words which...
                                </div>
                                <div className="text-center">
                                    <button className="btn theme-btn">View Detail</button>

                                </div>
                            </div>
                            <div className="job" data-aos="fade-left">
                                <div className="title">Front-end Developer</div>
                                <div className="desc text-slate-400">There are many variations of passages of Lorem Ipsum available,
                                    but the majority have suffered alteration in some form, by injected humour, or
                                    randomised words which...
                                </div>
                                <div className="text-center">
                                    <button className="btn theme-btn">View Detail</button>
                                </div>
                            </div>
                            <div className="job" data-aos="fade-right">
                                <div className="title">Business Development Analyst</div>
                                <div className="desc text-slate-400">There are many variations of passages of Lorem Ipsum available,
                                    but the majority have suffered alteration in some form, by injected humour, or
                                    randomised words which...
                                </div>
                                <div className="text-center">
                                    <button className="btn theme-btn">View Detail</button>
                                </div>
                            </div>
                            <div className="job" data-aos="fade-left">
                                <div className="title">Customer Service Specialist</div>
                                <div className="desc text-slate-400">There are many variations of passages of Lorem Ipsum available,
                                    but the majority have suffered alteration in some form, by injected humour, or
                                    randomised words which...
                                </div>
                                <div className="text-center">
                                    <button className="btn theme-btn">View Detail</button>
                                </div>
                            </div>
                            <div className="job" data-aos="fade-right">
                                <div className="title">Website Designer</div>
                                <div className="desc text-slate-400">There are many variations of passages of Lorem Ipsum available,
                                    but the majority have suffered alteration in some form, by injected humour, or
                                    randomised words which...
                                </div>
                                <div className="text-center">
                                    <button className="btn theme-btn">View Detail</button>
                                </div>
                            </div>
                            <div className="job" data-aos="fade-left">
                                <div className="title">Marketing Director</div>
                                <div className="desc text-slate-400">There are many variations of passages of Lorem Ipsum available,
                                    but the majority have suffered alteration in some form, by injected humour, or
                                    randomised words which...
                                </div>
                                <div className="text-center">
                                    <button className="btn theme-btn">View Detail</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Jobs;
