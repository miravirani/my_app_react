import { useState } from 'react';
import Header from '../Header/Headers';
import './Login.css';
import { Link, useSearchParams } from 'react-router-dom';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    let [param, setParam] = useSearchParams();
    console.log("param ==", param.get("name"));

    return (
        <div className="login-container">
            <div className="login-form">
                <h2>Login</h2>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        placeholder='Enter Your Email'
                        onChange={(e) => {
                            e.preventDefault()
                            setEmail(e.target.value);
                            console.log('Email:', email);
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
                            setPassword(e.target.value);
                            console.log('password:', password);
                        }}
                        value={password}
                    />
                </div>

                <div className='links'>
                    <p>Forgot Password</p>
                    <p><Link to={"/SignUp"}>Signup</Link></p>
                </div>

                <button type="submit">Login</button>

            </div>
        </div>
    )
};

export default Login;