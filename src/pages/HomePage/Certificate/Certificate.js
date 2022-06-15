import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import awards14 from '../../../images/resources/awards-1-4.jpg'
import awards13 from '../../../images/resources/awards-1-3.jpg'
import awards12 from '../../../images/resources/awards-1-2.jpg'
import awards11 from '../../../images/resources/awards-1-1.jpg'


const Certificate = () => {
    return (
        <section class="awards hiawardarea">
            <div class="container">
                <h4 class="awards__title">We’re certified and award winning college</h4>




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

                    <SwiperSlide>
                        <div class="item">
                            <div class="awards__single">
                                <div class="awards__img">
                                    <img src={awards14} alt="" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="item">
                            <div class="awards__single">
                                <div class="awards__img">
                                    <img src={awards13} alt="" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="item">
                            <div class="awards__single">
                                <div class="awards__img">
                                    <img src={awards12} alt="" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="item">
                            <div class="awards__single">
                                <div class="awards__img">
                                    <img src={awards11} alt="" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="item">
                            <div class="awards__single">
                                <div class="awards__img">
                                    <img src="assets/images/resources/awards-1-4.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>





                </Swiper>



            </div>
        </section>
    );
};

export default Certificate;