import React from 'react';
import { useLocation } from 'react-router-dom';
import InnerBanner from '../../components/InnerBanner';
import main1 from '../../images/backgrounds/main1.jpg'
import Certificate from '../HomePage/Certificate/Certificate';
import OurCollage from '../HomePage/OurCollage/OurCollage';
import Testimonial from '../HomePage/Testimonial/Testimonial';


const Collages = () => {

    const location = useLocation();

    console.log(location, typeof location?.pathname)

    return (
        <div>
            <InnerBanner></InnerBanner>
            <section class="page-header">
                <div class="page-header-bg" style={{ backgroundImage: ` url(${main1})` }}>
                </div>
                <div class="container">
                    <div class="page-header__inner">
                        <ul class="thm-breadcrumb list-unstyled">
                            <li><a href="index.html">Home</a></li>
                            <li><span>/</span></li>
                            <li>Colleges</li>
                        </ul>
                        <h2> Our Colleges</h2>


                    </div>
                </div>
            </section>
            <OurCollage></OurCollage>
            <Testimonial></Testimonial>
            <Certificate />

        </div>
    );
};

export default Collages;