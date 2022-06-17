import React, { useEffect, useState } from 'react';
import { FaHandshake } from 'react-icons/fa';
import { FaBullseye } from 'react-icons/fa';
import { FaRupeeSign } from 'react-icons/fa';
import { AiOutlineArrowRight } from 'react-icons/ai';
import onedot from '../../../images/shapes/feature-one-dot.png'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'





const FeatureTop = () => {


    const [features, setFeatures] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/feature_home')
            .then(res => res.json())
            .then(data => setFeatures(data));
    }, [])
    // console.log(features[0]);
    return (

        <section className="feature-one over-hidden ">
            <div className="container">
                <div className="feature-one__inner">
                    <div className="feature-one__dot">
                        <img src={onedot} alt="" />
                    </div>
                    <div className="row">
                        {
                            features.map(feature =>

                                < div key={feature._id} className="col-xl-4 col-lg-4 wow fadeInUp animated" data-wow-delay="100ms" style={{ visibility: "visible", animationDelay: " 100ms", animationName: "fadeInUp" }}>
                                    <div className="feature-one__single">
                                        <div className="feature-one__top">
                                            <div className="feature-one__icon">
                                                <span className="icon-roof-5">
                                                    <i className={feature.fontlink}></i></span>
                                            </div>
                                            <div className="feature-one__title-box">
                                                <h3 className="feature-one__title"><a href="about.html">  {feature?.title?.split(" ")[0]} <br />  {feature.title.split(" ")[1]}</a></h3>
                                            </div>
                                        </div>
                                        <div className="feature-one__single-inner">
                                            <p className="feature-one__text">{feature.desc}</p>
                                            <div className="feature-one__read-more">
                                                <Link to={feature.link}>Read More  <i> <AiOutlineArrowRight /></i>  </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                            )}

                    </div>
                </div>
            </div>
        </section >

    );
};

export default FeatureTop;