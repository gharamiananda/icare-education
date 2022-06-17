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
            <InnerBanner title='Our Collages'></InnerBanner>

            <OurCollage></OurCollage>
            <Testimonial></Testimonial>
            <Certificate />

        </div>
    );
};

export default Collages;