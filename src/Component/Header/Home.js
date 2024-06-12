import React from "react";
import './Home.css';
import homeimg from '../../Assets/img/homeimg1.png';
import serviceOne from '../../Assets/img/service-one.png';
import serviceTwo from '../../Assets/img/service-two.png';
import serviceThree from '../../Assets/img/service-three.png';
import AgileMana from '../../Assets/img/Agile-Management-System.png';
import Dedicated from '../../Assets/img/Dedicated-Resource.png';
import LatestTech from '../../Assets/img/Latest-Tech-Stack.png';


function Home() {
    return (
        <>
            <div className="container-fluid">
                <div className="row align-items-center website-development">
                    <div className="col-lg-6 col-md-6 text">
                        <p>Spread your idea around the world</p>
                        <h1 style={{ fontWeight: 600, fontSize: '40px' }}>Website Development</h1>
                        <p style={{ paddingTop: '10px' }}>Quick, reliable, secure, quality and mobile friendly web development center for
                            any kind of responsive website and web design requirements</p>
                    </div>
                    <div className="col-lg-6 col-md-6 position-relative">
                        <img className="img" src={homeimg} alt="Weetech Logo" />
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row background">
                    <div className="col-lg-12">
                        <div className="section-title-wrap text-center">
                            <h6 className="section-sub-title mb-20">Our services</h6>
                            <h3 className="heading">We are committed to serve you the</h3>
                            <h3 className="heading" style={{ color: '#00a3a5' }}>best quality within time.</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row background">
                    <div className="col-12">
                        <div className="feature-images__one">
                            <div className="row">
                                <div className="col-xl-4 col-md-6 wow move-up animated" style={{ visibility: 'visible' }}>
                                    <div className="ht-box-images style-01">
                                        <div className="image-box-wrap">
                                            <div className="box-image">
                                                <img src={serviceOne} alt="service-one" />
                                            </div>
                                            <div className="content">
                                                <h5 className="heading mb-5">Mobile App Development</h5>
                                                <blockquote className="mx-0 mt-0 mb-2 text-left">
                                                    <h6>Native App Development</h6>
                                                </blockquote>
                                                <ul className="check-list text-left">
                                                    <li className="list-item">iOS Application Development</li>
                                                    <li className="list-item">Android Application Development</li>
                                                    <li className="list-item">Tizen Application Development</li>
                                                </ul>
                                                <blockquote className="mx-0 mt-4 mb-3 text-left">
                                                    <h6>Hybrid App Development</h6>
                                                </blockquote>
                                                <ul className="check-list text-left">
                                                    <li className="list-item">Flutter Application Development</li>
                                                    <li className="list-item">React Native Application Development</li>
                                                </ul>
                                                <div className="circle-arrow">
                                                    <div className="middle-dot"></div>
                                                    <div className="middle-dot dot-2"></div>
                                                    <p>
                                                    <i class="fa fa-arrow-right" aria-hidden="true"></i>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-4 col-md-6 wow move-up animated" style={{ visibility: 'visible' }}>
                                    <div className="ht-box-images style-01">
                                        <div className="image-box-wrap">
                                            <div className="box-image">
                                                <img src={serviceTwo} alt="service-one" />
                                            </div>
                                            <div className="content">
                                                <h5 className="heading mb-5">Web Development</h5>
                                                <blockquote className="mx-0 mt-0 mb-2 text-left">
                                                    <h6>Backend Development</h6>
                                                </blockquote>
                                                <ul className="check-list text-left">
                                                    <li className="list-item">Node Js, Mongo DB</li>
                                                    <li className="list-item">Java Web Development</li>
                                                    <li className="list-item">PHP/Laravel, My SQL</li>
                                                </ul>
                                                <blockquote className="mx-0 mt-4 mb-3 text-left">
                                                    <h6>Front End Development</h6>
                                                </blockquote>
                                                <ul className="check-list text-left">
                                                    <li className="list-item">HTML/CSS/JAVASCRIPT</li>
                                                    <li className="list-item">Angular JS, React JS, Vue Js</li>
                                                </ul>
                                                <div className="circle-arrow">
                                                    <div className="middle-dot"></div>
                                                    <div className="middle-dot dot-2"></div>
                                                    <p>
                                                    <i class="fa fa-arrow-right" aria-hidden="true"></i>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-4 col-md-6 wow move-up animated" style={{ visibility: 'visible' }}>
                                    <div className="ht-box-images style-01">
                                        <div className="image-box-wrap">
                                            <div className="box-image">
                                                <img src={serviceThree} alt="service-one" />
                                            </div>
                                            <div className="content">
                                                <h5 className="heading mb-5">SEO & Digital Marketing</h5>
                                                <blockquote className="mx-0 mt-0 mb-2 text-left">
                                                    <h6>SEO</h6>
                                                </blockquote>
                                                <ul className="check-list text-left">
                                                    <li className="list-item">On Page SEO</li>
                                                    <li className="list-item">Off Page SEO</li>
                                                    <li className="list-item">Website Optimization</li>
                                                </ul>
                                                <blockquote className="mx-0 mt-4 mb-3 text-left">
                                                    <h6>Digital Marketing</h6>
                                                </blockquote>
                                                <ul className="check-list text-left">
                                                    <li className="list-item">Social Media Marketing</li>
                                                    <li className="list-item">Blog Submission</li>
                                                </ul>
                                                <div className="circle-arrow">
                                                    <div className="middle-dot"></div>
                                                    <div className="middle-dot dot-2"></div>
                                                    <p>
                                                    <i class="fa fa-arrow-right" aria-hidden="true"></i>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row back">
                    <div className="col-lg-12">
                        <div className="section-title-wrap text-center">
                            <h6 className="section-sub-title mb-20">HIRE US, WHY NOT?</h6>
                            <h2 className="heading">How we <span style={{ color: '#00a3a5' }}>work?</span></h2>
                        </div>
                    </div>
                    <div className="threeimg">
                        <div>
                            <img src={AgileMana}/>
                        </div>
                        <div>
                            <img src={LatestTech}/>
                        </div>
                        <div>
                            <img src={Dedicated}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
