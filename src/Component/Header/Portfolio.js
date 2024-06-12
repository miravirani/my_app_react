import React from "react";
import './Portfolio.css';
import EventFlow from '../../Assets/img/Event_Flow_Calendar.png';
import fitnessBlender from '../../Assets/img/Fitness_Blender.png';
import MicoMeet from '../../Assets/img/Mico_Meet_People.png';
import MyTokri from '../../Assets/img/My_Tokri.png';
import PhoneCheck from '../../Assets/img/Phonecheck.png';
import SnapDish from '../../Assets/img/SnapDish_Food_Cam.png';
import wannaMeet from '../../Assets/img/WannaMeet.png';
import whereMyFriend from '../../Assets/img/Where_My_Friend.png';
import wonobo from '../../Assets/img/WoNoBo.png';
import Yoorshop from '../../Assets/img/Yoorshop.png';

function Portfolio() {
    return (
        <>
            <div className="container-fluid">
                <div className="row align-items-center protfolio">
                    <div className="col-lg-12">
                        <h1>Portfolio</h1>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row background">
                    <div className="col-lg-12">
                        <div className="section-title-wrap text-center">
                            <h1>Proud projects that <span style={{ color: '#00a3a5' }}>make us stand out</span></h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div class="projects-case-wrap">
                    
                    <div class="row mesonry-list">
                        <div class="col-12 col-sm-6 col-md-4 col-lg-3 photo">
                            <img src={SnapDish} alt="snapDish" style={{width: '100%'}} />
                        </div>

                        <div class="col-12 col-sm-6 col-md-4 col-lg-3 photo">
                            <img src={MyTokri} alt="snapDish"style={{width: '100%'}} />
                        </div>

                        <div class="col-12 col-sm-6 col-md-4 col-lg-3 photo">
                            <img src={wannaMeet} alt="snapDish"style={{width: '100%'}} />
                        </div>

                        <div class="col-12 col-sm-6 col-md-4 col-lg-3 photo">
                            <img src={Yoorshop} alt="snapDish" style={{width: '100%'}}/>
                        </div>
                    </div>

                    <div class="row mesonry-list">
                        <div class="col-12 col-sm-6 col-md-4 col-lg-3 photo">
                            <img src={wonobo} alt="snapDish" style={{width: '100%'}} />
                        </div>

                        <div class="col-12 col-sm-6 col-md-4 col-lg-3 photo">
                            <img src={MicoMeet} alt="snapDish"style={{width: '100%'}} />
                        </div>

                        <div class="col-12 col-sm-6 col-md-4 col-lg-3 photo">
                            <img src={fitnessBlender} alt="snapDish"style={{width: '100%'}} />
                        </div>

                        <div class="col-12 col-sm-6 col-md-4 col-lg-3 photo">
                            <img src={whereMyFriend} alt="snapDish" style={{width: '100%'}}/>
                        </div>
                    </div>

                    <div class="row mesonry-list">
                        <div class="col-12 col-sm-6 col-md-4 col-lg-3 photo">
                            <img src={EventFlow} alt="snapDish" style={{width: '100%'}} />
                        </div>

                        <div class="col-12 col-sm-6 col-md-4 col-lg-3 photo">
                            <img src={PhoneCheck} alt="snapDish"style={{width: '100%'}} />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Portfolio;