import React from 'react';
import Certificate from '../HomePage/Certificate/Certificate';
import FeatureTop from '../HomePage/FeatureTop/FeatureTop';
import ProjectOne from '../HomePage/ProjectOne/ProjectOne';
import Testimonial from '../HomePage/Testimonial/Testimonial';
import main1 from '../../images/backgrounds/main1.jpg'
import InnerBanner from '../../components/InnerBanner';


const Courses = () => {
    return (
        <div>
            <InnerBanner title='Our Courses'></InnerBanner>

            <ProjectOne></ProjectOne>
            <Testimonial></Testimonial>
            <Certificate />
        </div>
    );
};

export default Courses;