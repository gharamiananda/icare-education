import React from 'react';
import Certificate from '../HomePage/Certificate/Certificate';
import FeatureTop from '../HomePage/FeatureTop/FeatureTop';
import ProjectOne from '../HomePage/ProjectOne/ProjectOne';
import Testimonial from '../HomePage/Testimonial/Testimonial';
import main1 from '../../images/backgrounds/main1.jpg'


const Courses = () => {
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
                            <li> Courses</li>
                        </ul>
                        <h2> Our Courses</h2>


                    </div>
                </div>
            </section>
            <ProjectOne></ProjectOne>
            <Testimonial></Testimonial>
            <Certificate />
        </div>
    );
};

export default Courses;