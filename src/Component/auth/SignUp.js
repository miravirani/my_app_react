import { useState } from 'react';
import Header from '../Header/Headers';
import './SignUp.css';
import { useNavigate } from 'react-router-dom';

function SignUp() {

    const [userName, setuserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let navgate = useNavigate()

    return (
        <div className="signup-container">
            <div className="signup-form">
                <h2>Sign Up</h2>

                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        onChange={(e) => {
                            e.preventDefault()
                            setuserName(e.target.value)
                        }}
                        value={userName}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        onChange={(e) => {
                            e.preventDefault()
                            setEmail(e.target.value)
                        }}
                        value={email}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        onChange={(e) => {
                            e.preventDefault()
                            setPassword(e.target.value)
                        }}
                        value={password}
                    />
                </div>

                <button type="submit">Sign Up</button>
                <button type="submit" onClick={(e) => {
                    e.preventDefault()
                    navgate('/Login')
                }}>Login</button>

            </div>
        </div>
    )
};

export default SignUp;
