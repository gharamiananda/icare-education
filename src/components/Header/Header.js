import React, { useEffect } from 'react';
import './Header.css'
const Header = () => {

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
        <>
            <header className="header-section d-none d-xl-block">
                ..add header code
            </header>
        </>
    );
}


export default Header;