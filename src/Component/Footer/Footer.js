import React from 'react';
import './Footer.css';
import weetechLogo from '../../Assets/img/weetech-logo.png';
import business1 from '../../Assets/img/business_1.png';
import business2 from '../../Assets/img/business_2.png';
import business3 from '../../Assets/img/business_3.png';
import business4 from '../../Assets/img/business_4.png';

function Footer() {
    return (
        <>
            <footer>
                <div class="footer">
                    <div class="Grid">
                        <div class="Grid__cell">
                            <ul class="Footer__link-list">
                                <img className='weetechlogo' src={weetechLogo} alt="Weetech Logo" />
                                <p style={{paddingTop: '20px'}}>401, APMC, Sahara Darwaja Ring Rd, beside North Extension, Surat, Gujarat 395003</p>
                                <li className='Footer_link'>info@weetechsolution.com</li>
                                <li className='Footer_link'>(+91) 927 688 8885</li>
                                <li className='Footer__link-list-item'>www.weetechsolution.com</li>
                            </ul>
                        </div>

                        <div class="Grid__cell1">
                            <ul class="Footer__link-list">
                                <h5 style={{ paddingLeft: '33px;', color: 'black' }}>IT Services</h5>
                                <li class="Footer_link">Mobile App Development</li>
                                <li class="Footer_link">Web Development</li>
                                <li class="Footer_link">SEO</li>
                                <li class="Footer_link">Quality Assurance</li>
                                <li class="Footer_link">Digital Marketing</li>
                            </ul>
                        </div>

                        <div class="Grid__cell2">
                            <ul class="Footer__link-list">
                                <h5 style={{ paddingLeft: '33px;', color: 'black' }}>Quick links</h5>
                                <li class="Footer_link">Home</li>
                                <li class="Footer_link">About</li>
                                <li class="Footer_link">Blog</li>
                                <li class="Footer_link">Gallery</li>
                                <li class="Footer_link">Portfolio</li>
                                <li class="Footer_link">Contact</li>
                            </ul>
                        </div>

                        <div class="Grid__cell3">
                            <ul class="Footer__link-list">
                                <img className='img' src={business1} alt="businessimg" height={'130px'} />
                                <img className='img'src={business2} alt="businessimg" height={'90px'}/>
                                <img className='img'src={business3} alt="businessimg" height={'100px'}/>
                                <img className='img'src={business4} alt="businessimg" height={'100px'}/>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* <div className="footer">
             <div className="footer-content">
                 <p>&copy; 2024 Your Company. All Rights Reserved.</p>
                    <ul>
                         <li> Twitter</li>
                         <li>Facebook</li>
                         <li>Instagram</li>
                     </ul>
                </div>
         </div> */}
            </footer>
        </>

    );
}

export default Footer;