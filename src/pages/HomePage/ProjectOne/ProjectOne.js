import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import icareCourses1 from '../../../images/project/icare-courses1.jpg'
import icareCourses2 from '../../../images/project/icare-courses2.jpg'
import icareCourses3 from '../../../images/project/icare-courses3.jpg'
import icareCourses4 from '../../../images/project/icare-courses.jpg'
import './ProjectOne.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const ProjectOne = () => {
    return (
        <section class="project-one">
            <div class="project-one__top">
                <div class="container">
                    <div class="section-title text-center">
                        <div class="section-sub-title-box">
                            <p class="section-sub-title">Courses Offered</p>
                            <div class="section-title-shape-1">
                                <img src="assets/images/shapes/section-title-shape-1.png" alt="" />
                            </div>
                        </div>
                        <h2 class="section-title__title">There are the following ten <br /> departments under faculties.</h2>
                    </div>
                </div>
            </div>
            <div class="project-one__bottom">
                <div class="project-one__bottom-wrapper">


                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        slidesPerView={4}

                        pagination={{ clickable: true }}
                        loop={true}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >

                        <SwiperSlide> <div class="item">
                            <div class="project-one__single">
                                <div class="project-one__img-box">
                                    <div class="project-one__img">
                                        <img src={icareCourses1} alt="" />
                                    </div>
                                    <div class="project-one__content">
                                        <h4 class="project-one__title"><a href="work-details.html">BCA</a>
                                        </h4>
                                    </div>
                                    <div class="project-one__link">
                                        <a class="img-popup" href="assets/images/project/icare-courses1.jpg"><i class="fa fa-link"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div></SwiperSlide>
                        <SwiperSlide> <div class="item">
                            <div class="project-one__single">
                                <div class="project-one__img-box">
                                    <div class="project-one__img">
                                        <img src={icareCourses2} alt="" />
                                    </div>
                                    <div class="project-one__content">
                                        <h4 class="project-one__title"><a href="work-details.html">BCA</a>
                                        </h4>
                                    </div>
                                    <div class="project-one__link">
                                        <a class="img-popup" href="assets/images/project/icare-courses1.jpg"><i class="fa fa-link"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div></SwiperSlide>
                        <SwiperSlide> <div class="item">
                            <div class="project-one__single">
                                <div class="project-one__img-box">
                                    <div class="project-one__img">
                                        <img src={icareCourses3} alt="" />
                                    </div>
                                    <div class="project-one__content">
                                        <h4 class="project-one__title"><a href="work-details.html">BCA</a>
                                        </h4>
                                    </div>
                                    <div class="project-one__link">
                                        <a class="img-popup" href="assets/images/project/icare-courses1.jpg"><i class="fa fa-link"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div></SwiperSlide>
                        <SwiperSlide> <div class="item">
                            <div class="project-one__single">
                                <div class="project-one__img-box">
                                    <div class="project-one__img">
                                        <img src={icareCourses4} alt="" />
                                    </div>
                                    <div class="project-one__content">
                                        <h4 class="project-one__title"><a href="work-details.html">BCA</a>
                                        </h4>
                                    </div>
                                    <div class="project-one__link">
                                        <a class="img-popup" href="assets/images/project/icare-courses1.jpg"><i class="fa fa-link"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div></SwiperSlide>



                    </Swiper>
                </div>
            </div >
        </section >
    );
};

export default ProjectOne;