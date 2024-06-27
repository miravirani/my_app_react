import React from 'react';
import './SocialForgot.css';
import forgotPassword from '../../Assets/img/socialmediaforgot.jpg';

const SocialForgot = () => {
    return (
        <section className='vh-100' style={{ backgroundColor: '#f8f4fd' }}>
            <div className="container py-5 m-auto justify-content-center">

                <div className="col-md-9 col-lg-5 col-xl-9 d-flex border border-1 rounded-2 p-4 shadow bg-white">

                    <div>
                        <div className="col-md-9 col-lg-5 col-xl-12">
                            <img
                                src={forgotPassword}
                                className="img-fluid" style={{ height: '400px',}}
                                alt="Phone"
                            />
                        </div>
                    </div>

                    <div className='col-md-9 col-lg-5 col-xl-6'>
                        <h2 className='mb-5 text-center pt-3'  style={{fontWeight: '550'}}>Forgot Password</h2>

                        <div className="form-outline mb-4">
                            <input
                                type="email"
                                id="email"
                                className="form-control form-control-lg" style={{ fontSize: "18px" }}
                                placeholder='Email address'
                            />
                        </div>

                        <div className="form-outline mb-4">
                            <input
                                type="password"
                                id="password"
                                className="form-control form-control-lg" style={{ fontSize: "18px" }}
                                placeholder='Password'
                            />
                        </div>

                        <div className="form-outline mb-4">
                            <input
                                type="password"
                                id="password"
                                className="form-control form-control-lg" style={{ fontSize: "18px" }}
                                placeholder='Confirm Password'
                            />
                        </div>

                        <button
                            type="button"
                            className="btn btn-lg btn-block mb-4 swbutton"
                            onClick={() => alert('Sign in Clicked')}
                        >
                            Reset Password
                        </button>

                        <div className='d-flex' style={{ width: '100%', gap: '0.5em' }}>
                            <p style={{ color: "#8437f9", textDecoration: 'underline' }}>Back to login page</p>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}

export default SocialForgot;