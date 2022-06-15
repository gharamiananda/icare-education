import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import { AiFillStar } from 'react-icons/ai';
import student from '../../../images/testimonial/student.png'



const Testimonial = () => {
    return (
        <section class="testimonial-one">
            <div class="testimonial-one-shape" style={{ backgroundimage: 'url(assets/images/shapes/testimonial-one-shape-dark.png)' }}></div>
            <div class="container">
                <div class="section-title text-center">
                    <div class="section-sub-title-box">
                        <p class="section-sub-title">testimonials</p>
                        <div class="section-title-shape-1">
                            <img src="assets/images/shapes/section-title-shape-1.png" alt="" />
                        </div>
                    </div>
                    <h2 class="section-title__title">What they’re talking <br /> about us</h2>
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
                            <div class="testimonial-one__single">
                                <div class="testimonial-one__client-info">
                                    <div class="testimonial-one__client-img-box">
                                        <div class="testimonial-one__client-img">
                                            <img src={student} alt="" />
                                        </div>
                                    </div>
                                    <div class="testimonial-one__client-details">
                                        <h4 class="testimonial-one__client-name fedbacknamedesign">Priti Das</h4>
                                        <p class="testimonial-one__client-sub-title">Student</p>
                                    </div>
                                </div>
                                <p class="testimonial-one__text fedbackdescritiontext">5 stars for design quality, but also for prompt new customer service and great attention to details work.</p>
                                <div class="testimonial-one__rating">
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="item">
                            <div class="testimonial-one__single">
                                <div class="testimonial-one__client-info">
                                    <div class="testimonial-one__client-img-box">
                                        <div class="testimonial-one__client-img">
                                            <img src={student} alt="" />

                                        </div>
                                    </div>
                                    <div class="testimonial-one__client-details">
                                        <h4 class="testimonial-one__client-name fedbacknamedesign">Priti Das</h4>
                                        <p class="testimonial-one__client-sub-title">Student</p>
                                    </div>
                                </div>
                                <p class="testimonial-one__text fedbackdescritiontext">5 stars for design quality, but also for prompt new customer service and great attention to details work.</p>
                                <div class="testimonial-one__rating">
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="item">
                            <div class="testimonial-one__single">
                                <div class="testimonial-one__client-info">
                                    <div class="testimonial-one__client-img-box">
                                        <div class="testimonial-one__client-img">
                                            <img src={student} alt="" />

                                        </div>
                                    </div>
                                    <div class="testimonial-one__client-details">
                                        <h4 class="testimonial-one__client-name fedbacknamedesign">Priti Das</h4>
                                        <p class="testimonial-one__client-sub-title">Student</p>
                                    </div>
                                </div>
                                <p class="testimonial-one__text fedbackdescritiontext">5 stars for design quality, but also for prompt new customer service and great attention to details work.</p>
                                <div class="testimonial-one__rating">
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="item">
                            <div class="testimonial-one__single">
                                <div class="testimonial-one__client-info">
                                    <div class="testimonial-one__client-img-box">
                                        <div class="testimonial-one__client-img">
                                            <img src={student} alt="" />

                                        </div>
                                    </div>
                                    <div class="testimonial-one__client-details">
                                        <h4 class="testimonial-one__client-name fedbacknamedesign">Priti Das</h4>
                                        <p class="testimonial-one__client-sub-title">Student</p>
                                    </div>
                                </div>
                                <p class="testimonial-one__text fedbackdescritiontext">5 stars for design quality, but also for prompt new customer service and great attention to details work.</p>
                                <div class="testimonial-one__rating">
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>




                </Swiper>



            </div>
        </section>
    );
};

export default Testimonial;