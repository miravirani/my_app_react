import React from "react";
import './Contact.css';
import contact from '../../Assets/img/contact.png'
import { useParams } from "react-router-dom";

function Contact() {

    let pathperam = useParams()
    console.log("path peram ==", pathperam);
    return (
        <>
            <div className="container-fluid">
                <div className="row align-items-center protfolio">
                    <div className="col-lg-12">
                        <h1>Contact</h1>
                        <p>We’d Love To Hear From You!</p>
                    </div>
                </div>
            </div>

            <div className="wp-container-6 wp-block-column p-3 pt-4">
                <p>
                    Contact Us for all your Mobile App Development, Web Development, Custom ERP requirements, Open Source Development, Digital Marketing, SEO Services, Online projects, and E-commerce Site Development Requirements Today!
                </p>
                <p>Simply fill-up the form and someone from our team would get in touch with you.</p>
            </div>

            <div style={{ height: '32px' }} aria-hidden="true" className="wp-block-spacer"></div>

            <div className="wp-container-5 wp-block-columns">
                <div className="wp-container-3 wp-block-column from">
                    <div className="forminator-response-message forminator-error" aria-hidden="true"></div>
                    <div className="forminator-row">
                        <div id="name-1" className="forminator-col forminator-col-12">
                            <div className="forminator-field">
                                <label className="forminator-label">
                                    Full Name <span className="forminator-required" style={{ color: '#e04562' }}>*</span>
                                </label>
                                <input type="text"
                                    placeholder="E.g. John doe"
                                    className="forminator-input forminator-name--field"
                                //   onChange={(e) => {
                                //     e.preventDefault();

                                //   }}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="forminator-row">
                        <div id="name-1" className="forminator-col forminator-col-12">
                            <div className="forminator-field">
                                <label className="forminator-label">
                                    Email Address <span className="forminator-required" style={{ color: '#e04562' }}>*</span>
                                </label>
                                <input type="text"
                                    placeholder="E.g. john@doe.com"
                                    className="forminator-input forminator-name--field"
                                //   onChange={(e) => {
                                //     e.preventDefault();

                                //   }}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="forminator-row">
                        <div id="name-1" className="forminator-col forminator-col-12">
                            <div className="forminator-field">
                                <label className="forminator-label">Phone Number </label>
                                <input type="text"
                                    placeholder="E.g. +1 3004005000"
                                    className="forminator-input forminator-name--field"
                                //   onChange={(e) => {
                                //     e.preventDefault();

                                //   }}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="forminator-row">
                        <div id="name-1" className="forminator-col forminator-col-12">
                            <div className="forminator-field">
                                <label className="forminator-label">
                                    Subject <span className="forminator-required" style={{ color: '#e04562' }}>*</span>
                                </label>
                                <input type="text"
                                    placeholder="Enter subject"
                                    className="forminator-input forminator-name--field"
                                //   onChange={(e) => {
                                //     e.preventDefault();

                                //   }}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="forminator-row">
                        <div id="textarea-1" className="forminator-col forminator-col-12">
                            <div className="forminator-field">
                                <label className="forminator-label">Message</label>
                                <textarea  placeholder="Enter your message..."  className="forminator-textarea" style={{ minHeight: '140px' }} maxLength="2000"></textarea>
                                {/* <span className="forminator-description"><span data-limit="2000" data-type="characters">0 / 2000</span></span> */}
                            </div>
                        </div>
                    </div>

                    <div className="forminator-row">
                        <div id="captcha-1" className="forminator-col forminator-col-12">
                            <div className="forminator-g-recaptcha recaptcha-invisible" data-theme="light" data-badge="inline" data-sitekey="6LeEP40fAAAAABu-6Nxd1udBYnC4RvRJ9lP8IAnr" data-size="invisible">
                                <div className="grecaptcha-badge" data-style="inline" style={{ width: '256px', height: '60px', boxShadow: 'gray 0px 0px 5px', zIndex: 99 }}>
                                    <div className="grecaptcha-logo">
                                        <iframe title="reCAPTCHA" width="256" height="60" role="presentation" name="a-i4sv5muuquit" frameBorder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation" src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LeEP40fAAAAABu-6Nxd1udBYnC4RvRJ9lP8IAnr&amp;co=aHR0cHM6Ly93d3cud2VldGVjaHNvbHV0aW9uLmNvbTo0NDM.&amp;hl=en&amp;v=joHA60MeME-PNviL59xVH9zs&amp;theme=light&amp;size=invisible&amp;badge=inline&amp;cb=yigenlnnncxr"></iframe>
                                    </div>
                                    <div className="grecaptcha-error"></div>
                                    <textarea id="g-recaptcha-response" name="g-recaptcha-response" className="g-recaptcha-response" style={{ width: '250px', height: '40px', border: '1px solid rgb(193, 193, 193)', margin: '10px 25px', padding: '0px', resize: 'none', display: 'none' }} aria-hidden="true" aria-label="do not use" aria-readonly="true"></textarea>
                                </div>
                                <iframe style={{ display: 'none' }}></iframe>
                            </div>
                        </div>
                    </div>

                    <div className="forminator-row forminator-row-last">
                        <div className="forminator-col">
                            <div className="forminator-field">
                                <button className="forminator-button forminator-button-submit">Submit</button>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="wp-container-3 wp-block-column from1">
                    <img src={contact} alt="contact img" />
                </div>
            </div>
        </>
    );
}

export default Contact;
