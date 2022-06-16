import React from 'react';
import Certificate from '../HomePage/Certificate/Certificate';
import FeatureTop from '../HomePage/FeatureTop/FeatureTop';
import ProjectOne from '../HomePage/ProjectOne/ProjectOne';
import Testimonial from '../HomePage/Testimonial/Testimonial';
import main1 from '../../images/backgrounds/main1.jpg'
import aboutOneShape from '../../images/shapes/about-one-shape.png'
import sectionTitleShape1 from '../../images/shapes/section-title-shape-1.png'
import iabout1 from '../../images/resources/iabout1.jpg'
import aboutOneLine from '../../images/shapes/about-one-line.png'
import aboutOneSatisfiedShape1 from '../../images/shapes/about-one-satisfied-shape-1.png'


const AboutPage = () => {
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
                            <li>About</li>
                        </ul>
                        <h2>About us</h2>
                    </div>
                </div>
            </section>
            {/* <!--About One Start--> */}
            <section class="about-one inneraboutarea overflow-hidden">
                <div class="about-one__shape float-bob-x">
                    <img src={aboutOneShape} alt="" />
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-xl-6">
                            <div class="about-one__left">
                                <div class="about-one__img-box wow slideInLeft" data-wow-delay="100ms"
                                    data-wow-duration="2500ms">
                                    <div class="about-one__img">
                                        <img src={iabout1} alt="" />
                                    </div>
                                    <div class="about-one__line">
                                        <img src={aboutOneLine} alt="" />
                                    </div>
                                    <div class="about-one__satisfied">
                                        <div class="about-one__satisfied-inner">
                                            <div class="about-one__satisfied-shape">
                                                <img src={aboutOneSatisfiedShape1} alt=" " />
                                            </div>
                                            <div class="about-one__satisfied-content">
                                                <div class="about-one__satisfied-count-box">
                                                    <h3 class="odometer" data-count="98">00</h3>
                                                    <span class="about-one__satisfied-percent">%</span>
                                                </div>
                                                <p class="about-one__satisfied-text">Satisfied Students</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="about-one__big-text">icare</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6">
                            <div class="about-one__right">
                                <div class="section-title text-left">
                                    <div class="section-sub-title-box">
                                        <p class="section-sub-title">About US</p>
                                        <div class="section-title-shape-1">
                                            <img src={sectionTitleShape1} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <p class="icareinner_abouttext">
                                    <b>
                                        Indian Centre for Advancement of Research and Education, Haldia (ICARE)
                                    </b>
                                    et up in 1995, is a non-profit making voluntary organisation registered under Societies Registration Act 1961. ICARE is dedicated to promote, establish, run & maintain educational institutions of excellence to keep pace with the rapid industrial development in this region. This society is managed by a Board of Governors comprising of eminent personalities who are great visionaries.
                                </p>
                                <p class="icareinner_abouttext">
                                    Thesociety aims at creating a modern education centre of excellence in Haldia, provide value based education of international standards and with a motto to march ahead to build an ideally developed Haldia.
                                </p>
                                <p class="icareinner_abouttext">
                                    In view of the noble objectives of the society, it gets support from the local Municipal authorities, Haldia Development authority as well as from the industrial and business houses in and around Haldia. Donations to ICARE shall qualify for Tax deduction U/S 80 G of Income Tax, 1961.
                                </p>
                                <div class="yl-about-qoute">
                                    <span>"A University needs to be a centre of excellence
                                        for pursuit of knowledge."</span>
                                    <div class="yl-quote-author yl-headline">
                                        <h4><a href="#">Mr Lakshman Seth</a></h4>
                                        <span>Chairman</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--About One End--> */}
            {/* <!-- ===============mission & vision======================== --> */}
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 vismison_outsection">
                        <div class="section-title text-left">
                            <div class="section-sub-title-box">
                                <p class="section-sub-title">Mission</p>
                                <div class="section-title-shape-1">
                                    <img src={sectionTitleShape1} alt="" />
                                </div>
                            </div>
                        </div>
                        <p class="icareinner_abouttext">
                            To establish and run institutions of higher education in engineering, technology, management, paramedical, medical and other professional courses with the aim of making the Haldia a center for education and training to enable the students to pursue careers of their choice and to obviate the need to travel long distances for fulfilling their aspirations and to enable them to meet the challenge of globalization by fully utilizing the facilities created by ICARE as a gateway to a bright future.
                        </p>
                        <ul class="mvlstarea">
                            <li>
                                <span class="icon-confirmation"></span>
                                To develop world class infrastructural facilities in the education sector to supplement existing infrastructure for facilitating rapid industrial development of the region.
                            </li>
                            <li>
                                <span class="icon-confirmation"></span>
                                To develop world class infrastructural facilities in the education sector to supplement existing infrastructure for facilitating rapid industrial development of the region.
                            </li>
                            <li>
                                <span class="icon-confirmation"></span>
                                To develop world class infrastructural facilities in the education sector to supplement existing infrastructure for facilitating rapid industrial development of the region.
                            </li>
                            <li>
                                <span class="icon-confirmation"></span>
                                To develop world class infrastructural facilities in the education sector to supplement existing infrastructure for facilitating rapid industrial development of the region.
                            </li>
                            <li>
                                <span class="icon-confirmation"></span>
                                To develop world class infrastructural facilities in the education sector to supplement existing infrastructure for facilitating rapid industrial development of the region.
                            </li>
                            <li>
                                <span class="icon-confirmation"></span>
                                To develop world class infrastructural facilities in the education sector to supplement existing infrastructure for facilitating rapid industrial development of the region.
                            </li>
                        </ul>
                        <div class="section-title text-left">
                            <div class="section-sub-title-box">
                                <p class="section-sub-title">Vision</p>
                                <div class="section-title-shape-1">
                                    <img src={sectionTitleShape1} alt="" />
                                </div>
                            </div>
                        </div>
                        <p class="icareinner_abouttext">
                            To be a leading organization for providing education in the fields of technology, management, medical, paramedical science etc., for the socio-economic development of the region creating centers of excellence in education so as to provide value based education of international standards to all segments of society and to stand by the weaker segments of society.
                        </p>
                    </div>
                </div>
            </div>
            {/* <!-- ===============mission & vision======================== --> */}
            <Testimonial />
            <Certificate />
        </div>
    );
};

export default AboutPage;