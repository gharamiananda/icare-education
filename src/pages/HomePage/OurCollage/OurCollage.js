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
import './OurCollage.css';
import { FaUniversity } from 'react-icons/fa';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';





const OurCollage = () => {
    return (
        <section class="services-carousel-page">
            <div class="container">
                <div class="section-title text-center">
                    <div class="section-sub-title-box">
                        <p class="section-sub-title">Our Colleges</p>
                        <div class="section-title-shape-1">
                            <img src="assets/images/shapes/section-title-shape-1.png" alt="" />
                        </div>
                    </div>
                </div>




                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={3}

                    pagination={{ clickable: true }}
                    loop={true}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >

                    <SwiperSlide>
                        <div class="item">
                            <div class="services-one__single">
                                <div class="services-one__img">
                                    <img src={clg1} alt="" />
                                </div>
                                <div class="services-one__content">
                                    <div class="services-one__icon">
                                        <span><FaUniversity /></span>
                                    </div>
                                    <h3 class="services-one__title"><a href="#">Haldia Institute of Technology</a></h3>
                                    <p class="services-one__text clgdescription">HIT, established in the year 1995-96 is the first privately initiated (with Govt. aid) degree Engineering.</p>
                                    <div class="services-one__read-more">
                                        <a href="college-details.html">Read More<BsFillArrowRightCircleFill /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="item">
                            <div class="services-one__single">
                                <div class="services-one__img">
                                    <img src={clg2} alt="" />
                                </div>
                                <div class="services-one__content">
                                    <div class="services-one__icon">
                                        <span><FaUniversity /></span>
                                    </div>
                                    <h3 class="services-one__title"><a href="#">Haldia Institute of Technology</a></h3>
                                    <p class="services-one__text clgdescription">HIT, established in the year 1995-96 is the first privately initiated (with Govt. aid) degree Engineering.</p>
                                    <div class="services-one__read-more">
                                        <a href="college-details.html">Read More <BsFillArrowRightCircleFill /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="item">
                            <div class="services-one__single">
                                <div class="services-one__img">
                                    <img src={clg3} alt="" />
                                </div>
                                <div class="services-one__content">
                                    <div class="services-one__icon">
                                        <span><FaUniversity /></span>
                                    </div>
                                    <h3 class="services-one__title"><a href="#">Haldia Institute of Technology</a></h3>
                                    <p class="services-one__text clgdescription">HIT, established in the year 1995-96 is the first privately initiated (with Govt. aid) degree Engineering.</p>
                                    <div class="services-one__read-more">
                                        <a href="college-details.html">Read More <BsFillArrowRightCircleFill /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="item">
                            <div class="services-one__single">
                                <div class="services-one__img">
                                    <img src={clg4} alt="" />
                                </div>
                                <div class="services-one__content">
                                    <div class="services-one__icon">
                                        <span><FaUniversity /></span>
                                    </div>
                                    <h3 class="services-one__title"><a href="#">Haldia Institute of Technology</a></h3>
                                    <p class="services-one__text clgdescription">HIT, established in the year 1995-96 is the first privately initiated (with Govt. aid) degree Engineering.</p>
                                    <div class="services-one__read-more">
                                        <a href="college-details.html">Read More <BsFillArrowRightCircleFill /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="item">
                            <div class="services-one__single">
                                <div class="services-one__img">
                                    <img src={clg1} alt="" />
                                </div>
                                <div class="services-one__content">
                                    <div class="services-one__icon">
                                        <span><FaUniversity /></span>
                                    </div>
                                    <h3 class="services-one__title"><a href="#">Haldia Institute of Technology</a></h3>
                                    <p class="services-one__text clgdescription">HIT, established in the year 1995-96 is the first privately initiated (with Govt. aid) degree Engineering.</p>
                                    <div class="services-one__read-more">
                                        <a href="college-details.html">Read More <BsFillArrowRightCircleFill /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>




                </Swiper>



            </div>
        </section>
    );
};

export default OurCollage;
