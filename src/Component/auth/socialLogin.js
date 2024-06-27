import React from 'react';
import './socialLogin.css';
import { Link } from 'react-router-dom';
import SignUp from './SignUp';

const SocialLogin = () => {
  return (
    <section className='vh-100' style={{ backgroundColor: '#f8f4fd'}}>
      <div className="container py-5">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-md-8 col-lg-7 col-xl-5">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="img-fluid" style={{height: '400px'}}
              alt="Phone"
            />
          </div>

          <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1 border border-1 rounded-2 p-5 shadow w-9 bg-white">
            <div>
              <h2 className='mb-5 text-center'>Login</h2>

              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="email"
                  className="form-control form-control-lg" style={{ fontSize: "18px" }}
                  placeholder='Email or Username'
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

              <button
                type="button"
                className="btn btn-lg btn-block mb-4 swbutton"
                onClick={() => alert('Sign in Clicked')}
              >
                Sign in
              </button>

              <div className="mb-4">
                <p className="text-decoration-underline text-start text-secondary" onClick={() => alert('Forgot Password Clicked')}>Forgot password?</p>
              </div>

              <div className='d-flex' style={{width: '100%', gap: '0.5em'}}>
                <p>Don't have an account?</p>
                <p style={{ color: "#8437f9", textDecoration: 'underline'}}>Register here</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SocialLogin;