import React from 'react';
import Header from '../../components/Header/Header';
import About from './About/About';
import Banner from './Banner/Banner';
import Certificate from './Certificate/Certificate';
import FeatureTop from './FeatureTop/FeatureTop';
import OurCollage from './OurCollage/OurCollage';
import OverView from './OverView/OverView';
import ProjectOne from './ProjectOne/ProjectOne';
import Testimonial from './Testimonial/Testimonial';
import WhyChooseOne from './WhyChooseOne/WhyChooseOne';

const Home = () => {
    return (
        <div className='page-wrapper'>

            <Banner></Banner>
            <FeatureTop></FeatureTop>
            <About></About>
            <WhyChooseOne />
            <ProjectOne />
            <OverView />
            <OurCollage></OurCollage>
            <Testimonial />
            <Certificate />
        </div>
    );
};

export default Home;
