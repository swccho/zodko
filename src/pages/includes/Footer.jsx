import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="md:container md:mx-auto">
                <div className="content">
                    <div className="menu  grid grid-cols-2  md:grid-cols-4 gap-8">
                        <div className="item">
                            <div className="title">Zodkoo</div>
                            <ul>
                                <li>
                                    <a href="">Home</a>
                                </li>
                                <li>
                                    <a href="">Features</a>
                                </li>
                                <li>
                                    <a href="">Team</a>
                                </li>
                                <li>
                                    <a href="">FAQ</a>
                                </li>
                            </ul>
                        </div>
                        <div className="item">
                            <div className="title">Social</div>
                            <ul>
                                <li>
                                    <a href="">Facebook</a>
                                </li>
                                <li>
                                    <a href="">Twitter</a>
                                </li>
                                <li>
                                    <a href="">Behance</a>
                                </li>
                                <li>
                                    <a href="">Dribble</a>
                                </li>
                            </ul>
                        </div>
                        <div className="item">
                            <div className="title">Support</div>
                            <ul>
                                <li>
                                    <a href="">Help & Support</a>
                                </li>
                                <li>
                                    <a href="">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="">Terms & conditions</a>
                                </li>
                            </ul>
                        </div>
                        <div className="item">
                            <div className="title">Contact</div>
                            <ul>
                                <li>
                                    <span href="">795 Folsom Ave, Suite 600</span>
                                </li>
                                <li>
                                    <span href="">San Francisco, CA 94107</span>
                                </li>
                                <li>
                                    <span href="">P: (123) 456-7890</span>
                                </li>
                                <li>
                                    <span className="me-1">E:</span>
                                    <a href=""> email@email.com</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="copy">2023 &copy; Zodkoo</div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
