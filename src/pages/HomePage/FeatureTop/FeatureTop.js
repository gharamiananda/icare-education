import React from 'react';
import { FaHandshake } from 'react-icons/fa';
import { FaBullseye } from 'react-icons/fa';
import { FaRupeeSign } from 'react-icons/fa';
import { AiOutlineArrowRight } from 'react-icons/ai';
import onedot from '../../../images/shapes/feature-one-dot.png'





const FeatureTop = () => {
    return (

        <section class="feature-one over-hidden ">
            <div class="container">
                <div class="feature-one__inner">
                    <div class="feature-one__dot">
                        <img src={onedot} alt="" />
                    </div>
                    <div class="row">
                        {/* <!--Feature One Single Start--> */}
                        <div class="col-xl-4 col-lg-4 wow fadeInUp animated" data-wow-delay="100ms" style={{ visibility: "visible", animationDelay: " 100ms", animationName: "fadeInUp" }}>
                            <div class="feature-one__single">
                                <div class="feature-one__top">
                                    <div class="feature-one__icon">
                                        <span class="icon-roof-5"><FaRupeeSign /></span>
                                    </div>
                                    <div class="feature-one__title-box">
                                        <h3 class="feature-one__title"><a href="about.html">Affordable <br /> Tuition</a></h3>
                                    </div>
                                </div>
                                <div class="feature-one__single-inner">
                                    <p class="feature-one__text">Highly competitive rates yet, located in heart of the Nation's Capital.</p>
                                    <div class="feature-one__read-more">
                                        <a href="about.html">Read More  <i> <AiOutlineArrowRight /></i>  </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!--Feature One Single End--> */}
                        {/* <!--Feature One Single Start--> */}
                        <div class="col-xl-4 col-lg-4 wow fadeInUp animated" data-wow-delay="100ms" style={{ visibility: "visible", animationDelay: " 100ms", animationName: "fadeInUp" }}>
                            <div class="feature-one__single">
                                <div class="feature-one__top">
                                    <div class="feature-one__icon">
                                        <span class="icon-roof-5"><FaBullseye /></span>
                                    </div>
                                    <div class="feature-one__title-box">
                                        <h3 class="feature-one__title"><a href="team.html">Success <br /> Driven</a></h3>
                                    </div>
                                </div>
                                <div class="feature-one__single-inner">
                                    <p class="feature-one__text">The experiential learning ensures professional student success.</p>
                                    <div class="feature-one__read-more">
                                        <a href="about.html">Read More  <i> <AiOutlineArrowRight /></i> </a>

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!--Feature One Single End--> */}
                        {/* <!--Feature One Single Start--> */}
                        <div class="col-xl-4 col-lg-4 wow fadeInUp animated" data-wow-delay="100ms" style={{ visibility: "visible", animationDelay: " 100ms", animationName: "fadeInUp" }}>
                            <div class="feature-one__single">
                                <div class="feature-one__top">
                                    <div class="feature-one__icon">
                                        <span class="icon-roof-5"><FaHandshake /></span>
                                    </div>
                                    <div class="feature-one__title-box">
                                        <h3 class="feature-one__title"><a href="contact.html">Business <br /> Partners</a></h3>
                                    </div>
                                </div>
                                <div class="feature-one__single-inner">
                                    <p class="feature-one__text">Align with internationally-recognized businesses every step.</p>
                                    <div class="feature-one__read-more">
                                        <a href="about.html">Read More  <i> <AiOutlineArrowRight /></i> </a>

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!--Feature One Single End--> */}
                    </div>
                </div>
            </div>
        </section >

    );
};

export default FeatureTop;