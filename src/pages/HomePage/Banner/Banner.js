import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import banner1 from '../../../images/backgrounds/main1.jpg'
import banner2 from '../../../images/backgrounds/main2.jpg'
import { BsFillArrowRightCircleFill } from 'react-icons/bs';




// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Banner.css'

const Banner = () => {
    return (
        <section className="main-slider clearfix">






            <Swiper

                // modules={[Navigation]}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation={{ clickable: true }}
                pagination={{ clickable: true }}
                loop={true}

            >

                <SwiperSlide>
                    <div className="image-layer"
                        style={{ background: " rgb(0, 0, 0)", background: `linear-gradient(90deg, rgb(0, 0, 0) 0%, rgba(13, 13, 13, 0.8) 78%, rgba(0, 0, 0, 0.25) 96%), url(${banner1})` }}>



                    </div>
                    {/* <!-- /.image-layer --> */}

                    <div className="container">
                        <div className="row">
                            <div className="col-xl-7 col-lg-8">
                                <div className="main-slider__content">
                                    <p className="main-slider__sub-title">Our Progression</p>
                                    <h2 className="main-slider__title">Prosper in this volatile market funding.</h2>
                                    <p className="main-slider__text">Collaborate Consulting exists to find the place where to being  <br /> seemingly disparate interests meet.</p>
                                    <div className="main-slider__btn-box">
                                        <a href="colleges.html" className="thm-btn main-slider__btn">  <BsFillArrowRightCircleFill /> Discover more</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div></SwiperSlide>
                <SwiperSlide>
                    <div className="image-layer"
                        style={{ background: " rgb(0, 0, 0)", background: `linear-gradient(90deg, rgb(0, 0, 0) 0%, rgba(13, 13, 13, 0.8) 78%, rgba(0, 0, 0, 0.25) 96%), url(${banner2})` }}></div>




                    {/* <!-- /.image-layer --> */}

                    <div className="container">
                        <div className="row">
                            <div className="col-xl-7 col-lg-8">
                                <div className="main-slider__content">
                                    <p className="main-slider__sub-title">Our Progression</p>
                                    <h2 className="main-slider__title">Prosper in this volatile market funding.</h2>
                                    <p className="main-slider__text">Collaborate Consulting exists to find the place where to being  <br /> seemingly disparate interests meet.</p>
                                    <div className="main-slider__btn-box">
                                        <a href="colleges.html" className="thm-btn main-slider__btn">  <BsFillArrowRightCircleFill /> Discover more</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </SwiperSlide>


            </Swiper>





        </section>
    );
};

export default Banner;