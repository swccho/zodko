import React, {useState} from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    return (
        <>
        <header className="desktop">
            <div className="md:container md:mx-auto content">
                <div className="left">
                    <div className="logo">
                        <a href="/">NA</a>
                    </div>
                    <ul className="menu">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <a href="#features">Features</a>
                        </li>
                        <li>
                            <a href="#plans">Plans</a>
                        </li>
                        <li>
                            <a href="#clients">Clients</a>
                        </li>
                        <li>
                            <a href="javascript:void(0)" onClick={()=> setShowDropdown(!showDropdown)}>Pages</a>
                            <ul className={showDropdown && 'active'}>
                                <li>
                                    <Link to="/about">About Us</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Contact</Link>
                                </li>
                                <li>
                                    <Link to="/faq">FAQ</Link>
                                </li>
                                <li>
                                    <Link to="/jobs">Jobs</Link>
                                </li>
                            </ul>
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
                    <a href="">NA</a>
                </div>
                {
                    showMenu ?  <div className="close">
                        <a href="javascript:void(0)" onClick={()=> setShowMenu(false)}>
                            <i className="pe-7s-close-circle"></i>
                        </a>
                    </div> : <div className="hamburger" >
                        <a href="javascript:void(0)" onClick={()=> setShowMenu(true)}>
                            <i className="pe-7s-menu"></i>
                        </a>
                    </div>
                }
            </div>
            <ul className={`menu ${showMenu && 'active'}`}>
                <li>
                    <a href="#banner" onClick={()=> setShowMenu(false)}>Home</a>
                </li>
                <li>
                    <a href="#features" onClick={()=> setShowMenu(false)}>Features</a>
                </li>
                <li>
                    <a href="#plans" onClick={()=> setShowMenu(false)}>Plans</a>
                </li>
                <li>
                    <a href="#clients" onClick={()=> setShowMenu(false)}>Clients</a>
                </li>
                <li>
                    <a href="" onClick={()=> setShowMenu(false)}>Pages</a>
                </li>
            </ul>
        </header>
        </>
    );
};

export default Header;
