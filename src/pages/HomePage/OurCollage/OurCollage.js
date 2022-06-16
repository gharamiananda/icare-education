import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import clg1 from '../../../images/services/clg1.jpg'
import clg2 from '../../../images/services/clg2.jpg'
import clg3 from '../../../images/services/clg3.jpg'
import clg4 from '../../../images/services/clg4.jpg'
import sectionTitleShape1 from '../../../images/shapes/section-title-shape-1.png'
import './OurCollage.css';
import { FaUniversity } from 'react-icons/fa';
import { AiOutlineArrowRight } from 'react-icons/ai';





const OurCollage = () => {
    return (

        <div className="container overflow-hidden ">
            <section className="services-carousel-page">
                <div className="section-title text-center">
                    <div className="section-sub-title-box">
                        <p className="section-sub-title">Our Colleges</p>
                        <div className="section-title-shape-1">
                            <img src={sectionTitleShape1} alt="" />
                        </div>
                    </div>
                </div>




                <Swiper

                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={20}

                    pagination={{ clickable: true }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}






                    loop={true}

                >

                    <SwiperSlide>
                        <div className="item">
                            <div className="services-one__single">
                                <div className="services-one__img">
                                    <img src={clg1} alt="" />
                                </div>
                                <div className="services-one__content">
                                    <div className="services-one__icon">
                                        <span><FaUniversity /></span>
                                    </div>
                                    <h3 className="services-one__title"><a href="#">Haldia Institute of Technology</a></h3>
                                    <p className="services-one__text clgdescription">HIT, established in the year 1995-96 is the first privately initiated (with Govt. aid) degree Engineering.</p>
                                    <div className="services-one__read-more">
                                        <a href="college-details.html">Read More<i> <AiOutlineArrowRight /></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <div className="services-one__single">
                                <div className="services-one__img">
                                    <img src={clg2} alt="" />
                                </div>
                                <div className="services-one__content">
                                    <div className="services-one__icon">
                                        <span><FaUniversity /></span>
                                    </div>
                                    <h3 className="services-one__title"><a href="#">Haldia Institute of Technology</a></h3>
                                    <p className="services-one__text clgdescription">HIT, established in the year 1995-96 is the first privately initiated (with Govt. aid) degree Engineering.</p>
                                    <div className="services-one__read-more">
                                        <a href="college-details.html">Read More <i> <AiOutlineArrowRight /></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <div className="services-one__single">
                                <div className="services-one__img">
                                    <img src={clg3} alt="" />
                                </div>
                                <div className="services-one__content">
                                    <div className="services-one__icon">
                                        <span><FaUniversity /></span>
                                    </div>
                                    <h3 className="services-one__title"><a href="#">Haldia Institute of Technology</a></h3>
                                    <p className="services-one__text clgdescription">HIT, established in the year 1995-96 is the first privately initiated (with Govt. aid) degree Engineering.</p>
                                    <div className="services-one__read-more">
                                        <a href="college-details.html">Read More <i> <AiOutlineArrowRight /></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <div className="services-one__single">
                                <div className="services-one__img">
                                    <img src={clg4} alt="" />
                                </div>
                                <div className="services-one__content">
                                    <div className="services-one__icon">
                                        <span><FaUniversity /></span>
                                    </div>
                                    <h3 className="services-one__title"><a href="#">Haldia Institute of Technology</a></h3>
                                    <p className="services-one__text clgdescription">HIT, established in the year 1995-96 is the first privately initiated (with Govt. aid) degree Engineering.</p>
                                    <div className="services-one__read-more">
                                        <a href="college-details.html">Read More <i> <AiOutlineArrowRight /></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <div className="services-one__single">
                                <div className="services-one__img">
                                    <img src={clg1} alt="" />
                                </div>
                                <div className="services-one__content">
                                    <div className="services-one__icon">
                                        <span><FaUniversity /></span>
                                    </div>
                                    <h3 className="services-one__title"><a href="#">Haldia Institute of Technology</a></h3>
                                    <p className="services-one__text clgdescription">HIT, established in the year 1995-96 is the first privately initiated (with Govt. aid) degree Engineering.</p>
                                    <div className="services-one__read-more">
                                        <a href="college-details.html">Read More <i> <AiOutlineArrowRight /></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>




                </Swiper>



            </section>
        </div>
    );
};

export default OurCollage;
