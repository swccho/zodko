import React from 'react';
import Banner from "./Banner.jsx";
import About from "./About.jsx";
import Service from "./Service.jsx";
import Package from "./Package.jsx";
import Company from "./Company.jsx";
import Newsletter from "./Newsletter.jsx";

const Home = () => {
    return (
        <>
            <Banner />
            <About />
            <Service />
            <Package />
            <Company />
            <Newsletter />
        </>
    );
};

export default Home;
