import React, { useState } from 'react';
import './SocialSignUp.css';
import { Link } from 'react-router-dom';
import socialwavesignup from '../../Assets/img/Frame (1).png';

const SocialSignUp = () => {
    const [fileName, setFileName] = useState('Profile photo');

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFileName(file.name);
        } else {
            setFileName('Profile photo');
        }
    };

    return (
        <section className='vh-100' style={{ backgroundColor: '#f8f4fd' }}>
            <div className="container py-4 m-0">
                <div className="row d-flex align-items-center" style={{gap: "3em"}}>

                    <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1 border border-1 rounded-2 p-3 shadow w-9 bg-white" style={{width:'430px'}}>
                        <div>
                            <h2 className='mb-4 text-center' style={{fontWeight: '550'}}>SignUp</h2>

                            {/* Username */}
                            <div className="form-outline mb-4">
                                <input
                                    type="text"
                                    id="text"
                                    className="form-control form-control-lg" style={{ fontSize: "18px" }}
                                    placeholder='Username'
                                />
                            </div>

                            {/* Email address */}
                            <div className="form-outline mb-4">
                                <input
                                    type="email"
                                    id="email"
                                    className="form-control form-control-lg" style={{ fontSize: "18px" }}
                                    placeholder='Email address'
                                />
                            </div>

                            {/* Password */}
                            <div className="form-outline mb-4">
                                <input
                                    type="password"
                                    id="password"
                                    className="form-control form-control-lg" style={{ fontSize: "18px" }}
                                    placeholder='Password'
                                />
                            </div>

                            {/* Confirm password */}
                            <div className="form-outline mb-4">
                                <input
                                    type="password"
                                    id="confirm-password"
                                    className="form-control form-control-lg" style={{ fontSize: "18px" }}
                                    placeholder='Confirm password'
                                />
                            </div>

                            {/* Profile photo */}
                            <div className="form-outline mb-4">
                                <label
                                    htmlFor="avatar"
                                    className="form-control form-control-lg d-flex cursor-pointer"
                                    style={{ border: "1px dashed #ccc", color:'#636363',fontSize: "18px" }}>
                                    {fileName}
                                    <input
                                        id="avatar"
                                        type="file"
                                        className="hidden"
                                        name="avatar"
                                        accept="image/*"
                                        autoComplete="off"
                                        onChange={handleFileChange}
                                        style={{ display: 'none' }}
                                    />
                                </label>
                            </div>

                            {/* Sign in button */}
                            <button
                                type="button"
                                className="btn btn-lg btn-block mb-4 swbutton"
                                onClick={() => alert('Sign in Clicked')}
                            >
                                Sign Up
                            </button>

                            <div className='d-flex align-items-center' style={{ width: '100%', gap: '0' }}>
                                <p className='mb-0'>Already an user?</p>
                                <Link to="/" style={{ color: "#8437f9", textDecoration: 'underline', marginLeft: '0.5em' }}>Login here</Link>
                            </div>

                        </div>
                    </div>

                    <div className="col-md-8 col-lg-7 col-xl-5">
                        <img
                            src={socialwavesignup}
                            className="img-fluid"
                            alt="Phone"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SocialSignUp;
