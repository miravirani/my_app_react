import React, { useState } from "react";
import './formData.css';

function FormData() {
    const [loginPage, setLoginPage] = useState({
        email: '',
        password: ''
    });

    const { email, password } = loginPage;

    return (
        <>
            <div className="login-container">
                <div className="login-form">
                    <h2>Login</h2>
                    <div onClick={(e) => {
                        e.preventDefault()
                    }}>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                placeholder='Enter Your Email'
                                onChange={(e) => {
                                    e.preventDefault()
                                    setLoginPage({ ...loginPage, email: e.target.value })
                                }}
                                value={email}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                placeholder='Password'
                                onChange={(e) => {
                                    e.preventDefault()
                                    setLoginPage({ ...loginPage, password: e.target.value })
                                }}
                                value={password}
                            />
                        </div>
                        <button type="submit">Login</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FormData;
