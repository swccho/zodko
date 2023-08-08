import React from 'react';
import Banner from "./Banner.jsx";
import About from "./About.jsx";
import Service from "./Service.jsx";
import Package from "./Package.jsx";
import Company from "./Company.jsx";
import Newsletter from "./Newsletter.jsx";
import Header from "../includes/Header.jsx";
import Footer from "../includes/Footer.jsx";

const Home = () => {
    return (
        <div className="home">
            <Header />
            <Banner />
            <About />
            <Service />
            <Package />
            <Company />
            <Newsletter />
            <Footer />
        </div>
    );
};

export default Home;
