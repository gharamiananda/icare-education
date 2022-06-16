import React, { useEffect } from 'react';
import './Navbar.css'
import logo from '../../images/resources/icare.png';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';
import { FiMapPin } from 'react-icons/fi';
import { GoMailRead } from 'react-icons/go';
import { FiPhoneCall } from 'react-icons/fi';
import { GoSearch } from 'react-icons/go';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
    // Sticky Menu Area
    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });


    /* Method that will fix header after a specific scrollable */
    const isSticky = (e) => {
        const header = document.querySelector('.stricked-menu');
        const scrollTop = window.scrollY;
        scrollTop >= 250 ? header.classList.add('stricky-fixed') : header.classList.remove('stricky-fixed');
    };
    return (
        <div className="page-wrapper">
            <header className="main-header-two clearfix">
                <div className="main-header-two__top">
                    <div className="container">
                        <div className="main-header-two__top-inner">
                            <div className="main-header-two__top-left">

                            </div>
                            <div className="main-header-two__top-right">
                                <div className="main-header-two__top-social">
                                    <a href="#"><AiFillFacebook /></a>
                                    <a href="#"><BsTwitter /></a>
                                    <a href="#"><AiFillLinkedin /></a>
                                    <a href="#"><AiFillYoutube /></a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-header-two__middle">
                    <div className="container">
                        <div className="main-header-two__middle-inner clearfix">
                            <div className="main-header-two__shape-1"></div>
                            <div className="main-header-two__shape-2"></div>
                            <div className="main-header-two__shape-3"></div>
                            <div className="main-header-two__shape-4"></div>
                            <div className="main-header-two__shape-5"></div>
                            <div className="main-header-two__shape-6"></div>
                            <div className="main-header-two__shape-7"></div>
                            <div className="main-header-two__logo">
                                <a href="index.html"><img src={logo} alt="" className="mainlogoheader" /></a>
                            </div>
                            <div className="main-header-two__address">
                                <ul className="list-unstyled main-header-two__address-list">
                                    <li>
                                        <div className="icon">
                                            <FiPhoneCall className="icon-phone-call" value={{ style: { fontSize: '50px' } }}></FiPhoneCall>
                                            <span className="icon-phone-call"></span>
                                        </div>
                                        <div className="content">
                                            <p>Call Anytime</p>
                                            <h5><a href="tel:91(03224) 255275">+91(03224) 255275</a></h5>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <GoMailRead></GoMailRead>
                                            <span className="icon-message"></span>
                                        </div>
                                        <div className="content">
                                            <p>Send Email</p>
                                            <h5><a href="mailto:icare_haldia@rediffmail.com">icare_haldia@rediffmail.com</a></h5>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <FiMapPin />

                                            <span className="icon-location"></span>
                                        </div>
                                        <div className="content">
                                            <p>Address</p>
                                            <h5> <a hre=''>ICARE Complex, HIT Campus, P.O.-Hatiberia, Haldia</a> </h5>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="main-menu main-menu-two clearfix">
                    <div className="main-menu-two__wrapper clearfix">
                        <div className="container">
                            <div className="main-menu-two__wrapper-inner clearfix">
                                <div className="main-menu-two__wrapper-inner-bg"></div>
                                <div className="main-menu-two__left">
                                    <div className="main-menu-two__main-menu-box">
                                        <a href="#" className="mobile-nav__toggler"><i className="fa fa-bars"><FaBars /></i></a>
                                        <ul className="main-menu__list">
                                            <li className="current">
                                                <Link to="/">Home </Link>
                                            </li>
                                            <li>
                                                <Link to="/about">About Icare</Link>
                                            </li>
                                            <li>
                                                <Link to="/collages">Colleges</Link>
                                            </li>
                                            <li>
                                                <Link to="courses">Courses</Link>
                                            </li>
                                            <li>
                                                <a href="academics.html">Academics</a>
                                            </li>
                                            <li>
                                                <a href="admission.html">Admission</a>
                                            </li>
                                            <li>
                                                <a href="contact-us.html">Contact us</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="main-menu-two__right">
                                    <div className="main-menu-two__search-box">
                                        <a href="#" className="main-menu-two__search search-toggler icon-magnifying-glass">
                                            <GoSearch />
                                        </a>
                                    </div>
                                    <div className="main-menu-two__btn-box">
                                        <a href="contact.html" className="thm-btn main-menu-two__btn"><i> <AiOutlineArrowRight /></i> Enquiry</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

            <div className="stricky-header stricked-menu main-menu main-menu-two">
                <div className="sticky-header__content"></div>
            </div>
        </div>
    );
};

export default Navbar;