import React from 'react';

const Header = () => {
    return (
        <>
        <header className="desktop">
            <div className="md:container md:mx-auto content">
                <div className="left">
                    <div className="logo">
                        <a href="/">Zodkoo</a>
                    </div>
                    <ul className="menu">
                        <li>
                            <a href="">Home</a>
                        </li>
                        <li>
                            <a href="">Features</a>
                        </li>
                        <li>
                            <a href="">Plans</a>
                        </li>
                        <li>
                            <a href="">Clients</a>
                        </li>
                        <li>
                            <a href="">Pages</a>
                        </li>
                    </ul>
                </div>
                <div className="right">
                    <a href="">Login</a>
                </div>
            </div>
        </header>
        <header className="mobile">
            <div className="top">
                <div className="logo">
                    <img src="" alt=""/>
                </div>
                <div className="close">

                </div>
            </div>
            <ul className="menu">
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">Features</a>
                </li>
                <li>
                    <a href="">Plans</a>
                </li>
                <li>
                    <a href="">Clients</a>
                </li>
                <li>
                    <a href="">Pages</a>
                </li>
            </ul>
        </header>
        </>
    );
};

export default Header;
