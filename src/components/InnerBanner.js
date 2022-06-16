import React from 'react';
import main1 from '../images/backgrounds/main1.jpg'
import { useLocation } from 'react-router-dom';



const InnerBanner = () => {
    const location = useLocation();

    console.log(location, typeof location?.pathname)


    const breadcum = location?.pathname.split('/')[1]

    return (
        <div>
            <section class="page-header">
                <div class="page-header-bg" style={{ backgroundImage: ` url(${main1})` }}>
                </div>
                <div class="container">
                    <div class="page-header__inner">
                        <ul class="thm-breadcrumb list-unstyled">
                            <li><a href="index.html">Home</a></li>
                            <li><span>/</span></li>
                            <li>{breadcum}</li>
                        </ul>
                        <h2> Our {breadcum}</h2>


                    </div>
                </div>
            </section>
        </div>
    );
};

export default InnerBanner;